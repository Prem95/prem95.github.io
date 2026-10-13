import type { CSSProperties } from "react";
import { ArrowUpRight, Check } from "lucide-react";
import AgenticaFlow from "@/components/AgenticaFlow";
import { Github } from "@/components/BrandIcons";
import { Badge } from "@/components/ui/badge";
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

      {/* featured — inverted, with agentica.my's sale → ERP → AI flow */}
      <Card
        render={
          <a href={featured.url} target="_blank" rel="noopener noreferrer" />
        }
        className="group mb-4 flex-col gap-6 overflow-hidden border-foreground bg-foreground p-5 text-background sm:p-6 md:flex-row md:items-center md:justify-between"
      >
        <div className="relative z-10 min-w-0 flex-1">
          <div className="flex items-center gap-2.5">
            <Badge
              size="sm"
              className="border-background/30 bg-transparent text-background"
            >
              {featured.status}
            </Badge>
            <span className="eyebrow text-background/55">Featured</span>
          </div>
          <h3 className="display mt-2.5 text-[clamp(1.5rem,3vw,2rem)]">
            {featured.name}
          </h3>
          <p className="mt-1.5 max-w-sm text-sm leading-relaxed text-background/65">
            {featured.description}
          </p>

          {featured.highlights && (
            <ul className="mt-4 flex flex-col gap-1 text-[0.8rem]">
              {featured.highlights.map(([module, line]) => (
                <li key={module} className="flex items-center gap-2">
                  <Check className="size-3.5 shrink-0 text-background/45" />
                  <span>
                    <span className="font-semibold">{module}</span>
                    <span className="text-background/65"> · {line}</span>
                  </span>
                </li>
              ))}
            </ul>
          )}

          <div className="mt-4 flex flex-wrap gap-x-3 gap-y-1">
            {featured.tech.map((t) => (
              <span
                key={t}
                className="font-mono text-[0.65rem] text-background/50"
              >
                {t}
              </span>
            ))}
          </div>

          <span className="mt-5 inline-flex items-center gap-1.5 rounded-full bg-background px-3.5 py-1.5 text-[0.8rem] font-medium text-foreground transition-opacity group-hover:opacity-90">
            {featured.status === "Waitlist" ? "Join the waitlist" : "Visit site"}
            <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </span>
        </div>

        <div className="relative z-10 flex justify-center md:shrink-0 md:justify-end">
          <AgenticaFlow />
        </div>
      </Card>

      {/* secondary grid — agentica.my-style tiles: streak band, checklist */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {rest.map((product, i) => (
          <a
            key={product.name}
            href={product.url}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              "group relative flex flex-col overflow-hidden rounded-2xl bg-[#121212] text-white",
              rest.length % 2 === 1 && i === rest.length - 1 && "sm:col-span-2 lg:col-span-1",
            )}
          >
            <div
              className="relative h-32 overflow-hidden"
              style={{ "--h": product.hue } as CSSProperties}
            >
              <span aria-hidden="true" className="streak-field" />
              <span aria-hidden="true" className="streak-grain" />
              <span
                aria-hidden="true"
                className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-b from-transparent to-[#121212]"
              />
            </div>

            <div className="flex flex-1 flex-col px-5 pt-2 pb-5 sm:px-6 sm:pb-6">
              <div className="flex items-center gap-2.5">
                <h3 className="font-sans text-2xl font-light tracking-tight">
                  {product.name}
                </h3>
                <span className="rounded-full border border-white/25 px-2 py-px text-[0.65rem] text-white/70">
                  {product.status}
                </span>
              </div>
              {product.points && (
                <ul className="mt-4 flex flex-1 flex-col gap-2 text-sm text-white/80">
                  {product.points.map((point) => (
                    <li key={point} className="flex gap-2.5">
                      <Check className="mt-0.5 size-4 shrink-0 text-white/45" />
                      {point}
                    </li>
                  ))}
                </ul>
              )}
              <span className="mt-6 inline-flex items-center gap-1.5 self-start rounded-full bg-white px-4 py-2 text-sm font-medium text-[#121212] transition-opacity group-hover:opacity-90">
                Visit site
                <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </span>
            </div>
          </a>
        ))}
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
