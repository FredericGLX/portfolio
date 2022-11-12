import './Footer.scss';
import { BsGithub, BsLinkedin } from 'react-icons/bs';

function Footer({ darkTheme }) {
  return (
    <footer className={`footer ${darkTheme ? 'footer__dark-theme' : ''}`}>
      <div className="footer__icons">
        <a href="https://www.linkedin.com/in/fr%C3%A9d%C3%A9ric-guilloux85/">
          <BsLinkedin className="footer__icon" size={'1.8rem'} />
        </a>
        <a href="https://github.com/FredericGLX">
          <BsGithub className="footer__icon" size={'1.8rem'} />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
