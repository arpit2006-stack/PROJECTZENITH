import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import banner1 from "../assets/bannner2.jpg";
import banner2 from "../assets/banner3.jpg";
import banner3 from "../assets/banner4.jpg";
import banner4 from "../assets/banner5.jpg";


const BannerSlider = () => {
  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      autoplay={{ delay: 3000 }}
      className="w-320 h-[400px]"
    >
      <SwiperSlide>
        <img src={banner1} alt="Banner 1" className="w-full h-full object-cover" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={banner2} alt="Banner 2" className="w-full h-full object-cover" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={banner3} alt="Banner 3" className="w-full h-full object-cover" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={banner4} alt="Banner 4" className="w-full h-full object-cover" />
      </SwiperSlide>
      
    </Swiper>
  );
};

export default BannerSlider;
