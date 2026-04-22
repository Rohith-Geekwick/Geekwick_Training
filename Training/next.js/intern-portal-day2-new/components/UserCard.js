export default function UserCard({ name, role }) {
  return (
    <div style={{ border: "1px solid black", margin: "10px" }}>
      <h3>{name}</h3>
      <p>{role}</p>
    </div>
  );
}