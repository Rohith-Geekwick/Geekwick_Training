import { connectDB } from "@/lib/mongodb";

// GET one course
export async function GET(req, { params }) {
  const { id } = await params;

  const db = await connectDB();

  const course = await db.collection("courses").findOne({ id });

  if (!course) {
    return Response.json({ message: "Not found" }, { status: 404 });
  }

  return Response.json(course);
}

// DELETE course
export async function DELETE(req, { params }) {
  const { id } = await params;

  const db = await connectDB();

  await db.collection("courses").deleteOne({ id });

  return Response.json({ message: "Deleted" });
}