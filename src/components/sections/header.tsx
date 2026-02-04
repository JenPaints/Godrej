import React from 'react';
import Image from 'next/image';

const Header = () => {
  const menuItems = [
    { label: 'Overview', href: '#section-overview' },
    { label: 'Configuration', href: '#section-cost-sheet' },
    { label: 'Amenities', href: '#section-amenities' },
    { label: 'Plans', href: '#section-floorplans' },
    { label: 'Connectivity', href: '#section-connectivity' },
    { label: 'Gallery', href: '#section-gallery' },
    { label: 'About the Developer', href: '#section-about-developer' },
  ];

  return (
    <header
      id="header"
      className="fixed top-0 left-0 w-full bg-white z-[9999] shadow-[0_1px_3px_0_rgba(0,0,0,0.1)] px-4 md:px-[200px] py-[14px] transition-all duration-300"
      style={{ height: '82.3906px' }}
    >
      <div className="flex items-center justify-between h-full max-w-[1520px] mx-auto">
        {/* Logo Section */}
        <div className="flex-shrink-0 w-[240px]">
          <a href="/" className="block">
            <div className="relative w-[190px] h-[51.8125px]">
              <Image
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/022e19dd-9d1c-4edd-bdad-22186f35e1bc-yelahanka-newlaunch-co-in/assets/images/logo-1.png"
                alt="Godrej Yelahanka Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
          </a>
        </div>

        {/* Navigation Section */}
        <nav className="hidden lg:block flex-grow px-[40px] text-center">
          <ul className="flex items-center justify-center space-x-2">
            {menuItems.map((item) => (
              <li key={item.label} className="inline-block px-[10px] py-[16px]">
                <a
                  href={item.href}
                  className="text-[16px] font-medium leading-[1] text-[#212529] hover:text-[#ff0000] transition-colors duration-300 font-sans"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Phone CTA Section */}
        <div className="flex-shrink-0 flex items-center justify-end">
          <div className="hidden md:block">
            <a
              href="tel:+91 8792564404"
              className="bg-[#05070a] text-white px-6 py-3 text-[14px] font-semibold tracking-[0.05em] uppercase transition-all duration-300 hover:bg-[#1a1d21] font-sans"
            >
              +91 8792564404
            </a>
          </div>
          
          {/* Mobile Menu Trigger Placeholder (if needed, though instructions focused on desktop links) */}
          <div className="lg:hidden ml-4">
             <button className="flex flex-col gap-1.5 p-2">
                <span className="w-6 h-0.5 bg-black"></span>
                <span className="w-6 h-0.5 bg-black"></span>
                <span className="w-6 h-0.5 bg-black"></span>
             </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;