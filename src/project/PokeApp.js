import Project from './Project';
import './Project.scss';
import picture from '../img/projects/PokeApp.jpg';

function PokeApp() {
  const technologies = (
    <>
      <button className="project__badge">HTML</button>
      <button className="project__badge">CSS</button>
      <button className="project__badge">React JS</button>
      <button className="project__badge">Redux</button>
    </>
  );
  return (
    <Project
      picture={picture}
      title={'Pokemon Finder'}
      technologies={technologies}
      description={
        "Enter a pokemon name and renders its type's strengths and weaknesses as well as its stats and other information (sprites, abilities...)."
      }
      codeLink={'https://github.com/FredericGLX/Pokemon-Finder'}
    />
  );
}

export default PokeApp;
