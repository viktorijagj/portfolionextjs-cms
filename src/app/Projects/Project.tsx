import Image from "next/image";
import { urlFor } from "lib/sanity";

interface Props{
  projects: Project[];
}

export default function Project({projects}:Props) {
    return (
        <div className="p-32">
                <h1 className="text-4xl text-center p-6">My Projects</h1>
      <div className="flex flex-row gap-9 flex-wrap w-full text-center">
        {projects.map((project)=>(
            <div key={project._id} className="p-9 border shadow">
                <h3 className="text-2xl text-center mb-6">{project.title}</h3>
                <a className="uppercase text-sm bg-gray-200 shadow p-2 m-2" href={project.url}>Go Online</a>
                <div className="mt-6">
                    <Image src={urlFor(project.image).url()} alt={project.title} width={250} height={150}/>
                </div>
                <div className="flex text-center mt-6">
                    <h3 className="mr-3 text-justify">Skills used in this project:</h3>
                {project.languages.map((lang, index)=> (
                    <div key={index}>
                        <h4>{lang.titile}</h4>
                       <Image className="my-0 mx-auto" src={urlFor(lang.skilimg).url()} alt={lang.titile} width={20} height={30}/>
                    </div>
                ))}
                </div>

                </div>
        ))}
      </div>
      </div>
    )
  }
  