import './Timeline.scss';

function Timeline({ darkTheme }) {
  return (
    <div
      className={`timeline__container ${
        darkTheme ? 'timeline__dark-theme' : ''
      }`}
      name="timeline"
    >
      <h1>Timeline</h1>
      <div className="timeline__block">
        <div className="timeline__title">
          <div className="timeline__bullet"></div>
          <span className="timeline__when">Today</span>
          <h3 className="timeline__role">Account Executive</h3>
          <div className="timeline__how-long">1 year</div>
        </div>
        <p className="timeline__paragraph">
          I am currently working full-time as an Account Executive for a global
          travel e-commerce business.
        </p>
      </div>
      <div className="timeline__block">
        <div className="timeline__title">
          <div className="timeline__bullet"></div>
          <span className="timeline__when">Today</span>
          <h3 className="timeline__role">Building projects</h3>
          <div className="timeline__how-long">1.5 year</div>
        </div>
        <p className="timeline__paragraph">
          When I'm not at work, I'm either learning or building projects as
          that's how I learn best. Javascript is my main programming language
          and its ecosystem my main tools.
        </p>
      </div>
      <div className="timeline__block">
        <div className="timeline__title">
          <div className="timeline__bullet"></div>
          <span className="timeline__when">2021</span>
          <h3 className="timeline__role">
            CS50 - Introduction to Computer Science
          </h3>
          <div className="timeline__how-long">4 months</div>
        </div>
        <p className="timeline__paragraph">
          Probably one of the internet's most popular online course. This course
          is offered by Harvard and divided into various fundamental concepts
          each week followed by problem sets to solve. Main languages are C and
          Python.
        </p>
      </div>
      <div className="timeline__block">
        <div className="timeline__title">
          <div className="timeline__bullet"></div>
          <span className="timeline__when">2020</span>
          <h3 className="timeline__role">First lines of code</h3>
          <div className="timeline__how-long">the beginning</div>
        </div>
        <p className="timeline__paragraph">
          One day, while browsing the internet and came across FreeCodeCamp and
          was really impressed by its community and all the ressources they
          provide. It didn't take much longer for to sign up and write my first
          lines of code.
        </p>
      </div>
      <div className="timeline__block">
        <div className="timeline__title">
          <div className="timeline__bullet"></div>
          <span className="timeline__when">2019</span>
          <h3 className="timeline__role">Master's Degree and moving to NZ</h3>
          <div className="timeline__how-long">2 years</div>
        </div>
        <p className="timeline__paragraph">
          I graduated from a Master's Degree in International Business from the
          University of Nantes, France. Soon after my graduation I moved to New
          Zealand.
        </p>
      </div>
    </div>
  );
}

export default Timeline;
