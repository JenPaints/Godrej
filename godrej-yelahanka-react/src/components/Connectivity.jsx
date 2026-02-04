import { useEffect, useRef } from 'react';
import './Connectivity.css';

const Connectivity = ({ openModal }) => {
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
    <section id="connectivity" className="section-padding textured-bg" ref={sectionRef}>
      <div className="container">
        <div className="section-header">
          <span className="section-subtitle">Perfectly Located</span>
          <h2>Connectivity</h2>
        </div>
        <div className="connectivity-grid">
          <div className="map-box animate-on-scroll">
            <div className="blurred-map-container" onClick={openModal}>
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.7234567890123!2d77.6065559!3d13.1145652!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae19222fe326f3%3A0x6581d42f67e22d80!2sService%20Rd%2C%20Palanahalli%2C%20Maruthi%20Nagar%2C%20Yelahanka%2C%20Bengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1643723400000!5m2!1sen!2sin&markers=color:red%7Clabel:G%7C13.1145548,77.6065237" 
                width="100%" 
                height="400" 
                style={{border:0}} 
                allowFullScreen="" 
                loading="lazy"
              ></iframe>
              <div className="map-overlay">
                <div className="overlay-content">
                  <i className="fas fa-map-marker-alt"></i>
                  <h3>View Location Details</h3>
                  <p>Click to get detailed connectivity information</p>
                  <div className="overlay-btn">
                    <i className="fas fa-info-circle"></i>
                    Request Info
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="loc-details animate-on-scroll">
            <div className="loc-category">
              <h4><i className="fas fa-plane"></i> Transport</h4>
              <ul>
                <li>International Airport <span>20 Min</span></li>
                <li>Yelahanka Junction <span>5 Min</span></li>
                <li>NH 44 (Bellary Road) <span>5 Min</span></li>
              </ul>
            </div>
            <div className="loc-category">
              <h4><i className="fas fa-building"></i> IT Hubs</h4>
              <ul>
                <li>Manyata Tech Park <span>15 Min</span></li>
                <li>Kirloskar Business Park <span>10 Min</span></li>
                <li>Ecopolis SEZ <span>10 Min</span></li>
              </ul>
            </div>
            <div className="loc-category">
              <h4><i className="fas fa-university"></i> Education</h4>
              <ul>
                <li>Ryan International <span>8 Min</span></li>
                <li>Vidyashilp Academy <span>10 Min</span></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Connectivity;
