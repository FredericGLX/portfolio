import './Header.scss';
import { Link } from 'react-scroll';

function Header() {
  return (
    <header className="app__header">
      <Link
        to="about"
        spy={true}
        smooth={true}
        offset={-100}
        duration={500}
        className="header__tab"
      >
        About me
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
        to="contact"
        spy={true}
        smooth={true}
        offset={0}
        duration={500}
        className="header__tab"
      >
        Contact
      </Link>
    </header>
  );
}

export default Header;
