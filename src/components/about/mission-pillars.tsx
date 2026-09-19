import { missionPillars } from "@/data/values";

export function MissionPillars() {
  return (
    <div className="grid gap-8 sm:grid-cols-3">
      {missionPillars.map((pillar) => (
        <div key={pillar.title} className="border-t border-[var(--gold-500)]/40 pt-5">
          <h3 className="font-serif text-xl text-white">{pillar.title}</h3>
          <p className="mt-2.5 text-[14px] leading-relaxed text-[var(--slate-300)]">{pillar.body}</p>
        </div>
      ))}
    </div>
  );
}
