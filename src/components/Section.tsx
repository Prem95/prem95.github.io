import type { ReactNode } from "react";
import SectionHeading from "@/components/SectionHeading";

/**
 * One ruled band of the page. On desktop the heading pins in a narrow left
 * column while the content scrolls beside it; below `lg` it stacks, heading
 * first, exactly as a phone reads.
 */
export default function Section({
  id,
  num,
  label,
  title,
  children,
}: {
  id: string;
  num: string;
  label: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <section
      id={id}
      className="scroll-mt-14 border-t border-border py-12 sm:py-16 lg:grid lg:grid-cols-[232px_minmax(0,1fr)] lg:items-start lg:gap-16 lg:py-[4.5rem]"
    >
      <SectionHeading num={num} label={label} title={title} />
      <div className="min-w-0">{children}</div>
    </section>
  );
}
