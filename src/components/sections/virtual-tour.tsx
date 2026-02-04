thought
import React from 'react';
import Image from 'next/image';

const VirtualTour = () => {
  return (
    <section id="section-virtual-tour" className="relative py-20 bg-[#212529]">
      <div className="container mx-auto px-4 lg:px-0">
        <div className="flex flex-col items-center">
          {/* Section Heading */}
          <div className="mb-10 text-center">
            <h2 className="text-[2rem] font-semibold text-white uppercase tracking-[0.05em] leading-[1.3] relative pb-4 inline-block after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translateX-1/2 after:w-[60px] after:height-[2px] after:bg-white">
              VIRTUAL TOUR
            </h2>
          </div>

          {/* Virtual Tour Video Container */}
          <div className="w-full max-w-[1000px] relative transition-transform duration-300 hover:scale-[1.01]">
            <div className="relative rounded-[8px] overflow-hidden shadow-2xl cursor-pointer aspect-video md:aspect-[2.4/1]">
              {/* Main Thumbnail - Using a suitable project rendering from the aesthetic */}
              <Image 
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/022e19dd-9d1c-4edd-bdad-22186f35e1bc-yelahanka-newlaunch-co-in/assets/images/banner-web-2.jpg" 
                alt="Godrej Yelahanka Project View"
                fill
                className="object-cover"
                priority
              />
              
              {/* Dark Overlay for text legibility */}
              <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-center p-6 bg-gradient-to-t from-black/60 to-transparent">
                
                {/* Play Icon Container */}
                <div className="mb-4 transform transition-transform duration-300 hover:scale-110">
                  <Image 
                    src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/022e19dd-9d1c-4edd-bdad-22186f35e1bc-yelahanka-newlaunch-co-in/assets/images/youtube-21.png"
                    alt="Play Video"
                    width={72}
                    height={72}
                    className="w-[60px] h-auto md:w-[72px]"
                  />
                </div>

                {/* Video Info */}
                <span className="text-white text-sm md:text-base font-medium uppercase tracking-wider mb-1">
                  Virtual Tour
                </span>
                <h3 className="text-white text-2xl md:text-3xl font-bold uppercase mb-1">
                  GODREJ YELAHANKA ,
                </h3>
                <p className="text-white text-xs md:text-sm font-medium">
                  At: Yelahanka, North Bengaluru
                </p>
              </div>
            </div>
            
            {/* Background Decorative SVG - Positioned like the screenshots show ornamental elements */}
            <div className="absolute -bottom-16 -left-16 opacity-10 pointer-events-none hidden md:block">
               <Image 
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/022e19dd-9d1c-4edd-bdad-22186f35e1bc-yelahanka-newlaunch-co-in/assets/svgs/VT-5.svg"
                alt="Decoration"
                width={200}
                height={200}
               />
            </div>
            <div className="absolute -bottom-16 -right-16 opacity-10 pointer-events-none hidden md:block scale-x-[-1]">
               <Image 
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/022e19dd-9d1c-4edd-bdad-22186f35e1bc-yelahanka-newlaunch-co-in/assets/svgs/VT-5.svg"
                alt="Decoration"
                width={200}
                height={200}
               />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VirtualTour;