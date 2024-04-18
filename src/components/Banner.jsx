import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


// import required modules
import { Pagination, Navigation,Autoplay } from 'swiper/modules';

function Banner() {
  return (
    <Swiper
    style={{
        '--swiper-navigation-color': 'var(--theme-color)', // Utiliza la variable de color del tema
        '--swiper-pagination-color': 'var(--theme-color)', // Utiliza la variable de color del tema
      }}
      pagination={{
        type: 'bullets',
        
       
      }}
      effect="fade"
    autoplay={
        {
            delay:2500  ,
            disableOnInteraction:false,
        }
    }
    loop={true}
    navigation={true}
    modules={[Pagination, Navigation,Autoplay]}
    className="mySwiper"
  >
   <SwiperSlide>
<img src="./BANNER.png" alt="" />

   </SwiperSlide>
    <SwiperSlide>
    <img src="./banner2.png" alt="" />


    </SwiperSlide>
    <SwiperSlide>

    <img src="./banner3.png" alt="" />


    </SwiperSlide>
  </Swiper>
  )
}

export default Banner