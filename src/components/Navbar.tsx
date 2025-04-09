'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, Bell, Mail, User as UserIcon } from 'lucide-react';
import Image from 'next/image';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Simulated login state
  const [notifications, setNotifications] = useState(3); // Simulated notifications count
  const [messages, setMessages] = useState(2); // Simulated messages count

  // Simulate login status (replace with your actual auth logic)
  useEffect(() => {
    // Check if user is logged in (e.g., from localStorage or auth context)
    const loggedIn = localStorage.getItem('isLoggedIn') === 'true';
    setIsLoggedIn(loggedIn);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLogout = () => {
    // Simulate logout
    localStorage.removeItem('isLoggedIn');
    setIsLoggedIn(false);
    setNotifications(0);
    setMessages(0);
  };

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

            {isLoggedIn ? (
              <div className="flex items-center space-x-4 ml-4">
                {/* Notifications */}
                <Link href="/notifications" className="relative p-2 text-gray-700 hover:text-blue-600 rounded-full hover:bg-blue-50">
                  <Bell className="h-5 w-5" />
                  {notifications > 0 && (
                    <span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-white transform translate-x-1/2 -translate-y-1/2 bg-red-500 rounded-full">
                      {notifications}
                    </span>
                  )}
                </Link>

                {/* Messages */}
                <Link href="/messages" className="relative p-2 text-gray-700 hover:text-blue-600 rounded-full hover:bg-blue-50">
                  <Mail className="h-5 w-5" />
                  {messages > 0 && (
                    <span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-white transform translate-x-1/2 -translate-y-1/2 bg-blue-500 rounded-full">
                      {messages}
                    </span>
                  )}
                </Link>

                {/* User Profile Dropdown */}
                <div className="relative group">
                  <button className="flex items-center space-x-2 focus:outline-none">
                    <div className="relative w-8 h-8 rounded-full overflow-hidden border-2 border-blue-100">
                      <Image
                        src="/images/profile.jpg"
                        alt="User profile"
                        width={32}
                        height={32}
                        className="object-cover"
                      />
                    </div>
                    <span className="text-sm font-medium text-gray-700">Alfredo</span>
                  </button>

                  {/* Dropdown Menu */}
                  <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50 hidden group-hover:block">
                    <Link 
                      href="/profile" 
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                    >
                      Meu Perfil
                    </Link>
                    <Link 
                      href="/settings" 
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                    >
                      Configurações
                    </Link>
                    <button
                      onClick={handleLogout}
                      className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                    >
                      Sair
                    </button>
                  </div>
                </div>
              </div>
            ) : (
              <Link 
                href="/login" 
                className="ml-4 px-5 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors shadow-sm hover:shadow-md font-medium"
              >
                Entrar
              </Link>
            )}
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

          {isLoggedIn ? (
            <>
              <Link 
                href="/notifications" 
                className="flex items-center py-2 px-3 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-md transition-colors font-medium"
                onClick={() => setIsOpen(false)}
              >
                <Bell className="h-5 w-5 mr-2" />
                Notificações
                {notifications > 0 && (
                  <span className="ml-auto inline-flex items-center justify-center px-2 py-0.5 text-xs font-bold leading-none text-white bg-red-500 rounded-full">
                    {notifications}
                  </span>
                )}
              </Link>
              <Link 
                href="/messages" 
                className="flex items-center py-2 px-3 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-md transition-colors font-medium"
                onClick={() => setIsOpen(false)}
              >
                <Mail className="h-5 w-5 mr-2" />
                Mensagens
                {messages > 0 && (
                  <span className="ml-auto inline-flex items-center justify-center px-2 py-0.5 text-xs font-bold leading-none text-white bg-blue-500 rounded-full">
                    {messages}
                  </span>
                )}
              </Link>
              <Link 
                href="/profile" 
                className="flex items-center py-2 px-3 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-md transition-colors font-medium"
                onClick={() => setIsOpen(false)}
              >
                <UserIcon className="h-5 w-5 mr-2" />
                Meu Perfil
              </Link>
              <button
                onClick={handleLogout}
                className="w-full text-left py-2 px-3 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-md transition-colors font-medium"
              >
                Sair
              </button>
            </>
          ) : (
            <Link 
              href="/login" 
              className="block py-2 px-3 text-center bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium mt-2"
              onClick={() => setIsOpen(false)}
            >
              Entrar
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
}