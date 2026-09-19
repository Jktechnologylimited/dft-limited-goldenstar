import { LogoMark } from "@/components/layout/logo";
import { cn } from "@/lib/utils";

/**
 * The brand mark used as a loading state, wherever the site needs to show
 * that something deliberate is happening (a route loading, the assistant
 * connecting) rather than a generic spinner. Animation is intentionally
 * slow — a breathing pulse plus a slow orbiting ring — so it reads as a
 * considered moment rather than a flash.
 */
export function LogoLoader({
  label,
  size = "md",
  className,
}: {
  label?: string;
  size?: "sm" | "md" | "lg";
  className?: string;
}) {
  const box = { sm: "size-12", md: "size-16", lg: "size-24" }[size];
  const mark = { sm: "size-6", md: "size-8", lg: "size-12" }[size];

  return (
    <div className={cn("flex flex-col items-center justify-center gap-4", className)}>
      <div className={cn("relative flex items-center justify-center", box)}>
        <svg viewBox="0 0 100 100" className="absolute inset-0 size-full animate-logo-orbit">
          <circle
            cx="50"
            cy="50"
            r="46"
            fill="none"
            stroke="var(--gold-500)"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeDasharray="40 216"
            opacity="0.75"
          />
        </svg>
        <div className="animate-logo-pulse">
          <LogoMark className={mark} />
        </div>
      </div>
      {label && (
        <p className="font-mono text-[12px] tracking-wide text-[var(--slate-300)]">{label}</p>
      )}
    </div>
  );
}
