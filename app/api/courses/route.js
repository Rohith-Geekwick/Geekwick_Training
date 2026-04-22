export async function GET() {
  return Response.json([
    { id: 1, title: "MERN", level: "Beginner" },
    { id: 2, title: "Java", level: "Intermediate" }
  ]);
}