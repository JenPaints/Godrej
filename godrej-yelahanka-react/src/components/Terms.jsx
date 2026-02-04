import { useEffect, useRef } from 'react';
import './Terms.css';

const Terms = () => {
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

  const terms = [
    'The prices considered above would be excluding GST, Advance Maintenance, Sinking Funds, Stamp Duty and Registration charges.',
    'The above prices might vary based on the series chosen.',
    'The above areas and prices are tentative and subject to change.',
    'All specifications, amenities, and features are subject to approval from competent authorities.',
    'This is a soft launch project. All details mentioned are indicative and subject to change.',
    'Images and renderings are for representational purposes only and may differ from actual.'
  ];

  return (
    <section id="terms" className="terms-section section-padding" ref={sectionRef}>
      <div className="container">
        <div className="section-header">
          <span className="section-subtitle">Important Information</span>
          <h2>Terms & Conditions</h2>
        </div>
      </div>
      
      <div className="terms-full-width-wrapper">
        <div className="terms-compact-box animate-on-scroll">
          <div className="terms-header-box">
            <i className="fas fa-exclamation-circle"></i>
            <h3>Terms and Conditions of the Survey</h3>
          </div>
          
          <div className="terms-list">
            {terms.map((term, index) => (
              <div key={index} className="term-item">
                <span className="term-bullet">•</span>
                <p>{term}</p>
              </div>
            ))}
          </div>
          
          <div className="terms-footer-note">
            <p><strong>RERA Registration:</strong> Coming Soon | <strong>Disclaimer:</strong> This website is for information purposes only. Please verify all details with our sales team before making any decision.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Terms;
