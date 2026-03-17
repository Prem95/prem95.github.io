"use client";

import { useFadeUp } from "@/hooks/useFadeUp";
import { about } from "@/lib/data";

export default function About() {
  const ref = useFadeUp<HTMLDivElement>();

  return (
    <section id="about" className="py-24 lg:py-28">
      <div ref={ref}>
        {/* Section header */}
        <div className="section-rule" data-num="01">
          <div>
            <span className="section-label">01.</span>
            <h2 className="section-title">About Me</h2>
          </div>
        </div>

        <div className="grid lg:grid-cols-[1fr_260px] gap-12 lg:gap-16">
          {/* Bio */}
          <div className="space-y-4">
            {about.bio.map((para, i) => (
              <p key={i} style={{ color: "var(--text-2)", lineHeight: 1.75, fontSize: "0.95rem" }}>
                {para}
              </p>
            ))}

            <div className="pt-3 flex items-center gap-4">
              <a
                href="https://ancileo.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium link-grow"
                style={{ color: "var(--accent)" }}
              >
                Ancileo ↗
              </a>
              <a
                href="mailto:premkumar@premstroke.com"
                className="text-sm link-grow"
                style={{ color: "var(--text-3)" }}
              >
                Email me ↗
              </a>
            </div>
          </div>

          {/* Photo + Skills */}
          <div>
            {/* Photo */}
            <div className="mb-7 flex justify-center lg:justify-start">
              <img
                src="/avatar.jpg"
                alt="Prem Kumar"
                width={200}
                height={200}
                className="w-32 sm:w-40 lg:w-full"
                style={{
                  maxWidth: "200px",
                  aspectRatio: "1 / 1",
                  objectFit: "cover",
                  filter: "grayscale(20%)",
                  border: "1px solid var(--border)",
                }}
              />
            </div>

            {/* Skills */}
            <p
              className="text-xs uppercase tracking-widest mb-4"
              style={{ color: "var(--text-3)", fontFamily: "var(--font-mono)" }}
            >
              Technologies
            </p>
            <ul className="grid grid-cols-2 gap-x-3 gap-y-2">
              {about.skills.map((skill) => (
                <li
                  key={skill.name}
                  className="flex items-center gap-2 text-xs"
                  style={{ color: "var(--text-2)" }}
                >
                  <span style={{ color: "var(--accent)", fontSize: "0.65rem" }}>→</span>
                  {skill.href ? (
                    <a
                      href={skill.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      title={skill.tooltip}
                      className="link-grow transition-colors duration-150"
                      style={{ color: "var(--text-1)", fontWeight: 500 }}
                      onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "var(--accent)")}
                      onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "var(--text-1)")}
                    >
                      {skill.name}
                    </a>
                  ) : (
                    skill.name
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
