import './MobileNav.css';

const MobileNav = ({ openModal }) => {
  return (
    <div className="mobile-nav-bar">
      <a href="tel:+919844935531" className="m-nav-item">
        <i className="fas fa-phone"></i> Call
      </a>
      <a href="#" className="m-nav-item m-enquire" onClick={(e) => { e.preventDefault(); openModal(); }}>
        <i className="fas fa-envelope"></i> Enquire
      </a>
      <a href="https://wa.me/919844935531" className="m-nav-item" target="_blank" rel="noopener noreferrer">
        <i className="fab fa-whatsapp"></i> WhatsApp
      </a>
    </div>
  );
};

export default MobileNav;
