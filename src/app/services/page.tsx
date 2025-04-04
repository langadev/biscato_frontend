import React from 'react';
import { Code, Paintbrush, Smartphone, Globe, BarChart2, Camera, Music, BookOpen, Dumbbell, ShoppingCart, HeartPulse, Leaf } from 'lucide-react';

const ServiceCategories = () => {
  const categories = [
    { name: 'Desenvolvimento Web', icon: <Code className="w-8 h-8" />, count: 1245 },
    { name: 'Design Gráfico', icon: <Paintbrush className="w-8 h-8" />, count: 892 },
    { name: 'Mobile Development', icon: <Smartphone className="w-8 h-8" />, count: 756 },
    { name: 'Marketing Digital', icon: <Globe className="w-8 h-8" />, count: 1532 },
    { name: 'Análise de Dados', icon: <BarChart2 className="w-8 h-8" />, count: 621 },
    { name: 'Fotografia', icon: <Camera className="w-8 h-8" />, count: 487 },
    { name: 'Produção Musical', icon: <Music className="w-8 h-8" />, count: 342 },
    { name: 'Redação', icon: <BookOpen className="w-8 h-8" />, count: 1103 },
    { name: 'Personal Trainer', icon: <Dumbbell className="w-8 h-8" />, count: 278 },
    { name: 'E-commerce', icon: <ShoppingCart className="w-8 h-8" />, count: 934 },
    { name: 'Saúde & Bem-estar', icon: <HeartPulse className="w-8 h-8" />, count: 415 },
    { name: 'Sustentabilidade', icon: <Leaf className="w-8 h-8" />, count: 193 },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl">Nossas Categorias de Serviços</h1>
          <p className="mt-4 text-xl text-gray-600">
            Encontre os melhores profissionais em diversas áreas
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              <div className="p-6">
                <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-blue-100 text-blue-600">
                  {category.icon}
                </div>
                <h3 className="text-lg font-medium text-center text-gray-900 mb-2">{category.name}</h3>
                <p className="text-sm text-gray-500 text-center">{category.count} profissionais disponíveis</p>
              </div>
              <div className="px-6 py-4 bg-gray-50 border-t border-gray-100">
                <a
                  href="#"
                  className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700"
                >
                  Ver profissionais
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <h3 className="text-lg font-medium text-gray-900">Não encontrou o que procura?</h3>
          <p className="mt-2 text-gray-600">
            Temos muitas outras subcategorias disponíveis
          </p>
          <div className="mt-6">
            <a
              href="#"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-gray-800 hover:bg-gray-900"
            >
              Explorar todas categorias
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCategories;