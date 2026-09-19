import { getCourses } from "@/data/get-courses";
import { CoursesTabsClient } from "@/components/courses/courses-tabs-client";

export async function CoursesCatalog() {
  const courses = await getCourses(900);
  return <CoursesTabsClient courses={courses} />;
}
