'use client';

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';


export default function ChatPage() {
  const [messages, setMessages] = useState([
    { id: 1, sender: 'Cliente', text: 'Oi, estou interessado no seu serviço!' },
    { id: 2, sender: 'Você', text: 'Olá! Como posso ajudar?' },
  ]);
  const [newMessage, setNewMessage] = useState('');

  const sendMessage = () => {
    if (newMessage.trim()) {
      setMessages([
        ...messages,
        { id: messages.length + 1, sender: 'Você', text: newMessage },
      ]);
      setNewMessage('');
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
  
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Mensagens</h1>
      </div>

   
      <div className="flex flex-col h-full max-h-[500px] bg-white shadow-lg rounded-lg p-4">
       
        <div className="flex-1 overflow-auto mb-4">
          <div className="space-y-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.sender === 'Você' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-xs p-3 rounded-lg ${
                    message.sender === 'Você' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800'
                  }`}
                >
                  <p>{message.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        
        <div className="flex items-center">
          <input
            type="text"
            className="flex-1 p-3 border border-gray-300 rounded-lg"
            placeholder="Digite sua mensagem..."
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
          />
          <Button
            variant="outline"
            size="sm"
            className="ml-2"
            onClick={sendMessage}
          >
            Enviar
          </Button>
        </div>
      </div>
    </div>
  );
}