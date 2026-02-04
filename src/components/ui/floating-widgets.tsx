"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Phone, Mail, X } from "lucide-react";

const FloatingWidgets = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => setIsOpen(!isOpen);

  return (
    <>
      {/* 1. WhatsApp floating widget - Desktop & Tablet */}
      <div className="fixed right-5 bottom-32 z-[9998] flex flex-col items-center gap-1 group hidden md:flex">
        <a
          href="https://api.whatsapp.com/send?phone=+918792564404&text=Hello, I'm interested in Godrej Yelahanka. Please get in touch with me. My name is"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-whatsapp w-[50px] h-[50px] rounded-full flex items-center justify-center shadow-lg transition-transform hover:scale-110"
        >
          <img
            src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/022e19dd-9d1c-4edd-bdad-22186f35e1bc-yelahanka-newlaunch-co-in/assets/svgs/whatsapp-2.svg"
            alt="WhatsApp"
            className="w-7 h-7"
          />
        </a>
        <p className="bg-white px-3 py-1 rounded-md text-[12px] font-semibold text-foreground shadow-sm opacity-0 group-hover:opacity-100 transition-opacity">
          Talk to us?
        </p>
      </div>

      {/* 2. Phone Call floating widget - Desktop & Tablet */}
      <a
        href="tel:+918792564404"
        className="fixed left-5 bottom-8 z-[9998] bg-primary rounded-full p-3 shadow-lg hover:bg-opacity-90 transition-all hidden md:block"
      >
        <Phone className="text-white w-6 h-6" />
      </a>

      {/* 3. Sticky "Enquire Now" button - Side (Desktop) */}
      <div className="fixed -right-[50px] top-1/2 -translate-y-1/2 z-[9997] rotate-90 hidden md:block origin-center">
        <button
          onClick={toggleModal}
          className="bg-primary hover:bg-[#1a1d21] text-white px-6 py-3 font-semibold uppercase text-[14px] tracking-wider transition-colors shadow-md border-x border-t border-white"
          style={{ width: "160px" }}
        >
          Enquire Now
        </button>
      </div>

      {/* 4. Mobile Sticky Action Bar */}
      <div className="fixed bottom-0 left-0 right-0 z-[10000] flex md:hidden bg-white border-t border-border h-14 translate-y-0 shadow-[0_-2px_10px_rgba(0,0,0,0.1)]">
        <button
          onClick={toggleModal}
          className="flex-1 flex items-center justify-center gap-2 text-[14px] font-semibold text-foreground border-r border-border hover:bg-muted transition-colors uppercase"
        >
          <img 
            src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/022e19dd-9d1c-4edd-bdad-22186f35e1bc-yelahanka-newlaunch-co-in/assets/svgs/mail-1.svg" 
            alt="Enquire" 
            className="w-4 h-4"
          />
          Enquire
        </button>
        <a
          href="tel:+918792564404"
          className="flex-1 flex items-center justify-center gap-2 text-[14px] font-semibold text-foreground border-r border-border hover:bg-muted transition-colors uppercase"
        >
          <img 
            src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/022e19dd-9d1c-4edd-bdad-22186f35e1bc-yelahanka-newlaunch-co-in/assets/svgs/call-3.svg" 
            alt="Call Now" 
            className="w-4 h-4"
          />
          Call Now
        </a>
        <a
          href="https://api.whatsapp.com/send?phone=+918792564404&text=Hello, I'm interested in Godrej Yelahanka..."
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex items-center justify-center gap-2 text-[14px] font-semibold text-foreground hover:bg-muted transition-colors uppercase"
        >
          <img 
            src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/022e19dd-9d1c-4edd-bdad-22186f35e1bc-yelahanka-newlaunch-co-in/assets/svgs/whatsapp-2.svg" 
            alt="Whatsapp" 
            className="w-4 h-4"
          />
          Whatsapp
        </a>
      </div>

      {/* Enquiry Modal */}
      {isOpen && (
        <div className="fixed inset-0 z-[10001] flex items-center justify-center p-4">
          <div 
            className="absolute inset-0 bg-black/60 backdrop-blur-sm" 
            onClick={toggleModal}
          />
          <div className="relative bg-[#05070a] text-white w-full max-w-md rounded-lg shadow-2xl p-8 animate-in fade-in zoom-in duration-300">
            <button 
              onClick={toggleModal}
              className="absolute top-4 right-4 text-white/70 hover:text-white"
            >
              <X className="w-6 h-6" />
            </button>
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold uppercase tracking-wide">Enquire Now</h3>
            </div>
            <form className="space-y-6">
              <div className="space-y-1">
                <input
                  type="text"
                  placeholder="Name*"
                  className="w-full bg-transparent border-b border-white/30 py-2 text-sm focus:border-white focus:outline-none placeholder:text-white/50"
                  required
                />
              </div>
              <div className="space-y-1">
                <input
                  type="tel"
                  placeholder="Mobile number*"
                  className="w-full bg-transparent border-b border-white/30 py-2 text-sm focus:border-white focus:outline-none placeholder:text-white/50"
                  required
                />
              </div>
              <div className="space-y-4">
                <p className="text-sm font-medium text-white/80">Looking for:</p>
                <div className="flex flex-wrap gap-4 text-sm justify-center">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input type="radio" name="bhk" className="accent-accent" />
                    <span>3 BHK</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input type="radio" name="bhk" className="accent-accent" />
                    <span>3.5 BHK</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input type="radio" name="bhk" className="accent-accent" />
                    <span>4.5 BHK</span>
                  </label>
                </div>
              </div>
              <button
                type="submit"
                className="w-full bg-white text-primary font-bold py-3 rounded-sm uppercase tracking-wider text-xs hover:bg-white/90 transition-all"
              >
                I&apos;M INTERESTED
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default FloatingWidgets;