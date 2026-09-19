import { Skeleton } from "@/components/ui/skeleton";

export function CoursesSkeleton({ count = 6 }: { count?: number }) {
  return (
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {Array.from({ length: count }).map((_, i) => (
        <div key={i} className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
          <Skeleton className="h-4 w-20" />
          <Skeleton className="mt-4 h-5 w-4/5" />
          <Skeleton className="mt-3 h-3 w-full" />
          <Skeleton className="mt-1.5 h-3 w-3/4" />
          <Skeleton className="mt-6 h-4 w-24" />
        </div>
      ))}
    </div>
  );
}
