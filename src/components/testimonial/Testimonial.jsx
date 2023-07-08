import { useState } from "react"
import TestimonialData from "./TestimonialData";
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import './Testimonial.css'


function Testimonial() {

    const [review, setReview] = useState(TestimonialData)

  return (
    <div className="t-wrapper">
        <div className="t-heading">
        <span>What Clients Say</span>
        <span>Recent Reviews</span>
        <div className="t-underline"></div>
        
        </div>

        

        <Swiper
        modules={[Pagination]}
        spaceBetween={50}
        slidesPerView={3}
        pagination={{ clickable: true }}
        className={'testimonial-slider'}
        onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
        >
   
      {review.map((item, index) => (
           <SwiperSlide>
            <div className="t-slider-div">
                <span>{item.review}</span>
                <img src={item.tImage} alt="" />
                <span>{item.name}</span>
            </div>
           </SwiperSlide>
      )   )}

      
    </Swiper>

    <div className="t-blur"></div>
       
    </div>
  )
}

export default Testimonial
