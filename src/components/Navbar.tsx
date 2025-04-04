'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-lg py-2' : 'bg-white/95 backdrop-blur-sm py-3 shadow-sm'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-14">
          {/* Logo */}
          <Link 
            href="/" 
            className="text-2xl font-bold text-blue-600 hover:text-blue-700 transition-colors"
            onClick={() => setIsOpen(false)}
          >
            Biscato
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link 
              href="/" 
              className="text-gray-700 hover:text-blue-600 font-medium transition-colors relative group"
            >
              Início
              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-blue-600 transition-all group-hover:w-full"></span>
            </Link>
            <Link 
              href="/freelancers" 
              className="text-gray-700 hover:text-blue-600 font-medium transition-colors relative group"
            >
              Freelancers
              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-blue-600 transition-all group-hover:w-full"></span>
            </Link>
            <Link 
              href="/services" 
              className="text-gray-700 hover:text-blue-600 font-medium transition-colors relative group"
            >
              Serviços
              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-blue-600 transition-all group-hover:w-full"></span>
            </Link>
            <Link 
              href="/contact" 
              className="text-gray-700 hover:text-blue-600 font-medium transition-colors relative group"
            >
              Contato
              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-blue-600 transition-all group-hover:w-full"></span>
            </Link>

            <Link 
              href="/register" 
              className="ml-4 px-5 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors shadow-sm hover:shadow-md font-medium"
            >
              Entrar
            </Link>
          </div>

          {/* Mobile menu button */}
          <button 
            className="md:hidden p-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-gray-100 focus:outline-none transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden bg-white transition-all duration-300 ease-in-out overflow-hidden ${isOpen ? 'max-h-96 shadow-inner' : 'max-h-0'}`}>
        <div className="px-4 pt-2 pb-4 space-y-3">
          <Link 
            href="/" 
            className="block py-2 px-3 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-md transition-colors font-medium"
            onClick={() => setIsOpen(false)}
          >
            Início
          </Link>
          <Link 
            href="/freelancers" 
            className="block py-2 px-3 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-md transition-colors font-medium"
            onClick={() => setIsOpen(false)}
          >
            Freelancers
          </Link>
          <Link 
            href="/services" 
            className="block py-2 px-3 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-md transition-colors font-medium"
            onClick={() => setIsOpen(false)}
          >
            Serviços
          </Link>
          <Link 
            href="/contact" 
            className="block py-2 px-3 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-md transition-colors font-medium"
            onClick={() => setIsOpen(false)}
          >
            Contato
          </Link>
          <Link 
            href="/login" 
            className="block py-2 px-3 text-center bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium mt-2"
            onClick={() => setIsOpen(false)}
          >
            Entrar
          </Link>
        </div>
      </div>
    </nav>
  );
}