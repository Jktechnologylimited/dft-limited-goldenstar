"use client";

import * as React from "react";

import { getReply, initialMemory, STARTER_SUGGESTIONS, type ChatMemory, type RichBlock } from "@/components/chat/chat-engine";

export type ChatMessage = {
  id: string;
  role: "user" | "assistant";
  fullText: string;
  displayedText: string;
  streaming: boolean;
  rich?: RichBlock;
  suggestions?: string[];
  timestamp: number;
};

const THINKING_STAGES = [
  "Reading your message",
  "Checking the D.F.T knowledge base",
  "Composing a reply",
];

let uid = 0;
function nextId() {
  uid += 1;
  return `msg-${Date.now()}-${uid}`;
}

function clamp(value: number, min: number, max: number) {
  return Math.max(min, Math.min(max, value));
}

const WELCOME_TEXT =
  "Welcome to D.F.T Limited. I'm the site assistant — ask me about FX signals, courses, consulting, AI integration or account management, and I'll point you the right way.";

export function useChatSession() {
  const [messages, setMessages] = React.useState<ChatMessage[]>([]);
  const [isThinking, setIsThinking] = React.useState(false);
  const [thinkingStage, setThinkingStage] = React.useState(0);
  const [hasOpened, setHasOpened] = React.useState(false);
  const memoryRef = React.useRef<ChatMemory>(initialMemory());
  const timers = React.useRef<Array<ReturnType<typeof setTimeout>>>([]);

  const clearTimers = React.useCallback(() => {
    timers.current.forEach((t) => clearTimeout(t));
    timers.current = [];
  }, []);

  React.useEffect(() => clearTimers, [clearTimers]);

  const streamMessage = React.useCallback((id: string, text: string, onDone?: () => void) => {
    const words = text.split(" ");
    const targetDuration = clamp(text.length * 11, 380, 1900);
    const stepMs = clamp(targetDuration / words.length, 14, 70);
    let index = 0;

    const tick = () => {
      index += 1;
      const shown = words.slice(0, index).join(" ");
      setMessages((prev) =>
        prev.map((m) => (m.id === id ? { ...m, displayedText: shown, streaming: index < words.length } : m))
      );
      if (index < words.length) {
        const t = setTimeout(tick, stepMs);
        timers.current.push(t);
      } else {
        onDone?.();
      }
    };

    const t = setTimeout(tick, stepMs);
    timers.current.push(t);
  }, []);

  const pushAssistant = React.useCallback(
    (fullText: string, rich?: RichBlock, suggestions?: string[]) => {
      const id = nextId();
      setMessages((prev) => [
        ...prev,
        {
          id,
          role: "assistant",
          fullText,
          displayedText: "",
          streaming: true,
          rich: undefined,
          suggestions: undefined,
          timestamp: Date.now(),
        },
      ]);
      streamMessage(id, fullText, () => {
        setMessages((prev) => prev.map((m) => (m.id === id ? { ...m, rich, suggestions } : m)));
      });
    },
    [streamMessage]
  );

  const thinkThenReply = React.useCallback(
    (fullText: string, rich?: RichBlock, suggestions?: string[]) => {
      setIsThinking(true);
      setThinkingStage(0);

      const stageCount = THINKING_STAGES.length;
      const perStage = clamp(280 + fullText.length * 1.4, 260, 620);

      for (let i = 1; i < stageCount; i++) {
        const t = setTimeout(() => setThinkingStage(i), perStage * i);
        timers.current.push(t);
      }

      const total = perStage * stageCount;
      const t = setTimeout(() => {
        setIsThinking(false);
        pushAssistant(fullText, rich, suggestions);
      }, total);
      timers.current.push(t);
    },
    [pushAssistant]
  );

  const open = React.useCallback(() => {
    if (hasOpened) return;
    setHasOpened(true);
    thinkThenReply(WELCOME_TEXT, undefined, [...STARTER_SUGGESTIONS]);
  }, [hasOpened, thinkThenReply]);

  const send = React.useCallback(
    (raw: string) => {
      const text = raw.trim();
      if (!text || isThinking) return;

      setMessages((prev) => [
        ...prev,
        {
          id: nextId(),
          role: "user",
          fullText: text,
          displayedText: text,
          streaming: false,
          timestamp: Date.now(),
        },
      ]);

      const { reply, memory } = getReply(text, memoryRef.current);
      memoryRef.current = memory;
      thinkThenReply(reply.text, reply.rich, reply.suggestions);
    },
    [isThinking, thinkThenReply]
  );

  const reset = React.useCallback(() => {
    clearTimers();
    memoryRef.current = initialMemory();
    setMessages([]);
    setIsThinking(false);
    setHasOpened(false);
  }, [clearTimers]);

  return {
    messages,
    isThinking,
    thinkingLabel: THINKING_STAGES[thinkingStage],
    open,
    send,
    reset,
  };
}
