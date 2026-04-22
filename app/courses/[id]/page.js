"use client";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function CourseDetail({ params }) {
  const [course, setCourse] = useState(null);

  useEffect(() => {
    fetch("/api/courses")
      .then(res => res.json())
      .then(data => {
        const found = data.find(c => c.id == params.id);
        setCourse(found || false); // important for "not found"
      });
  }, [params.id]);

  
  if (course === null) return <p>Loading...</p>;
  if (!course) return <p>Course not found</p>;

  return (
    <div>
      <h2>{course.title}</h2>
      <p>Level: {course.level}</p>
      <Link href="/courses">Back</Link>
    </div>
  );
}