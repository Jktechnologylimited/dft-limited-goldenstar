"use client";

import * as React from "react";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CourseCard } from "@/components/courses/course-card";
import type { Course } from "@/data/courses";

export function CoursesTabsClient({ courses }: { courses: Course[] }) {
  const categories = ["All", "Trading", "Business & Tech"] as const;

  return (
    <Tabs defaultValue="All">
      <TabsList>
        {categories.map((cat) => (
          <TabsTrigger key={cat} value={cat}>
            {cat}
          </TabsTrigger>
        ))}
      </TabsList>
      {categories.map((cat) => (
        <TabsContent key={cat} value={cat}>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {courses
              .filter((c) => cat === "All" || c.category === cat)
              .map((course) => (
                <CourseCard key={course.slug} course={course} />
              ))}
          </div>
        </TabsContent>
      ))}
    </Tabs>
  );
}
