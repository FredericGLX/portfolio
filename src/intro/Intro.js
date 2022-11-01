import './Intro.scss';

function Intro() {
  return (
    <div className="home__intro">
      <h1>Hi, I'm Frederic</h1>
      <p>
        I enjoy learning about web technologies and doing front-end web
        development on my free time.
      </p>
      <div className="home__icons">
        <span className="home__icon">LinkedIn</span>
        <span className="home__icon">GitHub</span>
      </div>
    </div>
  );
}

export default Intro;
