import Image from "next/image";
import Link from "next/link";
import { config } from "@/lib/data";

/** Reading shell: one narrow column, a thin bar, nothing else. */
export default function NotesLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="mx-auto flex min-h-screen w-full max-w-[46rem] flex-col px-5 sm:px-8">
      <header className="sticky top-0 z-40 -mx-5 border-b border-border bg-background/85 px-5 backdrop-blur-md sm:-mx-8 sm:px-8">
        <div className="flex h-14 items-center justify-between">
          <Link
            href="/"
            className="flex items-center gap-2.5 font-display text-base font-extrabold tracking-tight"
          >
            <Image
              src="/prem.jpg"
              alt=""
              width={28}
              height={28}
              priority
              className="size-7 rounded-full border border-border object-cover"
            />
            PK.
          </Link>
          <Link
            href="/blog"
            className="eyebrow transition-colors hover:text-foreground"
          >
            Notes
          </Link>
        </div>
      </header>

      <main className="flex-1 py-12 sm:py-16">{children}</main>

      <footer className="flex items-center justify-between border-t border-border py-7">
        <Link
          href="/"
          className="eyebrow transition-colors hover:text-foreground"
        >
          ← {config.name}
        </Link>
        <a
          href={config.twitter}
          target="_blank"
          rel="noopener noreferrer"
          className="eyebrow transition-colors hover:text-foreground"
        >
          Twitter / X
        </a>
      </footer>
    </div>
  );
}
