"use client";
import { useState } from "react";

export default function Register() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    course: ""
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div>
      <h2>Register</h2>

      <form onSubmit={handleSubmit}>
        <input name="name" placeholder="Name" onChange={handleChange} /><br/>
        <input name="email" placeholder="Email" onChange={handleChange} /><br/>
        <input name="course" placeholder="Course" onChange={handleChange} /><br/>

        <button disabled={!form.name || !form.email}>Submit</button>
      </form>

      {submitted && (
        <div>
          <h3>Submitted Data</h3>
          <p>{form.name}</p>
          <p>{form.email}</p>
          <p>{form.course}</p>
          <p>Success!</p>
        </div>
      )}
    </div>
  );
}