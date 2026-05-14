"use client";

import CommandMenu from "@/components/CommandMenu";
import ScrollProgress from "@/components/ScrollProgress";
import { ToastProvider } from "@/components/ui/toast";

/** Site-wide client chrome: scroll progress, ⌘K palette, toast viewport. */
export default function Chrome() {
  return (
    <>
      <ScrollProgress />
      <CommandMenu />
      <ToastProvider position="bottom-right" />
    </>
  );
}
