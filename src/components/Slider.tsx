'use client';
import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

type SliderProps = {
  children: React.ReactNode;
  className?: string;
  params?: any;
};

const Slider = ({ params = {}, children, className }: SliderProps) => {
  const childrenArray = React.Children.toArray(children);
  const swiperRef = useRef<any>(null);

  return (
    <div className={`relative w-full ${className}`}>
      <button
        className="custom-prev absolute !z-50"
        onClick={() => {
          swiperRef.current?.slidePrev();
        }}
      >
        ←
      </button>
      <Swiper
        modules={[Navigation]}
        slidesPerView={1}
        loop={true}
        freeMode={true}
        spaceBetween={50}
        autoHeight
        onBeforeInit={(swiper) => {
          swiperRef.current = swiper;
        }}
        {...params}
      >
        {childrenArray.map((child, index) => (
          <SwiperSlide key={index}>{child}</SwiperSlide>
        ))}
      </Swiper>
      <button
        className="custom-next absolute !z-50"
        onClick={() => swiperRef.current?.slideNext()}
      >
        →
      </button>
    </div>
  );
};

export default Slider;
