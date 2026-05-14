"use client";

import {
  ArrowUpRight,
  AtSign,
  CornerDownLeft,
  FileText,
  User,
} from "lucide-react";
import { Fragment, useEffect, useState, type ComponentType } from "react";
import {
  Command,
  CommandCollection,
  CommandDialog,
  CommandDialogPopup,
  CommandEmpty,
  CommandFooter,
  CommandGroup,
  CommandGroupLabel,
  CommandInput,
  CommandItem,
  CommandList,
  CommandPanel,
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui/command";
import { Kbd, KbdGroup } from "@/components/ui/kbd";
import { config } from "@/lib/data";
import { Github, Linkedin, Twitter } from "@/components/BrandIcons";
import { toastManager } from "@/components/ui/toast";

type Item = {
  value: string;
  label: string;
  icon: ComponentType<{ className?: string }>;
  shortcut?: string;
  run: () => void;
};
type Group = { value: string; items: Item[] };

function scrollTo(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
}

export default function CommandMenu() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((o) => !o);
      }
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  const close = () => setOpen(false);

  const groups: Group[] = [
    {
      value: "Navigate",
      items: [
        { value: "about", label: "About", icon: User, run: () => { scrollTo("about"); close(); } },
        { value: "experience", label: "Experience", icon: User, run: () => { scrollTo("experience"); close(); } },
        { value: "products", label: "Products", icon: User, run: () => { scrollTo("products"); close(); } },
        { value: "contact", label: "Contact", icon: User, run: () => { scrollTo("contact"); close(); } },
      ],
    },
    {
      value: "Actions",
      items: [
        {
          value: "resume",
          label: "Open résumé",
          icon: FileText,
          run: () => { window.open(config.resume, "_blank"); close(); },
        },
        {
          value: "copy-email",
          label: "Copy email address",
          icon: AtSign,
          run: () => {
            navigator.clipboard?.writeText(config.email);
            toastManager.add({ title: "Email copied", description: config.email, type: "success" });
            close();
          },
        },
      ],
    },
    {
      value: "Elsewhere",
      items: [
        { value: "github", label: "GitHub", icon: Github, run: () => { window.open(config.github, "_blank"); close(); } },
        { value: "twitter", label: "Twitter / X", icon: Twitter, run: () => { window.open(config.twitter, "_blank"); close(); } },
        { value: "linkedin", label: "LinkedIn", icon: Linkedin, run: () => { window.open(config.linkedin, "_blank"); close(); } },
      ],
    },
  ];

  return (
    <CommandDialog open={open} onOpenChange={setOpen}>
      <CommandDialogPopup>
        <Command items={groups}>
          <CommandInput placeholder="Jump to a section, copy my email…" />
          <CommandPanel>
            <CommandEmpty>Nothing matches that.</CommandEmpty>
            <CommandList>
              {(group: Group) => (
                <Fragment key={group.value}>
                  <CommandGroup items={group.items}>
                    <CommandGroupLabel>{group.value}</CommandGroupLabel>
                    <CommandCollection>
                      {(item: Item) => {
                        const Icon = item.icon;
                        return (
                          <CommandItem
                            key={item.value}
                            value={item.value}
                            onClick={item.run}
                          >
                            <Icon className="size-4 opacity-70" />
                            <span className="flex-1">{item.label}</span>
                            {item.shortcut && (
                              <CommandShortcut>{item.shortcut}</CommandShortcut>
                            )}
                          </CommandItem>
                        );
                      }}
                    </CommandCollection>
                  </CommandGroup>
                  <CommandSeparator />
                </Fragment>
              )}
            </CommandList>
          </CommandPanel>
          <CommandFooter>
            <KbdGroup>
              <Kbd>
                <CornerDownLeft className="size-3" />
              </Kbd>
              <span>to select</span>
            </KbdGroup>
            <KbdGroup>
              <ArrowUpRight className="size-3" />
              <span>{config.name}</span>
            </KbdGroup>
          </CommandFooter>
        </Command>
      </CommandDialogPopup>
    </CommandDialog>
  );
}
