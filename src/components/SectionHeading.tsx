import AsciiNum from "@/components/AsciiNum";

/**
 * Eyebrow, light title and the outlined watermark numeral. Stacked layouts
 * tuck the numeral into the top-right corner; the desktop column sets it
 * above the label and pins the whole block under the top bar.
 */
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
    <div className="relative mb-7 sm:mb-10 lg:sticky lg:top-24 lg:mb-0">
      <AsciiNum num={num} />
      <span className="eyebrow">{label}</span>
      <h2 className="section-title mt-3 text-[clamp(2rem,6vw,3.4rem)] lg:text-[clamp(1.7rem,2.5vw,2.15rem)]">
        {title}
      </h2>
    </div>
  );
}
