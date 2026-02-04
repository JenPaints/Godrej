import { useEffect, useRef } from 'react';
import './Overview.css';

const Overview = ({ onOpenModal }) => {
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

  return (
    <section id="overview" className="section-padding textured-bg" ref={sectionRef}>
      <div className="container">
        <div className="overview-grid">
          <div className="overview-text animate-on-scroll">
            <span className="section-subtitle">Exquisite Living</span>
            <h2>Project Overview</h2>
            <p>Godrej Yelahanka in Yelahanka, North Bangalore, is a premium residential project by Godrej Properties located in a rapidly growing and well-connected suburb of Bengaluru. Spread over about 10 acres, the development features thoughtfully designed 3, 3.5, and 4.5 BHK apartments across multiple high-rise towers with modern layouts that offer abundant natural light and ventilation.</p>
            <p>Residents can enjoy a wide range of world-class amenities including a clubhouse, swimming pool, gym, landscaped gardens, children's play zones, and community spaces for balanced urban living. The project also benefits from excellent connectivity to major IT hubs, reputed schools, hospitals, and shopping centers. With lush green surroundings and sustainable design elements, Godrej Yelahanka offers a perfect blend of luxury, comfort, and convenience for modern families.</p>
            <div className="downloads-flex">
              <button className="btn-download" onClick={onOpenModal}>
                <i className="fas fa-file-pdf"></i> Brochure
              </button>
              <button className="btn-download" onClick={onOpenModal}>
                <i className="fas fa-layer-group"></i> Floor Plan
              </button>
              <button className="btn-download" onClick={onOpenModal}>
                <i className="fas fa-rupee-sign"></i> Price List
              </button>
            </div>
          </div>
          <div className="overview-visual animate-on-scroll">
            <div className="image-wrapper">
              <img src="/assets/godrej-avenues-2.jpg" alt="Godrej Yelahanka Overview" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Overview;
