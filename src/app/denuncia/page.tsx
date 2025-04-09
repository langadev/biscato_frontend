'use client'
import React, { useState } from 'react';
import { AlertTriangle, User, FileText, Shield } from 'lucide-react';

const DenunciaPage = () => {
  const [formData, setFormData] = useState({
    tipoDenuncia: '',
    usuarioDenunciado: '',
    descricao: '',
    anexos: [] as File[],
    contato: '',
    anonima: false
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;
    
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFormData(prev => ({
        ...prev,
        anexos: [...prev.anexos, ...Array.from(e.target.files!)]
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      console.log('Denúncia enviada:', formData);
      setSubmitSuccess(true);
      setFormData({
        tipoDenuncia: '',
        usuarioDenunciado: '',
        descricao: '',
        anexos: [],
        contato: '',
        anonima: false
      });
    } catch (error) {
      console.error('Erro ao enviar denúncia:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const removeAnexo = (index: number) => {
    setFormData(prev => ({
      ...prev,
      anexos: prev.anexos.filter((_, i) => i !== index)
    }));
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-8">
          <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-red-100">
            <AlertTriangle className="h-6 w-6 text-red-600" />
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mt-4">Enviar Denúncia</h1>
          <p className="mt-2 text-lg text-gray-600">
            Reporte qualquer comportamento inadequado ou violação dos nossos termos
          </p>
        </div>

        {submitSuccess ? (
          <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-8">
            <div className="flex">
              <div className="flex-shrink-0">
                <svg className="h-5 w-5 text-green-400" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="ml-3">
                <h3 className="text-sm font-medium text-green-800">
                  Denúncia enviada com sucesso!
                </h3>
                <p className="text-sm text-green-700 mt-2">
                  Nossa equipe irá analisar sua denúncia e tomar as medidas apropriadas.
                </p>
              </div>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="bg-white shadow-md rounded-lg p-6 sm:p-8">
            <div className="space-y-6">
              {/* Tipo de Denúncia */}
              <div>
                <label htmlFor="tipoDenuncia" className="block text-sm font-medium text-gray-700 mb-1">
                  Tipo de Denúncia *
                </label>
                <select
                  id="tipoDenuncia"
                  name="tipoDenuncia"
                  value={formData.tipoDenuncia}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-red-500 focus:border-red-500"
                  required
                >
                  <option value="">Selecione o tipo de denúncia</option>
                  <option value="comportamento">Comportamento Inadequado</option>
                  <option value="conteudo">Conteúdo Inapropriado</option>
                  <option value="fraude">Fraude ou Golpe</option>
                  <option value="plagio">Plágio</option>
                  <option value="outro">Outro</option>
                </select>
              </div>

              {/* Usuário Denunciado */}
              <div>
                <label htmlFor="usuarioDenunciado" className="block text-sm font-medium text-gray-700 mb-1 flex items-center">
                  <User className="mr-2" size={16} />
                  Usuário/Perfil Denunciado *
                </label>
                <input
                  type="text"
                  id="usuarioDenunciado"
                  name="usuarioDenunciado"
                  value={formData.usuarioDenunciado}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-red-500 focus:border-red-500"
                  placeholder="Nome de usuário, ID ou link do perfil"
                  required
                />
              </div>

              {/* Descrição */}
              <div>
                <label htmlFor="descricao" className="block text-sm font-medium text-gray-700 mb-1 flex items-center">
                  <FileText className="mr-2" size={16} />
                  Descrição da Denúncia *
                </label>
                <textarea
                  id="descricao"
                  name="descricao"
                  rows={5}
                  value={formData.descricao}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-red-500 focus:border-red-500"
                  placeholder="Descreva em detalhes o motivo da denúncia. Inclua datas, horários e qualquer informação relevante."
                  required
                />
              </div>

              {/* Anexos */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Anexos (opcional)
                </label>
                <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                  <div className="space-y-1 text-center">
                    <div className="flex text-sm text-gray-600">
                      <label
                        htmlFor="anexos"
                        className="relative cursor-pointer bg-white rounded-md font-medium text-red-600 hover:text-red-500 focus-within:outline-none"
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
                      Imagens, vídeos, documentos (até 5 arquivos, 10MB cada)
                    </p>
                  </div>
                </div>
                {formData.anexos.length > 0 && (
                  <div className="mt-2">
                    <p className="text-sm font-medium">Arquivos anexados:</p>
                    <ul className="text-sm text-gray-500 space-y-1">
                      {formData.anexos.map((file, index) => (
                        <li key={index} className="flex justify-between items-center">
                          <span>{file.name}</span>
                          <button
                            type="button"
                            onClick={() => removeAnexo(index)}
                            className="text-red-600 hover:text-red-800"
                          >
                            Remover
                          </button>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              {/* Contato */}
              <div>
                <label htmlFor="contato" className="block text-sm font-medium text-gray-700 mb-1">
                  Como podemos entrar em contato com você?
                </label>
                <input
                  type="text"
                  id="contato"
                  name="contato"
                  value={formData.contato}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-red-500 focus:border-red-500"
                  placeholder="Email ou telefone (opcional)"
                  disabled={formData.anonima}
                />
              </div>

              {/* Denúncia Anônima */}
              <div className="flex items-start">
                <div className="flex items-center h-5">
                  <input
                    id="anonima"
                    name="anonima"
                    type="checkbox"
                    checked={formData.anonima}
                    onChange={handleChange}
                    className="focus:ring-red-500 h-4 w-4 text-red-600 border-gray-300 rounded"
                  />
                </div>
                <div className="ml-3 text-sm">
                  <label htmlFor="anonima" className="font-medium text-gray-700">
                    Enviar denúncia anonimamente
                  </label>
                  <p className="text-gray-500">
                    Sua identidade não será revelada ao usuário denunciado
                  </p>
                </div>
              </div>

              {/* Termos */}
              <div className="border-t border-gray-200 pt-4">
                <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <input
                      id="termos"
                      name="termos"
                      type="checkbox"
                      className="focus:ring-red-500 h-4 w-4 text-red-600 border-gray-300 rounded"
                      required
                    />
                  </div>
                  <div className="ml-3 text-sm">
                    <label htmlFor="termos" className="font-medium text-gray-700">
                      Declaro que as informações fornecidas são verdadeiras *
                    </label>
                    <p className="text-gray-500">
                      Denúncias falsas podem resultar em penalidades para minha conta
                    </p>
                  </div>
                </div>
              </div>

              {/* Botão de Envio */}
              <div className="flex justify-end pt-4">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 disabled:opacity-75 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Enviando...' : 'Enviar Denúncia'}
                </button>
              </div>
            </div>
          </form>
        )}

        {/* Informações Adicionais */}
        <div className="mt-8 bg-blue-50 border border-blue-200 rounded-lg p-6">
          <h3 className="text-lg font-medium text-blue-800 flex items-center">
            <Shield className="mr-2" size={20} />
            Sobre o Processo de Denúncias
          </h3>
          <div className="mt-4 space-y-3 text-sm text-blue-700">
            <p>
              • Todas as denúncias são analisadas por nossa equipe de moderação
            </p>
            <p>
              • Levaremos as medidas apropriadas de acordo com nossos Termos de Serviço
            </p>
            <p>
              • Podemos entrar em contato para solicitar informações adicionais
            </p>
            <p>
              • O tempo de resposta pode variar dependendo da complexidade do caso
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DenunciaPage;