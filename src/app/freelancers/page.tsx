"use client"
import React, { useState } from 'react';
import { Search, Filter, Star, MapPin, Briefcase, Clock } from 'lucide-react';

const FreelancersPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filters, setFilters] = useState({
    category: '',
    rating: '',
    priceRange: '',
    availability: ''
  });

  const freelancers = [
    {
      id: 1,
      name: 'Alfredo Langa',
      title: 'Full Stack Developer',
      rating: 4.9,
      reviews: 128,
      rate: '1000 MT/hora',
      skills: ['React', 'Node.js', 'MongoDB'],
      location: 'Maputo, Moçambique',
      available: 'Disponível agora',
      image: '/images/profile.jpg'
    },
    {
      id: 2,
      name: 'Julieta Macie',
      title: 'UI/UX Designer',
      rating: 4.8,
      reviews: 95,
      rate: '850 MT/hora',
      skills: ['Figma', 'Adobe XD', 'Prototyping'],
      location: 'Beira, Moçambique',
      available: 'Disponível em 2 dias',
      image: '/images/ju.PNG'
    },
    {
      id: 3,
      name: 'Alexandre Jose',
      title: 'Marketing Digital',
      rating: 4.7,
      reviews: 76,
      rate: '1200 MT/hora',
      skills: ['SEO', 'Google Ads', 'Social Media'],
      location: 'Nampula, Moçambique',
      available: 'Disponível agora',
      image: '/images/alex.PNG'
    },
    {
      id: 4,
      name: 'Didyon Mondlane',
      title: 'Fotógrafa Profissional',
      rating: 4.9,
      reviews: 112,
      rate: '1500 MT/hora',
      skills: ['Retratos', 'Edição', 'Eventos'],
      location: 'Maputo, Moçambique',
      available: 'Disponível em 1 semana',
      image: '/images/didyon.PNG'
    },
    {
      id: 5,
      name: 'Pedro Costa',
      title: 'Escritor de Conteúdo',
      rating: 4.6,
      reviews: 64,
      rate: '700 MT/hora',
      skills: ['Blog Posts', 'Copywriting', 'SEO'],
      location: 'Quelimane, Moçambique',
      available: 'Disponível agora',
      image: '/images/freelancer5.jpg'
    },
    {
      id: 6,
      name: 'Luisa Fernandes',
      title: 'Tradutora',
      rating: 4.8,
      reviews: 87,
      rate: '900 MT/hora',
      skills: ['Inglês-Português', 'Francês', 'Espanhol'],
      location: 'Maputo, Moçambique',
      available: 'Disponível em 3 dias',
      image: '/images/freelancer6.jpg'
    }
  ];

  const filteredFreelancers = freelancers.filter(freelancer => {
    const matchesSearch = freelancer.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         freelancer.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         freelancer.skills.some(skill => skill.toLowerCase().includes(searchTerm.toLowerCase()));
    
    const matchesCategory = !filters.category || freelancer.title.includes(filters.category);
    const matchesRating = !filters.rating || freelancer.rating >= parseFloat(filters.rating);
    
    return matchesSearch && matchesCategory && matchesRating;
  });

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Encontre Freelancers Qualificados</h1>
          <p className="mt-2 text-lg text-gray-600">
            Conecte-se com os melhores profissionais para o seu projeto
          </p>
        </div>

        {/* Search and Filters */}
        <div className="mb-8 bg-white p-6 rounded-lg shadow-sm">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-grow">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="Pesquisar por habilidades, nomes ou títulos..."
                className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <button className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500">
              <Filter className="mr-2 h-4 w-4" />
              Filtros
            </button>
          </div>

          {/* Expanded Filters */}
          <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <select
              className="block w-full pl-3 pr-10 py-2 text-base border border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md"
              value={filters.category}
              onChange={(e) => setFilters({...filters, category: e.target.value})}
            >
              <option value="">Todas Categorias</option>
              <option value="Developer">Desenvolvimento</option>
              <option value="Design">Design</option>
              <option value="Marketing">Marketing</option>
              <option value="Writer">Escrita</option>
            </select>

            <select
              className="block w-full pl-3 pr-10 py-2 text-base border border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md"
              value={filters.rating}
              onChange={(e) => setFilters({...filters, rating: e.target.value})}
            >
              <option value="">Qualquer Classificação</option>
              <option value="4.5">4.5+ estrelas</option>
              <option value="4.0">4.0+ estrelas</option>
              <option value="3.5">3.5+ estrelas</option>
            </select>

            <select
              className="block w-full pl-3 pr-10 py-2 text-base border border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md"
              value={filters.priceRange}
              onChange={(e) => setFilters({...filters, priceRange: e.target.value})}
            >
              <option value="">Qualquer Preço</option>
              <option value="500-1000">500-1000 MT/hora</option>
              <option value="1000-1500">1000-1500 MT/hora</option>
              <option value="1500+">1500+ MT/hora</option>
            </select>

            <select
              className="block w-full pl-3 pr-10 py-2 text-base border border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md"
              value={filters.availability}
              onChange={(e) => setFilters({...filters, availability: e.target.value})}
            >
              <option value="">Qualquer Disponibilidade</option>
              <option value="now">Disponível agora</option>
              <option value="week">Disponível esta semana</option>
            </select>
          </div>
        </div>

        {/* Results Count */}
        <div className="mb-4 flex justify-between items-center">
          <p className="text-sm text-gray-600">
            Mostrando <span className="font-medium">{filteredFreelancers.length}</span> resultados
          </p>
          <div>
            <select
              className="block w-full pl-3 pr-10 py-2 text-base border border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md"
            >
              <option>Ordenar por: Relevância</option>
              <option>Ordenar por: Classificação</option>
              <option>Ordenar por: Preço (mais baixo)</option>
              <option>Ordenar por: Preço (mais alto)</option>
            </select>
          </div>
        </div>

        {/* Freelancers Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredFreelancers.map((freelancer) => (
            <div key={freelancer.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div className="p-6">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <img
                      className="h-16 w-16 rounded-full object-cover"
                      src={freelancer.image}
                      alt={freelancer.name}
                    />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-gray-900">{freelancer.name}</h3>
                    <p className="text-sm text-gray-500">{freelancer.title}</p>
                    <div className="flex items-center mt-1">
                      <Star className="h-4 w-4 text-yellow-400 fill-current" />
                      <span className="ml-1 text-sm text-gray-600">
                        {freelancer.rating} <span className="text-gray-400">({freelancer.reviews} reviews)</span>
                      </span>
                    </div>
                  </div>
                </div>

                <div className="mt-4">
                  <div className="flex items-center text-sm text-gray-500">
                    <MapPin className="flex-shrink-0 mr-1.5 h-4 w-4 text-gray-400" />
                    {freelancer.location}
                  </div>
                  <div className="mt-1 flex items-center text-sm text-gray-500">
                    <Clock className="flex-shrink-0 mr-1.5 h-4 w-4 text-gray-400" />
                    {freelancer.available}
                  </div>
                  <div className="mt-1 flex items-center text-sm text-gray-500">
                    <Briefcase className="flex-shrink-0 mr-1.5 h-4 w-4 text-gray-400" />
                    {freelancer.rate}
                  </div>
                </div>

                <div className="mt-4">
                  <div className="flex flex-wrap gap-2">
                    {freelancer.skills.map((skill, index) => (
                      <span
                        key={index}
                        className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 px-6 py-4 flex justify-between">
                <button className="text-sm font-medium text-blue-600 hover:text-blue-500">
                  Ver perfil completo
                </button>
                <button className="inline-flex items-center px-3 py-1.5 border border-transparent text-xs font-medium rounded shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                  Contratar
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="mt-8 flex justify-center">
          <nav className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px" aria-label="Pagination">
            <a
              href="#"
              className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
            >
              <span className="sr-only">Anterior</span>
              &larr;
            </a>
            <a
              href="#"
              aria-current="page"
              className="z-10 bg-blue-50 border-blue-500 text-blue-600 relative inline-flex items-center px-4 py-2 border text-sm font-medium"
            >
              1
            </a>
            <a
              href="#"
              className="bg-white border-gray-300 text-gray-500 hover:bg-gray-50 relative inline-flex items-center px-4 py-2 border text-sm font-medium"
            >
              2
            </a>
            <a
              href="#"
              className="bg-white border-gray-300 text-gray-500 hover:bg-gray-50 relative inline-flex items-center px-4 py-2 border text-sm font-medium"
            >
              3
            </a>
            <a
              href="#"
              className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
            >
              <span className="sr-only">Próximo</span>
              &rarr;
            </a>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default FreelancersPage;