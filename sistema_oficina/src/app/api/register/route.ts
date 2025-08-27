// app/api/register/route.ts
import { promises as fs } from "fs";
import path from "path";

const filePath = path.join(process.cwd(), "data", "users.json");

export async function POST(req: Request) {
  try {
    const newUser = await req.json();

    const fileData = await fs.readFile(filePath, "utf-8");
    const users = JSON.parse(fileData || "[]");

    // já existe?
    const exists = users.some((u: { email: string }) => u.email === newUser.email);
    if (exists) {
      return new Response(JSON.stringify({ error: "Email already in use." }), {
        status: 400,
        headers: { "Content-Type": "application/json" },
      });
    }

    users.push(newUser);
    await fs.writeFile(filePath, JSON.stringify(users, null, 2));

    return new Response(JSON.stringify({ message: "User registered successfully!" }), {
      status: 201,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error('Erro no registro:', error);
    return new Response(JSON.stringify({ error: "Registering error." }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
