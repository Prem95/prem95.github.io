import type { CSSProperties } from "react";
import Image from "next/image";
import { ArrowUpRight, Check } from "lucide-react";
import { Github } from "@/components/BrandIcons";
import Section from "@/components/Section";
import { products, otherProjects } from "@/lib/data";
import { cn } from "@/lib/utils";

// Each tile turns the shared streak ground a different way
const groundFlip = ["none", "scaleX(-1)", "scaleY(-1)", "rotate(180deg)"];

const host = (url: string) => url.replace(/^https?:\/\//, "");

// Press feedback lands on pointer-down and is quick; the release eases back.
// Keyboard focus gets the same ring the buttons use.
const pressable =
  "transition-[transform,border-color] duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] active:scale-[0.985] active:duration-100 motion-reduce:transition-none motion-reduce:active:scale-100 focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background focus-visible:outline-none";

/**
 * The only coloured section on the page. Everything else is black and
 * white, so colour here means one thing: this is a product, in its own
 * colours. The grounds are tinted from each product's brand hue (`hue` in
 * data.ts, measured off the live site) and the screenshots are shown as
 * they really look.
 */
export default function Products() {
  const [featured, ...rest] = products;

  return (
    <Section id="products" num="03" label="Products" title="Things I've built">
      {/* featured — on agentica.my's own green hero, with the live site
          peeking out of the corner */}
      <a
        href={featured.url}
        target="_blank"
        rel="noopener noreferrer"
        className={cn(
          "group relative isolate mb-4 grid overflow-hidden rounded-2xl border border-[#0f2e20] bg-[#0f2e20] p-5 text-white sm:p-6 md:grid-cols-[minmax(0,1fr)_44%] md:items-center md:gap-7",
          pressable,
        )}
      >
        <span aria-hidden="true" className="streak-forest" />
        <span aria-hidden="true" className="streak-grain" />
        <span aria-hidden="true" className="streak-forest-veil" />

        <div className="relative z-10 min-w-0">
          <span className="eyebrow text-white/60">Featured</span>
          <h3 className="display mt-2.5 text-[clamp(1.5rem,3vw,2rem)]">
            {featured.name}
          </h3>
          <p className="mt-1.5 max-w-md text-sm leading-relaxed text-white/75">
            {featured.description}
          </p>

          {featured.highlights && (
            <ul className="mt-4 flex flex-col gap-1.5 text-[0.85rem]">
              {featured.highlights.map(([module, line, detail]) => (
                <li key={module} className="flex gap-2">
                  <Check className="mt-0.5 size-3.5 shrink-0 text-[rgb(186_236_120)]" />
                  <span>
                    <span className="font-semibold">{module}</span>
                    <span className="text-white/70"> · {line}</span>
                    {detail && (
                      <span className="block text-white/55">{detail}</span>
                    )}
                  </span>
                </li>
              ))}
            </ul>
          )}

          <span className="mt-5 inline-flex items-center gap-1.5 rounded-full bg-white px-3.5 py-1.5 text-[0.8rem] font-medium text-[#0f2e20] transition-opacity group-hover:opacity-90">
            {featured.status === "Waitlist"
              ? "Join the waitlist"
              : "Visit site"}
            <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </span>
        </div>

        <Image
          src={featured.shot}
          alt={`${featured.name} home page`}
          width={1440}
          height={900}
          sizes="(min-width: 768px) 420px, 100vw"
          className="relative z-10 mt-7 -mr-10 -mb-10 aspect-[16/10] h-auto w-[calc(100%+2.5rem)] max-w-none rounded-[10px] border border-white/15 object-cover object-left-top shadow-[0_24px_60px_rgb(2_12_7/0.6)] transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:-translate-x-2 group-hover:-translate-y-2 motion-reduce:transition-none md:mt-2 md:-mr-14 md:-mb-14 md:w-[calc(100%+3.5rem)] md:self-end"
        />
      </a>

      {/* secondary grid — light tiles, each tinted in its product's hue and
          showing its own site */}
      <div
        className={cn(
          "grid gap-4 sm:grid-cols-2",
          rest.length % 3 === 0 && "xl:grid-cols-3",
        )}
      >
        {rest.map((product, i) => {
          const tint = (l: number, c: number) =>
            `oklch(${l} ${c} ${product.hue})`;
          return (
            <a
              key={product.name}
              href={product.url}
              target="_blank"
              rel="noopener noreferrer"
              style={
                {
                  "--h": product.hue,
                  borderColor: tint(0.88, 0.05),
                } as CSSProperties
              }
              className={cn(
                "group relative isolate flex flex-col overflow-hidden rounded-2xl border p-5 text-foreground hover:!border-foreground sm:p-6",
                pressable,
                rest.length % 2 === 1 &&
                  i === rest.length - 1 &&
                  "sm:col-span-2 xl:col-span-1",
              )}
            >
              <span
                aria-hidden="true"
                className="streak-light"
                style={{ transform: groundFlip[i % groundFlip.length] }}
              />
              <span aria-hidden="true" className="streak-grain" />

              <div className="relative z-10 flex flex-1 flex-col">
                {/* secondary text takes the tile's own hue, not a flat grey */}
                <div
                  className="flex items-center justify-between gap-3 font-mono text-[0.68rem]"
                  style={{ color: tint(0.42, 0.07) }}
                >
                  <span className="truncate">{host(product.url)}</span>
                  <span className="inline-flex shrink-0 items-center gap-1.5">
                    {product.status === "Live" && (
                      <span
                        aria-hidden="true"
                        className="size-1.5 rounded-full bg-live"
                      />
                    )}
                    {product.status}
                  </span>
                </div>

                <Image
                  src={product.shot}
                  alt={`${product.name} home page`}
                  width={1440}
                  height={900}
                  sizes="(min-width: 640px) 360px, 100vw"
                  style={{ borderColor: tint(0.84, 0.06) }}
                  className="mt-4 aspect-[16/9] h-auto w-full rounded-[10px] border object-cover object-left-top shadow-[0_8px_24px_-12px_oklch(0.4_0.08_var(--h)/0.45)] transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:-translate-y-1 motion-reduce:transition-none"
                />

                <h3 className="mt-6 font-sans text-[1.7rem] font-light leading-none tracking-[-0.03em]">
                  {product.name}
                </h3>

                {product.points && (
                  <ul className="mt-4 flex flex-1 flex-col gap-2 text-sm text-foreground/75">
                    {product.points.map((point) => (
                      <li key={point} className="flex gap-2.5">
                        <Check
                          className="mt-0.5 size-4 shrink-0"
                          style={{ color: tint(0.55, 0.13) }}
                        />
                        {point}
                      </li>
                    ))}
                  </ul>
                )}

                <span className="mt-6 inline-flex items-center gap-1.5 self-start rounded-full bg-foreground px-4 py-2 text-sm font-medium text-background">
                  Visit site
                  <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </span>
              </div>
            </a>
          );
        })}
      </div>

      {/* other projects */}
      <div className="mt-14">
        <span className="eyebrow">Side Projects</span>
        <div className="mt-4">
          {otherProjects.map((proj) => (
            <div key={proj.name}>
              <div className="group hover-indent flex items-start justify-between gap-4 border-b border-border py-4">
                <div className="min-w-0">
                  <div className="flex flex-wrap items-baseline gap-x-2">
                    <h4 className="text-sm font-semibold">{proj.name}</h4>
                    <span className="flex gap-2">
                      {proj.tech.slice(0, 3).map((t) => (
                        <span
                          key={t}
                          className="font-mono text-[0.65rem] text-muted-foreground"
                        >
                          {t}
                        </span>
                      ))}
                    </span>
                  </div>
                  <p className="mt-0.5 text-xs leading-relaxed text-muted-foreground">
                    {proj.description}
                  </p>
                </div>
                {proj.github && (
                  <a
                    href={proj.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${proj.name} on GitHub`}
                    className="-m-2 inline-flex size-10 shrink-0 items-center justify-center text-muted-foreground transition-colors hover:text-foreground"
                  >
                    <Github className="size-[1.05rem]" />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
