import './Header.scss';
import { Link } from 'react-scroll';
import { BsSun, BsMoonStars } from 'react-icons/bs';

function Header({ handleClick, darkTheme }) {
  return (
    <header className="app__header">
      <button
        className={`header__switch-theme ${
          darkTheme ? 'header__dark-theme' : ''
        }`}
        onClick={handleClick}
      >
        {!darkTheme ? (
          <BsMoonStars size={'1.2rem'} />
        ) : (
          <BsSun size={'1.2rem'} />
        )}
      </button>

      <div className="header__tabs">
        <Link
          to="about"
          spy={true}
          smooth={true}
          offset={0}
          duration={500}
          className="header__tab"
        >
          About
        </Link>
        <Link
          to="projects"
          spy={true}
          smooth={true}
          offset={0}
          duration={500}
          className="header__tab"
        >
          Projects
        </Link>
        <Link
          to="timeline"
          spy={true}
          smooth={true}
          offset={-3}
          duration={500}
          className="header__tab"
        >
          Timeline
        </Link>
        <Link
          to="contact"
          spy={true}
          smooth={true}
          offset={0}
          duration={500}
          className="header__tab"
        >
          Contact
        </Link>
      </div>
    </header>
  );
}

export default Header;
