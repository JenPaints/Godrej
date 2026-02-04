import { useState, useEffect, useRef } from 'react';
import './FloorPlans.css';

const FloorPlans = ({ openModal }) => {
  const [activeTab, setActiveTab] = useState('3bhk-1600');
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

  const plans = {
    '3bhk-1600': {
      title: '3 BHK Premium',
      area: '1600 Sq.Ft Built-Up Area',
      price: 'Starting from ₹2.88 Cr*',
      specs: [
        { icon: 'bed', label: 'Bedrooms', value: '3 Master Bedrooms' },
        { icon: 'bath', label: 'Bathrooms', value: '3 Premium Bathrooms' },
        { icon: 'utensils', label: 'Kitchen', value: 'Modular Kitchen' },
        { icon: 'couch', label: 'Living', value: 'Spacious Living & Dining' },
        { icon: 'seedling', label: 'Balcony', value: '2 Premium Balconies' },
        { icon: 'warehouse', label: 'Utility', value: 'Separate Utility Area' }
      ],
      features: [
        'Vastu Compliant Design',
        'Cross Ventilation',
        'Premium Vitrified Tiles',
        'Branded Fittings & Fixtures',
        'Ample Natural Light'
      ]
    },
    '3bhk-1900': {
      title: '3 BHK Luxe',
      area: '1900 Sq.Ft Built-Up Area',
      price: 'Starting from ₹3.42 Cr*',
      specs: [
        { icon: 'bed', label: 'Bedrooms', value: '3 Large Master Bedrooms' },
        { icon: 'bath', label: 'Bathrooms', value: '3 Premium + 1 Powder Room' },
        { icon: 'utensils', label: 'Kitchen', value: 'Premium Modular Kitchen' },
        { icon: 'couch', label: 'Living', value: 'Expansive Living & Dining' },
        { icon: 'seedling', label: 'Balcony', value: '3 Premium Balconies' },
        { icon: 'home', label: 'Study', value: 'Dedicated Study Room' }
      ],
      features: [
        'Vastu Compliant Design',
        'Corner Unit Advantage',
        'Premium Marble Flooring',
        'Designer Lighting',
        'Walk-in Wardrobes'
      ]
    },
    '3.5bhk': {
      title: '3.5 BHK Luxe',
      area: '2150 Sq.Ft Built-Up Area',
      price: 'Starting from ₹3.87 Cr*',
      specs: [
        { icon: 'bed', label: 'Bedrooms', value: '3 Master + 1 Guest Room' },
        { icon: 'bath', label: 'Bathrooms', value: '4 Premium Bathrooms' },
        { icon: 'utensils', label: 'Kitchen', value: 'Island Kitchen Design' },
        { icon: 'couch', label: 'Living', value: 'Grand Living & Dining' },
        { icon: 'seedling', label: 'Balcony', value: '3 Large Balconies' },
        { icon: 'home', label: 'Family Lounge', value: 'Separate Family Area' }
      ],
      features: [
        'Premium Corner Units',
        'Double Height Ceiling',
        'Italian Marble Flooring',
        'Smart Home Features',
        'Private Lift Lobby'
      ]
    },
    '4.5bhk': {
      title: '4.5 BHK Penthouse',
      area: '2500 Sq.Ft Built-Up Area',
      price: 'Starting from ₹4.50 Cr*',
      specs: [
        { icon: 'bed', label: 'Bedrooms', value: '4 Master + 1 Guest Suite' },
        { icon: 'bath', label: 'Bathrooms', value: '5 Luxury Bathrooms' },
        { icon: 'utensils', label: 'Kitchen', value: 'Gourmet Kitchen + Pantry' },
        { icon: 'couch', label: 'Living', value: 'Palatial Living Spaces' },
        { icon: 'seedling', label: 'Terrace', value: 'Private Terrace Garden' },
        { icon: 'briefcase', label: 'Study', value: 'Executive Home Office' }
      ],
      features: [
        'Penthouse Privileges',
        'Private Terrace Access',
        'Premium Imported Finishes',
        'Home Automation',
        'Dedicated Parking'
      ]
    }
  };

  return (
    <section id="plans" className="section-padding" ref={sectionRef}>
      <div className="container">
        <div className="section-header">
          <span className="section-subtitle">Architectural Excellence</span>
          <h2>Floor Plans & Layouts</h2>
          <p className="section-desc">Thoughtfully designed homes with optimal space utilization and premium finishes</p>
        </div>

        <div className="master-plan-section animate-on-scroll">
          <div className="master-plan-grid">
            <div className="master-plan-content">
              <h3>Master Plan Layout</h3>
              <p>Godrej Yelahanka is strategically planned across 10 acres with multiple towers, landscaped gardens, and world-class amenities. The master plan ensures optimal utilization of space while maintaining privacy and tranquility.</p>
              <div className="master-plan-highlights">
                <div className="highlight-item">
                  <i className="fas fa-building"></i>
                  <div>
                    <strong>Multiple Towers</strong>
                    <span>3B+G+15 Floor Structure</span>
                  </div>
                </div>
                <div className="highlight-item">
                  <i className="fas fa-tree"></i>
                  <div>
                    <strong>Green Spaces</strong>
                    <span>70% Open Area</span>
                  </div>
                </div>
                <div className="highlight-item">
                  <i className="fas fa-home"></i>
                  <div>
                    <strong>Total Units</strong>
                    <span>800+ Premium Apartments</span>
                  </div>
                </div>
              </div>
              <button className="btn-outline-dark" onClick={openModal}>
                <i className="fas fa-download"></i> Download Master Plan
              </button>
            </div>
            <div className="master-plan-image">
              <div className="plan-image-container" onClick={openModal}>
                <img src="/assets/Godrej-Yelahanka-Master-plan-r3nrhe2hsbfwygt9kn0k62khwk4slxkrxn4uvau8xq.webp" alt="Godrej Yelahanka Master Plan" />
                <div className="image-overlay">
                  <i className="fas fa-info-circle"></i>
                  <span>Click for More Info</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="floor-plans-wrapper animate-on-scroll">
          <div className="plans-tabs">
            <button 
              className={`tab-btn ${activeTab === '3bhk-1600' ? 'active' : ''}`}
              onClick={() => setActiveTab('3bhk-1600')}
            >
              3 BHK - 1600 Sq.Ft
            </button>
            <button 
              className={`tab-btn ${activeTab === '3bhk-1900' ? 'active' : ''}`}
              onClick={() => setActiveTab('3bhk-1900')}
            >
              3 BHK - 1900 Sq.Ft
            </button>
            <button 
              className={`tab-btn ${activeTab === '3.5bhk' ? 'active' : ''}`}
              onClick={() => setActiveTab('3.5bhk')}
            >
              3.5 BHK - 2150 Sq.Ft
            </button>
            <button 
              className={`tab-btn ${activeTab === '4.5bhk' ? 'active' : ''}`}
              onClick={() => setActiveTab('4.5bhk')}
            >
              4.5 BHK - 2500 Sq.Ft
            </button>
          </div>

          {Object.entries(plans).map(([key, plan]) => (
            <div key={key} className={`plan-content ${activeTab === key ? 'active' : ''}`}>
              <div className="plan-display-grid">
                <div className="plan-image-section">
                  <div className="plan-image-container" onClick={openModal}>
                    <img src="/assets/godrej-yelahanka-4-bhk-floor-plan.webp" alt={`${plan.title} Floor Plan`} />
                    <div className="image-overlay">
                      <i className="fas fa-info-circle"></i>
                      <span>Click for More Info</span>
                    </div>
                  </div>
                </div>
                <div className="plan-details-section">
                  <div className="plan-header">
                    <h3>{plan.title}</h3>
                    <div className="plan-area">{plan.area}</div>
                    <div className="plan-price">{plan.price}</div>
                  </div>

                  <div className="plan-specifications">
                    <h4>Specifications</h4>
                    <div className="spec-grid">
                      {plan.specs.map((spec, index) => (
                        <div key={index} className="spec-item">
                          <i className={`fas fa-${spec.icon}`}></i>
                          <div>
                            <strong>{spec.label}</strong>
                            <span>{spec.value}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="plan-features">
                    <h4>Key Features</h4>
                    <ul>
                      {plan.features.map((feature, index) => (
                        <li key={index}>
                          <i className="fas fa-check"></i> {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="plan-actions">
                    <button className="btn-primary" onClick={openModal}>
                      <i className="fas fa-calendar-alt"></i> Schedule Site Visit
                    </button>
                    <button className="btn-outline-dark" onClick={openModal}>
                      <i className="fas fa-download"></i> Download Plan
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FloorPlans;
