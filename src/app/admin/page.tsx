'use client'
import { useState } from 'react';
import { 
  Briefcase, 
  Users, 
  DollarSign, 
  BarChart2, 
  Settings, 
  LogOut,
  Search,
  Bell,
  ChevronDown,
  Calendar,
  FileText,
  CheckCircle,
  Star
} from 'lucide-react';

type Freelancer = {
  id: string;
  name: string;
  skills: string[];
  rating: number;
  projects: number;
  status: 'active' | 'pending' | 'suspended';
  joinDate: string;
};

type Project = {
  id: string;
  title: string;
  client: string;
  freelancer: string;
  budget: number;
  status: 'pending' | 'in-progress' | 'completed' | 'cancelled';
  deadline: string;
};

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  
  // Dados de exemplo
  const freelancers: Freelancer[] = [
    {
      id: '1',
      name: 'João Silva',
      skills: ['Design', 'UI/UX'],
      rating: 4.8,
      projects: 12,
      status: 'active',
      joinDate: '15/03/2022'
    },
    {
      id: '2',
      name: 'Maria Souza',
      skills: ['Desenvolvimento', 'React'],
      rating: 4.5,
      projects: 8,
      status: 'active',
      joinDate: '22/05/2022'
    },
    {
      id: '3',
      name: 'Carlos Oliveira',
      skills: ['Marketing', 'SEO'],
      rating: 4.2,
      projects: 5,
      status: 'pending',
      joinDate: '10/01/2023'
    },
    {
      id: '4',
      name: 'Ana Santos',
      skills: ['Redação', 'Copywriting'],
      rating: 4.9,
      projects: 15,
      status: 'suspended',
      joinDate: '05/11/2021'
    }
  ];

  const projects: Project[] = [
    {
      id: '101',
      title: 'Site Corporativo',
      client: 'Empresa X',
      freelancer: 'João Silva',
      budget: 5000,
      status: 'in-progress',
      deadline: '30/06/2023'
    },
    {
      id: '102',
      title: 'App Mobile',
      client: 'Startup Y',
      freelancer: 'Maria Souza',
      budget: 12000,
      status: 'pending',
      deadline: '15/07/2023'
    },
    {
      id: '103',
      title: 'Campanha de Marketing',
      client: 'Loja Z',
      freelancer: 'Carlos Oliveira',
      budget: 3500,
      status: 'completed',
      deadline: '20/05/2023'
    }
  ];

  const stats = {
    totalFreelancers: 124,
    activeFreelancers: 98,
    totalProjects: 76,
    activeProjects: 32,
    revenue: 125000,
    pendingApprovals: 8
  };

  const filteredFreelancers = freelancers.filter(freelancer =>
    freelancer.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    freelancer.skills.some(skill => 
      skill.toLowerCase().includes(searchQuery.toLowerCase())
    )
  );

  const filteredProjects = projects.filter(project =>
    project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    project.client.toLowerCase().includes(searchQuery.toLowerCase()) ||
    project.freelancer.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const renderTabContent = () => {
    switch (activeTab) {
      case 'freelancers':
        return (
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-bold">Gerenciar Freelancers</h2>
              <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
                Adicionar Freelancer
              </button>
            </div>
            
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Nome</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Habilidades</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Avaliação</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Projetos</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Data de Cadastro</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Ações</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {filteredFreelancers.map((freelancer) => (
                    <tr key={freelancer.id}>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="flex-shrink-0 h-10 w-10 rounded-full bg-gray-300 flex items-center justify-center">
                            {freelancer.name.charAt(0)}
                          </div>
                          <div className="ml-4">
                            <div className="text-sm font-medium text-gray-900">{freelancer.name}</div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex flex-wrap gap-1">
                          {freelancer.skills.map((skill, index) => (
                            <span key={index} className="px-2 py-1 text-xs rounded-full bg-blue-100 text-blue-800">
                              {skill}
                            </span>
                          ))}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                          <span className="ml-1 text-sm text-gray-900">{freelancer.rating}</span>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{freelancer.projects}</td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`px-2 py-1 text-xs rounded-full ${
                          freelancer.status === 'active' ? 'bg-green-100 text-green-800' :
                          freelancer.status === 'pending' ? 'bg-yellow-100 text-yellow-800' :
                          'bg-red-100 text-red-800'
                        }`}>
                          {freelancer.status === 'active' ? 'Ativo' :
                           freelancer.status === 'pending' ? 'Pendente' : 'Suspenso'}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{freelancer.joinDate}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                        <button className="text-blue-600 hover:text-blue-900 mr-3">Editar</button>
                        <button className="text-red-600 hover:text-red-900">Suspender</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        );
      case 'projects':
        return (
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-xl font-bold mb-6">Gerenciar Projetos</h2>
            
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Título</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Cliente</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Freelancer</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Orçamento</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Prazo</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Ações</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {filteredProjects.map((project) => (
                    <tr key={project.id}>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{project.title}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{project.client}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{project.freelancer}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        R$ {project.budget.toLocaleString('pt-BR')}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`px-2 py-1 text-xs rounded-full ${
                          project.status === 'completed' ? 'bg-green-100 text-green-800' :
                          project.status === 'in-progress' ? 'bg-blue-100 text-blue-800' :
                          project.status === 'pending' ? 'bg-yellow-100 text-yellow-800' :
                          'bg-red-100 text-red-800'
                        }`}>
                          {project.status === 'completed' ? 'Concluído' :
                           project.status === 'in-progress' ? 'Em andamento' :
                           project.status === 'pending' ? 'Pendente' : 'Cancelado'}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{project.deadline}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                        <button className="text-blue-600 hover:text-blue-900">Detalhes</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        );
      case 'settings':
        return (
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-xl font-bold mb-6">Configurações do Sistema</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-medium mb-3">Configurações de Notificação</h3>
                <div className="space-y-2">
                  <div className="flex items-center">
                    <input type="checkbox" id="email-notifications" className="h-4 w-4 text-blue-600" defaultChecked />
                    <label htmlFor="email-notifications" className="ml-2 text-sm text-gray-700">Notificações por Email</label>
                  </div>
                  <div className="flex items-center">
                    <input type="checkbox" id="app-notifications" className="h-4 w-4 text-blue-600" defaultChecked />
                    <label htmlFor="app-notifications" className="ml-2 text-sm text-gray-700">Notificações no Aplicativo</label>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-lg font-medium mb-3">Configurações de Pagamento</h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Taxa de Serviço (%)</label>
                    <input type="number" className="w-20 px-3 py-2 border border-gray-300 rounded-md" defaultValue="15" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Dias para Liberação de Pagamento</label>
                    <input type="number" className="w-20 px-3 py-2 border border-gray-300 rounded-md" defaultValue="7" />
                  </div>
                </div>
              </div>
              
              <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
                Salvar Configurações
              </button>
            </div>
          </div>
        );
      default:
        return (
          <div className="space-y-6">
            {/* Cards de Estatísticas */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white rounded-lg shadow p-6">
                <div className="flex items-center">
                  <div className="p-3 rounded-full bg-blue-100 text-blue-600">
                    <Users className="h-6 w-6" />
                  </div>
                  <div className="ml-4">
                    <p className="text-sm font-medium text-gray-500">Freelancers</p>
                    <p className="text-2xl font-semibold text-gray-900">{stats.totalFreelancers}</p>
                    <p className="text-xs text-green-600 mt-1">
                      +{stats.activeFreelancers} ativos
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-lg shadow p-6">
                <div className="flex items-center">
                  <div className="p-3 rounded-full bg-green-100 text-green-600">
                    <Briefcase className="h-6 w-6" />
                  </div>
                  <div className="ml-4">
                    <p className="text-sm font-medium text-gray-500">Projetos</p>
                    <p className="text-2xl font-semibold text-gray-900">{stats.totalProjects}</p>
                    <p className="text-xs text-blue-600 mt-1">
                      {stats.activeProjects} em andamento
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-lg shadow p-6">
                <div className="flex items-center">
                  <div className="p-3 rounded-full bg-purple-100 text-purple-600">
                    <DollarSign className="h-6 w-6" />
                  </div>
                  <div className="ml-4">
                    <p className="text-sm font-medium text-gray-500">Receita</p>
                    <p className="text-2xl font-semibold text-gray-900">
                      R$ {stats.revenue.toLocaleString('pt-BR')}
                    </p>
                    <p className="text-xs text-gray-500 mt-1">
                      Últimos 30 dias
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-lg shadow p-6">
                <div className="flex items-center">
                  <div className="p-3 rounded-full bg-yellow-100 text-yellow-600">
                    <FileText className="h-6 w-6" />
                  </div>
                  <div className="ml-4">
                    <p className="text-sm font-medium text-gray-500">Aprovações</p>
                    <p className="text-2xl font-semibold text-gray-900">{stats.pendingApprovals}</p>
                    <p className="text-xs text-red-600 mt-1">
                      Pendentes
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Gráficos e Listagens Recentes */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="bg-white rounded-lg shadow p-6">
                <h3 className="text-lg font-medium mb-4">Atividade Recente</h3>
                <div className="space-y-4">
                  {projects.slice(0, 4).map((project) => (
                    <div key={project.id} className="flex items-start pb-4 border-b border-gray-100 last:border-0 last:pb-0">
                      <div className={`p-2 rounded-full ${
                        project.status === 'completed' ? 'bg-green-100 text-green-600' :
                        project.status === 'in-progress' ? 'bg-blue-100 text-blue-600' :
                        'bg-yellow-100 text-yellow-600'
                      }`}>
                        {project.status === 'completed' ? <CheckCircle className="h-5 w-5" /> :
                         project.status === 'in-progress' ? <BarChart2 className="h-5 w-5" /> :
                         <Calendar className="h-5 w-5" />}
                      </div>
                      <div className="ml-3">
                        <p className="text-sm font-medium">{project.title}</p>
                        <p className="text-xs text-gray-500">
                          {project.client} • {project.freelancer}
                        </p>
                        <p className="text-xs mt-1">
                          <span className="font-medium">R$ {project.budget.toLocaleString('pt-BR')}</span> • Prazo: {project.deadline}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="bg-white rounded-lg shadow p-6">
                <h3 className="text-lg font-medium mb-4">Freelancers Recentes</h3>
                <div className="space-y-4">
                  {freelancers.slice(0, 4).map((freelancer) => (
                    <div key={freelancer.id} className="flex items-center pb-4 border-b border-gray-100 last:border-0 last:pb-0">
                      <div className="flex-shrink-0 h-10 w-10 rounded-full bg-gray-300 flex items-center justify-center">
                        {freelancer.name.charAt(0)}
                      </div>
                      <div className="ml-3">
                        <p className="text-sm font-medium">{freelancer.name}</p>
                        <div className="flex items-center mt-1">
                          <Star className="h-3 w-3 text-yellow-400 fill-yellow-400" />
                          <span className="text-xs text-gray-700 ml-1">{freelancer.rating}</span>
                          <span className="text-xs text-gray-500 ml-2">{freelancer.projects} projetos</span>
                        </div>
                      </div>
                      <div className="ml-auto">
                        <span className={`px-2 py-1 text-xs rounded-full ${
                          freelancer.status === 'active' ? 'bg-green-100 text-green-800' :
                          freelancer.status === 'pending' ? 'bg-yellow-100 text-yellow-800' :
                          'bg-red-100 text-red-800'
                        }`}>
                          {freelancer.status === 'active' ? 'Ativo' :
                           freelancer.status === 'pending' ? 'Pendente' : 'Suspenso'}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        );
    }
  };

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div className={`${sidebarOpen ? 'w-64' : 'w-20'} bg-gray-800 text-white transition-all duration-300 flex flex-col`}>
        <div className="p-4 flex items-center justify-between border-b border-gray-700">
          {sidebarOpen ? (
            <h1 className="text-xl font-bold">AdminFreela</h1>
          ) : (
            <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
              <span className="font-bold">A</span>
            </div>
          )}
          <button 
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="text-gray-400 hover:text-white"
          >
            {sidebarOpen ? (
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            ) : (
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            )}
          </button>
        </div>
        
        <nav className="flex-1 p-4 space-y-2">
          <button
            onClick={() => setActiveTab('dashboard')}
            className={`w-full flex items-center p-3 rounded-md ${activeTab === 'dashboard' ? 'bg-gray-700' : 'hover:bg-gray-700'}`}
          >
            <BarChart2 className="h-5 w-5" />
            {sidebarOpen && <span className="ml-3">Dashboard</span>}
          </button>
          
          <button
            onClick={() => setActiveTab('freelancers')}
            className={`w-full flex items-center p-3 rounded-md ${activeTab === 'freelancers' ? 'bg-gray-700' : 'hover:bg-gray-700'}`}
          >
            <Users className="h-5 w-5" />
            {sidebarOpen && <span className="ml-3">Freelancers</span>}
          </button>
          
          <button
            onClick={() => setActiveTab('projects')}
            className={`w-full flex items-center p-3 rounded-md ${activeTab === 'projects' ? 'bg-gray-700' : 'hover:bg-gray-700'}`}
          >
            <Briefcase className="h-5 w-5" />
            {sidebarOpen && <span className="ml-3">Projetos</span>}
          </button>
          
          <button
            onClick={() => setActiveTab('settings')}
            className={`w-full flex items-center p-3 rounded-md ${activeTab === 'settings' ? 'bg-gray-700' : 'hover:bg-gray-700'}`}
          >
            <Settings className="h-5 w-5" />
            {sidebarOpen && <span className="ml-3">Configurações</span>}
          </button>
        </nav>
        
        <div className="p-4 border-t border-gray-700">
          <button className="w-full flex items-center p-3 rounded-md hover:bg-gray-700">
            <LogOut className="h-5 w-5" />
            {sidebarOpen && <span className="ml-3">Sair</span>}
          </button>
        </div>
      </div>
      
      {/* Conteúdo Principal */}
      <div className="flex-1 overflow-auto">
        {/* Topbar */}
        <header className="bg-white shadow-sm">
          <div className="px-6 py-4 flex items-center justify-between">
            <div className="relative w-64">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="Buscar..."
                className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            
            <div className="flex items-center space-x-4">
              <button className="p-1 rounded-full text-gray-400 hover:text-gray-500 relative">
                <span className="sr-only">Notificações</span>
                <Bell className="h-6 w-6" />
                <span className="absolute top-0 right-0 h-2 w-2 rounded-full bg-red-500"></span>
              </button>
              
              <div className="flex items-center">
                <div className="h-8 w-8 rounded-full bg-gray-300 flex items-center justify-center">
                  <span className="font-medium text-gray-700">AD</span>
                </div>
                {sidebarOpen && (
                  <div className="ml-3">
                    <p className="text-sm font-medium text-gray-700">Admin</p>
                    <p className="text-xs text-gray-500">Administrador</p>
                  </div>
                )}
                <button className="ml-2 text-gray-400 hover:text-gray-500">
                  <ChevronDown className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>
        </header>
        
        {/* Conteúdo */}
        <main className="p-6">
          {activeTab !== 'dashboard' && (
            <div className="flex justify-between items-center mb-6">
              <h1 className="text-2xl font-bold text-gray-900">
                {activeTab === 'freelancers' && 'Freelancers'}
                {activeTab === 'projects' && 'Projetos'}
                {activeTab === 'settings' && 'Configurações'}
              </h1>
              {activeTab !== 'settings' && (
                <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
                  {activeTab === 'freelancers' && 'Adicionar Freelancer'}
                  {activeTab === 'projects' && 'Criar Projeto'}
                </button>
              )}
            </div>
          )}
          
          {renderTabContent()}
        </main>
      </div>
    </div>
  );
}