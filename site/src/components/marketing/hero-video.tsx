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
        className="absolute inset-0 w-full h-full object-cover object-right"
      >
        <source src="/hero-video.mp4" type="video/mp4" />
      </video>

      {/* Mute/unmute toggle */}
      <button
        onClick={toggleMute}
        className="absolute bottom-6 right-6 z-30 w-10 h-10 rounded-full bg-black/40 backdrop-blur-md border border-white/20 flex items-center justify-center text-white/70 hover:text-white hover:bg-black/60 transition-all"
        aria-label={isMuted ? "Sesi aç" : "Sesi kapat"}
      >
        {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
      </button>
    </>
  );
}
