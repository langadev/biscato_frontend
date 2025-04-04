import ContractCard from '@/components/ContractCard'
import NivelActual from '@/components/NivelActual'
import NivelCart from '@/components/NivelCart'
import SectionProjects from '@/components/SectionProjects'
import UserInfo from '@/components/UserInfo'
import React from 'react'

function Profile() {
  return (
    <div className='h-screen gap-x-10 bg-gray-50'>
        <div className='p-10 items-center w-full'>
        </div>
        <div className='flex gap-5 w-screen  px-36 items-center ml-12'>
            
           <UserInfo /> 
           <ContractCard/>
           
        </div>
        <div className=' gap-5  px-36 flex justify-center ml-12'>
            <NivelCart/>
            <NivelActual/>
           
        </div>

        <div className='z-10 bottom-1'>
          <SectionProjects/>
        </div>
        
     
    </div>
  )
}

export default Profile
