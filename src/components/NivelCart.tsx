import React from 'react'

export default function NivelCart() {
  return (
    <div className='flex flex-col lg:flex-row gap-8 rounded-lg border border-gray-200 p-6 text-gray-700 bg-white shadow-sm mt-5'>
      <div className='flex-1'>
        <div className='flex items-center gap-3 mb-4'>
          <div className='bg-blue-100 p-2 rounded-full'>
            <svg className='w-6 h-6 text-blue-600' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
              <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z' />
            </svg>
          </div>
          <h1 className='text-xl font-semibold text-gray-800'>O que é um Perfil Nível Herói?</h1>
        </div>
        <p className='text-gray-600 text-justify'>
          O Freelancer Herói é aquele que chegou ao nível mais alto do Biscato. Se você precisa de um profissional qualificado, você acabou de encontrá-lo. O Freelancer Herói já demonstrou todo seu talento através de serviços prestados e compromissos assumidos com os clientes, além de ter excelente comunicação.
        </p>
      </div>

      <div className='flex-1'>
        <div className='flex items-center gap-3 mb-4'>
          <div className='bg-red-100 p-2 rounded-full'>
            <svg className='w-6 h-6 text-red-600' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
              <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z' />
            </svg>
          </div>
          <h1 className='text-xl font-semibold text-gray-800'>O que é uma Violação?</h1>
        </div>
        <p className='text-gray-600 text-justify'>
          Uma violação é uma classificação negativa dada pelo BISCATO a um usuário depois de uma arbitragem, como resultado de um descumprimento do usuário com algum ou todos termos do Projeto!
        </p>
      </div>
    </div>
  )
}