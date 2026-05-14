"use client";

import { ArrowUpRight, Check, Copy, Mail } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { toastManager } from "@/components/ui/toast";
import SectionHeading from "@/components/SectionHeading";
import { Reveal } from "@/components/motion/Reveal";
import { config } from "@/lib/data";

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
      className="scroll-mt-20 border-t border-border py-16 sm:py-24"
    >
      <SectionHeading
        num="04"
        label="Contact"
        title="Get in touch"
        dim="let's build something"
      />

      <Reveal>
        <div className="max-w-xl">
          <p className="leading-relaxed text-muted-foreground">
            I&apos;m open to consulting engagements and product partnerships.
            Whether you want to talk about AI systems, explore a collaboration,
            or just say hello — reach out.
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
                <a href={config.twitter} target="_blank" rel="noopener noreferrer">
                  Twitter / X
                  <ArrowUpRight data-icon="inline-end" />
                </a>
              }
            />
          </div>

          <p className="mt-6 font-mono text-sm text-muted-foreground">
            {config.email}
          </p>
        </div>
      </Reveal>
    </section>
  );
}
