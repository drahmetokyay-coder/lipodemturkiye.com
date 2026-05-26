"use client";

import { useState, useRef } from "react";
import { Volume2, VolumeX } from "lucide-react";

export function HeroBackgroundVideo() {
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <>
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/hero-video.mp4" type="video/mp4" />
      </video>

      {/* Kadının olduğu sağ-orta alan açık, geri kalan beyaz gradient */}
      {/* Sol kenar: tamamen beyaz */}
      <div className="absolute inset-0 bg-gradient-to-r from-white via-white/95 to-transparent z-10 w-[55%]" />

      {/* Üst kenar: beyaz fade */}
      <div className="absolute top-0 left-0 right-0 h-40 bg-gradient-to-b from-white to-transparent z-10" />

      {/* Alt kenar: beyaz fade */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-white to-transparent z-10" />

      {/* Sağ üst köşe: hafif beyaz */}
      <div className="absolute top-0 right-0 w-[45%] h-32 bg-gradient-to-b from-white/60 to-transparent z-10" />

      {/* Spotlight efekti: kadının olduğu yerde radial açıklık */}
      <div
        className="absolute inset-0 z-10 pointer-events-none"
        style={{
          background: `radial-gradient(ellipse 50% 70% at 70% 50%, transparent 0%, transparent 40%, rgba(255,255,255,0.85) 100%)`
        }}
      />

      <button
        onClick={toggleMute}
        className="absolute bottom-6 right-6 z-30 w-10 h-10 rounded-full bg-black/30 backdrop-blur-md border border-white/20 flex items-center justify-center text-white/70 hover:text-white hover:bg-black/50 transition-all"
        aria-label={isMuted ? "Sesi aç" : "Sesi kapat"}
      >
        {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
      </button>
    </>
  );
}
