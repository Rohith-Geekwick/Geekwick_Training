import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1>Home</h1>

      <Link href="/users">Users</Link><br/>
      <Link href="/register">Register</Link><br/>
      <Link href="/intern">Intern Form</Link><br/>
      <Link href="/students">Students</Link><br/>
      <Link href="/courses">Courses</Link><br/>
      <Link href="/tasks">Tasks</Link>
    </div>
  );
}