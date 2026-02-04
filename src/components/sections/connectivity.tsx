import React from 'react';
import Image from 'next/image';

const ConnectivitySection = () => {
  const landmarks = [
    {
      title: "Transportation",
      icon: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/022e19dd-9d1c-4edd-bdad-22186f35e1bc-yelahanka-newlaunch-co-in/assets/svgs/connectivity-9.svg",
      items: [
        { name: "Yelahanka Railway Station", distance: "5 Min" },
        { name: "Kempegowda International Airport", distance: "20 Min" },
        { name: "NH 44 (Bellary Road)", distance: "5 Min" },
      ]
    },
    {
      title: "IT & Business Hubs",
      icon: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/022e19dd-9d1c-4edd-bdad-22186f35e1bc-yelahanka-newlaunch-co-in/assets/svgs/IT-10.svg",
      items: [
        { name: "Manyata Tech Park", distance: "15 Min" },
        { name: "Kirloskar Business Park", distance: "10 Min" },
        { name: "Ecopolis IT/ITES SEZ", distance: "10 Min" },
      ]
    },
    {
      title: "Educational Institutions",
      icon: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/022e19dd-9d1c-4edd-bdad-22186f35e1bc-yelahanka-newlaunch-co-in/assets/svgs/school-11.svg",
      items: [
        { name: "Ryan International School", distance: "8 Min" },
        { name: "DPS North", distance: "12 Min" },
        { name: "Vidyashilp Academy", distance: "10 Min" },
      ]
    },
    {
      title: "Hospitals & Healthcare",
      icon: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/022e19dd-9d1c-4edd-bdad-22186f35e1bc-yelahanka-newlaunch-co-in/assets/svgs/hospital-12.svg",
      items: [
        { name: "Aster CMI Hospital", distance: "15 Min" },
        { name: "Columbia Asia (Hebbal)", distance: "12 Min" },
        { name: "Manipal Hospital", distance: "10 Min" },
      ]
    }
  ];

  return (
    <section id="section-connectivity" className="py-20 bg-white">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-[32px] font-semibold uppercase tracking-[0.05em] mb-4 relative inline-block pb-4 after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translateX-1/2 after:w-[60px] after:height-[2px] after:bg-[#05070a]">
            Connectivity
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          {/* Map and Directions side */}
          <div className="w-full">
            <div className="rounded-lg overflow-hidden shadow-card border border-border h-[450px] relative group">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62164.71765089334!2d77.558373!3d13.102664!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1ec0429f5607%3A0xc3f6224fbb29cce2!2sYelahanka%2C%20Bengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1715858000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Google Map showing Yelahanka area"
                className="grayscale hover:grayscale-0 transition-all duration-500"
              ></iframe>
              <div className="absolute bottom-6 left-6">
                <a
                  href="https://maps.app.goo.gl/Yelahanka"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#05070a] text-white px-6 py-3 rounded-sm font-semibold text-sm uppercase tracking-wider flex items-center gap-2 hover:bg-[#1a1d21] transition-colors shadow-lg"
                >
                  <svg 
                    width="18" 
                    height="18" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                  >
                    <polygon points="3 11 22 2 13 21 11 13 3 11" />
                  </svg>
                  Get Directions
                </a>
              </div>
            </div>
          </div>

          {/* Landmarks Grid side */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {landmarks.map((category, idx) => (
              <div 
                key={idx} 
                className="bg-[#faf8f5] p-6 rounded-md border border-border/50 hover:shadow-md transition-all duration-300"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 flex-shrink-0 bg-white rounded-full flex items-center justify-center p-2.5 shadow-sm">
                    <Image
                      src={category.icon}
                      alt={category.title}
                      width={28}
                      height={28}
                      className="object-contain"
                    />
                  </div>
                  <h3 className="text-base font-bold text-[#05070a] leading-tight">
                    {category.title}
                  </h3>
                </div>
                <ul className="space-y-3">
                  {category.items.map((item, i) => (
                    <li key={i} className="flex justify-between items-start text-sm border-b border-border/30 pb-2 last:border-0 last:pb-0">
                      <span className="text-[#212529] font-medium leading-[1.4] max-w-[70%]">
                        {item.name}
                      </span>
                      <span className="text-[#737373] font-semibold whitespace-nowrap">
                        {item.distance}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Proximity Tagline */}
        <div className="mt-12 text-center">
          <p className="text-[#737373] text-sm italic">
            *Approximate travel time as per Google Maps in normal traffic conditions.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ConnectivitySection;