import React from 'react';
import Image from 'next/image';

const GallerySection = () => {
  const galleryImages = [
    {
      url: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/022e19dd-9d1c-4edd-bdad-22186f35e1bc-yelahanka-newlaunch-co-in/assets/images/gallery1-19.jpg",
      alt: "Godrej Yelahanka Architectural Render 1"
    },
    {
      url: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/022e19dd-9d1c-4edd-bdad-22186f35e1bc-yelahanka-newlaunch-co-in/assets/images/gallery2-20.jpg",
      alt: "Godrej Yelahanka Architectural Render 2"
    },
    {
      url: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/022e19dd-9d1c-4edd-bdad-22186f35e1bc-yelahanka-newlaunch-co-in/assets/images/gallery3-15.jpg",
      alt: "Godrej Yelahanka Architectural Render 3"
    },
    {
      url: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/022e19dd-9d1c-4edd-bdad-22186f35e1bc-yelahanka-newlaunch-co-in/assets/images/gallery4-16.jpg",
      alt: "Godrej Yelahanka Architectural Render 4"
    },
    {
      url: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/022e19dd-9d1c-4edd-bdad-22186f35e1bc-yelahanka-newlaunch-co-in/assets/images/gallery5-17.jpg",
      alt: "Godrej Yelahanka Architectural Render 5"
    },
    {
      url: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/022e19dd-9d1c-4edd-bdad-22186f35e1bc-yelahanka-newlaunch-co-in/assets/images/gallery6-18.jpg",
      alt: "Godrej Yelahanka Architectural Render 6"
    }
  ];

  return (
    <section 
      id="section-gallery" 
      className="py-12 md:py-20 bg-white"
    >
      <div className="container mx-auto px-4 md:px-0">
        <div className="mb-12 text-center">
          <h2 className="text-[2rem] font-semibold uppercase tracking-[0.05em] leading-[1.3] relative pb-4 inline-block after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-[60px] after:height-[2px] after:bg-[#05070a]">
            Gallery
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {galleryImages.map((image, index) => (
            <div 
              key={index} 
              className="group overflow-hidden rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 bg-[#f5f5f5] min-h-[250px] relative"
            >
              <div className="aspect-[16/10] w-full h-full relative overflow-hidden">
                <Image
                  src={image.url}
                  alt={image.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Visual flourishes matching header/footer patterns from design but kept subtle */}
      <style jsx global>{`
        #section-gallery h2::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 50%;
          transform: translateX(-50%);
          width: 60px;
          height: 2px;
          background-color: #05070a;
        }
      `}</style>
    </section>
  );
};

export default GallerySection;