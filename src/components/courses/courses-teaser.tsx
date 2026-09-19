import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { getCourses } from "@/data/get-courses";
import { CourseCard } from "@/components/courses/course-card";

export async function CoursesTeaser() {
  const courses = await getCourses(750);
  const preview = courses.slice(0, 3);

  return (
    <div>
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {preview.map((course) => (
          <CourseCard key={course.slug} course={course} />
        ))}
      </div>
      <Link
        href="/courses"
        className="mt-8 inline-flex items-center gap-1.5 font-medium text-[var(--gold-300)] transition-colors hover:text-[var(--gold-500)]"
      >
        View all {courses.length} courses <ArrowRight className="size-4" />
      </Link>
    </div>
  );
}
