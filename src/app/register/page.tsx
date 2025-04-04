'use client'
import { useState } from "react"
import { GoogleLogin } from '@react-oauth/google';
import Image from "next/image";
import { Facebook } from 'lucide-react';

export default function Register() {
  const [login, setLogin] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
  };

  return (
    <div className='flex flex-col lg:flex-row w-full min-h-screen'>
      {/* Left Column - Form */}
      <div className='w-full lg:w-1/2 flex flex-col items-center justify-center p-8 bg-white'>
        <div className='w-full max-w-md'>
          <h1 className='text-3xl font-bold text-blue-600 text-center mb-2'>BISCATO</h1>
          <h2 className='text-2xl font-semibold text-gray-800 text-center mb-8'>
            {login ? 'Entrar na sua conta' : 'Criar nova conta'}
          </h2>

          {/* Social Login Buttons */}
          <div className='flex flex-col gap-4 mb-6'>
            <GoogleLogin
              onSuccess={credentialResponse => {
                console.log(credentialResponse);
              }}
              onError={() => {
                console.log('Login Failed');
              }}
              useOneTap
              theme="filled_blue"
              size="large"
              text={login ? "signin_with" : "signup_with"}
              shape="rectangular"
              width="350"
            />
            
            <button className='flex items-center justify-center gap-2 border border-gray-300 rounded-md py-3 px-4 hover:bg-gray-50 transition-colors'>
              <Facebook className="text-blue-600" size={20} />
              <span>Continuar com Facebook</span>
            </button>
          </div>

          {/* Divider */}
          <div className='flex items-center my-6'>
            <hr className='flex-grow border-gray-300'/>
            <span className='px-4 text-gray-500'>ou</span>
            <hr className='flex-grow border-gray-300'/>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className='space-y-4'>
            {!login && (
              <div className='grid grid-cols-2 gap-4'>
                <div>
                  <input 
                    type="text" 
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    placeholder='Nome' 
                    className='w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent'
                    required
                  />
                </div>
                <div>
                  <input 
                    type="text" 
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    placeholder='Sobrenome' 
                    className='w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent'
                    required
                  />
                </div>
              </div>
            )}

            <div>
              <input 
                type="email" 
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder='Email' 
                className='w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent'
                required
              />
            </div>

            <div>
              <input 
                type="password" 
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder='Senha' 
                className='w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent'
                required
                minLength={6}
              />
            </div>

            {!login && (
              <div className='flex items-start'>
                <input 
                  type="checkbox" 
                  id="terms"
                  className='mt-1 mr-2'
                  required
                />
                <label htmlFor="terms" className='text-sm text-gray-600'>
                  Eu concordo com os <a href="#" className='text-blue-600 hover:underline'>Termos de Serviço</a> e com a <a href="#" className='text-blue-600 hover:underline'>Política de Privacidade</a> do Biscato
                </label>
              </div>
            )}

            <button 
              type="submit"
              className='w-full py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-md transition-colors'
            >
              {login ? 'Entrar' : 'Junte-se ao Biscato'}
            </button>
          </form>

          {/* Switch between Login/Register */}
          <div className='mt-6 text-center text-sm text-gray-600'>
            {login ? 'Não tem uma conta? ' : 'Já possui uma conta? '}
            <button 
              type="button"
              onClick={() => setLogin(!login)}
              className='text-blue-600 font-medium hover:underline focus:outline-none'
            >
              {login ? 'Registre-se' : 'Faça login'}
            </button>
          </div>
        </div>
      </div>

      {/* Right Column - Image */}
      <div className="hidden lg:block relative w-full lg:w-1/2">
        <Image 
          src="/images/left3.jpeg"
          alt="Decorative background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/20"></div>
      </div>
    </div>
  )
}