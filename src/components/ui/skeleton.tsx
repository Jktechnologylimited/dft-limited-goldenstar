import { cn } from "@/lib/utils";

function Skeleton({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="skeleton"
      className={cn(
        "animate-pulse rounded-xl bg-gradient-to-r from-white/[0.05] via-white/[0.09] to-white/[0.05] bg-[length:200%_100%]",
        className
      )}
      {...props}
    />
  );
}

export { Skeleton };
