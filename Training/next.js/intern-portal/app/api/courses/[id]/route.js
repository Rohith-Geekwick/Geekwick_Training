import { courses } from "../data";

// GET single course
export async function GET(req, { params }) {
  const { id } = await params;

  const course = courses.find((c) => c.id === id);

  if (!course) {
    return Response.json({ message: "Not found" }, { status: 404 });
  }

  return Response.json(course);
}

// DELETE course
export async function DELETE(req, { params }) {
  const { id } = await params;

  const index = courses.findIndex((c) => c.id === id);

  if (index === -1) {
    return Response.json({ message: "Not found" }, { status: 404 });
  }

  courses.splice(index, 1);

  return Response.json({ message: "Deleted", courses });
}