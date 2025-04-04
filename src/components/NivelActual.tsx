import React from 'react'

function NivelActual() {
  return (
    <div className='p-6 bg-white flex flex-col gap-4 border border-gray-200 shadow-sm rounded-lg'>
      <div className='flex items-center gap-3 mb-2'>
        <div className='bg-blue-100 p-2 rounded-lg'>
          <svg className='w-5 h-5 text-blue-600' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
            <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z' />
          </svg>
        </div>
        <h2 className='text-xl font-semibold text-gray-800'>Nível Atual</h2>
      </div>
      
      <div className='space-y-3'>
        <div className='flex justify-between items-center py-2 border-b border-gray-100'>
          <span className='text-gray-600'>Projectos Realizados</span>
          <span className='font-semibold text-gray-800'>350</span>
        </div>
        <div className='flex justify-between items-center py-2 border-b border-gray-100'>
          <span className='text-gray-600'>Projectos em Execução</span>
          <span className='font-semibold text-gray-800'>6</span>
        </div>
        <div className='flex justify-between items-center py-2'>
          <span className='text-gray-600'>Horas Trabalhadas</span>
          <span className='font-semibold text-gray-800'>350</span>
        </div>
      </div>

      <div className='mt-4 pt-4 border-t border-gray-200'>
        <div className='w-full bg-gray-100 rounded-full h-2.5'>
          <div 
            className='bg-blue-600 h-2.5 rounded-full' 
            style={{ width: '75%' }}
            aria-label='Progresso do nível: 75%'
          ></div>
        </div>
        <p className='text-sm text-gray-500 mt-2 text-right'>75% para o próximo nível</p>
      </div>
    </div>
  )
}

export default NivelActual