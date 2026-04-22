export async function GET() {
  return Response.json([
    { title: "Task1", status: "Pending" },
    { title: "Task2", status: "Completed" },
    { title: "Task3", status: "Pending" }
  ]);
}