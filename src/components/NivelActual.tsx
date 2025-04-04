import React from 'react'

function NivelActual() {
  return (
    <div className='py-5 px-10 bg-white flex flex-col gap-5 border-[1.5px] border-slate-100 shadow text-gray-700 rounded-md mt-5'>
        <h2 className='text-xl font-semibold'>Actual Nivel</h2>
       <div className='flex-col gap-2'>
        <p className='flex gap-10'><span>Projectos Realizados</span> <span className='font-semibold'>350</span></p>
        <p className='flex justify-between'><span>Projectos em Execucao</span> <span className='font-semibold'>6</span></p>
        <p className='flex justify-between'><span>Horas Trabalhadas</span> <span className='font-semibold'>350</span></p>
      </div>

    </div>
  )
}

export default NivelActual
