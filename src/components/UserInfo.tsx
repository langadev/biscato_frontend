import Image from "next/image"

function UserInfo() {
  return (
    <div className='py-10 px-36 bg-white border-[1.5px] border-slate-100 shadow text-gray-700 rounded-md z-10 mt-5'>
    <div className="flex gap-10 justify-center ">
        
     <div className="border-4 border-cyan-600 rounded-full">
        <Image 
        src={"/images/profile.jpg"}
        width={200}
        height={200}
        alt="profile_picture" className="rounded-full object-cover "
        />
     </div>
     <div className="flex gap-3 flex-col">
        <h2 className="text-4xl font-semibold text-gray-700">Alfredo Langa</h2>
        <h3 className="text-xl text-gray-700">Full Stack Developer</h3>
        <div className="flex gap-3 text-gray-700">
            <span>x x x x </span>
            <span>4.5/5</span>
            <span> Mocambique</span>
        </div>
        <h2 className="text-2xl text-gray-700">FreeLancer experiente em TI e Programacao</h2>
     </div>
     <div> 
        <p> Preco por hora</p>
        <p className="text-xl font-semibold">1000.00 MT</p>
     </div>
     
     
    </div>
    <div className="px-20  py-10">
       <h2 className="mb-2 text-xl">Principais Habilidades</h2>
       <div className="flex gap-5">
        <span className="bg-blue-200 rounded-md px-2 py-1">Java</span>
        <span className="bg-blue-200 rounded-md px-2 py-1">JavaScript</span>
        <span className="bg-blue-200 rounded-md px-2 py-1">PHP</span>
        <span className="bg-blue-200 rounded-md px-2 py-1">Reactjs</span>
        <span className="bg-blue-200 rounded-md px-2 py-1">Nextjs</span>
        <span className="bg-blue-200 rounded-md px-2 py-1">Nodejs</span>
        <span className="bg-blue-200 rounded-md px-2 py-1">Spring Boot</span>
       </div>
     </div>
    </div>
  )
}

export default UserInfo
