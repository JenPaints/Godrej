"use client";

import React, { useState } from "react";
import Image from "next/image";

const PlansSection = () => {
  const [activeTab, setActiveTab] = useState("3 BHK");

  const plans = [
    {
      id: "3 BHK",
      label: "3 BHK",
      image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/022e19dd-9d1c-4edd-bdad-22186f35e1bc-yelahanka-newlaunch-co-in/assets/images/mp-12.jpg",
    },
    {
      id: "3.5 BHK",
      label: "3.5 BHK",
      image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/022e19dd-9d1c-4edd-bdad-22186f35e1bc-yelahanka-newlaunch-co-in/assets/images/floor-1-13.jpg",
    },
    {
      id: "4.5 BHK",
      label: "4.5 BHK",
      image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/022e19dd-9d1c-4edd-bdad-22186f35e1bc-yelahanka-newlaunch-co-in/assets/images/floor-2-14.jpg",
    },
  ];

  return (
    <section id="section-floorplans" className="py-20 bg-white">
      <div className="container mx-auto px-4 max-w-[1200px]">
        {/* Section Heading */}
        <div className="text-center mb-12">
          <h2 className="text-[2rem] font-semibold leading-[1.3] uppercase tracking-[0.05em] relative pb-4 inline-block mb-8">
            Plans
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[60px] h-[2px] bg-[#05070a]"></div>
          </h2>
        </div>

        {/* Tabbed Navigation */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {plans.map((plan) => (
            <button
              key={plan.id}
              onClick={() => setActiveTab(plan.id)}
              className={`px-8 py-3 text-sm font-semibold uppercase tracking-wider transition-all duration-300 border-2 rounded-md ${
                activeTab === plan.id
                  ? "bg-[#05070a] text-white border-[#05070a]"
                  : "bg-transparent text-[#212529] border-[#e5e5e5] hover:border-[#05070a]"
              }`}
            >
              {plan.label}
            </button>
          ))}
        </div>

        {/* Plan Image Display */}
        <div className="relative w-full overflow-hidden flex justify-center items-center rounded-lg shadow-sm border border-[#e5e5e5] bg-white p-4 md:p-8">
          {plans.map((plan) => (
            <div
              key={plan.id}
              className={`transition-opacity duration-500 ease-in-out w-full flex justify-center ${
                activeTab === plan.id ? "opacity-100 flex" : "opacity-0 hidden"
              }`}
            >
              <div className="relative w-full max-w-[800px] aspect-[4/3] md:aspect-[16/9]">
                <Image
                  src={plan.image}
                  alt={`${plan.label} Floor Plan`}
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 100vw, 800px"
                  priority={plan.id === "3 BHK"}
                />
              </div>
            </div>
          ))}
        </div>
        
        {/* Disclaimer / Note typically found near plans */}
        <div className="mt-8 text-center text-[#737373] text-[0.85rem] italic">
          *Plans and layouts are subject to change as per regulatory approvals and project development stages.
        </div>
      </div>

      <style jsx>{`
        h2::after {
          display: none; /* Hide global scoped h2 line to use the div for finer control */
        }
      `}</style>
    </section>
  );
};

export default PlansSection;