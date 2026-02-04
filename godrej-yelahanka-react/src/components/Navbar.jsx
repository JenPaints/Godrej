import { useState, useEffect } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (e, id) => {
    e.preventDefault();
    const element = document.querySelector(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: 'smooth'
      });
    }
    setMobileMenuOpen(false); // Close menu after clicking
  };

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav-container container">
        <div className="nav-logo">
          <a href="#">
            <img src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/022e19dd-9d1c-4edd-bdad-22186f35e1bc-yelahanka-newlaunch-co-in/assets/images/logo-1.png" alt="Godrej Yelahanka Logo" />
          </a>
        </div>
        
        <button 
          className={`hamburger ${mobileMenuOpen ? 'active' : ''}`}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <div className={`nav-menu ${mobileMenuOpen ? 'active' : ''}`}>
          <a href="#overview" className="nav-link" onClick={(e) => scrollToSection(e, '#overview')}>Overview</a>
          <a href="#configurations" className="nav-link" onClick={(e) => scrollToSection(e, '#configurations')}>Configuration</a>
          <a href="#amenities" className="nav-link" onClick={(e) => scrollToSection(e, '#amenities')}>Amenities</a>
          <a href="#plans" className="nav-link" onClick={(e) => scrollToSection(e, '#plans')}>Plans</a>
          <a href="#connectivity" className="nav-link" onClick={(e) => scrollToSection(e, '#connectivity')}>Connectivity</a>
          <a href="#gallery" className="nav-link" onClick={(e) => scrollToSection(e, '#gallery')}>Gallery</a>
          <a href="#about" className="nav-link" onClick={(e) => scrollToSection(e, '#about')}>About Developer</a>
          <a href="#terms" className="nav-link" onClick={(e) => scrollToSection(e, '#terms')}>Terms</a>
        </div>
        <div className="nav-actions">
          <a href="tel:+919844935531" className="nav-phone">
            <i className="fas fa-phone-alt"></i> +91 9844935531
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
