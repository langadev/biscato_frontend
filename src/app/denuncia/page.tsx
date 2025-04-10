'use client';
import { useState } from 'react';

export default function Denuncias() {
  const [titulo, setTitulo] = useState('');
  const [descricao, setDescricao] = useState('');
  const [tipo, setTipo] = useState('');

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-lg p-8 w-full max-w-xl">
        <h2 className="text-2xl font-bold mb-6 text-center text-red-600">Registrar Denúncia</h2>
        <form  className="space-y-4">
          <div>
            <label className="block text-gray-700 font-medium mb-1">Título</label>
            <input
              type="text"
              value={titulo}
              onChange={(e) => setTitulo(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-400"
              required
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-1">Tipo de Denúncia</label>
            <select
              value={tipo}
              onChange={(e) => setTipo(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-400"
              required
            >
              <option value="">Selecione</option>
              <option value="assédio">Assédio</option>
              <option value="roubo">Roubo</option>
              <option value="vandalismo">Vandalismo</option>
              <option value="outro">Outro</option>
            </select>
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-1">Descrição</label>
            <textarea
              value={descricao}
              onChange={(e) => setDescricao(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-xl h-32 resize-none focus:outline-none focus:ring-2 focus:ring-red-400"
              required
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-red-600 text-white py-3 rounded-xl font-semibold hover:bg-red-700 transition"
          >
            Enviar Denúncia
          </button>
        </form>
      </div>
    </div>
  );
}
