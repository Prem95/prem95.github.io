import AsciiNum from "@/components/AsciiNum";
import { Reveal } from "@/components/motion/Reveal";

export default function SectionHeading({
  num,
  label,
  title,
}: {
  num: string;
  label: string;
  title: string;
}) {
  return (
    <Reveal>
      <div className="relative mb-7 sm:mb-10">
        <AsciiNum num={num} />
        <span className="eyebrow">{label}</span>
        <h2 className="section-title mt-3 text-[clamp(2rem,6vw,3.4rem)]">
          {title}
        </h2>
      </div>
    </Reveal>
  );
}
