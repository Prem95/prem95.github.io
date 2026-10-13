import { cn } from "@/lib/utils";

/* agentica.my's hero, redrawn in black and white: a till receipt feeds the
   ERP, and the Telegram assistant reads the same records. Decorative only;
   the card around it carries the real copy. */

function Panel({
  tag,
  meta,
  dot,
  className,
  children,
}: {
  tag: string;
  meta: string;
  dot: string;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div
      className={cn(
        "rounded-lg bg-background px-2.5 py-2 text-foreground",
        className,
      )}
    >
      <div className="mb-1 flex items-center justify-between gap-3">
        <span className="inline-flex items-center gap-1.5 rounded-full bg-muted px-1.5 py-px text-[0.58rem] font-medium">
          <span className={cn("size-1.5 rounded-full", dot)} />
          {tag}
        </span>
        <span className="truncate text-[0.58rem] text-muted-foreground">
          {meta}
        </span>
      </div>
      {children}
    </div>
  );
}

function Row({
  label,
  value,
  note,
  strong,
}: {
  label: string;
  value: string;
  note?: string;
  strong?: boolean;
}) {
  return (
    <div
      className={cn(
        "flex items-baseline justify-between gap-3 py-0.5",
        strong && "font-semibold",
      )}
    >
      <span>{label}</span>
      <span className="flex items-baseline gap-2 tabular-nums">
        {note && (
          <span className="text-[0.58rem] text-muted-foreground">{note}</span>
        )}
        {value}
      </span>
    </div>
  );
}

function Link({ label }: { label: string }) {
  return (
    <div className="flex flex-col items-center">
      <span className="h-1.5 border-l border-dashed border-background/40" />
      <span className="rounded-full border border-background/20 bg-foreground px-2 py-px text-[0.56rem] text-background/75">
        {label}
      </span>
      <span className="h-1.5 border-l border-dashed border-background/40" />
    </div>
  );
}

export default function AgenticaFlow() {
  return (
    <div
      aria-hidden="true"
      className="w-full max-w-[16rem] text-[0.66rem] leading-snug"
    >
      <Panel
        tag="agenticaPOS"
        meta="Kopi Corner, Cashier 1"
        dot="bg-foreground"
        className="sm:mr-5"
      >
        <Row label="2× Latte" value="18.00" />
        <Row label="1× Kek pandan" value="6.50" />
        <div className="my-1 border-t border-border" />
        <Row label="Paid by DuitNow" value="RM24.50" strong />
      </Panel>

      <Link label="Every sale goes in" />

      <Panel
        tag="agenticaERP"
        meta="Today"
        dot="bg-foreground/50"
        className="sm:ml-5"
      >
        <Row label="Cashier sales" note="+24.50" value="RM1,284.50" />
        <div className="border-t border-border" />
        <Row label="Oat milk" value="2 L left" strong />
      </Panel>

      <Link label="Reads the same records" />

      <Panel
        tag="agenticaAI"
        meta="Telegram"
        dot="bg-foreground/25"
        className="sm:mr-5"
      >
        <div className="flex flex-col gap-1">
          <span className="self-end rounded-md rounded-br-sm bg-foreground px-2 py-0.5 text-background">
            how&apos;s today?
          </span>
          <span className="self-start rounded-md rounded-bl-sm bg-muted px-2 py-0.5">
            RM1,284.50 from 86 bills. Oat milk is low.
          </span>
        </div>
      </Panel>
    </div>
  );
}
