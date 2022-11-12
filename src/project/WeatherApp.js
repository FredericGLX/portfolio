import Project from './Project';
import './Project.scss';
import picture from '../img/projects/WeatherAppProject.jpg';

function WeatherApp() {
  const technologies = (
    <>
      <button className="project__badge">HTML</button>
      <button className="project__badge">CSS</button>
      <button className="project__badge">JavaScript</button>
    </>
  );
  return (
    <Project
      picture={picture}
      title={'Weather App'}
      technologies={technologies}
      description={
        'A weather application which renders data based on city input. Weather forecast is rendered daily or hourly as well as different parameters (sunrise, wind status, humidity...). Renders different icons based on weather conditions.'
      }
      codeLink={'https://github.com/FredericGLX/Weather-App'}
    />
  );
}

export default WeatherApp;
