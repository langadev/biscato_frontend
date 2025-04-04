import React from 'react'
import Link from 'next/link'

function ContractCard() {
  return (
    <div className='p-6 bg-white flex flex-col gap-6 border border-slate-100 shadow-sm rounded-lg'>
      {/* Hire Button */}
      <Link href={'/contract'} className='bg-blue-600 hover:bg-blue-700 transition-colors rounded-xl px-6 py-3 text-white font-medium text-lg w-full shadow-md hover:shadow-lg'>
        Contratar
      </Link>
      
      {/* Activity Section */}
      <div className='space-y-4'>
        <h2 className='font-semibold text-lg text-gray-800 border-b pb-2'>Actividade</h2>
        <div className='space-y-3'>
          <div className='flex justify-between'>
            <span className='text-gray-600'>Projectos Realizados</span>
            <span className='font-semibold text-gray-800'>350</span>
          </div>
          <div className='flex justify-between'>
            <span className='text-gray-600'>Projectos em Execução</span>
            <span className='font-semibold text-gray-800'>6</span>
          </div>
          <div className='flex justify-between'>
            <span className='text-gray-600'>Horas Trabalhadas</span>
            <span className='font-semibold text-gray-800'>350</span>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className='space-y-4'>
        <h2 className='font-semibold text-lg text-gray-800 border-b pb-2'>Estatísticas</h2>
        <div className='space-y-3'>
          <div className='flex justify-between'>
            <span className='text-gray-600'>Classificações do cliente</span>
            <span className='font-semibold text-gray-800'>350</span>
          </div>
          <div className='flex justify-between'>
            <span className='text-gray-600'>Violações</span>
            <span className='font-semibold text-red-500'>1</span>
          </div>
          <div className='flex justify-between'>
            <span className='text-gray-600'>Certificações</span>
            <span className='font-semibold text-gray-800'>0</span>
          </div>
          <div className='flex justify-between'>
            <span className='text-gray-600'>Último Login</span>
            <span className='font-semibold text-gray-800'>há 7 horas</span>
          </div>
          <div className='flex justify-between'>
            <span className='text-gray-600'>Ingressou</span>
            <span className='font-semibold text-gray-800'>há 3 anos</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContractCard