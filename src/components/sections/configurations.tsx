import React from 'react';

interface ConfigCardProps {
  title: string;
  area: string;
  price: string;
}

const ConfigCard = ({ title, area, price }: ConfigCardProps) => {
  return (
    <div className="bg-white border border-[#e5e5e5] p-6 rounded-lg text-center shadow-sm hover:shadow-md transition-shadow duration-300">
      <h3 className="font-display text-[20px] font-semibold text-[#212529] mb-4 uppercase tracking-wide">
        {title}
      </h3>
      <div className="mb-6">
        <p className="text-[#737373] text-[14px] uppercase mb-1">Super Built-Up Area</p>
        <p className="text-[18px] font-semibold text-[#212529]">{area}</p>
      </div>
      <div className="pt-4 border-t border-[#f5f5f5]">
        <p className="text-[#737373] text-[12px] uppercase mb-1">Starts From</p>
        <p className="text-[22px] font-bold text-[#05070a]">{price}</p>
      </div>
      <button className="mt-6 w-full bg-[#05070a] text-white py-3 px-4 text-[13px] font-semibold uppercase tracking-widest hover:bg-[#1a1d21] transition-colors duration-300 rounded-md">
        Enquire Now
      </button>
    </div>
  );
};

const Configurations = () => {
  const configs = [
    {
      title: "3 BHK Premium",
      area: "1600 Sq.Ft.",
      price: "₹ 2.88 Cr*",
    },
    {
      title: "3 BHK Luxe",
      area: "1900 Sq.Ft.",
      price: "₹ 3.42 Cr*",
    },
    {
      title: "3.5 BHK Luxe",
      area: "2150 Sq.Ft.",
      price: "₹ 3.87 Cr*",
    },
    {
      title: "4.5 BHK Luxe",
      area: "2500 Sq.Ft.",
      price: "₹ 4.5 Cr*",
    },
  ];

  return (
    <section id="section-cost-sheet" className="py-20 bg-white">
      <div className="container mx-auto px-4 max-w-[1200px]">
        <div className="mb-12">
          <h2 className="text-center text-[32px] font-semibold text-[#212529] uppercase tracking-[0.05em] relative pb-4 after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translateX-1/2 after:w-[60px] after:height-[2px] after:bg-[#05070a]">
            Configurations
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {configs.map((config, index) => (
            <ConfigCard
              key={index}
              title={config.title}
              area={config.area}
              price={config.price}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Configurations;