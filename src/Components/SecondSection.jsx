import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';

const SecondSection = () => {
  return (
    <div className="px-10 ">
    <Swiper
      spaceBetween={50}
      slidesPerView={3}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide>
        <img className="w-80 rounded-lg" src="https://swiperjs.com/demos/images/nature-1.jpg" />
      </SwiperSlide>
      <SwiperSlide>
        <img className="w-80 rounded-lg"src="https://swiperjs.com/demos/images/nature-2.jpg" />
      </SwiperSlide>
      <SwiperSlide>
        <img className="w-80 rounded-lg" src="https://swiperjs.com/demos/images/nature-3.jpg" />
      </SwiperSlide>
      <SwiperSlide>
        <img className="w-80 rounded-lg" src="https://swiperjs.com/demos/images/nature-4.jpg" />
      </SwiperSlide>
      <SwiperSlide>
        <img className="w-80 rounded-lg" src="https://swiperjs.com/demos/images/nature-5.jpg" />
      </SwiperSlide>

    </Swiper>
    </div>
  );
};

export default SecondSection;
