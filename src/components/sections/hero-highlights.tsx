import React from 'react';
import Image from 'next/image';

const HeroHighlights = () => {
  return (
    <div className="absolute top-[180px] left-0 right-0 z-[100] pointer-events-none">
      <div className="container mx-auto px-4 md:px-0">
        <div className="max-w-[540px] hero-overlay-card p-6 md:p-8 pointer-events-auto animate-in fade-in slide-in-from-left-8 duration-700">
          <div className="flex flex-col gap-1 mb-6">
            <h2 className="text-[28px] md:text-[32px] font-bold text-brand-dark text-left p-0 m-0 leading-tight uppercase tracking-tight after:hidden">
              Godrej Yelahanka
            </h2>
            <div className="flex items-center gap-2 text-muted-foreground mt-2">
              <svg 
                width="12" 
                height="15" 
                viewBox="0 0 12 15" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
                className="shrink-0"
              >
                <path d="M6 0C2.68 0 0 2.68 0 6C0 10.5 6 15 6 15C6 15 12 10.5 12 6C12 2.68 9.32 0 6 0ZM6 8.5C4.62 8.5 3.5 7.38 3.5 6C3.5 4.62 4.62 3.5 6 3.5C7.38 3.5 8.5 4.62 8.5 6C8.5 7.38 7.38 8.5 6 8.5Z" fill="currentColor"/>
              </svg>
              <span className="text-[14px] md:text-[16px] font-medium">Yelahanka, North Bengaluru</span>
            </div>
            <p className="text-[12px] text-muted-foreground mt-1 mb-0 italic">
              RERA Registration No : Coming Soon
            </p>
          </div>

          <div className="relative border-t border-b border-dashed border-gray-300 py-6 my-4 overflow-hidden">
            {/* Background vector illustration - city skyline silhouette as seen in reference */}
            <div className="absolute bottom-0 right-0 opacity-10 pointer-events-none">
              <img 
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/022e19dd-9d1c-4edd-bdad-22186f35e1bc-yelahanka-newlaunch-co-in/assets/images/Vector-4.webp" 
                alt="" 
                className="h-[60px] object-contain"
              />
            </div>

            <div className="flex items-end justify-between relative z-10">
              <div className="flex flex-col">
                <span className="text-[22px] md:text-[24px] font-bold text-brand-dark leading-tight">
                  3, 3.5 & 4.5 BHK
                </span>
                <span className="text-[14px] text-muted-foreground font-medium uppercase tracking-wider">
                  Apartment
                </span>
              </div>
              <div className="flex flex-col items-end">
                <span className="text-[26px] md:text-[30px] font-extrabold text-brand-dark leading-tight">
                  ₹ 2.88 Cr*
                </span>
              </div>
            </div>
          </div>

          <button className="w-full btn-primary rounded-md mt-4 py-4 text-[14px] font-bold tracking-widest hover:bg-[#1a1d21] transition-all transform hover:-translate-y-1 active:scale-95 duration-200 shadow-md">
            Get Price Breakdown
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroHighlights;