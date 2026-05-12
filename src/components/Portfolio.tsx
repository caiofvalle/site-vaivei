"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Play, X } from "lucide-react";

type Work = {
  id: number;
  type: string;
  category: string;
  title: string;
  img: string;
  url?: string;
};

const works: Work[] = [
  {
    id: 1,
    type: "video",
    category: "Festival",
    title: "Festvybbe",
    img: "https://i.vimeocdn.com/video/2139197582-aa7184889465b0f058cb51f5d35516f49a0b43b9c0fbbce8ea113c8f3d52ec19-d_640?region=us",
    url: "https://vimeo.com/1177780462",
  },
  {
    id: 2,
    type: "video",
    category: "Concerto",
    title: "Raphael G. 2026 Tour",
    img: "https://i.vimeocdn.com/video/2133169555-58357e1d8d0ec3993c396d121c55d0668d867bb28f92a06844707ed224c60c2e-d_640?region=us",
    url: "https://vimeo.com/1173093820",
  },
  {
    id: 3,
    type: "video",
    category: "Concerto",
    title: "Human Protocol — Lisboa 2024",
    img: "https://i.vimeocdn.com/video/1998081745-467850ca5679763d7f17e6db0bc2aabe98fc7afc1604eb8c55de41e590a217ef-d_640?region=us",
    url: "https://vimeo.com/1069703077",
  },
  {
    id: 4,
    type: "video",
    category: "Corporativo",
    title: "Vtex — Erik",
    img: "https://i.vimeocdn.com/video/1981607656-dc2fa429c8f8f0b78ae6332a405a76bd8207eb551a3a9f74bc138241d732ae51-d_640?region=us",
    url: "https://vimeo.com/1049829566",
  },
  {
    id: 5,
    type: "video",
    category: "Festival",
    title: "Coala Festival 2025",
    img: "https://i.vimeocdn.com/video/2156577264-1579514f9aac8c4db9f71ccba788a0fd9f827e01f65e7daa1ec33ad0f15f6846-d_640?region=us",
    url: "https://vimeo.com/1099809583",
  },
  {
    id: 6,
    type: "video",
    category: "Concerto",
    title: "Leo Santana — Coliseu",
    img: "https://i.vimeocdn.com/video/2156564561-74e81c9a43305371ead831a49788661279b3e39dbb1c2f2ecccd083cd1415810-d_1280?region=us",
    url: "https://vimeo.com/1191380968",
  },
  {
    id: 7,
    type: "video",
    category: "Institucional",
    title: "Ordem dos Enfermeiros",
    img: "https://i.vimeocdn.com/video/2156559048-e74f94b1ec39963c9743d54e4e4cab622306db8a9597ca5cba4cefb338ab4ac5-d_1280?region=us",
    url: "https://vimeo.com/1191381017",
  },
  {
    id: 8,
    type: "video",
    category: "Corporativo",
    title: "Espaço Bivalmar",
    img: "https://i.vimeocdn.com/video/1981602696-0c262cdf441fa0cac6856ec6f8636e260563773cced5d7d37654a3490f274a6a-d_640?region=us",
    url: "https://vimeo.com/1055941858",
  },
  {
    id: 9,
    type: "video",
    category: "Corporativo",
    title: "Original Spot Design",
    img: "https://i.vimeocdn.com/video/2156566545-e5d6c09e67dbad66a8bfbda3ab87b5109dae8bcdcfe85bb73a314168be44e91c-d_640?region=us",
    url: "https://vimeo.com/1063635059",
  },
];

function getVimeoId(url: string) {
  const match = url.match(/vimeo\.com\/(\d+)/);
  return match ? match[1] : null;
}

export default function Portfolio() {
  const [activeVideo, setActiveVideo] = useState<Work | null>(null);

  useEffect(() => {
    if (activeVideo) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [activeVideo]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") setActiveVideo(null); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <>
      <section id="portfolio" className="relative py-28 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="flex items-center gap-3 mb-10">
            <div className="h-px w-8 bg-white/30" />
            <span className="text-white/55 text-[11px] tracking-[0.4em] uppercase font-medium">
              Portfólio
            </span>
          </div>

          {/* Grid 3×3 */}
          <div className="grid grid-cols-2 md:grid-cols-3">
            {works.map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveVideo(item)}
                className="relative aspect-square md:aspect-[19/10] overflow-hidden group cursor-pointer block text-left"
              >
                <Image
                  src={item.img}
                  alt={item.title}
                  fill
                  unoptimized
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/55 transition-all duration-400" />

                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-12 h-12 rounded-full border border-white/60 bg-black/30 flex items-center justify-center">
                    <Play size={16} className="text-white ml-1" fill="white" />
                  </div>
                </div>

                <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                  <p className="text-white text-sm font-semibold">{item.title}</p>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Modal */}
      {activeVideo && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm p-4"
          onClick={() => setActiveVideo(null)}
        >
          <div
            className="relative w-full max-w-4xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={() => setActiveVideo(null)}
              className="absolute -top-10 right-0 text-white/70 hover:text-white transition-colors"
            >
              <X size={24} />
            </button>

            {/* Title */}
            <p className="absolute -top-10 left-0 text-white/70 text-sm font-medium">
              {activeVideo.title}
            </p>

            {/* Player */}
            <div className="relative w-full aspect-video rounded-xl overflow-hidden">
              <iframe
                src={`https://player.vimeo.com/video/${getVimeoId(activeVideo.url!)}?autoplay=1&title=0&byline=0&portrait=0`}
                className="absolute inset-0 w-full h-full"
                allow="autoplay; fullscreen; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
