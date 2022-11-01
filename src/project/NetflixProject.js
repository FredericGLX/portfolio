import Project from './Project';
import './Project.scss';
import picture from '../img/projects/NetflixProject.jpg';

function NetflixProject() {
  const technologies = (
    <>
      <button className="project__badge">HTML</button>
      <button className="project__badge">SASS</button>
      <button className="project__badge">React JS</button>
      <button className="project__badge">Swiper JS</button>
      <button className="project__badge">Framer Motion</button>
      <button className="project__badge">Firebase</button>
    </>
  );
  return (
    <Project
      picture={picture}
      title={'Netflix Clone'}
      technologies={technologies}
      description={`I wanted to challenge myself by coding a clone of a popular web app. While browsing on the internet looking for ideas I stumbled upon a very realistic clone which convinced me to give it a try.
      `}
      codeLink={'https://github.com/FredericGLX/Netflix-clone'}
      demoLink={'https://fredflix.netlify.app/'}
    />
  );
}

export default NetflixProject;
