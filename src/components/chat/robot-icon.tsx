"use client";

import * as React from "react";

import { cn } from "@/lib/utils";

/**
 * Original vector take on the "Expert Advisor" robot from the D.F.T
 * marketing art — a glossy dark-blue helmet head with a glowing visor, in a
 * collar and tie. Used as the chat assistant's face across the site.
 *
 * Gradient ids are namespaced per instance (via useId) since multiple
 * copies of this icon can exist in the DOM at once, and duplicate SVG ids
 * silently break gradient references in browsers.
 */
export function RobotIcon({ className }: { className?: string }) {
  const uid = React.useId().replace(/[:]/g, "");
  const headId = `robot-head-${uid}`;
  const visorId = `robot-visor-${uid}`;

  return (
    <svg viewBox="0 0 32 32" fill="none" className={cn("size-5", className)} aria-hidden="true">
      <defs>
        <linearGradient id={headId} x1="8" y1="2" x2="24" y2="26" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#6577d6" />
          <stop offset="50%" stopColor="#2c3aa0" />
          <stop offset="100%" stopColor="#141c58" />
        </linearGradient>
        <linearGradient id={visorId} x1="9" y1="0" x2="23" y2="0" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#bdeeff" />
          <stop offset="50%" stopColor="#5bb2ff" />
          <stop offset="100%" stopColor="#bdeeff" />
        </linearGradient>
      </defs>

      {/* head / helmet */}
      <path
        d="M16 2.6c5 0 8.4 4.2 7.7 9.6-.7 5.6-3.7 9.4-7.7 10.6-4-1.2-7-5-7.7-10.6-.7-5.4 2.7-9.6 7.7-9.6Z"
        fill={`url(#${headId})`}
        stroke="#8fa2ff"
        strokeOpacity="0.5"
        strokeWidth="0.5"
      />
      {/* glossy highlight */}
      <ellipse cx="12.3" cy="7.4" rx="2.1" ry="1.2" fill="#ffffff" opacity="0.5" transform="rotate(-25 12.3 7.4)" />

      {/* visor glow */}
      <rect x="9.4" y="11.2" width="13.2" height="4" rx="2" fill={`url(#${visorId})`} />
      <rect x="9.4" y="11.2" width="13.2" height="4" rx="2" fill="#eafbff" opacity="0.55">
        <animate attributeName="opacity" values="0.3;0.75;0.3" dur="2.6s" repeatCount="indefinite" />
      </rect>

      {/* collar + tie */}
      <path d="M9 24.5 15.1 22 16 24.2 16.9 22 23 24.5 23 29 9 29Z" fill="#f4f6fb" />
      <path d="M14.3 23.6 16 22.4 17.7 23.6 16.9 27.6h-1.8Z" fill="#141d42" />
      <path d="M9 24.5c-2.6 1-4.3 2.6-4.3 4.5h4.3Z" fill="#0a1550" />
      <path d="M23 24.5c2.6 1 4.3 2.6 4.3 4.5H23Z" fill="#0a1550" />
    </svg>
  );
}
