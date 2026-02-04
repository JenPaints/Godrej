"use client";

import React, { useState, useEffect } from "react";
import { X } from "lucide-react";

const ModalForm = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    bhk: "3 BHK",
  });

  useEffect(() => {
    // Open modal automatically after 3 seconds for lead capture
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
    setIsOpen(false);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[10000] flex items-center justify-center overflow-hidden">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-[#05070a] opacity-80 backdrop-blur-sm"
        onClick={() => setIsOpen(false)}
      />

      {/* Modal Card */}
      <div className="relative w-full max-w-[420px] mx-4 animate-in fade-in zoom-in duration-300">
        {/* Close Button */}
        <button
          onClick={() => setIsOpen(false)}
          className="absolute -top-10 right-0 text-white hover:text-gray-300 transition-colors"
          aria-label="Close"
        >
          <X size={32} strokeWidth={1.5} />
        </button>

        <div className="bg-[#05070a] border border-[#ffffff20] p-8 shadow-2xl">
          <form onSubmit={handleSubmit} className="flex flex-col gap-6">
            <h3 className="text-white text-[24px] font-semibold text-center uppercase tracking-wider mb-2">
              Enquire Now
            </h3>

            {/* Name Input */}
            <div className="relative group">
              <input
                type="text"
                id="name"
                required
                placeholder="Name*"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full bg-transparent border-b border-[#ffffff30] py-3 text-white text-sm focus:outline-none focus:border-white transition-colors placeholder:text-[#ffffff60]"
              />
            </div>

            {/* Phone Input */}
            <div className="relative group">
              <input
                type="tel"
                id="phone"
                required
                placeholder="Mobile number*"
                pattern="[0-9]{10,13}"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="w-full bg-transparent border-b border-[#ffffff30] py-3 text-white text-sm focus:outline-none focus:border-white transition-colors placeholder:text-[#ffffff60]"
              />
            </div>

            {/* BHK Selection */}
            <div className="flex flex-col gap-3 mt-2">
              <label className="text-[#ffffff80] text-[13px] uppercase tracking-wide">
                Looking for:
              </label>
              <div className="flex items-center gap-4 flex-wrap">
                {["3 BHK", "3.5 BHK", "4.5 BHK"].map((option) => (
                  <label 
                    key={option} 
                    className="flex items-center gap-2 text-white text-sm cursor-pointer hover:text-[#ff0000] transition-colors"
                  >
                    <input
                      type="radio"
                      name="bhk"
                      value={option}
                      checked={formData.bhk === option}
                      onChange={(e) => setFormData({ ...formData, bhk: e.target.value })}
                      className="accent-[#ff0000] w-4 h-4 cursor-pointer"
                    />
                    <span>{option}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Hidden Fingerprint/Tracking placeholders as per original HTML */}
            <input type="hidden" id="fingerprint" />

            {/* Submit Button */}
            <button
              type="submit"
              className="mt-4 bg-white text-[#05070a] py-3.5 px-6 font-bold text-[13px] tracking-[0.1em] uppercase hover:bg-[#ff0000] hover:text-white transition-all duration-300 ease-in-out shadow-lg"
            >
              I&apos;M INTERESTED
            </button>
          </form>
        </div>
      </div>
      
      <style jsx global>{`
        input[type="radio"] {
          vertical-align: middle;
          margin-top: -2px;
        }
      `}</style>
    </div>
  );
};

export default ModalForm;