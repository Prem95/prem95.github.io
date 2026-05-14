import { config } from "@/lib/data";

const links = [
  { label: "GitHub", href: config.github },
  { label: "Twitter / X", href: config.twitter },
  { label: "LinkedIn", href: config.linkedin },
];

export default function SiteFooter() {
  return (
    <footer className="flex flex-col items-start justify-between gap-3 border-t border-border py-9 sm:flex-row sm:items-center">
      <p className="text-xs text-muted-foreground">
        Designed &amp; built by{" "}
        <a
          href={config.github}
          target="_blank"
          rel="noopener noreferrer"
          className="link-underline text-foreground"
        >
          {config.name}
        </a>
        . Built with coss UI.
      </p>
      <div className="flex items-center gap-5">
        {links.map((l) => (
          <a
            key={l.label}
            href={l.href}
            target="_blank"
            rel="noopener noreferrer"
            className="link-underline text-xs text-muted-foreground transition-colors hover:text-foreground"
          >
            {l.label}
          </a>
        ))}
      </div>
    </footer>
  );
}
