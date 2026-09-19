import { Badge } from "@/components/ui/badge";
import { Photo } from "@/components/shared/photo";
import { formatNgn, formatUsd, type Course } from "@/data/courses";
import { photos } from "@/data/photos";

const categoryPhoto = {
  Trading: photos.coursesTrading,
  "Business & Tech": photos.coursesBusinessTech,
} as const;

export function CourseCard({ course }: { course: Course }) {
  return (
    <div className="flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] transition-colors hover:border-[var(--gold-500)]/30">
      <Photo
        photo={categoryPhoto[course.category]}
        width={500}
        height={280}
        className="aspect-[16/9] w-full rounded-none border-x-0 border-t-0"
      />
      <div className="flex flex-1 flex-col p-6">
        <div className="flex items-start justify-between gap-3">
          <Badge variant="outline">{course.category}</Badge>
          <Badge>{course.status}</Badge>
        </div>
        <h3 className="mt-4 font-serif text-lg leading-snug text-white">{course.title}</h3>
        <p className="mt-2.5 flex-1 text-[13.5px] leading-relaxed text-[var(--slate-300)]">
          {course.description}
        </p>
        <p className="mt-5 font-mono text-[15px] font-medium text-[var(--gold-300)]">
          {formatNgn(course.priceNgn)}{" "}
          <span className="text-[13px] font-normal text-[var(--slate-300)]">
            / {formatUsd(course.priceUsd)}
          </span>
        </p>
      </div>
    </div>
  );
}
