import React from 'react';
import Image from 'next/image';

const Downloads = () => {
  // Asset constants based on provided <assets> tag
  const assets = {
    brochure: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/022e19dd-9d1c-4edd-bdad-22186f35e1bc-yelahanka-newlaunch-co-in/assets/svgs/brochure-6.svg",
    floorPlan: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/022e19dd-9d1c-4edd-bdad-22186f35e1bc-yelahanka-newlaunch-co-in/assets/svgs/floorplan-7.svg",
    sitePlan: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/022e19dd-9d1c-4edd-bdad-22186f35e1bc-yelahanka-newlaunch-co-in/assets/svgs/sitemap-8.svg"
  };

  const downloadItems = [
    {
      title: "Brochure",
      icon: assets.brochure,
      alt: "Brochure Icon"
    },
    {
      title: "Floor Plan",
      icon: assets.floorPlan,
      alt: "Floor Plan Icon"
    },
    {
      title: "Site Plan",
      icon: assets.sitePlan,
      alt: "Site Plan Icon"
    }
  ];

  return (
    <section 
      id="section-downloads" 
      className="py-[80px] bg-white text-center"
      style={{
        paddingTop: '80px',
        paddingBottom: '80px',
      }}
    >
      <div className="container mx-auto px-4 max-w-[1200px]">
        {/* Section Heading */}
        <h2 
          className="relative pb-4 mb-12 text-[32px] font-semibold uppercase tracking-[0.05em] leading-[1.3] font-display inline-block"
          style={{
            fontFamily: '"Montserrat", sans-serif',
          }}
        >
          Downloads
          <span 
            className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[60px] h-[0.5px] bg-[#05070a]"
          ></span>
        </h2>

        {/* Buttons Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-8">
          {downloadItems.map((item, index) => (
            <button
              key={index}
              className="flex items-center justify-center gap-4 bg-[#05070a] hover:bg-[#1a1d21] text-white py-6 px-4 rounded-[8px] transition-all duration-300 shadow-[0_4px_15px_rgba(0,0,0,0.1)] group"
              onClick={() => {
                // This would typically trigger a download modal or direct download
                console.log(`Downloading ${item.title}`);
              }}
            >
              <div className="w-[40px] h-[40px] relative flex items-center justify-center">
                <Image
                  src={item.icon}
                  alt={item.alt}
                  width={34}
                  height={34}
                  className="object-contain filter invert brightness-0"
                />
              </div>
              <span 
                className="text-[18px] font-semibold tracking-wider font-display"
                style={{
                  fontFamily: '"Montserrat", sans-serif',
                }}
              >
                {item.title}
              </span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Downloads;