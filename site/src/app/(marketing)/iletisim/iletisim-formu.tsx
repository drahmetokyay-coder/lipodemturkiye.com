"use client";

import { useState, type FormEvent } from "react";
import { Send, CheckCircle2 } from "lucide-react";

const konular = [
  "Genel soru",
  "Geri bildirim",
  "İçerik önerisi",
  "Teknik sorun",
  "İşbirliği talebi",
  "Diğer",
];

export default function IletisimFormu() {
  const [gonderildi, setGonderildi] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = {
      ad: formData.get("ad"),
      email: formData.get("email"),
      konu: formData.get("konu"),
      mesaj: formData.get("mesaj"),
    };
    console.log("İletişim formu gönderildi:", data);
    setGonderildi(true);
  }

  if (gonderildi) {
    return (
      <div className="bg-[#E8F5F0] rounded-xl p-8 border border-[#93D4BE] text-center">
        <CheckCircle2 className="w-12 h-12 text-[#1A6B5A] mx-auto mb-4" />
        <h3 className="text-lg font-bold text-stone-800 mb-2">
          Mesajınız alındı!
        </h3>
        <p className="text-stone-600 leading-relaxed">
          En kısa sürede size dönüş yapacağız. İlginiz için teşekkür ederiz.
        </p>
        <button
          onClick={() => setGonderildi(false)}
          className="mt-6 text-sm text-[#1A6B5A] hover:text-[#15594A] font-semibold transition-colors"
        >
          Yeni mesaj gönder
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      {/* Ad Soyad */}
      <div>
        <label
          htmlFor="ad"
          className="block text-sm font-medium text-stone-700 mb-1.5"
        >
          Adınız Soyadınız <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          id="ad"
          name="ad"
          required
          placeholder="Adınız Soyadınız"
          className="w-full px-4 py-3 rounded-lg border border-stone-300 text-stone-800 placeholder:text-stone-400 focus:outline-none focus:ring-2 focus:ring-[#2D8B73] focus:border-transparent transition-all"
        />
      </div>

      {/* Email */}
      <div>
        <label
          htmlFor="email"
          className="block text-sm font-medium text-stone-700 mb-1.5"
        >
          E-posta adresiniz <span className="text-red-500">*</span>
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          placeholder="ornek@email.com"
          className="w-full px-4 py-3 rounded-lg border border-stone-300 text-stone-800 placeholder:text-stone-400 focus:outline-none focus:ring-2 focus:ring-[#2D8B73] focus:border-transparent transition-all"
        />
      </div>

      {/* Konu */}
      <div>
        <label
          htmlFor="konu"
          className="block text-sm font-medium text-stone-700 mb-1.5"
        >
          Konu <span className="text-red-500">*</span>
        </label>
        <select
          id="konu"
          name="konu"
          required
          defaultValue=""
          className="w-full px-4 py-3 rounded-lg border border-stone-300 text-stone-800 focus:outline-none focus:ring-2 focus:ring-[#2D8B73] focus:border-transparent transition-all"
        >
          <option value="" disabled>
            Konu seçin
          </option>
          {konular.map((konu) => (
            <option key={konu} value={konu}>
              {konu}
            </option>
          ))}
        </select>
      </div>

      {/* Mesaj */}
      <div>
        <label
          htmlFor="mesaj"
          className="block text-sm font-medium text-stone-700 mb-1.5"
        >
          Mesajınız <span className="text-red-500">*</span>
        </label>
        <textarea
          id="mesaj"
          name="mesaj"
          required
          rows={5}
          placeholder="Mesajınızı buraya yazın..."
          className="w-full px-4 py-3 rounded-lg border border-stone-300 text-stone-800 placeholder:text-stone-400 focus:outline-none focus:ring-2 focus:ring-[#2D8B73] focus:border-transparent transition-all resize-y"
        />
      </div>

      {/* Gönder */}
      <button
        type="submit"
        className="inline-flex items-center gap-2 bg-[#1A6B5A] text-white px-7 py-3 rounded-lg font-semibold hover:bg-[#15594A] transition-colors"
      >
        Gönder
        <Send className="w-4 h-4" />
      </button>
    </form>
  );
}
