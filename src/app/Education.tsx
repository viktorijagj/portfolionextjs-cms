interface Props{
  cvs: Cv[];
}
export default function Education({cvs}: Props) {
    return (
      <section id="edducation" className="bg-gray-100 p-32 flex flex-col text-center border-b-4 border-solid border-zinc-700">
        <h1 className="text-3xl font-bold mb-12">Education - Experience</h1>
       <div>
        
       </div>
       <div>
        <div className="grid grid-cols-3 gap-2">
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
        </div> 
      </section>

    )
  }
