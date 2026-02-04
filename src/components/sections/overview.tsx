import React from 'react';
import Image from 'next/image';

const Overview = () => {
  return (
    <section 
      id="section-overview" 
      className="textured-bg py-12 md:py-20 lg:py-24"
    >
      <div className="container px-4">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
          {/* Left Column: Content */}
          <div className="w-full lg:w-1/2 space-y-6">
            <div className="relative inline-block mb-6 lg:mb-8 text-center lg:text-left w-full lg:w-auto">
              <h2 className="text-[32px] font-semibold tracking-[0.05em] uppercase pb-4 after:content-[''] after:absolute after:bottom-0 after:left-1/2 lg:after:left-0 lg:after:translate-x-0 after:-translate-x-1/2 after:w-[60px] after:height-[2px] after:bg-[#05070a]">
                overview
              </h2>
            </div>
            
            <div className="prose prose-slate max-w-none">
              <p className="text-[#212529] text-base leading-[1.6] text-justify lg:text-left">
                Godrej Yelahanka in Yelahanka, North Bangalore, is a premium residential project by Godrej Properties located in a rapidly growing and well-connected suburb of Bengaluru. Spread over about 10 acres, the development features thoughtfully designed 3, 3.5, and 4.5 BHK apartments across multiple high-rise towers with modern layouts that offer abundant natural light and ventilation. Positioned close to key arterial roads, Kempegowda International Airport, tech hubs, and social infrastructure, the project ensures excellent connectivity and everyday convenience.
              </p>
              <p className="text-[#212529] text-base leading-[1.6] text-justify lg:text-left">
                Residents can enjoy a wide range of world-class amenities including a clubhouse, swimming pool, gym, landscaped gardens, children’s play zones, and community spaces for balanced urban living.
              </p>
            </div>

            {/* Project Highlights Grid (Optional but implied by Design) */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-4">
              <div className="border border-[#e5e5e5] p-4 bg-white rounded-sm text-center">
                <p className="text-[12px] uppercase text-[#737373] mb-1">Type</p>
                <p className="text-[14px] font-semibold">3, 3.5 & 4.5 BHK</p>
              </div>
              <div className="border border-[#e5e5e5] p-4 bg-white rounded-sm text-center">
                <p className="text-[12px] uppercase text-[#737373] mb-1">Price</p>
                <p className="text-[14px] font-semibold">₹ 2.88 Cr*</p>
              </div>
              <div className="border border-[#e5e5e5] p-4 bg-white rounded-sm text-center">
                <p className="text-[12px] uppercase text-[#737373] mb-1">Area</p>
                <p className="text-[14px] font-semibold">1600-2500 Sq.Ft.</p>
              </div>
              <div className="border border-[#e5e5e5] p-4 bg-white rounded-sm text-center">
                <p className="text-[12px] uppercase text-[#737373] mb-1">Location</p>
                <p className="text-[14px] font-semibold">Yelahanka</p>
              </div>
            </div>
          </div>

          {/* Right Column: Image */}
          <div className="w-full lg:w-1/2">
            <div className="relative rounded-lg overflow-hidden shadow-card group">
              <Image 
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/022e19dd-9d1c-4edd-bdad-22186f35e1bc-yelahanka-newlaunch-co-in/assets/images/overview-img1-5.jpg"
                alt="Godrej Yelahanka Overview Project Image"
                width={800}
                height={600}
                className="w-full h-auto object-cover transform transition-transform duration-700 group-hover:scale-105"
                priority
              />
              <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors duration-300"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Overview;