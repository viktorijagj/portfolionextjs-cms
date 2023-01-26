import Project from "./Project";
import {fetchproject} from "../../../utils/fetchProjects";

const Projects = async () => {

  const projects = await fetchproject();
  return (
 <div className='overflow-x-hidden'>
    <Project projects={projects} />
  </div> 
  )
};

export default Projects;
