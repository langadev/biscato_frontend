import Image from 'next/image'
import React from 'react'

function loading() {
  return (
    <div className='flex justify-center items-center'>
        <Image className='bg-transparent' src="Spin@1x-1.0s-200px-200px.svg" alt="loading..." width={300} height={300}
    />
    </div>
  )
}

export default loading