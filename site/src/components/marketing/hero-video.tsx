"use client";

import { useState } from "react";
import { Play, Volume2, VolumeX, Share2, X } from "lucide-react";

const YOUTUBE_VIDEO_ID = "dQw4w9WgXcQ"; // Placeholder -- gerçek lipödem tanıtım videosu ile değiştirilecek

const SHARE_TEXT =
  "Her 9 kadından 1'ini etkileyen lipödem hakkında bilgi edinin. Yalnız değilsiniz.";
const SHARE_URL = "https://lipodemturkiye.com";

export function HeroVideo() {
  const [isPlaying, setIsPlaying] = useState(false);

  const handleShare = async () => {
    const shareData = { title: "Lipödem Türkiye", text: SHARE_TEXT, url: SHARE_URL };
    if (navigator.share) {
      await navigator.share(shareData).catch(() => {});
    } else {
      const whatsapp = `https://wa.me/?text=${encodeURIComponent(`${SHARE_TEXT} ${SHARE_URL}`)}`;
      window.open(whatsapp, "_blank");
    }
  };

  return (
    <div className="relative max-w-xl mx-auto lg:mx-0">
      {/* Video container with glass border */}
      <div className="relative rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl shadow-black/40 border border-white/10">
        {/* Aspect ratio wrapper */}
        <div className="relative aspect-video bg-gradient-to-br from-[#1a4a3f] to-[#0f2b26]">
          {isPlaying ? (
            <>
              <iframe
                src={`https://www.youtube.com/embed/${YOUTUBE_VIDEO_ID}?autoplay=1&rel=0&modestbranding=1&hl=tr`}
                title="Lipödem Türkiye Tanıtım"
                allow="autoplay; encrypted-media"
                allowFullScreen
                className="absolute inset-0 w-full h-full"
              />
              <button
                onClick={() => setIsPlaying(false)}
                className="absolute top-3 right-3 z-20 w-8 h-8 rounded-full bg-black/50 backdrop-blur-sm flex items-center justify-center text-white/80 hover:text-white hover:bg-black/70 transition-all"
                aria-label="Videoyu kapat"
              >
                <X className="w-4 h-4" />
              </button>
            </>
          ) : (
            <>
              {/* Thumbnail / Cover */}
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-8">
                {/* Decorative rings */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <div className="w-32 h-32 md:w-40 md:h-40 rounded-full border border-teal-400/20 animate-ping" style={{ animationDuration: "3s" }} />
                </div>
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <div className="w-48 h-48 md:w-56 md:h-56 rounded-full border border-teal-400/10" />
                </div>

                {/* Play button */}
                <button
                  onClick={() => setIsPlaying(true)}
                  className="relative z-10 group w-20 h-20 md:w-24 md:h-24 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center shadow-2xl hover:bg-white hover:scale-110 transition-all duration-300"
                  aria-label="Videoyu oynat"
                >
                  <Play className="w-8 h-8 md:w-10 md:h-10 text-teal-700 ml-1 group-hover:text-teal-600 transition-colors" fill="currentColor" />
                </button>

                <p className="relative z-10 mt-5 text-base md:text-lg font-semibold text-white/90">
                  Lip&ouml;dem Nedir?
                </p>
                <p className="relative z-10 mt-1 text-sm text-teal-200/60">
                  2 dakikalık tanıtım videosu
                </p>
              </div>

              {/* Subtle gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-black/10 pointer-events-none" />
            </>
          )}
        </div>
      </div>

      {/* Video info bar */}
      <div className="mt-4 flex items-center justify-between px-1">
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1.5">
            <div className="w-2 h-2 rounded-full bg-rose-500 animate-pulse" />
            <span className="text-xs text-teal-100/40 font-medium">
              Lip&ouml;dem farkındalığı
            </span>
          </div>
        </div>

        <button
          onClick={handleShare}
          className="group flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/10 hover:bg-white/20 text-teal-100/60 hover:text-white text-xs font-medium transition-all"
        >
          <Share2 className="w-3.5 h-3.5" />
          Paylaş
        </button>
      </div>

      {/* Viral social proof */}
      <div className="mt-3 flex items-center justify-center gap-2 text-xs text-teal-100/30">
        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
          <path d="M12 0C5.373 0 0 5.373 0 12c0 2.095.547 4.062 1.501 5.782L.057 23.636a.5.5 0 00.607.607l5.853-1.444A11.944 11.944 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22a9.94 9.94 0 01-5.39-1.582l-.39-.234-3.473.857.874-3.437-.257-.408A9.94 9.94 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
        </svg>
        <span>WhatsApp&apos;ta paylaş, farkındalık yarat</span>
      </div>
    </div>
  );
}
