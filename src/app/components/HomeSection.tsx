import React from 'react';
import { FaAngleDoubleDown } from "react-icons/fa";
import bgImage from "../../../public/images/backg.jpg"

export default function HomeSection() {

    const style={
      backgroundImage: `url(${bgImage.src})`,
      backgroundSize: 'cover'
    }
    return (
        <section className='text-white text-center  section' style={style}>
            <div className='w-full grid grid-cols-1 items-center'>
                <div className='p-9'>
            <h1 className='md:text-3xl border-y-4 border-slate-300 border-solid p-9'>Wellcome to my <br></br> <span className='block uppercase text-4xl ml-2 md:text-7xl pt-3 md:p-6'>Portfolio</span></h1>
            <h3 className='text-xl md:text-2xl p-6 tracking-widest bg-gradient-to-r from-gray-500 to-sky-900'>I am <br></br>Viktorija Gj. Jovanovska</h3>
            <h3 className='text-xl md:text-3xl p-3 tracking-widest uppercase bg-gradient-to-r from-gray-500 to-sky-900'>Front-end Developer</h3>
            </div>
            <div className=' mt-9 mb-18 mx-auto flex flex-col lg:flex-row gap-3 align-center justify-between'>
                <a href="https://github.com/viktorijagj" target="_blank" rel='noreferrer' className="btn group relative h-12 w-64 overflow-hidden rounded-lg bg-white text-lg shadow">
    <div className="absolute inset-0 w-3 bg-sky-800 transition-all duration-[250ms] ease-out group-hover:w-full"></div>
    <span className="relative text-black group-hover:text-white">My Github</span>
    </a>
               <a href="https://www.linkedin.com/in/viktorijagjjovanovska/" target="_blank" rel='noreferrer' className="btn group relative h-12 w-64 overflow-hidden rounded-lg bg-white text-lg shadow">
    <div className="absolute inset-0 w-3 bg-sky-800 transition-all duration-[250ms] ease-out group-hover:w-full"></div>
    <span className="relative text-black group-hover:text-white">My Linkedin</span>
    </a>
            </div>
            <div className="absolute bottom-3 left-1/2 section-projects-btn">
            <a href='#aboutme'><FaAngleDoubleDown className='h-10 w-10 text-sky-100 mt-6 mb-6 hidden lg:inline-block transform transition-all duration-500 hover:scale-125'/></a>
            </div>
            </div>
        </section>
    )
}