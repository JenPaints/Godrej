import { useState, useEffect } from 'react';
import { submitLead, trackEvent } from '../lib/supabase';
import './LeadModal.css';

const LeadModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    configuration: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      // Reset form when modal opens
      setFormData({ name: '', phone: '', configuration: '', message: '' });
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const result = await submitLead(formData);
      if (result.success) {
        alert('Thank you for your interest! Our team will contact you shortly.');
        setFormData({ name: '', phone: '', configuration: '', message: '' });
        onClose();
        
        // Track event
        trackEvent('form_submission', {
          form_id: 'mainLeadForm',
          configuration: formData.configuration
        });
      }
    } catch (error) {
      alert('There was an error submitting your request. Please try again or call us directly at +91 9844935531.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleOverlayClick = (e) => {
    if (e.target.classList.contains('modal')) {
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div className="modal" onClick={handleOverlayClick}>
      <div className="modal-box">
        <span className="close-modal" onClick={onClose}>&times;</span>
        <div className="modal-header">
          <h3>Request Details</h3>
          <p>Register your interest to get priority access</p>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="modal-input">
            <input 
              type="text" 
              placeholder="Full Name*" 
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
              required 
            />
          </div>
          <div className="modal-input">
            <input 
              type="tel" 
              placeholder="Mobile Number*" 
              value={formData.phone}
              onChange={(e) => setFormData({...formData, phone: e.target.value})}
              required 
            />
          </div>
          <div className="modal-input">
            <select 
              value={formData.configuration}
              onChange={(e) => setFormData({...formData, configuration: e.target.value})}
              required
            >
              <option value="" disabled>Interested In*</option>
              <option value="3bhk">3 BHK</option>
              <option value="3.5bhk">3.5 BHK</option>
              <option value="4.5bhk">4.5 BHK</option>
            </select>
          </div>
          <div className="modal-input">
            <textarea 
              placeholder="Message (Optional - Max 50 words)" 
              maxLength="350" 
              rows="3"
              value={formData.message}
              onChange={(e) => setFormData({...formData, message: e.target.value})}
            ></textarea>
            <span className="char-hint">Max 50 words</span>
          </div>
          <button type="submit" className="btn-modal" disabled={isSubmitting}>
            {isSubmitting ? 'SUBMITTING...' : 'SUBMIT REQUEST'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default LeadModal;
