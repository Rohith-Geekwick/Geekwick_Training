import { connectDB } from "@/lib/mongodb";

// GET all courses
export async function GET() {
  const db = await connectDB();

  const courses = await db.collection("courses").find().toArray();

  return Response.json(courses);
}

// ADD course
export async function POST(req) {
  const db = await connectDB();

  const body = await req.json();

  await db.collection("courses").insertOne(body);

  return Response.json({ message: "Course added" });
}