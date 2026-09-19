/**
 * Deliberate, awaited delay used by async server components so that
 * Suspense fallbacks (skeletons) stay on screen long enough to register
 * as an intentional loading state rather than a one-frame flash.
 */
export function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
