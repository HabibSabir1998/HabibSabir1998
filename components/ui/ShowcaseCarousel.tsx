"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/lib/utils";

export interface ShowcaseItem {
  title: string;
  category: string;
  img: string;
  description: string;
  techs: string[];
  link?: string;
}

const AUTOPLAY_MS = 5000;
const SWIPE_THRESHOLD = 60;

const variants = {
  enter: (dir: number) => ({ x: dir > 0 ? "100%" : "-100%", opacity: 0 }),
  center: { x: 0, opacity: 1 },
  exit: (dir: number) => ({ x: dir > 0 ? "-100%" : "100%", opacity: 0 }),
};

const ShowcaseCarousel = ({ items }: { items: ShowcaseItem[] }) => {
  const [[index, direction], setState] = useState<[number, number]>([0, 0]);
  const [paused, setPaused] = useState(false);
  const thumbsRef = useRef<HTMLDivElement>(null);
  const count = items.length;
  const item = items[index];

  const go = useCallback(
    (next: number, dir?: number) => {
      const wrapped = (next + count) % count;
      setState(([current]) => [wrapped, dir ?? (next > current ? 1 : -1)]);
    },
    [count]
  );

  const next = useCallback(() => go(index + 1, 1), [go, index]);
  const prev = useCallback(() => go(index - 1, -1), [go, index]);

  // Autoplay (paused on hover/focus and for reduced-motion users)
  useEffect(() => {
    if (paused || count < 2) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const t = setTimeout(next, AUTOPLAY_MS);
    return () => clearTimeout(t);
  }, [index, paused, next, count]);

  // Keep the active thumbnail visible
  useEffect(() => {
    const strip = thumbsRef.current;
    const thumb = strip?.children[index] as HTMLElement | undefined;
    if (!strip || !thumb) return;
    strip.scrollTo({
      left: thumb.offsetLeft - strip.clientWidth / 2 + thumb.clientWidth / 2,
      behavior: "smooth",
    });
  }, [index]);

  if (!item) return null;

  return (
    <div
      className="w-full rounded-3xl border border-white/10 bg-white/[0.03] p-3 md:p-5 lg:p-8 space-y-5"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
      onKeyDown={(e) => {
        if (e.key === "ArrowRight") next();
        if (e.key === "ArrowLeft") prev();
      }}
      role="region"
      aria-roledescription="carousel"
      aria-label="Featured work"
    >
      {/* Slide */}
      <div className="relative w-full aspect-[3/2] overflow-hidden rounded-2xl bg-black/40">
        <AnimatePresence initial={false} custom={direction} mode="popLayout">
          <motion.img
            key={item.img}
            src={item.img}
            alt={`${item.title} — ${item.category}`}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.45, ease: "easeInOut" }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.2}
            onDragEnd={(_, info) => {
              if (info.offset.x < -SWIPE_THRESHOLD) next();
              else if (info.offset.x > SWIPE_THRESHOLD) prev();
            }}
            className="absolute inset-0 w-full h-full object-contain cursor-grab active:cursor-grabbing select-none"
            draggable={false}
          />
        </AnimatePresence>

        {count > 1 && (
          <>
            <button
              type="button"
              onClick={prev}
              aria-label="Previous project"
              className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 z-10 h-9 w-9 md:h-12 md:w-12 rounded-full border border-white/20 bg-black/50 backdrop-blur-md text-white text-lg md:text-2xl font-extrabold flex items-center justify-center transition duration-200 hover:scale-110 hover:bg-white/20"
            >
              ‹
            </button>
            <button
              type="button"
              onClick={next}
              aria-label="Next project"
              className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 z-10 h-9 w-9 md:h-12 md:w-12 rounded-full border border-white/20 bg-black/50 backdrop-blur-md text-white text-lg md:text-2xl font-extrabold flex items-center justify-center transition duration-200 hover:scale-110 hover:bg-white/20"
            >
              ›
            </button>
            <span className="absolute bottom-2 right-3 md:bottom-4 md:right-5 z-10 rounded-full bg-black/60 px-3 py-1 text-xs font-semibold text-white">
              {index + 1} / {count}
            </span>
          </>
        )}
      </div>

      {/* Caption */}
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 text-start" aria-live="polite">
        <div className="space-y-2">
          <p className="text-xs md:text-sm uppercase tracking-widest opacity-60">{item.category}</p>
          <p className="text-lg lg:text-3xl font-extrabold">
            <span className="bg-gradient-to-r from-purple to-red-700 bg-clip-text text-transparent">
              {item.title}
            </span>
          </p>
          <p className="font-extralight text-sm lg:text-base opacity-70 max-w-2xl">{item.description}</p>
          <div className="flex flex-wrap gap-2 pt-2">
            {item.techs.map((tech) => (
              <span
                key={tech}
                className="bg-white/10 text-white text-xs md:text-sm font-semibold px-3 md:px-4 py-1.5 md:py-2 rounded-full shadow-lg"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
        {item.link && (
          <a
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 text-purple font-extrabold hover:scale-105 inline-flex items-center gap-2 transition-transform duration-200"
          >
            View project
            <img src="assets/link.svg" alt="" className="w-5" />
          </a>
        )}
      </div>

      {/* Thumbnails */}
      <div ref={thumbsRef} className="fancy-scrollbar flex gap-3 overflow-x-auto pt-1 pb-3 scroll-smooth">
        {items.map((thumb, i) => (
          <button
            key={thumb.img}
            type="button"
            onClick={() => go(i)}
            aria-label={`Show ${thumb.title}`}
            aria-current={i === index}
            className={cn(
              "relative shrink-0 h-14 w-20 md:h-16 md:w-24 overflow-hidden rounded-xl border-2 transition duration-200",
              i === index ? "border-purple scale-105" : "border-white/10 opacity-50 hover:opacity-100"
            )}
          >
            <img src={thumb.img} alt="" className="h-full w-full object-cover" loading="lazy" />
          </button>
        ))}
      </div>
    </div>
  );
};

export default ShowcaseCarousel;
