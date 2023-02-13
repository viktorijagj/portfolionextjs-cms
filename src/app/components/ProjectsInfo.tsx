export default function ProjectsInfo() {
  return (
    <section
      id="projectsInfo"
      className="bg-gray-200 p-12 pb-32 pt-32 flex flex-col text-center text-gray-900"
    >
      <h2 className="text-3xl md:text-5xl font-bold mb-12"><span className="text-bold text-sky-700">My</span> Projects</h2>
      <p className="p-3 mb-9 text-2xl">
        Here you can find some of my work..{" "}
      </p>
      <a href="/Projects" className="btn md:w-80 mx-auto rounded px-10 py-5 font-bold hover:bg-teal-300 hover:text-sky-800 uppercase shadow-xl shadow-sky-600/50">
        Show Projects
      </a>
    </section>
  );

}
