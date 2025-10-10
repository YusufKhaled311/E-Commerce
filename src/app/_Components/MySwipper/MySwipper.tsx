'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import Image from 'next/image';

type SwipperType = {
  imageList: string[];
  slidesPerView?: number;
  spaceBetween?: number;
  height?: number;
};

export default function MySwipper({
  imageList,
  spaceBetween = 20,
  slidesPerView = 1,
  height = 200,
}: SwipperType) {
  return (
    <Swiper spaceBetween={spaceBetween} slidesPerView={slidesPerView}>
      {imageList.map((src, index) => (
        <SwiperSlide key={index}>
          <div
            className="p-2 rounded-xl overflow-hidden flex items-center justify-center"
            style={{ height }}
          >
            <Image
              src={src}
              alt={`slide-${index}`}
              width={400}
              height={height}
              className="rounded-xl object-cover w-full h-full"
              unoptimized 
            />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
