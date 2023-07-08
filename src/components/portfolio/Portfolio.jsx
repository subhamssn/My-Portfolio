import './Portfolio.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import Sidebar from '../../img/sidebar.png';
import Ecommerce from '../../img/ecommerce.png';
import HOC from '../../img/hoc.png';
import MusicApp from '../../img/musicapp.png';
import dotImage from '../../img/dpt-image.avif'

function Portfolio() {
  return (
    <div className="portfolio">

        <div className='dot-Image'>
        <img src={dotImage} alt="" />
        </div>
       
       {/*heading */}
       <span>Recent Projects</span>
       <h2>Portfolio</h2>

       <Swiper
      spaceBetween={1}
      slidesPerView={3}
      className={'portfolio-slider'}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide>
        <img className='sliderImg' src={Sidebar} alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img className='sliderImg' src={Ecommerce} alt="" />
      </SwiperSlide>
      <SwiperSlide>
         <img className='sliderImg' src={HOC} alt="" />
      </SwiperSlide>
      <SwiperSlide>
         <img className='sliderImg' src={MusicApp} alt="" />
      </SwiperSlide>
      
    </Swiper>
    </div>
  )
}

export default Portfolio
