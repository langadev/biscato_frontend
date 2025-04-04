import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-12 pb-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          
          {/* About Section */}
          <div className="lg:col-span-2">
            <h3 className="text-xl font-bold mb-4">Biscato</h3>
            <p className="text-gray-300 mb-4">
              Conectando profissionais talentosos com clientes que precisam de serviços de qualidade. 
              Nossa plataforma facilita a colaboração e o crescimento para todos.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-white">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-300 hover:text-white">
                <Twitter className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-300 hover:text-white">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-300 hover:text-white">
                <Linkedin className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-300 hover:text-white">
                <Youtube className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Links Rápidos</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-white">Início</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">Freelancers</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">Serviços</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">Como funciona</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">Preços</a></li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Categorias</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-white">Desenvolvimento Web</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">Design Gráfico</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">Marketing Digital</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">Redação</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">Tradução</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contactos</h4>
            <ul className="space-y-2 text-gray-300">
              <li className="flex items-start">
                <svg className="h-5 w-5 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                +258 84 53 50611
              </li>
              <li className="flex items-start">
                <svg className="h-5 w-5 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                info@biscato.co.mz
              </li>
              <li className="flex items-start">
                <svg className="h-5 w-5 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                Av. 25 de Setembro, Maputo, Moçambique
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} Biscato. Todos os direitos reservados.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-white text-sm">Termos de Serviço</a>
              <a href="#" className="text-gray-400 hover:text-white text-sm">Política de Privacidade</a>
              <a href="#" className="text-gray-400 hover:text-white text-sm">Cookies</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;