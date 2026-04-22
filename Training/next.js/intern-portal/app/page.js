"use client";

import Image from "next/image";

export default function Home() {
  return (
    <div>
      <h1>Intern Training Portal</h1>

      {/* 👇 ADD IMAGE HERE */}
      <Image 
        src="/next.svg" 
        width={150} 
        height={150} 
        alt="Next Logo" 
      />

    </div>
  );
}