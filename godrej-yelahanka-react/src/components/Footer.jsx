import { useState } from 'react';
import { submitLead } from '../lib/supabase';
import './Footer.css';

const Footer = ({ openModal }) => {
  const [formData, setFormData] = useState({ name: '', phone: '', configuration: '3bhk' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const result = await submitLead(formData);
      if (result.success) {
        alert('Thank you for your interest! Our team will contact you shortly.');
        setFormData({ name: '', phone: '', configuration: '3bhk' });
      }
    } catch (error) {
      alert('There was an error submitting your request. Please try again or call us directly at +91 9844935531.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <footer className="main-footer">
      <div className="container">
        <div className="footer-info">
          <p className="disclaimer"><strong>Disclaimer:</strong> The content is for information purposes only and does not constitute an offer to avail of any service. Prices mentioned are subject to change without notice. This is an authorized marketing partner website.</p>
          <p className="rera-info">RERA: Coming Soon</p>
        </div>
      </div>

      <div className="sticky-footer-form">
        <div className="container">
          <form onSubmit={handleSubmit} className="footer-form">
            <div className="input-group">
              <label>Name</label>
              <input 
                type="text" 
                placeholder="Your Name" 
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                required 
              />
            </div>
            <div className="input-group">
              <label>Mobile</label>
              <input 
                type="tel" 
                placeholder="Mobile No" 
                value={formData.phone}
                onChange={(e) => setFormData({...formData, phone: e.target.value})}
                required 
              />
            </div>
            <div className="input-group">
              <label>Interest</label>
              <select 
                value={formData.configuration}
                onChange={(e) => setFormData({...formData, configuration: e.target.value})}
              >
                <option value="3bhk">3 BHK</option>
                <option value="3.5bhk">3.5 BHK</option>
                <option value="4.5bhk">4.5 BHK</option>
              </select>
            </div>
            <button type="submit" className="btn-footer" disabled={isSubmitting}>
              {isSubmitting ? 'SUBMITTING...' : 'Submit'}
            </button>
          </form>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
