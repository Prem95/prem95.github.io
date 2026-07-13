"use client";

import { useEffect } from "react";

/* One IntersectionObserver for every [data-reveal] element on the page.
   Adds .inview once and unobserves; CSS in globals.css does the motion. */
export default function RevealObserver() {
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("inview");
            io.unobserve(entry.target);
          }
        }
      },
      { rootMargin: "0px 0px -48px 0px" },
    );
    document.querySelectorAll("[data-reveal]").forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <noscript>
      <style>{`[data-reveal="up"],[data-reveal="group"]>*{opacity:1;transform:none}[data-reveal="mask"]>span{transform:none}`}</style>
    </noscript>
  );
}
