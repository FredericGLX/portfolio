import '../project/Project.scss';
// Import Swiper React components
import { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import NetflixProject from '../project/NetflixProject';
import TMSProject from '../project/TMSProject';
import PokeApp from '../project/PokeApp';

function Projects({ darkTheme }) {
  // Breakpoints for responsiveness
  const customBreakpoints = {
    breakpoints: {
      1200: {
        slidesPerView: 3,
      },
      700: {
        slidesPerView: 2,
      },
      500: {
        slidesPerView: 1,
      },
    },
  };
  return (
    <div
      className={`projects__container ${
        darkTheme ? 'projects__dark-theme' : ''
      }`}
      name="projects"
    >
      <h1>Latest projects</h1>
      <div className="projects">
        <Swiper
          modules={[Navigation]}
          // spaceBetween={0}
          // slidesPerView={2}s
          navigation
          {...customBreakpoints}
        >
          <SwiperSlide>
            <NetflixProject />
          </SwiperSlide>
          <SwiperSlide>
            <TMSProject />
          </SwiperSlide>
          <SwiperSlide>
            <PokeApp />
          </SwiperSlide>
          <SwiperSlide>
            <NetflixProject />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}

export default Projects;
