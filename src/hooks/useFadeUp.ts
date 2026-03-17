"use client";

import { useEffect, useRef } from "react";

export function useFadeUp<T extends HTMLElement = HTMLDivElement>(
  threshold = 0.08,
  stagger = false,
) {
  const ref = useRef<T>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const cls = stagger ? "stagger" : "reveal";
    el.classList.add(cls);

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("in-view");
          observer.unobserve(el);
        }
      },
      { threshold },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold, stagger]);

  return ref;
}
