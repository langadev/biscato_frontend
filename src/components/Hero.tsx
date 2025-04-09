'use client'
import React from 'react';
import dynamic from 'next/dynamic';
import {  Search } from 'lucide-react';
import Link from 'next/link';

// Dynamically import the video component to disable SSR
const BackgroundVideo = dynamic(
  () => import('@/components/BackgroundVideo'),
  { ssr: false }
);

const categories = [
  { name: 'Design Gráfico', icon: '🎨' },
  { name: 'Desenvolvimento Web', icon: '💻' },
  { name: 'Marketing Digital', icon: '📈' },
  { name: 'Redação', icon: '✍️' },
  { name: 'Tradução', icon: '🌐' },
  { name: 'Fotografia', icon: '📷' },
];

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden ">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <BackgroundVideo />
      </div>
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/30 z-1"></div>
      
      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight mb-6 drop-shadow-lg">
            Encontre os melhores freelancers <br className="hidden sm:block" /> 
            ou ofereça seus serviços
          </h1>
          
          <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto drop-shadow-md">
            Conecte-se com profissionais próximos a você e realize seus projetos com facilidade.
          </p>

          {/* Search Input */}
          <div className="relative max-w-2xl mx-auto mb-8">
            <div className="flex items-center bg-white/90 backdrop-blur-sm rounded-full px-4 py-3 shadow-lg">
              <Search className="text-gray-500 mr-2" size={20} />
              <input
                type="text"
                placeholder="Pesquise por serviços, habilidades ou freelancers..."
                className="w-full bg-transparent border-none focus:outline-none text-gray-700 placeholder-gray-500"
              />
              <button className="ml-2 px-4 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors">
                Buscar
              </button>
            </div>
          </div>

          {/* Categories */}
          <div className="flex flex-wrap justify-center gap-3 max-w-3xl mx-auto">
            {categories.map((category, index) => (
              <button
                key={index}
                className="flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm text-white rounded-full hover:bg-white/30 transition-colors border border-white/20"
              >
                <span>{category.icon}</span>
                <span>{category.name}</span>
              </button>
            ))}
          </div>
          
          {/* Buttons */}
          <div className="flex flex-col sm:flex-row justify-center gap-4 mt-10">
            <Link 
              href="/login" 
              className="inline-flex items-center justify-center px-8 py-3 md:px-10 md:py-4 
                        text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 
                        transition-colors duration-200 shadow-lg hover:shadow-xl hover:scale-105"
            >
              Sou Freelancer
            </Link>
            
            <Link 
              href="/contract" 
              className="inline-flex items-center justify-center px-8 py-3 md:px-10 md:py-4 
                        text-base font-medium rounded-md text-blue-600 bg-white hover:bg-blue-50 
                        transition-colors duration-200 shadow-lg hover:shadow-xl hover:scale-105"
            >
              Preciso de um Serviço
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}