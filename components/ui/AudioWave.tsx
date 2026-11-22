"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

interface AudioWaveProps {
  src: string;
  /** Bar heights 0–1, precomputed from the audio file */
  peaks: number[];
  label?: string;
}

const formatTime = (s: number) => {
  if (!Number.isFinite(s)) return "0:00";
  const m = Math.floor(s / 60);
  const sec = Math.floor(s % 60);
  return `${m}:${sec.toString().padStart(2, "0")}`;
};

// Audio player: play/pause button + clickable waveform that fills as it plays.
const AudioWave = ({ src, peaks, label }: AudioWaveProps) => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const barsRef = useRef<HTMLDivElement>(null);
  const draggingRef = useRef(false);
  const [playing, setPlaying] = useState(false);
  const [current, setCurrent] = useState(0);
  const [duration, setDuration] = useState(0);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    let raf = 0;
    const tick = () => {
      setCurrent(audio.currentTime);
      raf = requestAnimationFrame(tick);
    };
    const onPlay = () => {
      setPlaying(true);
      raf = requestAnimationFrame(tick);
    };
    const onPause = () => {
      setPlaying(false);
      cancelAnimationFrame(raf);
      setCurrent(audio.currentTime);
    };
    const onMeta = () => setDuration(audio.duration);
    const onEnded = () => {
      audio.currentTime = 0;
      setCurrent(0);
    };
    audio.addEventListener("play", onPlay);
    audio.addEventListener("pause", onPause);
    audio.addEventListener("loadedmetadata", onMeta);
    audio.addEventListener("ended", onEnded);
    if (audio.readyState >= 1) setDuration(audio.duration);
    return () => {
      cancelAnimationFrame(raf);
      audio.removeEventListener("play", onPlay);
      audio.removeEventListener("pause", onPause);
      audio.removeEventListener("loadedmetadata", onMeta);
      audio.removeEventListener("ended", onEnded);
    };
  }, []);

  const toggle = () => {
    const audio = audioRef.current;
    if (!audio) return;
    if (audio.paused) audio.play().catch(() => {});
    else audio.pause();
  };

  const seekTo = (clientX: number) => {
    const audio = audioRef.current;
    const bars = barsRef.current;
    if (!audio || !bars || !duration) return;
    const rect = bars.getBoundingClientRect();
    const ratio = Math.min(1, Math.max(0, (clientX - rect.left) / rect.width));
    audio.currentTime = ratio * duration;
    setCurrent(audio.currentTime);
  };

  const progress = duration ? current / duration : 0;

  return (
    <div className="w-full max-w-[720px] mx-auto mt-12">
      {label && (
        <p className="text-sm font-semibold opacity-70 mb-4 tracking-wide">{label}</p>
      )}
      <div className="flex items-center gap-4 sm:gap-6">
        <button
          type="button"
          onClick={toggle}
          aria-label={playing ? "Pause song" : "Play song"}
          className="relative shrink-0 h-14 w-14 sm:h-16 sm:w-16 overflow-hidden rounded-full p-[2px] transition-transform duration-300 hover:scale-105 focus:outline-none"
        >
          <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,white_0%,purple_50%,#E2CBFF_100%)]" />
          <span className="relative flex h-full w-full items-center justify-center rounded-full bg-slate-900/90 backdrop-blur-3xl text-white">
            {playing ? (
              <svg viewBox="0 0 24 24" className="h-6 w-6" fill="currentColor" aria-hidden="true">
                <rect x="6" y="5" width="4" height="14" rx="1" />
                <rect x="14" y="5" width="4" height="14" rx="1" />
              </svg>
            ) : (
              <svg viewBox="0 0 24 24" className="h-6 w-6 translate-x-[1px]" fill="currentColor" aria-hidden="true">
                <path d="M8 5.5v13a1 1 0 0 0 1.5.86l10.5-6.5a1 1 0 0 0 0-1.72L9.5 4.64A1 1 0 0 0 8 5.5Z" />
              </svg>
            )}
          </span>
        </button>

        <div className="flex-1 min-w-0">
          <div
            ref={barsRef}
            role="slider"
            tabIndex={0}
            aria-label="Song position"
            aria-valuemin={0}
            aria-valuemax={Math.round(duration)}
            aria-valuenow={Math.round(current)}
            aria-valuetext={`${formatTime(current)} of ${formatTime(duration)}`}
            className="flex h-16 sm:h-20 items-center justify-between gap-[2px] cursor-pointer touch-none select-none"
            onPointerDown={(e) => {
              draggingRef.current = true;
              e.currentTarget.setPointerCapture(e.pointerId);
              seekTo(e.clientX);
            }}
            onPointerMove={(e) => draggingRef.current && seekTo(e.clientX)}
            onPointerUp={() => (draggingRef.current = false)}
            onPointerCancel={() => (draggingRef.current = false)}
            onKeyDown={(e) => {
              const audio = audioRef.current;
              if (!audio) return;
              if (e.key === "ArrowRight") audio.currentTime = Math.min(duration, audio.currentTime + 5);
              if (e.key === "ArrowLeft") audio.currentTime = Math.max(0, audio.currentTime - 5);
              if (e.key === " " || e.key === "Enter") {
                e.preventDefault();
                toggle();
              }
              setCurrent(audio.currentTime);
            }}
          >
            {peaks.map((peak, i) => {
              const played = (i + 0.5) / peaks.length <= progress;
              return (
                <span
                  key={i}
                  style={{ height: `${Math.max(8, peak * 100)}%` }}
                  className={cn(
                    "flex-1 max-w-[6px] rounded-full transition-colors duration-150",
                    // show every other bar on phones so bars stay readable
                    i % 2 === 1 && "hidden sm:block",
                    played
                      ? "bg-gradient-to-t from-purple to-red-700"
                      : "bg-white/25",
                    playing && played && i === Math.floor(progress * peaks.length) - 1 && "animate-pulse"
                  )}
                />
              );
            })}
          </div>
          <div className="mt-2 flex justify-between text-xs opacity-60 tabular-nums">
            <span>{formatTime(current)}</span>
            <span>{formatTime(duration)}</span>
          </div>
        </div>
      </div>
      <audio ref={audioRef} src={src} preload="metadata" />
    </div>
  );
};

export default AudioWave;
