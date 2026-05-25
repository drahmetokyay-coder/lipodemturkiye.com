"use client";

import { useEffect, useRef, useState } from "react";
import { Volume2, VolumeX } from "lucide-react";

export function HeroBackgroundVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isMuted, setIsMuted] = useState(true);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    let ticking = false;

    const handleScroll = () => {
      if (ticking) return;
      ticking = true;

      requestAnimationFrame(() => {
        if (!video || !video.duration) {
          ticking = false;
          return;
        }

        const scrollY = window.scrollY;
        const windowH = window.innerHeight;
        const scrollRange = windowH * 2;
        const progress = Math.min(Math.max(scrollY / scrollRange, 0), 1);

        video.currentTime = progress * video.duration;
        ticking = false;
      });
    };

    video.addEventListener("loadedmetadata", () => {
      video.pause();
      video.currentTime = 0;
    });

    if (video.readyState >= 1) {
      video.pause();
      video.currentTime = 0;
    }

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <div ref={containerRef} className="absolute inset-0">
      <video
        ref={videoRef}
        muted
        playsInline
        preload="auto"
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/hero-video.mp4" type="video/mp4" />
      </video>

      <button
        onClick={toggleMute}
        className="absolute bottom-6 right-6 z-30 w-10 h-10 rounded-full bg-black/40 backdrop-blur-md border border-white/20 flex items-center justify-center text-white/70 hover:text-white hover:bg-black/60 transition-all"
        aria-label={isMuted ? "Sesi aç" : "Sesi kapat"}
      >
        {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
      </button>
    </div>
  );
}
