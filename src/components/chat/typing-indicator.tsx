export function TypingIndicator({ label }: { label: string }) {
  return (
    <div className="flex items-center gap-2.5 rounded-2xl rounded-bl-sm border border-white/10 bg-white/[0.04] px-4 py-3">
      <span className="flex gap-1">
        <span className="size-1.5 animate-bounce rounded-full bg-[var(--gold-500)] [animation-delay:-0.3s]" />
        <span className="size-1.5 animate-bounce rounded-full bg-[var(--gold-500)] [animation-delay:-0.15s]" />
        <span className="size-1.5 animate-bounce rounded-full bg-[var(--gold-500)]" />
      </span>
      <span className="font-mono text-[11px] text-[var(--slate-300)]">{label}…</span>
    </div>
  );
}
