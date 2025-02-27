import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import banner01 from "../assets/banner3.jpg"

import banner1 from "../assets/bannner2.jpg";
import banner2 from "../assets/banner3.jpg";
import banner3 from "../assets/banner4.jpg";
import banner4 from "../assets/banner5.jpg";
import Image1 from "../assets/slideimg1.jpg";
import Image2 from "../assets/slideimg2.jpg";
import Image3 from "../assets/slideimg5.jpg";
import Image4 from "../assets/slidieimg4.jpg";
import offerOne from "../assets/offerOne.jpg";

const Home = () => {
  const threeCards = [
    { title: "Card 1", description: "This is the first card's description.", image: Image1 },
    { title: "Card 2", description: "This is the second card's description.", image: Image2 },
    { title: "Card 3", description: "This is the third card's description.", image: Image3 },
    { title: "Card 4", description: "This is the fourth card's description.", image: Image4 },
  ];

  const fiveCards = [...threeCards, { title: "Card 5", description: "This is the fifth card's description.", image: Image4 }];

  const slides = [
    { id: 1, image: Image2, label: "STOP", discount: "UP TO 50% OFF" },
    { id: 2, image: Image2, label: "JOY", discount: "UP TO 40% OFF" },
    { id: 3, image: Image2, label: "BEAUTY", discount: "UP TO 30% OFF" },
    { id: 4, image: Image2, label: "FRESH", discount: "UP TO 20% OFF" },
  ];

  return (

    <>

    <img className='mt-5 ml-18 max-w-320' src={banner01} alt="" />

    <div>
      {/* Banner Slider */}
   

      {/* Three Card Layout */}
      <div className="flex mt-10 mb-10 ml-20 gap-30 p-0">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-70 max-w-5xl">
          {threeCards.map((card, index) => (
            <div key={index} className="bg-white w-72 rounded-2xl shadow-lg overflow-hidden p-0 hover:scale-103">
              <img src={card.image} alt={card.title} className="w-full h-88 object-cover rounded-lg" />
            </div>
          ))}
        </div>
      </div>

      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
        className="w-320 h-[400px]"
      >
        {[banner1, banner2, banner3, banner4].map((banner, index) => (
          <SwiperSlide key={index}>
            <img src={banner} alt={`Banner ${index + 1}`} className="w-full h-full object-cover" />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Five Card Layout */}
      <div className="flex mt-10 mb-10 ml-19 gap-30 p-0">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-65 max-w-4xl">
          {fiveCards.map((card, index) => (
            <div key={index} className="bg-white w-62 rounded shadow-lg overflow-hidden p-0 hover:scale-102">
              <img src={card.image} alt={card.title} className="w-full h-88 object-cover rounded-lg" />
            </div>
          ))}
        </div>
      </div>

      {/* Offer Section */}
      <div>
        <img className='w-320 ml-20' src={offerOne} alt="Offer" />
      </div>

      {/* Brand Slider */}
      <div className="bg-white text-white py-10">
        <h2 className="text-center text-3xl font-bold mb-6">Our Homegrown Brands</h2>
        <Swiper
          modules={[Navigation]}
          spaceBetween={-40}
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
          {slides.map((slide) => (
            <SwiperSlide key={slide.id} className="transition-transform duration-500">
              {({ isActive }) => (
                <div className={`relative rounded-xl overflow-hidden transform transition-all duration-500 
                  ${isActive ? "scale-110 shadow-lg z-20" : "-ml-10 scale-90 opacity-40 grayscale"}`}>
                  <img src={slide.image} alt={slide.label} className="w-full h-110 object-cover" />
                </div>
              )}
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>

    </>
  );
};


export default Home;

