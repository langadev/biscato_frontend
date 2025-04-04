import Image from "next/image";
import { data } from "../utils/data";
import { PlusCircle } from "lucide-react";

export default function SectionProjects() {
  return (
    <section 
      className="w-full py-12 bg-gray-50" 
      aria-labelledby="projects-heading"
    >
      <div className="container mx-auto px-4">
        <h2 
          id="projects-heading" 
          className="text-2xl font-bold text-center mb-8 text-gray-800"
        >
          My Projects
        </h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {data.map((item) => (
            <article
              key={item.id}
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300
                         flex flex-col h-full border border-gray-200"
            >
              <div className="relative aspect-video">
                <Image
                  src={item.img}
                  alt={item.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>

              <div className="p-4 flex-grow">
                <h3 className="font-semibold text-lg text-gray-800 mb-2 text-center">
                  {item.title}
                </h3>

                <div className="flex flex-wrap gap-2 justify-center mt-3">
                  {item.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 rounded-full text-xs bg-gray-100 text-gray-700"
                      aria-label={`Skill: ${skill}`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div className="p-4 border-t border-gray-100 flex justify-between items-center">
                <button 
                  className="text-blue-600 hover:text-blue-800 transition-colors flex items-center gap-1"
                  aria-label={`View details of ${item.title}`}
                >
                  <PlusCircle className="w-5 h-5" />
                  <span className="text-sm font-medium">View Details</span>
                </button>
                
                <button 
                  className="text-gray-400 hover:text-gray-600 transition-colors"
                  aria-label="Save project"
                >
                  <PlusCircle className="w-5 h-5" />
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}