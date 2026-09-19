"use client";

import * as React from "react";
import { RotateCcw, Send, X } from "lucide-react";

import { Button } from "@/components/ui/button";
import { ChatRichBlock } from "@/components/chat/chat-rich-blocks";
import { RobotIcon } from "@/components/chat/robot-icon";
import { TypingIndicator } from "@/components/chat/typing-indicator";
import { useChatSession } from "@/components/chat/use-chat-session";
import { cn } from "@/lib/utils";

function formatTime(ts: number) {
  return new Date(ts).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
}

export default function ChatPanel({ onClose }: { onClose: () => void }) {
  const { messages, isThinking, thinkingLabel, open, send, reset } = useChatSession();
  const [input, setInput] = React.useState("");
  const scrollRef = React.useRef<HTMLDivElement>(null);
  const inputRef = React.useRef<HTMLInputElement>(null);

  React.useEffect(() => {
    open();
    inputRef.current?.focus();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  React.useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [messages, isThinking]);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!input.trim() || isThinking) return;
    send(input);
    setInput("");
  }

  const lastAssistant = [...messages].reverse().find((m) => m.role === "assistant" && !m.streaming);
  const suggestions = !isThinking ? lastAssistant?.suggestions ?? [] : [];

  return (
    <div className="flex h-[min(38rem,calc(100vh-7rem))] w-[min(24rem,calc(100vw-2rem))] flex-col overflow-hidden rounded-2xl border border-white/10 bg-[var(--ink-900)] shadow-2xl">
      <div className="flex items-center gap-3 border-b border-white/10 bg-[var(--ink-950)]/60 px-4 py-3.5">
        <div className="relative flex size-9 shrink-0 items-center justify-center rounded-full bg-[var(--royal-500)]/35 ring-1 ring-inset ring-white/10">
          <RobotIcon className="size-6" />
          <span className="absolute -bottom-0.5 -right-0.5 size-2.5 rounded-full border-2 border-[var(--ink-950)] bg-[var(--rise-500)]" />
        </div>
        <div className="min-w-0 flex-1">
          <p className="truncate text-[13.5px] font-semibold text-white">Dannyx Assistant</p>
          <p className="truncate text-[11px] text-[var(--slate-300)]">Simulated assistant · online</p>
        </div>
        <button
          onClick={reset}
          aria-label="Restart conversation"
          className="rounded-full p-1.5 text-[var(--slate-300)] transition-colors hover:bg-white/10 hover:text-white"
        >
          <RotateCcw className="size-4" />
        </button>
        <button
          onClick={onClose}
          aria-label="Close chat"
          className="rounded-full p-1.5 text-[var(--slate-300)] transition-colors hover:bg-white/10 hover:text-white"
        >
          <X className="size-4" />
        </button>
      </div>

      <div ref={scrollRef} className="flex-1 space-y-3.5 overflow-y-auto px-4 py-5" aria-live="polite">
        {messages.map((m) => (
          <div key={m.id} className={cn("flex flex-col", m.role === "user" ? "items-end" : "items-start")}>
            <div
              className={cn(
                "max-w-[88%] whitespace-pre-wrap rounded-2xl px-4 py-2.5 text-[13.5px] leading-relaxed",
                m.role === "user"
                  ? "rounded-br-sm bg-[var(--gold-500)] text-[var(--ink-950)]"
                  : "rounded-bl-sm border border-white/10 bg-white/[0.04] text-white/90"
              )}
            >
              {m.displayedText}
              {m.streaming && (
                <span className="ml-0.5 inline-block h-3.5 w-[2px] translate-y-0.5 animate-blink bg-current align-middle" />
              )}
            </div>
            {!m.streaming && m.rich && (
              <div className="w-[88%]">
                <ChatRichBlock block={m.rich} />
              </div>
            )}
            <span className="mt-1 px-1 font-mono text-[10px] text-[var(--slate-300)]/60">
              {formatTime(m.timestamp)}
            </span>
          </div>
        ))}

        {isThinking && (
          <div className="flex items-start">
            <TypingIndicator label={thinkingLabel} />
          </div>
        )}
      </div>

      {suggestions.length > 0 && (
        <div className="flex flex-wrap gap-1.5 border-t border-white/10 px-4 py-3">
          {suggestions.map((s) => (
            <button
              key={s}
              onClick={() => send(s)}
              className="rounded-full border border-white/15 px-3 py-1.5 text-[12px] text-[var(--slate-300)] transition-colors hover:border-[var(--gold-500)]/60 hover:text-[var(--gold-300)]"
            >
              {s}
            </button>
          ))}
        </div>
      )}

      <form onSubmit={handleSubmit} className="flex items-center gap-2 border-t border-white/10 p-3">
        <input
          ref={inputRef}
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ask about signals, courses, pricing…"
          className="h-11 flex-1 rounded-xl border border-white/15 bg-white/[0.03] px-4 text-[13.5px] text-white placeholder:text-[var(--slate-300)]/60 outline-none focus-visible:border-[var(--gold-500)]/60 focus-visible:ring-2 focus-visible:ring-[var(--gold-500)]/20"
          aria-label="Message"
        />
        <Button type="submit" size="icon" disabled={!input.trim() || isThinking} aria-label="Send message">
          <Send className="size-4" />
        </Button>
      </form>
    </div>
  );
}
