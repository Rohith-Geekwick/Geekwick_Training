"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function CoursesPage() {
  const [courses, setCourses] = useState([]);

  // 🔹 Fetch courses
  const fetchCourses = async () => {
    const res = await fetch("/api/courses");
    const data = await res.json();
    setCourses(data);
  };

  useEffect(() => {
    fetchCourses();
  }, []);

  // 🔹 Add course
  const addCourse = async () => {
    await fetch("/api/courses", {
      method: "POST",
      body: JSON.stringify({
        id: "new-course",
        title: "New Course",
        description: "This is a new course"
      })
    });

    fetchCourses(); // refresh
  };

  // 🔹 Delete course
  const deleteCourse = async (id) => {
    await fetch(`/api/courses/${id}`, {
      method: "DELETE"
    });

    fetchCourses(); // refresh
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Courses</h1>

      <button onClick={addCourse} style={{ marginBottom: "20px" }}>
        Add Course
      </button>

      <div>
        {courses.map((course) => (
          <div key={course.id} style={{ marginBottom: "10px" }}>
            <Link href={`/courses/${course.id}`}>
              {course.title}
            </Link>

            <button
              onClick={() => deleteCourse(course.id)}
              style={{ marginLeft: "10px" }}
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}