"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import CourseCard from "../../components/CourseCard";

export default function Courses() {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState("All");

  useEffect(() => {
    fetch("/api/courses")
      .then(res => res.json())
      .then(setData);
  }, []);

  if (data.length === 0) return <p>Loading...</p>;

  // Filtering logic
  const filteredData =
    filter === "All" ? data : data.filter(c => c.level === filter);

  return (
    <div>
      <h2>Courses</h2>

      {/* Filter Buttons */}
      <button onClick={() => setFilter("All")}>All</button>
      <button onClick={() => setFilter("Beginner")}>Beginner</button>
      <button onClick={() => setFilter("Intermediate")}>Intermediate</button>
      <button onClick={() => setFilter("Advanced")}>Advanced</button>

      {/* Render Courses */}
      {filteredData.map(c => (
        <div key={c.id}>
          <CourseCard title={c.title} level={c.level} />
          <Link href={`/courses/${c.id}`}>View</Link>
        </div>
      ))}
    </div>
  );
}