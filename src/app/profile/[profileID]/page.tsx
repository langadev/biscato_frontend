import ContractCard from '@/components/ContractCard'
import NivelActual from '@/components/NivelActual'
import NivelCart from '@/components/NivelCart'
import SectionProjects from '@/components/SectionProjects'
import UserInfo from '@/components/UserInfo'
import React from 'react'

function Profile() {
  return (
    <div className='min-h-screen bg-gray-50 pb-20'>
      {/* Main Content Container */}
      <div className='container mx-auto px-4 sm:px-6 lg:px-8 py-8'>
        {/* Top Section - User Info and Contract Card */}
        <div className='flex flex-col lg:flex-row gap-6 mb-8'>
          <div className='lg:flex-1'>
            <UserInfo />
          </div>
          <div className='lg:w-96'>
            <ContractCard />
          </div>
        </div>

        {/* Middle Section - Nivel Cards */}
        <div className='flex flex-col md:flex-row gap-6 mb-12'>
          <div className='md:flex-1'>
            <NivelCart />
          </div>
          <div className='md:flex-1'>
            <NivelActual />
          </div>
        </div>

        {/* Bottom Section - Projects */}
        <div className='relative'>
          <SectionProjects />
        </div>
      </div>
    </div>
  )
}

export default Profile