import './FloatingActions.css';

const FloatingActions = ({ openModal }) => {
  return (
    <>
      <div className="floating-cta">
        <a href="https://wa.me/919844935531" className="cta-icon whatsapp" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-whatsapp"></i>
        </a>
      </div>
      <div className="side-enquire" onClick={openModal}>
        ENQUIRE NOW
      </div>
    </>
  );
};

export default FloatingActions;
