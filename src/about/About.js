import './About.scss';
import picture from '../img/profile4.jpg';
import linkedInIcon from '../img/icons/linkedin.svg';
import gitHubIcon from '../img/icons/github.svg';

function About() {
  return (
    <div className="about" name="about">
      <div className="about__top">
        <img className="about__picture" src={picture} alt="profile picture" />
        <div className="about__right">
          <h3>Nice to meet you</h3>
          <h2 className="about__main">I'm Frederic Guilloux</h2>
          <p>
            Currently working in account management, I started coding on my free
            time two years ago.
          </p>
          <p>Little quote in color</p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            condimentum risus in arcu pretium laoreet. Fusce sodales malesuada
            metus, in vehicula nisi sodales eu.{' '}
          </p>
        </div>
      </div>
      <div className="about__bottom">
        <h3>My experience includes</h3>
        <div className="about__badges">
          <button className="about__badge">HTML</button>
          <button className="about__badge">CSS</button>
          <button className="about__badge">JavaScript</button>
          <button className="about__badge">React</button>
          <button className="about__badge">NodeJS</button>
          <button className="about__badge">MongoDB</button>
          <button className="about__badge">SQL</button>
          <button className="about__badge">SASS</button>
        </div>
      </div>
      <div className="contact__icons">
        <a href="https://www.linkedin.com/in/fr%C3%A9d%C3%A9ric-guilloux85/">
          <img src={linkedInIcon} className="contact__icon" />
        </a>
        <a href="https://github.com/FredericGLX">
          <img src={gitHubIcon} className="contact__icon" />
        </a>
      </div>
    </div>
  );
}

export default About;
