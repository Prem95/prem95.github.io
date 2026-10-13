import type { CSSProperties } from "react";
import { ArrowUpRight, Check } from "lucide-react";
import { Github } from "@/components/BrandIcons";
import { Card } from "@/components/ui/card";
import SectionHeading from "@/components/SectionHeading";
import { products, otherProjects, buildKit } from "@/lib/data";
import { cn } from "@/lib/utils";

export default function Products() {
  const [featured, ...rest] = products;

  return (
    <section
      id="products"
      className="scroll-mt-20 border-t border-border py-12 sm:py-16"
    >
      <SectionHeading num="03" label="Products" title="Things I've built" />

      {/* what they're built with */}
      <dl className="mb-8 flex flex-col gap-3 border-y border-border py-5">
        {buildKit.map((cat) => (
          <div
            key={cat.group}
            className="grid gap-1.5 sm:grid-cols-[7rem_1fr] sm:gap-4"
          >
            <dt className="eyebrow pt-0.5">{cat.group}</dt>
            <dd className="flex flex-wrap gap-x-4 gap-y-1.5 text-sm text-foreground">
              {cat.items.map((item) => (
                <span
                  key={item}
                  className={cn(
                    item.startsWith("/") && "font-mono text-[0.8rem]",
                  )}
                >
                  {item}
                </span>
              ))}
            </dd>
          </div>
        ))}
      </dl>

      {/* featured — on agentica.my's green hero */}
      <Card
        render={
          <a href={featured.url} target="_blank" rel="noopener noreferrer" />
        }
        className="group mb-4 flex-col gap-6 overflow-hidden border-[#0f2e20] bg-[#0f2e20] p-5 text-white sm:p-6 md:flex-row md:items-center md:justify-between"
      >
        <span aria-hidden="true" className="streak-forest" />
        <span aria-hidden="true" className="streak-grain" />
        <span aria-hidden="true" className="streak-forest-veil" />
        <div className="relative z-10 min-w-0 flex-1">
          <div className="flex items-center gap-2.5">
            <span className="eyebrow text-white/60">Featured</span>
          </div>
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
            {featured.status === "Waitlist" ? "Join the waitlist" : "Visit site"}
            <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </span>
        </div>
      </Card>

      {/* secondary grid — light tiles, each tinted in its product's hue */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
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
                "group relative flex flex-col overflow-hidden rounded-2xl border p-5 text-foreground transition-colors duration-300 hover:!border-foreground sm:p-6",
                rest.length % 2 === 1 &&
                  i === rest.length - 1 &&
                  "sm:col-span-2 lg:col-span-1",
              )}
            >
              <span aria-hidden="true" className="streak-light" />
              <span aria-hidden="true" className="streak-grain" />

              <div className="relative z-10 flex flex-1 flex-col">
                <div className="flex items-center justify-between gap-3">
                  <span className="font-mono text-[0.68rem] text-foreground/55">
                    {product.url.replace(/^https?:\/\//, "")}
                  </span>
                </div>

                <h3 className="mt-10 font-sans text-[1.7rem] font-light leading-none tracking-[-0.03em]">
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
    </section>
  );
}
