import Project from './Project';
import './Project.scss';
import picture from '../img/projects/TMSProject.jpg';

function TMSProject() {
  const technologies = (
    <>
      <button className="project__badge">HTML</button>
      <button className="project__badge">SASS</button>
      <button className="project__badge">React JS</button>
      <button className="project__badge">Node JS</button>
      <button className="project__badge">MongoDB</button>
    </>
  );
  return (
    <Project
      picture={picture}
      title={'Ticket Management System'}
      technologies={technologies}
      description={
        'Basic full stack app that allows users to create an account, then create projects and assigned it to existing users. Within each project, it is possible to create tickets and assign them to one or several users assigned to the project.'
      }
      codeLink={'https://github.com/FredericGLX/Ticket-Management-System'}
    />
  );
}

export default TMSProject;
