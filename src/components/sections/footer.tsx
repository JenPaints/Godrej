import React from 'react';
import { Phone, ArrowUp } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#05070a] text-white pt-10 pb-0 font-sans">
      <div className="container mx-auto px-4 max-w-[1200px]">
        {/* Disclaimer Section */}
        <div className="text-[12px] leading-[1.8] opacity-80 mb-6 text-center lg:text-left">
          <p className="mb-4">
            <strong>Disclaimer:</strong> The content is for information purposes only and does not constitute an offer to avail of any service. Prices mentioned are subject to change without notice and properties mentioned are subject to availability. Images for representation purposes only.
          </p>
          <p>
            This is the official website of authorized marketing partner. We may share data with RERA registered brokers/companies for further processing. We may also send updates to the mobile number/email id registered with us. All Rights Reserved.
          </p>
        </div>

        {/* Scroll to Top and Call Icons (UI Only as per screenshot) */}
        <div className="flex justify-between items-center py-4 border-t border-white/10">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 border border-white/20 rounded-full flex items-center justify-center cursor-pointer hover:bg-white/10 transition-colors">
              <Phone className="w-5 h-5" />
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div 
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="w-10 h-10 border border-white/20 rounded-full flex items-center justify-center cursor-pointer hover:bg-white/10 transition-colors"
            >
              <ArrowUp className="w-5 h-5" />
            </div>
          </div>
        </div>
      </div>

      {/* Sticky Bottom Form - Desktop Only (reproduced from screenshot) */}
      <div className="hidden lg:block bg-[#05070a] border-t border-white/20 py-6 sticky bottom-0 z-50">
        <div className="container mx-auto max-w-[1200px]">
          <form className="flex flex-wrap items-end justify-between gap-6">
            <div className="flex-1 min-w-[200px]">
              <label className="block text-[11px] uppercase tracking-wider mb-1 text-white/60">First Name*</label>
              <input 
                type="text" 
                placeholder="Enter your name" 
                className="w-full bg-transparent border-b border-white/30 py-2 text-sm focus:outline-none focus:border-white transition-colors"
                required
              />
            </div>

            <div className="flex-1 min-w-[200px]">
              <label className="block text-[11px] uppercase tracking-wider mb-1 text-white/60">Mobile Number*</label>
              <input 
                type="tel" 
                placeholder="Enter mobile number" 
                className="w-full bg-transparent border-b border-white/30 py-2 text-sm focus:outline-none focus:border-white transition-colors"
                required
              />
            </div>

            <div className="flex-[1.5] min-w-[300px]">
              <label className="block text-[11px] uppercase tracking-wider mb-3 text-white/60">Looking for:</label>
              <div className="flex items-center gap-6">
                <label className="flex items-center gap-2 text-sm cursor-pointer hover:text-white/80 transition-colors">
                  <input type="radio" name="bhk_bottom" className="accent-white" /> 3 BHK
                </label>
                <label className="flex items-center gap-2 text-sm cursor-pointer hover:text-white/80 transition-colors">
                  <input type="radio" name="bhk_bottom" className="accent-white" /> 3.5 BHK
                </label>
                <label className="flex items-center gap-2 text-sm cursor-pointer hover:text-white/80 transition-colors">
                  <input type="radio" name="bhk_bottom" className="accent-white" /> 4.5 BHK
                </label>
              </div>
            </div>

            <div className="min-w-[150px]">
              <button 
                type="submit" 
                className="w-full bg-white text-[#05070a] px-8 py-3 text-[14px] font-bold uppercase tracking-widest hover:bg-[#f5f5f5] transition-all duration-300"
              >
                SUBMIT
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Mobile Sticky CTA (Handled as per standard project UI) */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 grid grid-cols-3 bg-white border-t border-gray-200 z-[9999]">
        <a href="mailto:info@example.com" className="flex flex-col items-center justify-center py-3 text-[#212529] font-semibold text-[11px] uppercase tracking-tight gap-1 border-r border-gray-100">
           <img src="https://www.godrej-yehalanka.com/assets/img/mail.svg" alt="Mail" className="w-5 h-5 opacity-70" />
           Enquire
        </a>
        <a href="tel:+918792564404" className="flex flex-col items-center justify-center py-3 text-[#212529] font-semibold text-[11px] uppercase tracking-tight gap-1 border-r border-gray-100">
          <img src="https://www.godrej-yehalanka.com/assets/img/whatsapp.svg" alt="Phone" className="w-5 h-5 opacity-70" />
          Call Now
        </a>
        <a href="https://api.whatsapp.com/send?phone=+918792564404" className="flex flex-col items-center justify-center py-3 text-[#212529] font-semibold text-[11px] uppercase tracking-tight gap-1">
          <img src="https://www.godrej-yehalanka.com/assets/img/call.svg" alt="Whatsapp" className="w-5 h-5 opacity-70" />
          Whatsapp
        </a>
      </div>
    </footer>
  );
};

export default Footer;