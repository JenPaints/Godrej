import { useEffect, useRef } from 'react';
import './Amenities.css';

const Amenities = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    const elements = sectionRef.current?.querySelectorAll('.animate-on-scroll');
    elements?.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const amenities = [
    { img: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/022e19dd-9d1c-4edd-bdad-22186f35e1bc-yelahanka-newlaunch-co-in/assets/images/amen-1-6.jpg', title: 'Grand Clubhouse' },
    { img: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/022e19dd-9d1c-4edd-bdad-22186f35e1bc-yelahanka-newlaunch-co-in/assets/images/amen-2-7.jpg', title: 'Infinity Pool' },
    { img: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/022e19dd-9d1c-4edd-bdad-22186f35e1bc-yelahanka-newlaunch-co-in/assets/images/amen-3-8.jpg', title: 'Fitness Studio' },
    { img: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/022e19dd-9d1c-4edd-bdad-22186f35e1bc-yelahanka-newlaunch-co-in/assets/images/amen-4-9.jpg', title: "Kids' Play Zone" }
  ];

  return (
    <section id="amenities" className="section-padding textured-bg" ref={sectionRef}>
      <div className="container">
        <div className="section-header">
          <span className="section-subtitle">World-Class Facilities</span>
          <h2>Amenities</h2>
          <p className="section-desc">Immerse yourself in a lifestyle of luxury with carefully curated amenities designed for every age group.</p>
        </div>
        <div className="amenities-grid">
          {amenities.map((amenity, index) => (
            <div key={index} className="amenity-item animate-on-scroll">
              <div className="amenity-img-box">
                <img src={amenity.img} alt={amenity.title} />
              </div>
              <div className="amenity-info">
                <h3>{amenity.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Amenities;
