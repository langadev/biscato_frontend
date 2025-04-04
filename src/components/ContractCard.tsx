import React from 'react'

function ContractCard() {
  return (
    <div className='py-5 px-10 bg-white flex flex-col gap-5 border-[1.5px] border-slate-100 shadow text-gray-700 rounded-md mt-5'>
    
      <button className='bg-blue-600 hover:bg-blue-500 cursor-pointer rounded-2xl px-10 py-2 text-white text-xl'> Contratar</button>
      
      <div className='flex flex-col gap-2'>
        <h2 className='font-semibold'>Actividade</h2>
        <p className='flex gap-10'><span>Projectos Realizados</span> <span className='font-semibold'>350</span></p>
        <p className='flex justify-between'><span>Projectos em Execucao</span> <span className='font-semibold'>6</span></p>
        <p className='flex justify-between'><span>Horas Trabalhadas</span> <span className='font-semibold'>350</span></p>
      </div>

      <div className='flex flex-col gap-2'>
        <h2 className='font-semibold'>Actividade</h2>
        <p className='flex justify-between items-center'><span>Classificacoes do cliente</span> <span className='font-semibold'>350</span></p>
        <p className='flex justify-between items-center'><span>Violacoes</span> <span className='font-semibold text-red-400'>1</span></p>
        <p className='flex justify-between items-center'><span>Certificacoes</span> <span className='font-semibold'>0</span></p>
        <p className='flex justify-between items-center'><span>Ultimo Login</span> <span className='font-semibold'>ha 7 horas</span></p>
        <p className='flex justify-between items-center'><span>Ingressou</span> <span className='font-semibold'>ha 3 anos</span></p>
      </div>

    </div>
  )
}

export default ContractCard
