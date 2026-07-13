import AsciiNum from "@/components/AsciiNum";
import { LineMask, Reveal } from "@/components/motion/Reveal";

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
    <div className="relative mb-7 sm:mb-10">
      <Reveal>
        <AsciiNum num={num} />
        <span className="eyebrow">{label}</span>
      </Reveal>
      <h2 className="section-title mt-3 text-[clamp(2rem,6vw,3.4rem)]">
        <LineMask delay={0.1}>{title}</LineMask>
      </h2>
    </div>
  );
}
