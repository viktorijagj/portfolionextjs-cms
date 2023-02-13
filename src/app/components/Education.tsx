interface Props{
  cvs: Cv[];
}
export default function Education({cvs}: Props) {
    return (
      <section id="edducation" className="text-gray-900 p-16 pb-32 pt-32 flex flex-col border-b-4 border-solid border-sky-700 text-center">
        <h1 className="text-3xl md:text-5xl font-bold mb-12">Education - <span className="text-bold text-sky-700">Experience</span></h1>
        <div className="grid grid-col-1 md:grid-cols-3 gap-2">
         {cvs.map((cv)=> (
          <div key={cv._id} className="bg-gray-200 shadow p-9">
            <div>
              <h3><span className="font-bold pr-3">Qualification:</span> {cv.title}</h3>
              <h4><span className="font-bold pr-3">Year:</span> {cv.year}</h4>
              <h5><span className="font-bold pr-3">Educational institution:</span> {cv.education}</h5>
              </div>
          </div>
         ))}
    </div>
      </section>

    )
  }
