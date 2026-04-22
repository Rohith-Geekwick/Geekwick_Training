"use client";

import Card from "../../components/Card";
import { useState } from "react";

export default function Dashboard() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");

  // 🔹 Dynamic data
  const stats = [
    { title: "Total Interns", value: 50 },
    { title: "Total Trainers", value: 5 },
    { title: "Total Tasks", value: 20 },
  ];

  return (
    <div style={{ padding: "20px" }}>
      <h1>Dashboard</h1>

      {/* 🔹 Dynamic Cards */}
      <div style={{ display: "flex", gap: "20px", marginBottom: "20px" }}>
        {stats.map((item, index) => (
          <Card key={index} title={item.title} value={item.value} />
        ))}
      </div>

      {/* 🔹 Counter */}
      <h2>Counter: {count}</h2>

      <button onClick={() => setCount(count + 1)}>
        Increase
      </button>

      <button
        onClick={() => setCount(count - 1)}
        style={{ marginLeft: "10px" }}
      >
        Decrease
      </button>

      <hr style={{ margin: "20px 0" }} />

      {/* 🔹 Button Interaction */}
      <button onClick={() => alert("Hello Intern!")}>
        Click Me
      </button>

      <hr style={{ margin: "20px 0" }} />

      {/* 🔹 Form */}
      <h3>Simple Form</h3>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          alert(`Hello ${name || "User"}! Form submitted.`);
        }}
      >
        <input
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={{ padding: "5px" }}
        />

        <button type="submit" style={{ marginLeft: "10px" }}>
          Submit
        </button>
      </form>
    </div>
  );
}