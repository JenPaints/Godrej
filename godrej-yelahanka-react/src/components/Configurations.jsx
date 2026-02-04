import { useEffect, useRef } from 'react';
import './Configurations.css';

const Configurations = ({ openModal }) => {
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

  const configs = [
    { title: '3 BHK Premium', area: '~1600 Sq.Ft.*', price: '₹ 2.88 Cr*' },
    { title: '3 BHK Luxe', area: '~1900 Sq.Ft.*', price: '₹ 3.42 Cr*' },
    { title: '3.5 BHK Luxe', area: '~2150 Sq.Ft.*', price: '₹ 3.87 Cr*' },
    { title: '4.5 BHK Luxe', area: '~2500 Sq.Ft.*', price: '₹ 4.5 Cr*' }
  ];

  return (
    <section id="configurations" className="section-padding" ref={sectionRef}>
      <div className="container">
        <div className="section-header">
          <span className="section-subtitle">Choose Your Home</span>
          <h2>Configurations</h2>
        </div>
        <div className="config-grid">
          {configs.map((config, index) => (
            <div key={index} className="config-card animate-on-scroll">
              <div className="config-header">
                <h3>{config.title}</h3>
              </div>
              <div className="config-body">
                <div className="config-stat">
                  <span className="stat-label">Saleable Area</span>
                  <span className="stat-value">{config.area}</span>
                </div>
                <div className="config-price">
                  <span className="price-label">Price Starts From</span>
                  <span className="price-value">{config.price}</span>
                </div>
              </div>
              <button className="btn-outline-dark" onClick={openModal}>Enquire Now</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Configurations;
