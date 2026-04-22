export default function CourseCard({ title, level }) {
  return (
    <div style={{ border: "1px solid gray", margin: "10px", padding: "10px" }}>
      <h3>{title}</h3>
      <p>{level}</p>
    </div>
  );
}