import { useState, useEffect } from 'react';
import './Hero.css';

const Hero = ({ openModal }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const slides = [
    'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/022e19dd-9d1c-4edd-bdad-22186f35e1bc-yelahanka-newlaunch-co-in/assets/images/banner-web-3.jpg',
    'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/022e19dd-9d1c-4edd-bdad-22186f35e1bc-yelahanka-newlaunch-co-in/assets/images/banner-web-2-2.jpg',
    '/assets/Godrej_Avenues_1.jpg',
    '/assets/Godrej-IHP-Yelahanka-2-1.webp'
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="hero">
      <div className="hero-slider">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`hero-slide ${index === currentSlide ? 'active' : ''}`}
            style={{
              backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url('${slide}')`
            }}
          />
        ))}
      </div>

      <div className="hero-overlay-card animate-up">
        <div className="hero-badge">NEW LAUNCH</div>
        <h1>Godrej Yelahanka</h1>
        <div className="hero-location">
          <i className="fas fa-map-marker-alt"></i>
          <span>Yelahanka, North Bengaluru</span>
        </div>
        <p className="hero-rera">
          RERA Registration No: Coming Soon
        </p>
        <div className="hero-details">
          <div className="detail-item">
            <span className="detail-label">Configuration</span>
            <span className="detail-value">3, 3.5 & 4.5 BHK</span>
          </div>
          <div className="detail-item">
            <span className="detail-label">Starting Price</span>
            <span className="detail-value">₹ 2.88 Cr*</span>
          </div>
        </div>
        <button className="btn-primary-glow" onClick={openModal}>Request Price List</button>
      </div>
    </section>
  );
};

export default Hero;
