"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();

  const linkStyle = (path) => ({
    color: pathname === path ? "yellow" : "white",
    fontWeight: pathname === path ? "bold" : "normal",
  });

  return (
    <nav style={{ display: "flex", gap: "15px", padding: "10px", background: "#222" }}>
      <Link href="/" style={linkStyle("/")}>Home</Link>
      <Link href="/about" style={linkStyle("/about")}>About</Link>
      <Link href="/contact" style={linkStyle("/contact")}>Contact</Link>
      <Link href="/services" style={linkStyle("/services")}>Services</Link>
      <Link href="/courses" style={linkStyle("/courses")}>Courses</Link>
      <Link href="/trainers" style={linkStyle("/trainers")}>Trainers</Link>
    </nav>
  );
}