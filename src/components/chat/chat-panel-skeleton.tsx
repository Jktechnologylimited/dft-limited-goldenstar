import { Skeleton } from "@/components/ui/skeleton";
import { LogoLoader } from "@/components/shared/logo-loader";

export function ChatPanelSkeleton() {
  return (
    <div className="flex h-[min(38rem,calc(100vh-7rem))] w-[min(24rem,calc(100vw-2rem))] flex-col overflow-hidden rounded-2xl border border-white/10 bg-[var(--ink-900)] shadow-2xl">
      <div className="flex items-center gap-3 border-b border-white/10 px-4 py-3.5">
        <Skeleton className="size-9 rounded-full" />
        <div className="flex-1 space-y-1.5">
          <Skeleton className="h-3 w-28" />
          <Skeleton className="h-2.5 w-16" />
        </div>
        <Skeleton className="size-7 rounded-full" />
      </div>
      <div className="flex flex-1 items-center justify-center">
        <LogoLoader size="md" label="Connecting to Dannyx Assistant" />
      </div>
      <div className="border-t border-white/10 p-3.5">
        <Skeleton className="h-11 w-full rounded-xl" />
      </div>
    </div>
  );
}
