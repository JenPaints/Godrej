import React from 'react';
import Image from 'next/image';

const AboutDeveloper = () => {
  return (
    <section 
      id="section-about-developer" 
      className="relative overflow-hidden bg-white py-20 px-4 sm:px-6 lg:px-8"
      style={{
        backgroundColor: '#ffffff',
        fontFamily: '"Montserrat", "Inter", sans-serif'
      }}
    >
      {/* Decorative Watermark SVG - Left Side */}
      <div 
        className="absolute left-0 top-1/2 -translate-y-1/2 opacity-10 pointer-events-none hidden lg:block"
        style={{ width: '250px', height: '250px' }}
      >
        <Image 
          src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/022e19dd-9d1c-4edd-bdad-22186f35e1bc-yelahanka-newlaunch-co-in/assets/svgs/about-left-element-14.svg" 
          alt="Decorative Element Left"
          width={250}
          height={250}
          className="object-contain"
        />
      </div>

      <div className="container mx-auto max-w-[1200px] relative z-10">
        <div className="flex flex-col items-center">
          {/* Header */}
          <div className="mb-12 text-center w-full">
            <h2 
              className="relative inline-block pb-4 text-[32px] font-semibold uppercase tracking-[0.05em] text-[#212529]"
              style={{ lineHeight: '1.3' }}
            >
              About Godrej Properties
              <span 
                className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[60px] h-[2px] bg-[#05070a]"
              ></span>
            </h2>
          </div>

          {/* Description Text */}
          <div className="max-w-[1000px] text-center">
            <p 
              className="text-[16px] leading-[1.6] text-[#212529] font-normal mb-0"
              style={{ textAlign: 'center' }}
            >
              Godrej Properties is a leading Indian real estate developer with a legacy of quality, innovation, and customer satisfaction. A subsidiary of the esteemed Godrej Group, the company has been shaping landmark residential and commercial communities across major cities since 1990. Godrej Properties emphasizes architectural excellence, sustainable design, and transparent practices, earning trust among homebuyers and investors alike. The brand&apos;s projects are known for thoughtful planning, premium amenities, and long-term value creation. With multiple award recognitions and a strong emphasis on engineering quality, Godrej Properties consistently delivers homes that blend lifestyle comfort with modern living needs — and Godrej Yelahanka exemplifies this commitment
            </p>
          </div>
        </div>
      </div>

      {/* Decorative Watermark SVG - Right Side */}
      <div 
        className="absolute right-0 top-1/2 -translate-y-1/2 opacity-10 pointer-events-none hidden lg:block"
        style={{ width: '250px', height: '250px' }}
      >
        <Image 
          src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/022e19dd-9d1c-4edd-bdad-22186f35e1bc-yelahanka-newlaunch-co-in/assets/svgs/about-right-element-13.svg" 
          alt="Decorative Element Right"
          width={250}
          height={250}
          className="object-contain"
        />
      </div>
    </section>
  );
};

export default AboutDeveloper;