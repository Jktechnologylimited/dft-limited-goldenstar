"use client";

import * as React from "react";
import { X } from "lucide-react";

import { ChatPanelSkeleton } from "@/components/chat/chat-panel-skeleton";
import { RobotIcon } from "@/components/chat/robot-icon";
import { sleep } from "@/lib/delay";
import { cn } from "@/lib/utils";

// Minimum time the panel's Suspense fallback stays visible the first time
// the chat is opened — deliberately unhurried, so the logo-loader "connecting"
// moment registers rather than flashing past.
const MIN_PANEL_DELAY_MS = 1400;

// Defined once at module scope (not inside the component) so the lazy
// boundary is a stable component identity, per the rules of hooks/Suspense.
const LazyChatPanel = React.lazy(() =>
  Promise.all([import("@/components/chat/chat-panel"), sleep(MIN_PANEL_DELAY_MS)]).then(
    ([mod]) => mod
  )
);

export function ChatLauncher() {
  const [open, setOpen] = React.useState(false);
  const [mounted, setMounted] = React.useState(false);

  function toggle() {
    if (!mounted) setMounted(true);
    setOpen((o) => !o);
  }

  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col items-end gap-3 sm:bottom-6 sm:right-6">
      {mounted && (
        <div className={open ? "contents" : "hidden"}>
          <React.Suspense fallback={<ChatPanelSkeleton />}>
            <LazyChatPanel onClose={() => setOpen(false)} />
          </React.Suspense>
        </div>
      )}

      <button
        onClick={toggle}
        aria-label={open ? "Close chat assistant" : "Open chat assistant"}
        aria-expanded={open}
        className={cn(
          "relative flex size-14 items-center justify-center rounded-full bg-[var(--gold-500)] text-[var(--ink-950)] shadow-xl transition-transform hover:scale-105 active:scale-95",
          !open && "animate-pulse-ring"
        )}
      >
        {open ? <X className="size-5" /> : <RobotIcon className="size-7" />}
      </button>
    </div>
  );
}
