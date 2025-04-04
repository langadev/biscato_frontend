'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <Link href="/" className="text-2xl font-bold text-blue-600">
            Biscato
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6">
            <Link href="/" className="text-gray-700 hover:text-blue-600">Início</Link>
            <Link href="/freelancers" className="text-gray-700 hover:text-blue-600">Freelancers</Link>
            <Link href="/services" className="text-gray-700 hover:text-blue-600">Serviços</Link>
            <Link href="/contact" className="text-gray-700 hover:text-blue-600">Contato</Link>
          </div>

         
          <div className="hidden md:flex">
            <Link href="/register" className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
              Entrar
            </Link>
          </div>

        
          <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

   
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="px-4 py-2 flex flex-col space-y-2">
            <Link href="/" className="text-gray-700 hover:text-blue-600" onClick={() => setIsOpen(false)}>Início</Link>
            <Link href="/freelancers" className="text-gray-700 hover:text-blue-600" onClick={() => setIsOpen(false)}>Freelancers</Link>
            <Link href="/services" className="text-gray-700 hover:text-blue-600" onClick={() => setIsOpen(false)}>Serviços</Link>
            <Link href="/contact" className="text-gray-700 hover:text-blue-600" onClick={() => setIsOpen(false)}>Contato</Link>
            <Link href="/login" className="px-4 py-2 bg-blue-600 text-white rounded-lg text-center hover:bg-blue-700" onClick={() => setIsOpen(false)}>
              Entrar
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}