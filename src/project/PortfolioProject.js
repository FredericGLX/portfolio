import Project from './Project';
import './Project.scss';
import picture from '../img/projects/PortfolioProject.jpg';

function Portfolio() {
  const technologies = (
    <>
      <button className="project__badge">HTML</button>
      <button className="project__badge">SASS</button>
      <button className="project__badge">React JS</button>
      <button className="project__badge">Swiper JS</button>
    </>
  );
  return (
    <Project
      picture={picture}
      title={'Developper Portfolio'}
      technologies={technologies}
      description={
        'The website you are browsing right now. A light/dark mode is available.'
      }
      codeLink={'https://github.com/FredericGLX/portfolio'}
    />
  );
}

export default Portfolio;
