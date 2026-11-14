import { Button } from "@/components/ui/button";
import { config } from "@/lib/data";

const link =
  "py-1.5 text-[0.95rem] text-muted-foreground underline decoration-border underline-offset-[5px] transition-colors hover:text-foreground hover:decoration-foreground";

/** The name and one way to reach out. Everything else lives further down. */
export default function Hero() {
  return (
    <section
      id="hero"
      className="relative flex flex-col pt-9 pb-9 sm:pt-14 sm:pb-16 lg:pt-[3.75rem]"
    >
      {/* dot-grid backdrop, faded toward the name. Left off phones, where the
          name fills the column and the dots would run through its letters */}
      <div
        aria-hidden="true"
        className="dot-grid pointer-events-none absolute max-sm:hidden inset-x-0 top-0 h-[380px] [mask-image:radial-gradient(ellipse_70%_80%_at_85%_10%,#000_25%,transparent_70%)]"
      />

      {/* name — one line. "Prem Kumar" sets 4.77em wide, so on phones the
          size is solved from the column (viewport minus the 2.5rem gutters)
          and the name runs edge to edge; from sm it eases off to 15.2vw and
          leaves the dot grid some air */}
      <h1 className="display relative whitespace-nowrap text-[length:calc((100vw_-_2.5rem)_/_4.84)] sm:text-[length:clamp(3rem,15.2vw,12.3rem)]">
        <span className="mask-line">
          <span className="brushed-name">{config.name}</span>
        </span>
      </h1>

      {/* one primary action, two plain links. Phones: the button takes the
          full row and the links sit under it */}
      <div
        className="rise relative mt-7 flex flex-col gap-2.5 sm:mt-10 sm:flex-row sm:items-center sm:gap-7"
        style={{ "--rv-d": "0.45s" } as React.CSSProperties}
      >
        <Button
          size="xl"
          className="w-full sm:w-auto"
          render={
            <a href={config.booking} target="_blank" rel="noopener noreferrer" />
          }
        >
          Book a call
        </Button>
        <div className="flex items-center gap-6">
          <a href="#contact" className={link}>
            Contact
          </a>
          <a
            href={config.github}
            target="_blank"
            rel="noreferrer"
            className={link}
          >
            GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
