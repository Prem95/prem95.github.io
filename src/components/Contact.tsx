"use client";

import { ArrowUpRight, Check, Copy, Download, Mail } from "lucide-react";
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
      className="scroll-mt-20 border-t border-border py-12 sm:py-16"
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
            I&apos;m looking for senior AI engineering roles, remote or hybrid,
            building agentic systems in production. If that sounds like your
            team, or you just want to talk shop, send a note.
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
              variant="outline"
              render={
                <a href="/prem-kumar-resume.pdf" target="_blank" rel="noopener noreferrer">
                  <Download data-icon="inline-start" />
                  Résumé
                </a>
              }
            />
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
        </div>
      </Reveal>
    </section>
  );
}
