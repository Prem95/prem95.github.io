import { Github, Linkedin, Twitter } from "@/components/BrandIcons";
import { config } from "@/lib/data";

const socials = [
  { label: "GitHub", href: config.github, Icon: Github },
  { label: "Twitter / X", href: config.twitter, Icon: Twitter },
  { label: "LinkedIn", href: config.linkedin, Icon: Linkedin },
];

/** The socials used to live at the foot of the side rail; they close the page now. */
export default function Footer() {
  return (
    <footer className="flex items-center justify-between gap-4 border-t border-border py-5 text-[0.8rem] text-muted-foreground sm:py-6">
      <span>
        © {new Date().getFullYear()} {config.name}
      </span>
      <div className="-mr-3 flex items-center">
        {socials.map(({ label, href, Icon }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            className="inline-flex size-11 items-center justify-center transition-colors hover:text-foreground"
          >
            <Icon className="size-[1.05rem]" />
          </a>
        ))}
      </div>
    </footer>
  );
}
