import { useEffect, useRef } from 'react';
import './Developer.css';

const Developer = () => {
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
    <section id="about" className="section-padding textured-bg" ref={sectionRef}>
      <div className="container">
        <div className="developer-card animate-on-scroll">
          <div className="dev-logo-box">
            <img src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/022e19dd-9d1c-4edd-bdad-22186f35e1bc-yelahanka-newlaunch-co-in/assets/images/logo-1.png" alt="Developer Logo" />
          </div>
          <div className="dev-text">
            <h2>About Godrej Properties</h2>
            <p>Godrej Properties is a leading Indian real estate developer with a legacy of quality, innovation, and customer satisfaction. A subsidiary of the esteemed Godrej Group, the company has been shaping landmark residential and commercial communities across major cities since 1990.</p>
            <p>With a strong commitment to sustainability and excellence, Godrej Properties has delivered over 100 projects spanning 20 million square feet across India. The company is renowned for its customer-centric approach, timely delivery, and adherence to the highest construction standards.</p>
            <p>Godrej Properties has won numerous prestigious awards including 'Best Developer' at various industry forums. The company's portfolio includes premium residential apartments, plotted developments, and commercial spaces in prime locations across Bengaluru, Mumbai, Pune, Delhi-NCR, and other major metropolitan cities.</p>
            <p>Backed by the 127-year legacy of the Godrej Group, Godrej Properties continues to set new benchmarks in the real estate industry with innovative designs, world-class amenities, and sustainable development practices that create lasting value for homeowners and investors alike.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Developer;
