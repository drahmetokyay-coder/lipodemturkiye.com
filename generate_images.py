import os
import base64
import requests
import urllib3
import time
import ssl
import httpx

urllib3.disable_warnings(urllib3.exceptions.InsecureRequestWarning)

from openai import OpenAI

http_client = httpx.Client(verify=False)
client = OpenAI(
    api_key=os.environ["OPENAI_API_KEY"],
    http_client=http_client,
)

output_dir = os.path.join(os.path.dirname(os.path.abspath(__file__)), "örnek")
os.makedirs(output_dir, exist_ok=True)

prompts = [
    {
        "name": "1_hero_banner",
        "prompt": (
            "A wide hero banner for a Turkish women's health platform about lipedema. "
            "Soft teal/mint and gentle pink watercolor color palette. Modern, clean, medical-health themed. "
            "Abstract feminine silhouettes showing support, community and empowerment. "
            "Flowing organic shapes, soft gradients. Professional, warm, empathetic mood. "
            "No text, no letters, no words. No real photos of people. Landscape 16:9."
        ),
        "size": "1536x1024",
    },
    {
        "name": "2_instagram_lipodem_nedir",
        "prompt": (
            "A clean square medical infographic illustration about lipedema awareness. "
            "Four minimal flat icons arranged in a grid: a female body silhouette, a symmetry symbol, "
            "a crossed-out obesity icon, and a medical cross with a heart. "
            "Soft teal/mint and pink color palette on white background. "
            "Modern healthcare design, friendly and non-stigmatizing. "
            "No text, no letters, no words. Square format."
        ),
        "size": "1024x1024",
    },
    {
        "name": "3_infografik_evreler",
        "prompt": (
            "A vertical medical infographic illustration showing 4 stages of a progressive condition. "
            "Four female leg silhouettes arranged vertically, each showing increasing severity: "
            "Stage 1 smooth outline, Stage 2 slightly uneven, Stage 3 more pronounced, Stage 4 most severe with swelling. "
            "Clean medical illustration style with soft teal/mint and pink colors. "
            "Minimalist, educational, non-stigmatizing. No text, no letters. Portrait format."
        ),
        "size": "1024x1536",
    },
    {
        "name": "4_facebook_cover",
        "prompt": (
            "A wide Facebook cover banner for a women's health support community. "
            "Abstract flowing shapes representing community and support - interconnected circles, "
            "gentle hands, or abstract figures standing together. "
            "Soft teal/mint, white, and gentle pink color palette. "
            "Medical yet warm and welcoming. Professional, trustworthy. "
            "No text, no letters, no words. Wide landscape format."
        ),
        "size": "1536x1024",
    },
]

for item in prompts:
    print(f"Generating: {item['name']}...")
    try:
        response = client.images.generate(
            model="gpt-image-1",
            prompt=item["prompt"],
            size=item["size"],
            quality="high",
            n=1,
        )
        img_b64 = response.data[0].b64_json
        filepath = os.path.join(output_dir, f"{item['name']}.png")
        with open(filepath, "wb") as f:
            f.write(base64.b64decode(img_b64))
        size_kb = os.path.getsize(filepath) / 1024
        print(f"  Saved: {filepath} ({size_kb:.0f} KB)")
        time.sleep(1)
    except Exception as e:
        print(f"  Error: {e}")

print(f"\nDone! Images saved to: {output_dir}")
