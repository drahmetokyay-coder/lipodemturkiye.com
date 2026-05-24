"use client";

import { useState, useEffect } from "react";
import { Volume2, VolumeX } from "lucide-react";

const YOUTUBE_VIDEO_ID = "dQw4w9WgXcQ"; // Placeholder -- gercek lipodem tanitim videosu ile degistirilecek

export function HeroBackgroundVideo() {
  const [isMuted, setIsMuted] = useState(true);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {/* YouTube background iframe -- muted autoplay */}
      <div className={`absolute inset-0 transition-opacity duration-1000 ${isLoaded ? "opacity-100" : "opacity-0"}`}>
        <iframe
          src={`https://www.youtube.com/embed/${YOUTUBE_VIDEO_ID}?autoplay=1&mute=${isMuted ? 1 : 0}&loop=1&playlist=${YOUTUBE_VIDEO_ID}&controls=0&showinfo=0&modestbranding=1&rel=0&iv_load_policy=3&disablekb=1&playsinline=1&enablejsapi=1`}
          title="Lipödem Türkiye arka plan videosu"
          allow="autoplay; encrypted-media"
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[177.78vh] min-w-full min-h-full pointer-events-none"
          style={{ aspectRatio: "16/9" }}
          tabIndex={-1}
        />
      </div>

      {/* Mute/unmute toggle */}
      <button
        onClick={() => setIsMuted(!isMuted)}
        className="absolute bottom-6 right-6 z-30 w-10 h-10 rounded-full bg-stone-800/40 backdrop-blur-md border border-stone-300/30 flex items-center justify-center text-stone-500 hover:text-stone-700 hover:bg-stone-200/60 transition-all"
        aria-label={isMuted ? "Sesi aç" : "Sesi kapat"}
      >
        {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
      </button>
    </>
  );
}
