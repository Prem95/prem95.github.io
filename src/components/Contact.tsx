"use client";

import { ArrowUpRight, Check, Copy, Mail } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { toastManager } from "@/components/ui/toast";
import SectionHeading from "@/components/SectionHeading";
import { config, references } from "@/lib/data";

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard?.writeText(config.email);
    setCopied(true);
    toastManager.add({
      title: "Email copied to clipboard",
      description: config.email,
      type: "success",
    });
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section
      id="contact"
      className="scroll-mt-20 border-t border-border py-12 sm:py-16"
    >
      <SectionHeading num="04" label="Contact" title="Get in touch" />

      <div className="max-w-xl">
        <p className="leading-relaxed text-muted-foreground">
          I&apos;m looking for senior AI engineering roles, remote or hybrid,
          building agentic systems in production. If that sounds like your team,
          or you just want to talk shop, send a note.
        </p>

        <div className="mt-7 flex flex-wrap items-center gap-2.5">
          <Button
            size="lg"
            render={
              <a href={`mailto:${config.email}`}>
                <Mail data-icon="inline-start" />
                Send an email
              </a>
            }
          />
          <Button size="lg" variant="outline" onClick={copyEmail}>
            {copied ? (
              <Check data-icon="inline-start" />
            ) : (
              <Copy data-icon="inline-start" />
            )}
            {copied ? "Copied" : "Copy address"}
          </Button>
          <Button
            size="lg"
            variant="ghost"
            render={
              <a
                href={config.twitter}
                target="_blank"
                rel="noopener noreferrer"
              >
                Twitter / X
                <ArrowUpRight data-icon="inline-end" />
              </a>
            }
          />
        </div>
      </div>

      {/* references */}
      <div className="mt-14">
        <span className="eyebrow">References</span>
        <ul className="mt-4">
          {references.map((ref) => (
            <li
              key={ref.email}
              className="flex flex-col gap-1 border-b border-border py-4 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6"
            >
              <div className="min-w-0">
                <div className="flex flex-wrap items-baseline gap-x-2">
                  <h4 className="text-sm font-semibold">{ref.name}</h4>
                  <span className="font-mono text-[0.65rem] text-muted-foreground">
                    {ref.location}
                  </span>
                </div>
                <p className="mt-0.5 text-xs text-muted-foreground">
                  {ref.position}, {ref.company}
                </p>
              </div>
              <a
                href={`mailto:${ref.email}`}
                className="link-underline shrink-0 font-mono text-[0.75rem] text-foreground"
              >
                {ref.email}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
