import './About.scss';
import picture from '../img/profile4.jpg';
import linkedInIcon from '../img/icons/linkedin.svg';
import gitHubIcon from '../img/icons/github.svg';

function About() {
  return (
    <div className="about__container" name="about">
      <div className="about__top">
        {/* <img className="about__picture" src={picture} alt="profile picture" /> */}
        <div>
          <h3 className="about__small-title">Nice to meet you</h3>
          <h1 className="about__main-title">
            I'm <span>F</span>rederic
          </h1>
          <p>
            I am currently working in account management for an e-commerce
            website and started this coding journey on my free time two years
            ago.
          </p>
          <p>
            Initially I just wanted to know how websites are built, but what was
            initially a hobby turned into a passion. I kept learning on a daily
            basis and really enjoyed being able to track my progress. I mostly
            specialized in Front-End development as I really like JavaScript and
            toying around with it in the browser.{' '}
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
