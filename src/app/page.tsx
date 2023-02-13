

import Education from './components/Education'
import HomeSection from './components/HomeSection'
import ProjectsInfo from './components/ProjectsInfo'
import { fetchcv } from '../../utils/fetchCv'
import AboutMe from './components/AboutMe';
import Form from './components/Form';


const Home = async () => {

  const cvs = await fetchcv();
  return (
 <div className='overflow-x-hidden text-gray-900'>
  <HomeSection/>
  <AboutMe/>
  <Education cvs={cvs} />
  <ProjectsInfo/>
  <Form/>
  </div> 
  )
};

export default Home;
