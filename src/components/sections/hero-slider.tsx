"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { ChevronLeft, ChevronRight, MapPin } from "lucide-react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const HeroSlider = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  const images = [
    {
      url: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/022e19dd-9d1c-4edd-bdad-22186f35e1bc-yelahanka-newlaunch-co-in/assets/images/banner-web-3.jpg",
      alt: "Godrej Yelahanka Project View 1",
    },
    {
      url: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/022e19dd-9d1c-4edd-bdad-22186f35e1bc-yelahanka-newlaunch-co-in/assets/images/banner-web-2-2.jpg",
      alt: "Godrej Yelahanka Project View 2",
    },
  ];

  return (
    <section id="section-banner" className="relative w-full overflow-hidden">
      {/* Swiper Slider */}
      <div className="relative h-[400px] md:h-[600px] lg:h-[880px] w-full">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          navigation={{
            nextEl: ".swiper-button-next-custom",
            prevEl: ".swiper-button-prev-custom",
          }}
          pagination={{
            clickable: true,
            el: ".swiper-pagination-custom",
            bulletClass: "swiper-pagination-bullet !bg-white !opacity-50",
            bulletActiveClass: "!opacity-100 !bg-white",
          }}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          loop={true}
          onSlideChange={(swiper) => setActiveSlide(swiper.realIndex)}
          className="h-full w-full"
        >
          {images.map((image, index) => (
            <SwiperSlide key={index}>
              <div className="relative h-full w-full">
                <Image
                  src={image.url}
                  alt={image.alt}
                  fill
                  priority={index === 0}
                  className="object-cover"
                  sizes="100vw"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom Navigation Arrows */}
        <button className="swiper-button-prev-custom absolute left-4 top-1/2 z-10 -translate-y-1/2 cursor-pointer text-white transition-opacity hover:opacity-70 focus:outline-none">
          <ChevronLeft size={48} strokeWidth={1} />
        </button>
        <button className="swiper-button-next-custom absolute right-4 top-1/2 z-10 -translate-y-1/2 cursor-pointer text-white transition-opacity hover:opacity-70 focus:outline-none">
          <ChevronRight size={48} strokeWidth={1} />
        </button>

        {/* Custom Pagination Container */}
        <div className="swiper-pagination-custom absolute bottom-6 left-1/2 z-10 flex -translate-x-1/2 items-center justify-center gap-2" />
      </div>

      {/* Floating Hero Info Card (Desktop Only Viewport Logic) */}
      <div className="pointer-events-none absolute inset-0 z-20 flex items-end justify-start px-4 pb-12 md:px-12 lg:px-[200px] lg:pb-24">
        <div className="pointer-events-auto hero-overlay-card w-full max-w-[550px] overflow-hidden p-6 md:p-8">
          {/* Project Identity */}
          <div className="mb-6">
            <h1 className="text-2xl font-bold uppercase tracking-tight text-[#212529] md:text-3xl">
              Godrej Yelahanka
            </h1>
            <div className="mt-2 flex items-center gap-1 text-sm font-medium text-[#737373]">
              <MapPin size={14} className="text-[#05070a]" />
              <span>Yelahanka, North Bengaluru</span>
            </div>
            <p className="mt-1 text-[11px] font-medium text-[#737373]">
              RERA Registration No : Coming Soon
            </p>
          </div>

          <div className="relative mb-6">
            {/* Divider with Illustration Background (Representing the skyline vector in screenshots) */}
            <div className="absolute inset-x-0 bottom-0 h-16 opacity-10 grayscale">
              <div 
                className="h-full w-full bg-repeat-x bg-contain"
                style={{ backgroundImage: "url('https://www.godrej-yehalanka.com/assets/img/theme-bg-22.webp')" }}
              />
            </div>

            <div className="relative flex items-center justify-between border-t border-dashed border-[#e5e5e5] pt-6 pb-2">
              <div className="flex flex-col">
                <span className="text-xl font-bold text-[#212529] md:text-2xl">
                  3, 3.5 & 4.5 BHK
                </span>
                <span className="text-xs font-medium uppercase tracking-wider text-[#737373]">
                  Apartment
                </span>
              </div>
              <div className="text-right">
                <span className="text-xl font-bold text-[#212529] md:text-2xl">
                  ₹ 2.88 Cr*
                </span>
              </div>
            </div>
          </div>

          <button className="w-full bg-[#05070a] py-4 text-center text-sm font-bold uppercase tracking-widest text-white transition-colors hover:bg-[#1a1d21]">
            Get Price Breakdown
          </button>
        </div>
      </div>

      <style jsx global>{`
        .swiper-pagination-bullet {
          width: 10px;
          height: 10px;
          margin: 0 4px !important;
          border-radius: 50%;
        }
        .hero-overlay-card {
          background: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(8px);
          border-radius: 8px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
        }
      `}</style>
    </section>
  );
};

export default HeroSlider;