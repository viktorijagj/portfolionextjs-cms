import React from 'react';
import { FaAngleDoubleDown } from "react-icons/fa";
import bgImage from "../../public/images/backg.jpg"

export default function HomeSection() {

    const style={
      backgroundImage: `url(${bgImage.src})`,
      backgroundSize: 'cover'
    }
    return (
        <section className='text-white text-center  section' style={style}>
            <div className='w-full grid grid-cols-1 h-full items-center'>
                <div className='p-9'>
            <h1 className='text-5xl border-y-4 border-slate-300 border-solid p-9'>Wellcome to my Portfolio</h1>
            <h3 className='text-2xl p-6 tracking-widest bg-gray-600'>I am Viktorija Gjorgjievska</h3>
            <h3 className='text-xl p-3 tracking-widest'>Front-end Developer</h3>
            <p className='text-lg w-1/2 my-0 mx-auto'>I am a Frontend web developer building the frontend of websites and applications that leads to the success of the overall product. I have a master degree in computer science and am an enthusiastic, creative and detail-oriented developer. I am focused on JavaScript and creating a responsive web design.I also have a passion for implementing React. I love creating new websites from scratch. Check out some of my work in the Projects section.</p>
            </div>
            <div className='w-1/2 my-8 mx-auto flex justify-between'>
                <a className='btn' href="https://github.com/viktorijagj">Github</a>
                 <a className='btn' href="https://www.linkedin.com/in/viktorijagjjovanovska/">LinkedIn</a>
            </div>
            <div className="absolute bottom-3 left-1/2 section-projects-btn">
            <a href='#edducation'><FaAngleDoubleDown className='h-10 w-10 text-gray-700'/></a>
            </div>
            </div>
        </section>
    )
}