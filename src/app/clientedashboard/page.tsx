import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Search, Clock, MessageSquare, Star } from 'lucide-react'; // Substituí History por Clock (equivalente mais comum)

export default function DashboardCliente() {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      {/* Topbar */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Cliente</h1>
        <div className="flex items-center gap-4">
          <Search className="w-6 h-6 text-gray-600" />
        </div>
      </div>

      {/* Grid de Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <Card>
          <CardContent className="p-4">
            <p className="text-sm text-gray-500">Serviços buscados</p>
            <h2 className="text-xl font-semibold">32</h2>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <p className="text-sm text-gray-500">Profissionais contatados</p>
            <h2 className="text-xl font-semibold">5</h2>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <p className="text-sm text-gray-500">Avaliações feitas</p>
            <h2 className="text-xl font-semibold">★ 4</h2>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <p className="text-sm text-gray-500">Mensagens trocadas</p>
            <h2 className="text-xl font-semibold">12</h2>
          </CardContent>
        </Card>
      </div>

      {/* Ações rápidas */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-lg font-semibold flex items-center gap-2">
                <Search className="w-5 h-5" /> Procurar serviço
              </h3>
              <Button variant="outline" size="sm">Buscar</Button>
            </div>
            <p className="text-sm text-gray-600">Encontre profissionais por área, nome ou avaliação.</p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-lg font-semibold flex items-center gap-2">
                <Clock className="w-5 h-5" /> Histórico de contatos
              </h3>
              <Button variant="outline" size="sm">Ver histórico</Button>
            </div>
            <p className="text-sm text-gray-600">Visualize os profissionais que você já contatou.</p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-lg font-semibold flex items-center gap-2">
                <MessageSquare className="w-5 h-5" /> Mensagens recentes
              </h3>
              <Button variant="outline" size="sm">Ver mensagens</Button>
            </div>
            <p className="text-sm text-gray-600">Acompanhe suas conversas com os profissionais.</p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-lg font-semibold flex items-center gap-2">
                <Star className="w-5 h-5" /> Avaliações feitas
              </h3>
              <Button variant="outline" size="sm">Ver avaliações</Button>
            </div>
            <p className="text-sm text-gray-600">Consulte as avaliações que você deixou para os serviços.</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}