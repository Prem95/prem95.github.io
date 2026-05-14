import { Reveal } from "@/components/motion/Reveal";

export default function SectionHeading({
  num,
  label,
  title,
  dim,
}: {
  num: string;
  label: string;
  title: string;
  dim: string;
}) {
  return (
    <Reveal>
      <div className="relative mb-9 sm:mb-14">
        <span
          aria-hidden="true"
          className="text-outline pointer-events-none absolute -top-4 right-0 select-none font-extrabold leading-none opacity-[0.08] text-[5.5rem] sm:text-[10rem]"
        >
          {num}
        </span>
        <span className="eyebrow">{label}</span>
        <h2 className="display mt-2 text-[clamp(2rem,6vw,3.4rem)]">
          {title}
          <br />
          <span className="text-muted-foreground">{dim}</span>
        </h2>
      </div>
    </Reveal>
  );
}
