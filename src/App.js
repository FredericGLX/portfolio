import './App.scss';
import Header from './header/Header';
import About from './about/About';
import Projects from './projects/Projects';
import Contact from './contact/Contact';

function App() {
  return (
    <div className="app">
      <Header />
      <About />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
