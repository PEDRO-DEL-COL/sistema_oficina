import { NextResponse } from "next/server";
import { promises as fs } from "fs";
import path from "path";

const filePath = path.join(process.cwd(), "data", "users.json");

export async function POST(req: Request) {
  try {
    const { email, password } = await req.json();

    const raw = await fs.readFile(filePath, "utf-8");
    const users: { email: string; password: string }[] = JSON.parse(raw || "[]");

    const user = users.find(u => u.email === email && u.password === password);

    if (!user) {
      return NextResponse.json({ success: false, error: "Email ou senha incorretos" }, { status: 401 });
    }

    // Para teste, retornamos o email do usuário (em produção, usar JWT ou session)
    return NextResponse.json({ success: true, user: { email: user.email } });
  } catch (err: unknown) {
    if (err instanceof Error) {
      return NextResponse.json({ success: false, error: err.message }, { status: 500 });
    }
    return NextResponse.json({ success: false, error: "Erro desconhecido" }, { status: 500 });
  }
}
