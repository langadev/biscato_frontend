import React from 'react'

export default function NivelCart() {
  return (
    <div className='flex gap-20 rounded-md border-[1px] border-gray-300 px-10 text-gray-700 py-2 h-[200px] mt-5 bg-white'>
      <div className='max-w-[500px] flex flex-col gap-1.5'>
        <h1 className='text-xl font-semibold'>O que e um Perfil Nivel Hero ?</h1>
        <p className='text-justify'>
            O FreeLancer Hero e aquele que chegou ao nivel mais alto do Biscato. Se voce precisa de um profissional qualificado, voce acabou de encontra lo. O FreeLancer Hero ja demonstrou todo seu talento atraves de servicos prestados e compromissos assumidos com os clientes, alem de ter excelente comunicacao.
        </p>
      </div>
      <div className='max-w-[500px] flex flex-col gap-1.5'>
        <h1 className='text-xl font-semibold'>O que e uma Violacao</h1>
        <p className='text-justify'>
            Uma violacao e uma classificacao negativa dada pelo BISCATO a um usuario depois de uma arbitragem, como resultado de um descumprimento do usuario com algum ou todos termos do Projecto!
        </p>
      </div>

    </div>
  )
}
