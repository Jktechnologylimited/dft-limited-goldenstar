import { cn } from "@/lib/utils";

export function SectionHeading({
  kicker,
  title,
  description,
  align = "left",
  className,
}: {
  kicker?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
}) {
  return (
    <div className={cn("max-w-2xl", align === "center" && "mx-auto text-center", className)}>
      {kicker && <p className="font-mono text-[13px] text-[var(--gold-300)]">{kicker}</p>}
      <h2 className="mt-3 text-balance font-serif text-3xl leading-tight text-white sm:text-4xl">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-[15px] leading-relaxed text-[var(--slate-300)]">{description}</p>
      )}
    </div>
  );
}
