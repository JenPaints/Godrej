import React from 'react';
import Image from 'next/image';

const amenitiesData = [
  {
    title: "Clubhouse",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/022e19dd-9d1c-4edd-bdad-22186f35e1bc-yelahanka-newlaunch-co-in/assets/images/amen-1-6.jpg",
    alt: "Luxurious Clubhouse at Godrej Yelahanka"
  },
  {
    title: "Swimming Pool",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/022e19dd-9d1c-4edd-bdad-22186f35e1bc-yelahanka-newlaunch-co-in/assets/images/amen-2-7.jpg",
    alt: "Modern Swimming Pool for residents"
  },
  {
    title: "Gymnasium",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/022e19dd-9d1c-4edd-bdad-22186f35e1bc-yelahanka-newlaunch-co-in/assets/images/amen-3-8.jpg",
    alt: "State-of-the-art Fitness Center"
  },
  {
    title: "Children's Play Area",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/022e19dd-9d1c-4edd-bdad-22186f35e1bc-yelahanka-newlaunch-co-in/assets/images/amen-4-9.jpg",
    alt: "Safe and fun children's play zones"
  },
  {
    title: "Landscaped Gardens",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/022e19dd-9d1c-4edd-bdad-22186f35e1bc-yelahanka-newlaunch-co-in/assets/images/amen-5-10.jpg",
    alt: "Beautifully landscaped green spaces"
  },
  {
    title: "Social Spaces",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/022e19dd-9d1c-4edd-bdad-22186f35e1bc-yelahanka-newlaunch-co-in/assets/images/amen-7-11.jpg",
    alt: "Community spaces for interaction"
  }
];

const Amenities = () => {
  return (
    <section 
      id="section-amenities" 
      className="textured-bg py-[80px] md:py-[100px]"
      style={{
        backgroundColor: '#FAF8F5',
        backgroundImage: "url('https://www.godrej-yehalanka.com/assets/img/theme-bg-22.webp')",
        backgroundRepeat: 'repeat'
      }}
    >
      <div className="container px-4 mx-auto max-w-[1240px]">
        <div className="mb-[50px] text-center">
          <h2 className="text-[32px] font-semibold uppercase tracking-[0.05em] text-[#05070a] mb-4 relative pb-4 inline-block after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translateX-1/2 after:w-[60px] after:height-[2px] after:bg-[#05070a]">
            Amenities
          </h2>
          <p className="text-[#737373] text-[16px] max-w-[800px] mx-auto mt-4 font-sans leading-[1.6]">
            Residents can enjoy a wide range of world-class amenities including a clubhouse, swimming pool, gym, landscaped gardens, children’s play zones, and community spaces for balanced urban living.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-[30px]">
          {amenitiesData.map((amenity, index) => (
            <div 
              key={index} 
              className="group relative overflow-hidden rounded-md shadow-[0_4px_15px_rgba(0,0,0,0.1)] bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_25px_rgba(0,0,0,0.15)]"
            >
              <div className="relative aspect-[4/3] w-full overflow-hidden">
                <Image
                  src={amenity.image}
                  alt={amenity.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6 translate-y-[10%] group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-white text-[18px] md:text-[20px] font-semibold tracking-wide drop-shadow-md">
                    {amenity.title}
                  </h3>
                  <div className="w-0 group-hover:w-full h-0.5 bg-white mt-2 transition-all duration-500 delay-100" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx global>{`
        .textured-bg {
          background-color: #faf8f5;
          background-image: url('https://www.godrej-yehalanka.com/assets/img/theme-bg-22.webp');
          background-repeat: repeat;
        }
      `}</style>
    </section>
  );
};

export default Amenities;