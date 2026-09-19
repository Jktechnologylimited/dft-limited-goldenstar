import { courses, type Course } from "@/data/courses";
import { sleep } from "@/lib/delay";

/**
 * Stands in for a real content-API call. The deliberate delay lets the
 * Suspense fallback (skeleton) around this component stay on screen long
 * enough to read as an intentional loading state.
 */
export async function getCourses(delayMs = 900): Promise<Course[]> {
  await sleep(delayMs);
  return courses;
}
