export default async function CourseDetails({ params }) {
  const { id } = await params;

  const res = await fetch(`http://localhost:3000/api/courses/${id}`, {
    cache: "no-store"
  });

  if (!res.ok) {
    return (
      <div style={{ padding: "20px" }}>
        <h1>Course not found</h1>
      </div>
    );
  }

  const data = await res.json();

  return (
    <div style={{ padding: "20px" }}>
      <h1>Course Details</h1>

      <h2>{id.split("-").join(" ").toUpperCase()}</h2>

      <p>{data.description}</p>
    </div>
  );
}