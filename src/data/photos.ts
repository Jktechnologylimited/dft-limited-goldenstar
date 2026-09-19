/**
 * Free stock photography sourced from Unsplash (unsplash.com), used under
 * the Unsplash License — free for commercial and personal use, no
 * permission or attribution required (we credit them in the footer anyway).
 *
 * IDs below are each photo's actual CDN asset id (verified against that
 * photo's live og:image tag on unsplash.com — Unsplash's page-URL slug id
 * is a *different*, unrelated string, so it can't be derived from the page
 * URL). Every id here resolves under images.unsplash.com, the free tier —
 * Unsplash also has a paid "Unsplash+" catalog served from
 * plus.unsplash.com, which is deliberately excluded.
 *
 * Each photo is requested pre-cropped and pre-sized directly from
 * Unsplash's own image API (the same CDN that serves unsplash.com), so the
 * browser downloads only the pixels a given placement actually needs.
 */

function unsplash(id: string, width: number, height: number) {
  const params = new URLSearchParams({
    auto: "format",
    fit: "crop",
    q: "80",
    w: String(width),
    h: String(height),
  });
  return `https://images.unsplash.com/photo-${id}?${params.toString()}`;
}

export type Photo = { id: string; alt: string };

function photo(id: string, alt: string): Photo {
  return { id, alt };
}

export const photos = {
  // Home — hero
  heroPortrait: photo(
    "1758873267202-44c33e64f084",
    "A trader smiling while reviewing charts on a laptop in a bright office"
  ),
  // Home — "what we are" teaser
  teamMember: photo(
    "1758518727888-ffa196002e59",
    "A confident, smiling member of the D.F.T Limited team"
  ),

  // About
  aboutBanner: photo(
    "1690192123455-6337e6db4179",
    "Two colleagues smiling and giving each other a high five in the office"
  ),
  aboutCommitment: photo(
    "1758520144417-e1c432042dec",
    "A smiling advisor holding papers in the office"
  ),
  aboutCommunity: photo(
    "1758691737605-69a0e78bd193",
    "A smiling member of the D.F.T Limited community in the office"
  ),
  aboutJourney: photo(
    "1486403184395-fc4990866136",
    "A smiling client checking her phone"
  ),

  // Courses
  coursesBanner: photo(
    "1758270704689-2850704b7338",
    "Two smiling students learning together"
  ),
  coursesTrading: photo(
    "1758270704689-2850704b7338",
    "Students smiling together while studying"
  ),
  coursesBusinessTech: photo(
    "1758270705290-62b6294dd044",
    "A diverse group of smiling students gathered around a laptop"
  ),
} as const;

export function photoSrc(p: Photo, width: number, height: number) {
  return unsplash(p.id, width, height);
}
