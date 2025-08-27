"use client"; // necessário para interatividade no cliente

import Link from "next/link";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Barra superior */}
      <header className="bg-white shadow-md">
        <nav className="mx-auto flex max-w-7xl items-center justify-between p-4">
          <h1 className="text-xl font-bold text-gray-800">Minha Oficina</h1>
          <div className="space-x-4">
            <Link
              href="/login"
              className="rounded-lg bg-blue-600 px-4 py-2 text-white hover:bg-blue-700 transition"
            >
              Login
            </Link>
            <Link
              href="/register"
              className="rounded-lg bg-green-600 px-4 py-2 text-white hover:bg-green-700 transition"
            >
              Cadastrar
            </Link>
          </div>
        </nav>
      </header>

      {/* Conteúdo principal */}
      <main className="flex flex-col items-center justify-center p-8 text-center">
        <h2 className="mb-4 text-3xl font-bold text-gray-800">
          Bem-vindo à Minha Oficina!
        </h2>
        <p className="mb-6 text-gray-600 max-w-xl">
          Aqui você pode gerenciar seus serviços, agendamentos e clientes de
          forma fácil e rápida.
        </p>
        <div className="space-x-4">
          <Link
            href="/login"
            className="rounded-lg bg-blue-600 px-6 py-3 text-white hover:bg-blue-700 transition"
          >
            Login
          </Link>
          <Link
            href="/register"
            className="rounded-lg bg-green-600 px-6 py-3 text-white hover:bg-green-700 transition"
          >
            Cadastrar
          </Link>
        </div>
      </main>
    </div>
  );
}
