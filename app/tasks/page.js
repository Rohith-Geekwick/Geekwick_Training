"use client";
import { useEffect, useState } from "react";

export default function Tasks() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    fetch("/api/tasks")
      .then(res => res.json())
      .then(setTasks);
  }, []);

  if (tasks.length === 0) return <p>Loading...</p>;

  const grouped = tasks.reduce((acc, t) => {
    acc[t.status] = acc[t.status] || [];
    acc[t.status].push(t);
    return acc;
  }, {});

  return (
    <div>
      <h2>Tasks</h2>

      {Object.keys(grouped).map(status => (
        <div key={status}>
          <h3>{status}</h3>
          {grouped[status].map((t, i) => (
            <p key={i}>{t.title}</p>
          ))}
        </div>
      ))}
    </div>
  );
}