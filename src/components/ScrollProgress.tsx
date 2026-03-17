"use client";

import { useEffect, useState } from "react";

export default function ScrollProgress() {
  const [w, setW] = useState(0);

  useEffect(() => {
    const fn = () => {
      const d = document.documentElement;
      setW((window.scrollY / (d.scrollHeight - window.innerHeight)) * 100 || 0);
    };
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <div
      aria-hidden="true"
      className="fixed top-0 left-0 z-[70] h-[2px] transition-none"
      style={{ width: `${w}%`, background: "var(--accent)" }}
    />
  );
}
