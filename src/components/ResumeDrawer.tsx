"use client";

import { ArrowDownToLine, ExternalLink } from "lucide-react";
import type { ReactElement } from "react";
import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerPanel,
  DrawerPopup,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { config } from "@/lib/data";

export default function ResumeDrawer({ trigger }: { trigger: ReactElement }) {
  return (
    <Drawer>
      <DrawerTrigger render={trigger} />
      <DrawerPopup position="right" className="sm:max-w-2xl">
        <DrawerHeader>
          <DrawerTitle className="text-2xl font-extrabold tracking-tight">
            Résumé
          </DrawerTitle>
          <DrawerDescription>
            {config.name} — {config.role}. Updated {config.resumeUpdated}.
          </DrawerDescription>
        </DrawerHeader>
        <DrawerPanel className="min-h-0 flex-1 overflow-hidden p-0">
          <iframe
            src={`${config.resume}#toolbar=0&view=FitH`}
            title="Résumé preview"
            className="h-full min-h-[55vh] w-full border-t bg-muted"
          />
        </DrawerPanel>
        <DrawerFooter className="flex items-center justify-between gap-3">
          <DrawerClose
            render={
              <Button variant="ghost" size="sm">
                Close
              </Button>
            }
          />
          <div className="flex items-center gap-2">
            <Button
              size="sm"
              variant="outline"
              render={
                <a href={config.resume} target="_blank" rel="noopener noreferrer">
                  Open <ExternalLink data-icon="inline-end" />
                </a>
              }
            />
            <Button
              size="sm"
              render={
                <a href={config.resume} download>
                  Download <ArrowDownToLine data-icon="inline-end" />
                </a>
              }
            />
          </div>
        </DrawerFooter>
      </DrawerPopup>
    </Drawer>
  );
}
