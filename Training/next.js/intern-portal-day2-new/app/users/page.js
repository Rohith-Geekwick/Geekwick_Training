"use client";
import { useState } from "react";
import UserCard from "../../components/UserCard";

export default function Users() {
  const users = [
    { name: "Rohith", role: "Intern" },
    { name: "Rahul", role: "Trainer" },
    { name: "Anu", role: "HR" }
  ];

  const courses = ["MERN", "Java", "Python"];
  const [show, setShow] = useState(true);

  return (
    <div>
      <h2>Users</h2>

      {users.map((u, i) => (
        <UserCard key={i} name={u.name} role={u.role} />
      ))}

      <h3>Courses</h3>
      {courses.map((c, i) => (
        <p key={i}>{c}</p>
      ))}

      {users.length === 0 && <p>No interns available</p>}

      <button onClick={() => setShow(!show)}>Toggle Section</button>

      {show && <p>This section is visible</p>}
    </div>
  );
}