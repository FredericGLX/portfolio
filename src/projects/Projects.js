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

function Projects() {
  return (
    <div className="projects__container" name="projects">
      <h1>Latest projects</h1>
      <div className="projects">
        <Swiper
          modules={[Navigation]}
          spaceBetween={-50}
          slidesPerView={2}
          navigation
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
        </Swiper>
      </div>
    </div>
  );
}

export default Projects;
