import DashboardCard from '@/components/DashboardCardComp'
import {
  Users,
  FileText,
  Package,
  DollarSign,
  BarChart3,
  Calendar,
} from 'lucide-react'

interface UserPageProps {
  params: {
    email: string
  }
}

export default function UserPage({ params }: UserPageProps) {
  const email = decodeURIComponent(params.email)

  return (
    <main className="min-h-screen bg-green-950/50 flex flex-col items-center justify-center p-8">
      <h1 className="text-2xl font-bold mb-4 text-white">
        Bem-vindo, {email}!
      </h1>
      <p className="mb-8 text-gray-200">
        Aqui está o seu painel com os serviços disponíveis.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-5xl">
        <DashboardCard title="Clientes e Veículos" icon={<Users />} href="/clientes" />
        <DashboardCard title="Ordens de Serviço" icon={<FileText />} href="/os" />
        <DashboardCard title="Estoque" icon={<Package />} href="/estoque" />
        <DashboardCard title="Financeiro" icon={<DollarSign />} href="/financeiro" />
        <DashboardCard title="Relatórios" icon={<BarChart3 />} href="/relatorios" />
        <DashboardCard title="Agenda" icon={<Calendar />} href="/agenda" />
      </div>
    </main>
  )
}
