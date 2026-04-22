import Image from "next/image";

export default function CourseCard({ title, image }) {
  return (
    <div
      style={{
        border: "1px solid gray",
        padding: "15px",
        width: "200px",
        textAlign: "center",
        borderRadius: "8px",
      }}
    >
      <Image
        src={image}
        width={100}
        height={100}
        alt={title}
        loading="eager"
      />

      <h3 style={{ marginTop: "10px" }}>{title}</h3>
    </div>
  );
}