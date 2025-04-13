'use client'
import { useState } from 'react';
import { Star, Upload, CheckCircle, XCircle } from 'lucide-react';

type RatingForm = {
  stars: number;
  hover: number;
  comment: string;
  attachments: File[];
  wouldHireAgain: boolean;
};

export default function AvaliarFreelancer() {
  const [form, setForm] = useState<RatingForm>({
    stars: 0,
    hover: 0,
    comment: '',
    attachments: [],
    wouldHireAgain: false
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const files = Array.from(e.target.files);
      
      // Validação de arquivos (máx 5MB cada)
      const invalidFiles = files.filter(file => file.size > 5 * 1024 * 1024);
      if (invalidFiles.length > 0) {
        setError(`Alguns arquivos excedem 5MB: ${invalidFiles.map(f => f.name).join(', ')}`);
        return;
      }

      setForm(prev => ({
        ...prev,
        attachments: [...prev.attachments, ...files]
      }));
      setError(null);
    }
  };

  const removeAttachment = (index: number) => {
    setForm(prev => ({
      ...prev,
      attachments: prev.attachments.filter((_, i) => i !== index)
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (form.stars === 0) {
      setError('Por favor, selecione uma avaliação');
      return;
    }

    setIsSubmitting(true);
    setError(null);

    try {
      // Simulação de envio para API
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Aqui você faria o envio real:
      // const formData = new FormData();
      // formData.append('rating', form.stars.toString());
      // formData.append('comment', form.comment);
      // form.attachments.forEach(file => formData.append('attachments', file));
      // const response = await fetch('/api/avaliacoes', { method: 'POST', body: formData });

      setSubmitSuccess(true);
      setForm({
        stars: 0,
        hover: 0,
        comment: '',
        attachments: [],
        wouldHireAgain: false
      });
    } catch (e) {
      setError('Erro ao enviar avaliação. Tente novamente.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitSuccess) {
    return (
      <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md text-center">
        <CheckCircle className="mx-auto h-12 w-12 text-green-500 mb-4" />
        <h2 className="text-2xl font-bold text-gray-800 mb-2">Avaliação Enviada!</h2>
        <p className="text-gray-600 mb-6">
          Sua avaliação foi registrada com sucesso e ajudará outros clientes a encontrar bons profissionais.
        </p>
        <button
          onClick={() => setSubmitSuccess(false)}
          className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition"
        >
          Avaliar outro freelancer
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-2xl font-bold text-gray-800 mb-2">Avaliar Freelancer</h1>
      <p className="text-gray-600 mb-6">
        Compartilhe sua experiência com este profissional para ajudar nossa comunidade
      </p>

      {error && (
        <div className="bg-red-50 border-l-4 border-red-500 p-4 mb-6">
          <div className="flex items-center">
            <XCircle className="h-5 w-5 text-red-500 mr-2" />
            <span className="text-red-700">{error}</span>
          </div>
        </div>
      )}

      <form onSubmit={handleSubmit}>
        {/* Sistema de Estrelas */}
        <div className="mb-8">
          <label className="block text-sm font-medium text-gray-700 mb-3">
            Como você avalia o trabalho deste freelancer? *
          </label>
          <div className="flex items-center">
            {[1, 2, 3, 4, 5].map((star) => (
              <button
                type="button"
                key={star}
                onClick={() => setForm({ ...form, stars: star })}
                onMouseEnter={() => setForm({ ...form, hover: star })}
                onMouseLeave={() => setForm({ ...form, hover: 0 })}
                className="focus:outline-none"
              >
                <Star
                  className={`h-10 w-10 ${
                    (form.hover || form.stars) >= star
                      ? 'text-yellow-400 fill-yellow-400'
                      : 'text-gray-300'
                  }`}
                />
              </button>
            ))}
            <span className="ml-3 text-lg font-medium text-gray-700">
              {form.stars > 0 ? `${form.stars} estrela${form.stars > 1 ? 's' : ''}` : 'Nenhuma'}
            </span>
          </div>
        </div>

        {/* Comentário */}
        <div className="mb-6">
          <label htmlFor="comment" className="block text-sm font-medium text-gray-700 mb-2">
            Deixe um comentário (opcional)
          </label>
          <textarea
            id="comment"
            name="comment"
            rows={4}
            value={form.comment}
            onChange={(e) => setForm({ ...form, comment: e.target.value })}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
            placeholder="Descreva sua experiência com este profissional..."
            maxLength={500}
          />
          <p className="text-xs text-gray-500 mt-1">
            {form.comment.length}/500 caracteres
          </p>
        </div>

        {/* Anexos */}
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Comprovantes (opcional)
          </label>
          <div className="border-2 border-dashed border-gray-300 rounded-md p-4">
            <div className="flex flex-col items-center justify-center space-y-2">
              <Upload className="h-10 w-10 text-gray-400" />
              <div className="flex text-sm text-gray-600">
                <label className="relative cursor-pointer bg-white rounded-md font-medium text-blue-600 hover:text-blue-500">
                  <span>Selecionar arquivos</span>
                  <input
                    type="file"
                    className="sr-only"
                    onChange={handleFileChange}
                    multiple
                    accept="image/*,.pdf,.doc,.docx"
                  />
                </label>
                <p className="pl-1">ou arraste e solte</p>
              </div>
              <p className="text-xs text-gray-500">
                PNG, JPG, PDF ou DOC (máx. 5MB cada)
              </p>
            </div>
          </div>

          {form.attachments.length > 0 && (
            <div className="mt-4 space-y-2">
              {form.attachments.map((file, index) => (
                <div key={index} className="flex items-center justify-between bg-gray-50 p-2 rounded">
                  <span className="text-sm text-gray-700 truncate max-w-xs">
                    {file.name}
                  </span>
                  <div className="flex items-center">
                    <span className="text-xs text-gray-500 mr-3">
                      {(file.size / 1024 / 1024).toFixed(2)} MB
                    </span>
                    <button
                      type="button"
                      onClick={() => removeAttachment(index)}
                      className="text-red-500 hover:text-red-700"
                    >
                      Remover
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Contrataria novamente */}
        <div className="mb-6 flex items-center">
          <input
            id="wouldHireAgain"
            name="wouldHireAgain"
            type="checkbox"
            checked={form.wouldHireAgain}
            onChange={(e) => setForm({ ...form, wouldHireAgain: e.target.checked })}
            className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
          />
          <label htmlFor="wouldHireAgain" className="ml-2 block text-sm text-gray-700">
            Eu contrataria este freelancer novamente
          </label>
        </div>

        {/* Termos e Envio */}
        <div className="border-t border-gray-200 pt-4 mb-6">
          <div className="flex items-start">
            <input
              id="terms"
              name="terms"
              type="checkbox"
              required
              className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded mt-1"
            />
            <label htmlFor="terms" className="ml-2 block text-sm text-gray-700">
              Declaro que esta avaliação reflete minha experiência real com o profissional e
              que não contém informações falsas ou difamatórias.
            </label>
          </div>
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-blue-600 text-white py-3 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-70 disabled:cursor-not-allowed"
        >
          {isSubmitting ? 'Enviando avaliação...' : 'Enviar Avaliação'}
        </button>
      </form>
    </div>
  );
}