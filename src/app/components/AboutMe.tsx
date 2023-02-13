
import Image from "next/image";
import mePhoto from "../../../public/images/vikk.jpg";
import { FaDownload }  from "react-icons/fa";

function AboutMe() {


  return (
    <section
      id="aboutme"
      className="bg-gray-100 p-16 pb-32 pt-32 flex flex-col text-center border-b-4 border-solid border-sky-700 text-gray-900"
    >
      <h1 className="text-3xl md:text-5xl font-bold mb-12">About <span className="text-bold text-sky-700">Me</span></h1>
      <h3 className="mb-9 text-sky-700 text-xl">HERE YOU WILL FIND MORE INFORMATION ABOUT ME..</h3>
      <div className="grid grid-cols-1 gap-9 lg:grid-cols-3 text-center">
        <div>
          <p className="md:text-lg text-justify my-0 mx-auto mb-6 md:mb-16">
            I am a Frontend web developer building the frontend of websites and
            applications that leads to the success of the overall product. I
            have a master degree in computer science and am an enthusiastic,
            creative and detail-oriented developer. I am focused on JavaScript
            and creating a responsive web design.I also have a passion for
            implementing React. I love creating new websites from scratch. Check
            out some of my work in the Projects section.
          </p>
          <a className="btn rounded inline-block px-10 py-5 hover:bg-teal-300 hover:text-sky-800 uppercase shadow-xl shadow-sky-600/50" href="../../../public/CV.pdf" download>Download CV <FaDownload className="inline text-xl pb-1" /></a>
        </div>
        <div>
          <Image className="my-0 mx-auto rounded-full" src={mePhoto} width={200} height={200} alt="photo of me" />
        </div>
        <div>
             <p className="p-9 mb-9 border border-slate-300 border-solid shadow shadow-sky-900/50 ">50+ complited projects</p>
             <p className="p-9 border border-slate-300 border-solid shadow shadow-sky-900/50">1+ years of experience</p>
        </div>
      </div>
    </section>
  );
}
export default AboutMe;
