interface UserPageProps {
  params: {
    email: string;
  };
}

export default function UserPage({ params }: UserPageProps) {
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold">Bem-vindo, {decodeURIComponent(params.email)}!</h1>
      <p>Essa é uma página de exemplo do usuário.</p>
      <p>Aqui você pode colocar conteúdos exclusivos do usuário.</p>
    </div>
  );
}