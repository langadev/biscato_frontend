'use client'
import { useState } from "react"
import { GoogleLogin } from '@react-oauth/google';
import Image from "next/image";

export default function Register() {
  const [login, openLogin] = useState(true);
  const handleLogin = ()=>{
    openLogin(!login);
  }
  return (
    <div className='flex justify-between items-center w-screen h-screen'>
      <div className='w-[150%] flex flex-col gap-5 py-28 items-center h-full'>
        <h1 className='text-2xl font-bold text-blue-600'>BISCATO</h1>
        <h2 className='text-xl font-bold text-zinc-900'>Registrar-se</h2>
        <div className='flex flex-col gap-y-2'>
        <GoogleLogin
  onSuccess={credentialResponse => {
    console.log(credentialResponse);
  }}
  onError={() => {
    console.log('Login Failed');
  }}
/>;
          <div className='border-[1px] border-gray-300 w-[350px] px-3 text-center rounded-sm py-1'>
            facebook
          </div>
        </div>
        <div className='w-[1/2] flex items-center gap-2.5 px-15'>
        <hr className='w-[170px] text-gray-300'/>
          <span>ou</span>
        <hr className='w-[150px] text-gray-300'/>
        </div>
        <form action=""  className='flex flex-col gap-5 items-center'>
          {login &&(<div  className='flex gap-2'>
            <input type="text" name="" id="" placeholder='nome' className=' focus:ring py-2 px-2 rounded-md w-[170px] focus:outline-blue-400 focus:outline-1 focus:rounded-md border-[1px] focus:border-0 border-gray-300 '/>
            <input type="text" name="" id="" placeholder='sobrenome' className='focus:ring py-2 px-2 rounded-md w-[170px] focus:outline-blue-400 focus:outline-1 focus:rounded-md border-[1px] focus:border-0 border-gray-300 '/>
          </div>)
          }
          <div className='flex flex-col gap-5'>
            <input type="email" name="" id="" className='border-[1px] focus:border-0 focus:ring py-1 px-2 rounded-md w-[350px] focus:outline-blue-400 focus:outline-1 focus:rounded-md border-gray-300' placeholder='Email' />
            <input type="password" name="" id="" className='border-[1px] focus:border-0 focus:ring py-1 px-2 rounded-md w-[350px]  focus:outline-blue-400 focus:outline-1 focus:rounded-md border-gray-300' placeholder='senha'/>
          </div>
          <div className='flex flex-col gap-5 w-[52%] items-center'>
          
          <span> <input type="checkbox" name="" id="" /> Eu concordo com os <span className='text-blue-600'>Termos de Acordo com o Usuario</span>  e com a  <span className='text-blue-600'>Politica de Privacidade do </span>Biscato</span>
          <button className='px-24 py-2 bg-blue-600 text-xl text-white rounded-md'>Junte se a Biscato</button>
          </div>
          <hr className='w-1/2 text-gray-300'/>
          <span>Ja possui uma conta ? <span className='text-blue-600' onClick={()=>{handleLogin()}}>faca login</span></span>
        </form>
      </div>
      <div className="relative w-full h-full">
  <Image 
    src="/images/left3.jpeg"
    alt="left"
    layout="fill"
    objectFit="cover"
  />
</div>
    </div>
  )
}
