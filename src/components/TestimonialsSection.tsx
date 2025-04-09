'use client'
import React from 'react';
import { Star, Quote, User } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: 'Maria Silva',
      role: 'Pequena Empresária',
      content: 'Encontrei os melhores freelancers para meu e-commerce no Biscato. O projeto foi entregue antes do prazo e com qualidade excepcional!',
      rating: 5,
      avatar: '/images/ju.PNG'
    },
    {
      id: 2,
      name: 'Carlos Mendes',
      role: 'Startup Founder',
      content: 'Como desenvolvedor, o Biscato me ajudou a conseguir projetos desafiadores. A plataforma é intuitiva e os clientes são bem selecionados.',
      rating: 4,
      avatar: '/images/alex.PNG'
    },
    {
      id: 3,
      name: 'Ana Oliveira',
      role: 'Marketing Manager',
      content: 'Contratei um designer gráfico para nossa campanha e os resultados superaram as expectativas. O processo foi simples e transparente.',
      rating: 5,
      avatar: '/images/didyon.PNG'
    }
  ];

  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">O que nossos clientes dizem</h2>
          <p className="mt-4 text-xl text-gray-600">
            Depoimentos reais de quem já usou a plataforma
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div 
              key={testimonial.id}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div className="mb-4 text-yellow-400 flex">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i}
                    className={`h-5 w-5 ${i < testimonial.rating ? 'fill-current' : ''}`}
                  />
                ))}
              </div>
              
              <Quote className="h-8 w-8 text-gray-300 mb-4" />
              
              <p className="text-gray-600 mb-6 italic">
                "{testimonial.content}"
              </p>
              
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <img
                    className="h-12 w-12 rounded-full object-cover"
                    src={testimonial.avatar}
                    alt={`${testimonial.name} avatar`}
                  />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-gray-900">{testimonial.name}</h3>
                  <p className="text-gray-500">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <button className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700">
            <User className="mr-2 h-5 w-5" />
            Deixe seu depoimento
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;