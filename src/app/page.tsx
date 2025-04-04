import React from 'react'
import Navbar from "@/components/Navbar";
import Hero from '@/components/Hero';

export default function page() {
  return (
    <div className='flex flex-col w-screen'>
      <Navbar/>
      <Hero/>
    </div>
  )
}
