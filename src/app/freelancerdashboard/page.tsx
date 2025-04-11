import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Briefcase, MessageSquare, Star, Users, Settings, FileText } from 'lucide-react';

export default function DashboardFreelancer() {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      {/* Topbar */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Freelancer</h1>
      </div>

      {/* Grid de Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <Card>
          <CardContent className="p-4">
            <p className="text-sm text-gray-500">Serviços publicados</p>
            <h2 className="text-xl font-semibold">10</h2>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <p className="text-sm text-gray-500">Solicitações recebidas</p>
            <h2 className="text-xl font-semibold">7</h2>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <p className="text-sm text-gray-500">Ganhos acumulados</p>
            <h2 className="text-xl font-semibold">2.500 Mt</h2>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <p className="text-sm text-gray-500">Avaliação média</p>
            <h2 className="text-xl font-semibold">★ 4.8</h2>
          </CardContent>
        </Card>
      </div>

      {/* Ações rápidas */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-lg font-semibold flex items-center gap-2">
                <Briefcase className="w-5 h-5" /> Gerir serviços
              </h3>
              <Button variant="outline" size="sm">Ver serviços</Button>
            </div>
            <p className="text-sm text-gray-600">Edite, atualize ou remova os serviços que você oferece.</p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-lg font-semibold flex items-center gap-2">
                <Users className="w-5 h-5" /> Clientes interessados
              </h3>
              <Button variant="outline" size="sm">Ver clientes</Button>
            </div>
            <p className="text-sm text-gray-600">Veja quem demonstrou interesse nos seus serviços.</p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-lg font-semibold flex items-center gap-2">
                <MessageSquare className="w-5 h-5" /> Mensagens
              </h3>
              <Button variant="outline" size="sm">Ver mensagens</Button>
            </div>
            <p className="text-sm text-gray-600">Converse com seus clientes em tempo real.</p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-lg font-semibold flex items-center gap-2">
                <Star className="w-5 h-5" /> Minhas avaliações
              </h3>
              <Button variant="outline" size="sm">Ver avaliações</Button>
            </div>
            <p className="text-sm text-gray-600">Leia os feedbacks deixados pelos seus clientes.</p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-lg font-semibold flex items-center gap-2">
                <Settings className="w-5 h-5" /> Gerir perfil
              </h3>
              <Button variant="outline" size="sm">Editar perfil</Button>
            </div>
            <p className="text-sm text-gray-600">Atualize suas informações pessoais e profissionais.</p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-lg font-semibold flex items-center gap-2">
                <FileText className="w-5 h-5" /> Minhas postagens
              </h3>
              <Button variant="outline" size="sm">Ver postagens</Button>
            </div>
            <p className="text-sm text-gray-600">Gerencie as postagens feitas na plataforma.</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}