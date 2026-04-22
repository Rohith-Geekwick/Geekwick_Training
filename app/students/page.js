import Link from "next/link";

const students = [
  { id: 1, name: "Rohith" },
  { id: 2, name: "Rahul" }
];

export default function Students() {
  return (
    <div>
      <h2>Students</h2>

      {students.map(s => (
        <div key={s.id}>
          <Link href={`/students/${s.id}`}>{s.name}</Link>
        </div>
      ))}
    </div>
  );
}