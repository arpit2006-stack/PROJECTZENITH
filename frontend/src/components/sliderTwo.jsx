import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";


import StopImage from "../assets/slideimg2.jpg";
import JoyImage from "../assets/slideimg2.jpg";
import BeautyImage from "../assets/slideimg2.jpg";
import FreshImage from "../assets/slideimg2.jpg";

const slides = [
  { id: 1, image: StopImage, label: "STOP", discount: "UP TO 50% OFF" },
  { id: 2, image: JoyImage, label: "JOY", discount: "UP TO 40% OFF" },
  { id: 3, image: BeautyImage, label: "BEAUTY", discount: "UP TO 30% OFF" },
  { id: 4, image: FreshImage, label: "FRESH", discount: "UP TO 20% OFF" },
];

export default function BrandSlider() {
  return (
    <div className="bg-white text-white py-10">
      <h2 className="text-center text-3xl font-bold mb-6">Our Homegrown Brands</h2>
      <Swiper
        modules={[Navigation]}
        spaceBetween={-40} // Overlapping effect
        slidesPerView={3}
        centeredSlides
        loop
        navigation
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        className="max-w-5xl mx-auto"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={slide.id} className="transition-transform duration-500">
            {({ isActive }) => (
              <div
                className={`relative rounded-xl overflow-hidden transform transition-all duration-500 
                ${isActive ? "scale-110 shadow-lg z-20" : "-ml-10 scale-90 opacity-40 grayscale"}`}
              >
                <img src={slide.image} alt={slide.label} className="w-full h-110 object-cover" />
                {/* <div className="absolute bottom-0 w-full bg-black bg-opacity-60 p-3 text-center">
                  <p className="text-lg font-semibold">{slide.label}</p> */}
                  {/* <p className="text-sm">{slide.discount}</p> */}
                {/* </div> */}
              </div>
            )}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
