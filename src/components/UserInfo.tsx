import Image from "next/image";

function UserInfo() {
  return (
    <div className='py-6 md:py-10 px-4 sm:px-8 md:px-12 lg:px-24 xl:px-36 bg-white border border-slate-100 shadow-sm md:shadow rounded-lg z-10 mt-5 mx-4 sm:mx-8 md:mx-auto max-w-7xl'>
      <div className="flex flex-col md:flex-row gap-6 md:gap-10 items-center md:items-start">
        {/* Profile Image */}
        <div className="border-4 border-cyan-600 rounded-full w-32 h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 xl:w-52 xl:h-52 shrink-0">
          <Image 
            src={"/images/profile.jpg"}
            width={200}
            height={200}
            alt="profile_picture"
            className="rounded-full object-cover w-full h-full"
          />
        </div>
        
        {/* User Details */}
        <div className="flex-1 text-center md:text-left space-y-2 md:space-y-3">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-800">Alfredo Langa</h2>
          <h3 className="text-lg sm:text-xl text-gray-600">Full Stack Developer</h3>
          <div className="flex flex-wrap justify-center md:justify-start items-center gap-2 sm:gap-3 text-gray-600">
            <span className="flex items-center">★★★★☆</span>
            <span className="hidden sm:inline">•</span>
            <span>4.5/5</span>
            <span className="hidden sm:inline">•</span>
            <span className="flex items-center">
              <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
              </svg>
              Moçambique
            </span>
          </div>
          <h2 className="text-lg sm:text-xl md:text-2xl text-gray-700 pt-2">Freelancer experiente em TI e Programação</h2>
        </div>
        
        {/* Price */}
        <div className="text-center md:text-right bg-blue-50 rounded-lg p-4 w-full md:w-auto"> 
          <p className="text-sm sm:text-base text-gray-600">Preço por hora</p>
          <p className="text-xl sm:text-2xl font-semibold text-blue-600">1000.00 MT</p>
        </div>
      </div>
      
      {/* Skills */}
      <div className="px-4 sm:px-8 md:px-12 lg:px-20 py-6 md:py-8">
        <h2 className="mb-3 text-lg sm:text-xl font-medium">Principais Habilidades</h2>
        <div className="flex flex-wrap gap-2 sm:gap-3 justify-center md:justify-start">
          {['Java', 'JavaScript', 'PHP', 'Reactjs', 'Nextjs', 'Nodejs', 'Spring Boot'].map((skill) => (
            <span 
              key={skill}
              className="bg-blue-100 text-blue-800 rounded-full px-3 py-1 text-sm sm:text-base"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default UserInfo;