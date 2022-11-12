import './App.scss';
import { ThemeContext } from './context/ThemeContext';
import Header from './header/Header';
import About from './about/About';
import Projects from './projects/Projects';
import Timeline from './timeline/Timeline';
import Contact from './contact/Contact';
import { useContext } from 'react';
import Footer from './about/footer/Footer';

function App() {
  const { darkTheme, handleClick } = useContext(ThemeContext);

  return (
    <div
      className={`app ${!darkTheme ? 'app__light-theme' : 'app__dark-theme'}`}
    >
      <Header handleClick={handleClick} darkTheme={darkTheme} />
      <About darkTheme={darkTheme} />
      <Projects darkTheme={darkTheme} />
      <Timeline darkTheme={darkTheme} />
      <Contact darkTheme={darkTheme} />
      <Footer darkTheme={darkTheme} />
    </div>
  );
}

export default App;
