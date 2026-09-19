import Image from "next/image";

import { photoSrc, type Photo as PhotoData } from "@/data/photos";
import { cn } from "@/lib/utils";

/**
 * Consistent frame for hotlinked stock photography — rounded card, hairline
 * border, a gold top-highlight matching the rest of the UI, and a bottom
 * gradient so any caption text stays legible over the image.
 *
 * `unoptimized` is set because these images already come pre-sized from
 * Unsplash's own CDN; skipping Next's image proxy avoids a redundant
 * server-side hop for an external host.
 */
export function Photo({
  photo,
  width,
  height,
  className,
  priority,
  caption,
}: {
  photo: PhotoData;
  width: number;
  height: number;
  className?: string;
  priority?: boolean;
  caption?: string;
}) {
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-2xl border border-white/10 bg-[var(--ink-800)] shadow-xl",
        className
      )}
    >
      <Image
        src={photoSrc(photo, width, height)}
        alt={photo.alt}
        fill
        unoptimized
        priority={priority}
        className="object-cover"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -top-px left-6 right-6 h-px bg-gradient-to-r from-transparent via-[var(--gold-500)]/70 to-transparent"
      />
      {caption ? (
        <>
          <div
            aria-hidden
            className="pointer-events-none absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-[var(--ink-950)]/90 via-[var(--ink-950)]/20 to-transparent"
          />
          <p className="absolute inset-x-4 bottom-3 font-mono text-[11px] text-white/90">{caption}</p>
        </>
      ) : null}
    </div>
  );
}
