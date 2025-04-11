'use client'
import { useState } from "react"
import { GoogleLogin } from '@react-oauth/google';
import Image from "next/image";
import { Facebook, User, Mail, Lock, Phone, Briefcase, MapPin, CreditCard } from 'lucide-react';

export default function Register() {
  const [login, setLogin] = useState(false);
  const [formData, setFormData] = useState({
    // Personal Information
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
    
    // Professional Information (only for registration)
    profession: '',
    skills: '',
    experience: '',
    hourlyRate: '',
    
    // Address Information
    country: '',
    city: '',
    address: '',
    
    // Payment Information (optional)
    paymentMethod: '',
    cardNumber: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Add your form submission logic here
  };

  return (
    <div className='flex flex-col lg:flex-row w-full min-h-screen'>
      {/* Left Column - Form */}
      <div className='w-full lg:w-1/2 flex flex-col items-center justify-center p-4 sm:p-8 bg-white overflow-y-auto'>
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
          <form onSubmit={handleSubmit} className='space-y-6'>
            {!login && (
              <>
                {/* Personal Information Section */}
                <div className="space-y-4">
                  <h3 className="text-lg font-medium flex items-center">
                    <User className="mr-2" size={18} />
                    Informações Pessoais
                  </h3>
                  <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
                    <div>
                      <input 
                        type="text" 
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        placeholder='Nome' 
                        className='w-full px-4 py-3 pl-10 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent'
                        required
                      />
                      <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
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
                </div>

                {/* Professional Information Section */}
                <div className="space-y-4">
                  <h3 className="text-lg font-medium flex items-center">
                    <Briefcase className="mr-2" size={18} />
                    Informações Profissionais
                  </h3>
                  <div>
                    <input 
                      type="text" 
                      name="profession"
                      value={formData.profession}
                      onChange={handleChange}
                      placeholder='Profissão' 
                      className='w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent'
                    />
                  </div>
                  <div>
                    <input 
                      type="text" 
                      name="skills"
                      value={formData.skills}
                      onChange={handleChange}
                      placeholder='Habilidades (separadas por vírgula)' 
                      className='w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent'
                    />
                  </div>
                  <div className='grid grid-cols-2 gap-4'>
                    <div>
                      <select
                        name="experience"
                        value={formData.experience}
                        onChange={handleChange}
                        className='w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent'
                      >
                        <option value="">Anos de experiência</option>
                        <option value="0-1">0-1 anos</option>
                        <option value="1-3">1-3 anos</option>
                        <option value="3-5">3-5 anos</option>
                        <option value="5+">5+ anos</option>
                      </select>
                    </div>
                    <div className="relative">
                      <input 
                        type="text" 
                        name="hourlyRate"
                        value={formData.hourlyRate}
                        onChange={handleChange}
                        placeholder='Taxa por hora' 
                        className='w-full pl-8 px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2  focus:ring-blue-500 focus:border-transparent'
                      />
                      <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">$</span>
                    </div>
                  </div>
                </div>

                {/* Address Information Section */}
                <div className="space-y-4">
                  <h3 className="text-lg font-medium flex items-center">
                    <MapPin className="mr-2" size={18} />
                    Localização
                  </h3>
                  <div>
                    <select
                      name="country"
                      value={formData.country}
                      onChange={handleChange}
                      className='w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent'
                    >
                      <option value="">Selecione seu país</option>
                      <option value="Brazil">Brasil</option>
                      <option value="Portugal">Portugal</option>
                      <option value="Angola">Angola</option>
                      <option value="Mozambique">Moçambique</option>
                    </select>
                  </div>
                  <div className='grid grid-cols-2 gap-4'>
                    <div>
                      <input 
                        type="text" 
                        name="city"
                        value={formData.city}
                        onChange={handleChange}
                        placeholder='Cidade' 
                        className='w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none  focus:ring-2 focus:ring-blue-500 focus:border-transparent'
                      />
                    </div>
                    <div>
                      <input 
                        type="text" 
                        name="address"
                        value={formData.address}
                        onChange={handleChange}
                        placeholder='Endereço' 
                        className='w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none  focus:ring-2  focus:ring-blue-500  focus:border-transparent'
                      />
                    </div>
                  </div>
                </div>
              </>
            )}

            {/* Common Fields for Login and Register */}
            <div className="space-y-4">
              <h3 className="text-lg font-medium flex items-center">
                <Mail className="mr-2" size={18} />
                Informações de Acesso
              </h3>
              <div>
                <input 
                  type="email" 
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder='Email' 
                  className='w-full px-4 py-3 pl-10 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent'
                  required
                />
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              </div>
              
              {!login && (
                <div>
                  <input 
                    type="tel" 
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder='Telefone' 
                    className='w-full px-4 py-3 pl-10 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent'
                  />
                  <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                </div>
              )}

              <div>
                <input 
                  type="password" 
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder='Senha' 
                  className='w-full px-4 py-3 pl-10 border border-gray-300 rounded-md focus:outline-none focus:ring-2  focus:ring-blue-500  focus:border-transparent'
                  required
                  minLength={6}
                />
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              </div>

              {!login && (
                <div>
                  <input 
                    type="password" 
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    placeholder='Confirmar Senha' 
                    className='w-full px-4 py-3 pl-10 border border-gray-300 rounded-md focus:outline-none  focus:ring-2  focus:ring-blue-500  focus:border-transparent'
                    required
                    minLength={6}
                  />
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                </div>
              )}
            </div>

            {!login && (
              <div className="space-y-4">
                <h3 className="text-lg font-medium flex items-center">
                  <CreditCard className="mr-2" size={18} />
                  Informações de Pagamento (Opcional)
                </h3>
                <div>
                  <select
                    name="paymentMethod"
                    value={formData.paymentMethod}
                    onChange={handleChange}
                    className='w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none  focus:ring-2  focus:ring-blue-500  focus:border-transparent'
                  >
                    <option value="">Método de pagamento preferido</option>
                    <option value="credit_card">Cartão de Crédito</option>
                    <option value="paypal">PayPal</option>
                    <option value="bank_transfer">Transferência Bancária</option>
                  </select>
                </div>
                {formData.paymentMethod === 'credit_card' && (
                  <div>
                    <input 
                      type="text" 
                      name="cardNumber"
                      value={formData.cardNumber}
                      onChange={handleChange}
                      placeholder='Número do cartão' 
                      className='w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none  focus:ring-2  focus:ring-blue-500  focus:border-transparent'
                    />
                  </div>
                )}
              </div>
            )}

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
              {login ? 'Entrar' : 'Registrar-se'}
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