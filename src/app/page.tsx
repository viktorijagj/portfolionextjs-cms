

import Education from './Education'
import HomeSection from './HomeSection'
import ProjectsInfo from './ProjectsInfo'
import { fetchcv } from '../../utils/fetchCv'


const Home = async () => {

  const cvs = await fetchcv();
  return (
 <div className='overflow-x-hidden'>
  <HomeSection/>
  <Education cvs={cvs} />
  <ProjectsInfo/>
  </div> 
  )
};

export default Home;
