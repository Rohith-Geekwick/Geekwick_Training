export async function GET() {
  return Response.json([
    { id: 1, name: "Swaroop" },
    { id: 2, name: "Rahul" }
  ]);
}