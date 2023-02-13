'use client'

import Image from "next/image";
import { urlFor } from "lib/sanity";
import Link from "next/link";
import { motion } from "framer-motion";

interface Props{
  projects: Project[];
}

const variants = {
  hidden: { opacity:0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const item = {
  hidden: { y: 20, opacity: 0 },
  show: {
    y: 0,
    opacity: 1,
    transition: {
      duration:1
    }
  }
}

export default function Project({projects}:Props) {
    return (
        <div className="p-3 sm:p-16 xl:p-60 pt-9 md:pt-9 xl:pt-9 text-gray-900">
          <Link className="py-2 px-10 bg-sky-700 rounded text-white text-bold uppercase hover:bg-gray-200 hover:text-gray-500 hover:border hover:border-gray-400" href="/">Back</Link>
                <h1 className="text-4xl md:text-5xl text-sky-700 text-center p-6 mb-9">My Projects</h1>
      <motion.div
        variants={variants}
        initial="hidden"
        animate="show"
      className="grid grid-cols-1 lg:grid-cols-2 gap-12 w-full text-center">
        {projects.map((project)=>(
            <motion.div
            variants={item} key={project._id} className="p-9 border min-w-90 shadow shadow-sky-900/50 overflow-hidden">
                <h3 className="text-2xl font-bold uppercase text-center mb-6">{project.title}</h3>
                <a className="font-bold uppercase text-sm border border-gray-300 rounded bg-gray-200 shadow p-2 m-2 hover:bg-sky-800 hover:text-white transition-all duration-500" href={project.url} target="_blank" rel="noreferrer">Go Online</a>
                <div className="mt-6">
                    <Image className="mx-auto" src={urlFor(project.image).url()} alt={project.title} width={350} height={1000}/>
                </div>
                <div className="flex flex-row text-center justify-center mt-6">
                    <h3 className="font-bold mr-3 text-justify">Skills used in this project:</h3>
                {project.languages.map((lang, index)=> (
                    <div key={index}>
                       <Image className="my-0 mx-auto transform transition-all duration-500 hover:scale-110" src={urlFor(lang.skilimg).url()} alt={lang.title} width={30} height={40}/>
                    </div>
                ))}
                </div>

                </motion.div>
        ))}
      </motion.div>
      </div>
    )
  }
  