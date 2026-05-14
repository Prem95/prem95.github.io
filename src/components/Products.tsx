import { ArrowUpRight } from "lucide-react";
import { Github } from "@/components/BrandIcons";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import SectionHeading from "@/components/SectionHeading";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/Reveal";
import { products, otherProjects } from "@/lib/data";

export default function Products() {
  const [featured, ...rest] = products;

  return (
    <section
      id="products"
      className="scroll-mt-20 border-t border-border py-16 sm:py-24"
    >
      <SectionHeading
        num="03"
        label="Products"
        title="Things I've built"
        dim="and shipped to real users"
      />

      {/* featured */}
      <Reveal>
        <Card
          render={
            <a href={featured.url} target="_blank" rel="noopener noreferrer" />
          }
          className="group mb-4 flex-row flex-wrap gap-6 overflow-hidden p-6 transition-[transform,border-color] duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-1 hover:border-foreground sm:p-8"
        >
          <div className="dot-grid pointer-events-none absolute inset-0 opacity-40" />
          <div className="relative flex-1 basis-72">
            <div className="flex items-center gap-2.5">
              <Badge size="sm">{featured.status}</Badge>
              <span className="eyebrow">Featured</span>
            </div>
            <h3 className="display mt-3 text-[clamp(1.5rem,3.5vw,2.2rem)]">
              {featured.name}
            </h3>
            <p className="mt-2 max-w-md text-sm leading-relaxed text-muted-foreground">
              {featured.description}
            </p>
          </div>
          <div className="relative flex shrink-0 basis-44 flex-col justify-between gap-4">
            <div className="flex flex-wrap gap-1.5">
              {featured.tech.map((t) => (
                <Badge key={t} variant="secondary" size="sm" className="font-mono">
                  {t}
                </Badge>
              ))}
            </div>
            <span className="inline-flex items-center gap-1 text-sm font-semibold">
              Visit site
              <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </span>
          </div>
        </Card>
      </Reveal>

      {/* secondary grid */}
      <Stagger className="grid gap-4 sm:grid-cols-2" gap={0.06}>
        {rest.map((product) => (
          <StaggerItem key={product.name}>
            <Card
              render={
                <a
                  href={product.url}
                  target="_blank"
                  rel="noopener noreferrer"
                />
              }
              className="group h-full gap-0 p-5 transition-[transform,border-color] duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-1 hover:border-foreground"
            >
              <div className="flex items-start justify-between">
                <Badge size="sm">{product.status}</Badge>
                <ArrowUpRight className="size-4 text-muted-foreground transition-colors group-hover:text-foreground" />
              </div>
              <h3 className="mt-3 text-base font-bold tracking-tight">
                {product.name}
              </h3>
              <p className="mt-1.5 flex-1 text-sm leading-relaxed text-muted-foreground">
                {product.description}
              </p>
              <div className="mt-3 flex flex-wrap gap-1.5">
                {product.tech.map((t) => (
                  <span
                    key={t}
                    className="font-mono text-[0.65rem] text-muted-foreground"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </Card>
          </StaggerItem>
        ))}
      </Stagger>

      {/* other projects */}
      <div className="mt-14">
        <Reveal>
          <span className="eyebrow">Other noteworthy projects</span>
        </Reveal>
        <Stagger className="mt-4" gap={0.05}>
          {otherProjects.map((proj) => (
            <StaggerItem key={proj.name}>
              <div className="group flex items-start justify-between gap-4 border-b border-border py-4">
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
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
