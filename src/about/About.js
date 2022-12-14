import './About.scss';
import { motion } from 'framer-motion';
import motions from '../helper/motions';
import { BsGithub, BsLinkedin } from 'react-icons/bs';

function About({ darkTheme }) {
  return (
    <div
      className={`about__container ${darkTheme ? 'about__dark-theme' : ''}`}
      name="about"
    >
      <div className="about__top">
        <div>
          <motion.h3
            className="about__small-title"
            variants={motions.greetings}
            initial="initial"
            animate="animate"
          >
            Nice to meet you
          </motion.h3>
          <h1 className="about__main-title">
            <motion.p
              className="about__name__im"
              variants={motions.fadein}
              initial="initial"
              animate="animate"
            >
              I'm
            </motion.p>{' '}
            <motion.p
              className="about__colored-letter"
              variants={motions.letter1}
              initial="initial"
              animate="animate"
            >
              F
            </motion.p>
            <motion.p
              variants={motions.letter2}
              initial="initial"
              animate="animate"
            >
              r
            </motion.p>
            <motion.p
              variants={motions.letter3}
              initial="initial"
              animate="animate"
            >
              e
            </motion.p>
            <motion.p
              variants={motions.letter4}
              initial="initial"
              animate="animate"
            >
              d
            </motion.p>
            <motion.p
              variants={motions.letter5}
              initial="initial"
              animate="animate"
            >
              e
            </motion.p>
            <motion.p
              variants={motions.letter6}
              initial="initial"
              animate="animate"
            >
              r
            </motion.p>
            <motion.p
              variants={motions.letter7}
              initial="initial"
              animate="animate"
            >
              i
            </motion.p>
            <motion.p
              variants={motions.letter8}
              initial="initial"
              animate="animate"
            >
              c
            </motion.p>
          </h1>
          <motion.p
            className="about__p1"
            variants={motions.p1}
            initial="initial"
            animate="animate"
          >
            I am currently working in account management for an e-commerce
            website and started this coding journey on my free time two years
            ago.
          </motion.p>
          <motion.p
            className="about__p2"
            variants={motions.p2}
            initial="initial"
            animate="animate"
          >
            Initially I just wanted to know how websites are built, but what was
            initially a hobby turned into a passion. I kept learning on a daily
            basis and really enjoyed being able to track my progress. I mostly
            specialized in Front-End development as I really like JavaScript and
            toying around with it in the browser.{' '}
          </motion.p>
        </div>
      </div>
      <div className="about__bottom">
        <h3>My experience includes</h3>
        <div className="about__badges">
          <button className="about__badge">HTML</button>
          <button className="about__badge">CSS</button>
          <button className="about__badge">JavaScript</button>
          <button className="about__badge">React JS</button>
          <button className="about__badge">NodeJS</button>
          <button className="about__badge">MongoDB</button>
          <button className="about__badge">SQL</button>
          <button className="about__badge">SASS</button>
        </div>
      </div>
      <div className="contact__icons">
        <a href="https://www.linkedin.com/in/fr%C3%A9d%C3%A9ric-guilloux85/">
          <BsLinkedin className="contact__icon" size={'1.4rem'} />
        </a>
        <a href="https://github.com/FredericGLX">
          <BsGithub className="contact__icon" size={'1.4rem'} />
        </a>
      </div>
    </div>
  );
}

export default About;
