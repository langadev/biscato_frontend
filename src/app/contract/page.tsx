'use client'
import React, { useState } from 'react';
import { Calendar, Clock, DollarSign, FileText, Mail, User } from 'lucide-react';

const ContratacaoFreelancer = () => {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    telefone: '',
    tipoProjeto: '',
    descricao: '',
    orcamento: '',
    prazo: '',
    dataInicio: '',
    anexos: []
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleFileChange = (e) => {
    setFormData(prev => ({
      ...prev,
      anexos: [...prev.anexos, ...e.target.files]
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Dados do formulário:', formData);
    // Aqui você adicionaria a lógica para enviar os dados
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Contratar Freelancer</h1>
          <p className="mt-2 text-lg text-gray-600">
            Preencha o formulário abaixo para iniciar seu projeto
          </p>
        </div>

        <form onSubmit={handleSubmit} className="bg-white shadow-md rounded-lg p-6 sm:p-8">
          {/* Seção de Informações Pessoais */}
          <div className="mb-8">
            <h2 className="text-xl font-semibold mb-4 flex items-center">
              <User className="mr-2" size={20} />
              Informações Pessoais
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label htmlFor="nome" className="block text-sm font-medium text-gray-700 mb-1">
                  Nome Completo *
                </label>
                <input
                  type="text"
                  id="nome"
                  name="nome"
                  value={formData.nome}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                  required
                />
              </div>
              <div>
                <label htmlFor="telefone" className="block text-sm font-medium text-gray-700 mb-1">
                  Telefone *
                </label>
                <input
                  type="tel"
                  id="telefone"
                  name="telefone"
                  value={formData.telefone}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                  required
                />
              </div>
            </div>
          </div>

          {/* Seção de Detalhes do Projeto */}
          <div className="mb-8">
            <h2 className="text-xl font-semibold mb-4 flex items-center">
              <FileText className="mr-2" size={20} />
              Detalhes do Projeto
            </h2>
            <div className="grid grid-cols-1 gap-6">
              <div>
                <label htmlFor="tipoProjeto" className="block text-sm font-medium text-gray-700 mb-1">
                  Tipo de Projeto *
                </label>
                <select
                  id="tipoProjeto"
                  name="tipoProjeto"
                  value={formData.tipoProjeto}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                  required
                >
                  <option value="">Selecione uma opção</option>
                  <option value="website">Desenvolvimento de Website</option>
                  <option value="design">Design Gráfico</option>
                  <option value="marketing">Marketing Digital</option>
                  <option value="app">Desenvolvimento de Aplicativo</option>
                  <option value="conteudo">Criação de Conteúdo</option>
                  <option value="outro">Outro</option>
                </select>
              </div>
              <div>
                <label htmlFor="descricao" className="block text-sm font-medium text-gray-700 mb-1">
                  Descrição do Projeto *
                </label>
                <textarea
                  id="descricao"
                  name="descricao"
                  value={formData.descricao}
                  onChange={handleChange}
                  rows={5}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Descreva detalhadamente seu projeto, objetivos e requisitos..."
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Anexos (opcional)
                </label>
                <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                  <div className="space-y-1 text-center">
                    <div className="flex text-sm text-gray-600">
                      <label
                        htmlFor="anexos"
                        className="relative cursor-pointer bg-white rounded-md font-medium text-blue-600 hover:text-blue-500 focus-within:outline-none"
                      >
                        <span>Carregar arquivos</span>
                        <input
                          id="anexos"
                          name="anexos"
                          type="file"
                          multiple
                          onChange={handleFileChange}
                          className="sr-only"
                        />
                      </label>
                      <p className="pl-1">ou arraste e solte</p>
                    </div>
                    <p className="text-xs text-gray-500">
                      PDF, DOC, JPG, PNG até 10MB
                    </p>
                  </div>
                </div>
                {formData.anexos.length > 0 && (
                  <div className="mt-2">
                    <p className="text-sm font-medium">Arquivos selecionados:</p>
                    <ul className="text-sm text-gray-500">
                      {formData.anexos.map((file, index) => (
                        <li key={index}>{file.name}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Seção de Orçamento e Prazo */}
          <div className="mb-8">
            <h2 className="text-xl font-semibold mb-4 flex items-center">
              <DollarSign className="mr-2" size={20} />
              Orçamento e Prazo
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label htmlFor="orcamento" className="block text-sm font-medium text-gray-700 mb-1">
                  Orçamento Estimado (MT) *
                </label>
                <div className="relative rounded-md shadow-sm">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <span className="text-gray-500">MT</span>
                  </div>
                  <input
                    type="number"
                    id="orcamento"
                    name="orcamento"
                    value={formData.orcamento}
                    onChange={handleChange}
                    className="w-full pl-12 pr-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                    placeholder="0.00"
                    required
                  />
                </div>
              </div>
              <div>
                <label htmlFor="prazo" className="block text-sm font-medium text-gray-700 mb-1">
                  Prazo Estimado *
                </label>
                <select
                  id="prazo"
                  name="prazo"
                  value={formData.prazo}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                  required
                >
                  <option value="">Selecione um prazo</option>
                  <option value="1week">1 semana</option>
                  <option value="2weeks">2 semanas</option>
                  <option value="1month">1 mês</option>
                  <option value="3months">3 meses</option>
                  <option value="6months">6 meses</option>
                  <option value="flexivel">Prazo flexível</option>
                </select>
              </div>
              <div>
                <label htmlFor="dataInicio" className="block text-sm font-medium text-gray-700 mb-1">
                  Data de Início Desejada *
                </label>
                <div className="relative">
                  <input
                    type="date"
                    id="dataInicio"
                    name="dataInicio"
                    value={formData.dataInicio}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                    required
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Termos e Condições */}
          <div className="mb-8">
            <div className="flex items-start">
              <div className="flex items-center h-5">
                <input
                  id="termos"
                  name="termos"
                  type="checkbox"
                  className="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300 rounded"
                  required
                />
              </div>
              <div className="ml-3 text-sm">
                <label htmlFor="termos" className="font-medium text-gray-700">
                  Eu concordo com os *
                </label>
                <p className="text-gray-500">
                  Termos de Serviço e Política de Privacidade do Biscato
                </p>
              </div>
            </div>
          </div>

          {/* Botão de Envio */}
          <div className="flex justify-end">
            <button
              type="submit"
              className="px-6 py-3 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Enviar Solicitação de Contratação
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContratacaoFreelancer;