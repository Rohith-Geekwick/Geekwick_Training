"use client";
import { useState } from "react";
import FormField from "../../components/FormField";

export default function Intern() {
  const [data, setData] = useState({
    name: "",
    email: "",
    phone: "",
    department: "",
    skills: ""
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Prevent submit if any field is empty
    if (Object.values(data).some(v => !v)) return;

    setSubmitted(true);
  };

  const reset = () => {
    setData({
      name: "",
      email: "",
      phone: "",
      department: "",
      skills: ""
    });
    setSubmitted(false);
  };

  // Validation errors
  const errors = {
    name: !data.name,
    email: !data.email,
    phone: !data.phone,
    department: !data.department,
    skills: !data.skills
  };

  return (
    <div>
      <h2>Intern Form</h2>

      <form onSubmit={handleSubmit}>
        <FormField label="Name" name="name" value={data.name} onChange={handleChange} />
        {errors.name && <p style={{ color: "red" }}>Name is required</p>}

        <FormField label="Email" name="email" value={data.email} onChange={handleChange} />
        {errors.email && <p style={{ color: "red" }}>Email is required</p>}

        <FormField label="Phone" name="phone" value={data.phone} onChange={handleChange} />
        {errors.phone && <p style={{ color: "red" }}>Phone is required</p>}

        <FormField label="Department" name="department" value={data.department} onChange={handleChange} />
        {errors.department && <p style={{ color: "red" }}>Department is required</p>}

        <FormField label="Skills" name="skills" value={data.skills} onChange={handleChange} />
        {errors.skills && <p style={{ color: "red" }}>Skills are required</p>}

        <button type="submit">Submit</button>
        <button type="button" onClick={reset}>Reset</button>
      </form>

      {submitted && (
        <div style={{ border: "1px solid black", marginTop: "10px", padding: "10px" }}>
          <h3>Preview</h3>
          <p>{data.name}</p>
          <p>{data.email}</p>
          <p>{data.phone}</p>
          <p>{data.department}</p>
          <p>{data.skills}</p>
        </div>
      )}
    </div>
  );
}