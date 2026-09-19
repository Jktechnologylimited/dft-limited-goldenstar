import { Skeleton } from "@/components/ui/skeleton";

export function TestimonialsSkeleton() {
  return (
    <div className="flex gap-5 overflow-hidden">
      {Array.from({ length: 3 }).map((_, i) => (
        <div key={i} className="w-[22rem] shrink-0 rounded-2xl border border-white/10 bg-white/[0.03] p-6">
          <Skeleton className="size-5" />
          <Skeleton className="mt-4 h-3 w-full" />
          <Skeleton className="mt-2 h-3 w-11/12" />
          <Skeleton className="mt-2 h-3 w-4/5" />
          <div className="mt-6 flex items-center gap-3 border-t border-white/10 pt-4">
            <Skeleton className="size-9 rounded-full" />
            <Skeleton className="h-3 w-24" />
          </div>
        </div>
      ))}
    </div>
  );
}
