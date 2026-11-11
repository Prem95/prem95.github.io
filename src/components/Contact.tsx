"use client";

import { ArrowUpRight, Check, Copy, Mail } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { toastManager } from "@/components/ui/toast";
import Section from "@/components/Section";
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
    <Section id="contact" num="04" label="Contact" title="Get in touch">
      <div className="max-w-xl">
        <p className="leading-relaxed text-muted-foreground">
          I&apos;m looking for Forward Deployed Engineer roles, remote or in
          Southeast Asia, taking AI systems and SaaS products from first
          prototype to production. If that sounds like your team, or you just
          want to talk shop, send a note.
        </p>

        {/* phones: the email button takes the full row, the other two split the next */}
        <div className="mt-7 grid grid-cols-2 gap-2.5 sm:flex sm:flex-wrap sm:items-center">
          <Button
            size="lg"
            className="col-span-2"
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
            className="max-sm:border-input max-sm:bg-popover max-sm:shadow-xs/5"
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
              className="flex flex-col gap-1 border-b border-border py-4 last:border-b-0 last:pb-0 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6"
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
    </Section>
  );
}
