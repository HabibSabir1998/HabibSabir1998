"use client";

import { useEffect, useState } from "react";

interface TypewriterProps {
  words: string[];
  prefix?: string;
  typeSpeed?: number;
  deleteSpeed?: number;
  pauseMs?: number;
}

// Types each word, pauses, deletes it, then moves to the next (looping).
// The full line with the longest word is rendered invisibly in the same
// grid cell to reserve height, so content below never jumps. Both layers
// keep the parent's text alignment, so the typed line stays centered
// with no gap after the prefix.
const Typewriter = ({
  words,
  prefix = "",
  typeSpeed = 80,
  deleteSpeed = 40,
  pauseMs = 1500,
}: TypewriterProps) => {
  const [wordIndex, setWordIndex] = useState(0);
  const [text, setText] = useState(words[0] ?? "");
  const [deleting, setDeleting] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(media.matches);
    const onChange = (e: MediaQueryListEvent) => setReducedMotion(e.matches);
    media.addEventListener("change", onChange);
    return () => media.removeEventListener("change", onChange);
  }, []);

  useEffect(() => {
    if (reducedMotion || words.length === 0) return;

    const current = words[wordIndex % words.length];
    let delay = deleting ? deleteSpeed : typeSpeed;

    if (!deleting && text === current) delay = pauseMs;

    const timer = setTimeout(() => {
      if (!deleting && text === current) {
        setDeleting(true);
      } else if (deleting && text === "") {
        setDeleting(false);
        setWordIndex((i) => (i + 1) % words.length);
      } else {
        setText(current.slice(0, text.length + (deleting ? -1 : 1)));
      }
    }, delay);

    return () => clearTimeout(timer);
  }, [text, deleting, wordIndex, words, typeSpeed, deleteSpeed, pauseMs, reducedMotion]);

  const longest = words.reduce((a, b) => (b.length > a.length ? b : a), "");
  const shown = reducedMotion ? words[0] : text;

  const cursor = (
    <span className="ml-1 inline-block w-[3px] h-[0.9em] align-middle bg-gradient-to-b from-purple to-red-700 animate-pulse" />
  );

  return (
    <span className="grid" aria-live="polite">
      <span className="invisible col-start-1 row-start-1" aria-hidden="true">
        {prefix}
        {longest}
        {cursor}
      </span>
      <span className="col-start-1 row-start-1">
        <span className="sr-only">
          {prefix}
          {words[wordIndex % words.length]}
        </span>
        <span aria-hidden="true">
          {prefix}
          {shown}
          {cursor}
        </span>
      </span>
    </span>
  );
};

export default Typewriter;
