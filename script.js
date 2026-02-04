// Navigation and Scroll Effects
const navbar = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Intersection Observer for Scroll Animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

document.querySelectorAll('.animate-on-scroll').forEach(el => observer.observe(el));

// Hero Slider Logic
let currentSlide = 0;
const slides = document.querySelectorAll('.hero-slide');
function nextSlide() {
    slides[currentSlide].classList.remove('active');
    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].classList.add('active');
}
if (slides.length > 0) {
    setInterval(nextSlide, 5000);
}

// Floor Plan Tab Logic
const planImages = {
    '3bhk': 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/022e19dd-9d1c-4edd-bdad-22186f35e1bc-yelahanka-newlaunch-co-in/assets/images/mp-12.jpg',
    '3.5bhk': 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/022e19dd-9d1c-4edd-bdad-22186f35e1bc-yelahanka-newlaunch-co-in/assets/images/floor-1-13.jpg',
    '4.5bhk': 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/022e19dd-9d1c-4edd-bdad-22186f35e1bc-yelahanka-newlaunch-co-in/assets/images/floor-2-14.jpg'
};

document.querySelectorAll('.tab-btn').forEach(button => {
    button.addEventListener('click', function() {
        const type = this.getAttribute('data-type');
        const planImg = document.getElementById('planImage');
        
        // Remove active class from all buttons
        document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
        // Add active class to clicked button
        this.classList.add('active');
        
        // Fade effect for image change
        planImg.style.opacity = '0';
        setTimeout(() => {
            planImg.src = planImages[type];
            planImg.style.opacity = '1';
        }, 300);
    });
});

// Modal Logic
const modal = document.getElementById('leadModal');
function openLeadForm() {
    modal.style.display = 'flex';
    document.body.style.overflow = 'hidden';
}

function closeLeadForm() {
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

window.onclick = function(event) {
    if (event.target == modal) {
        closeLeadForm();
    }
}

// Form Submission Logic with Supabase Integration
const forms = ['bottomForm', 'mainLeadForm'];
forms.forEach(formId => {
    const form = document.getElementById(formId);
    if (form) {
        form.addEventListener('submit', async function(e) {
            e.preventDefault();
            const btn = form.querySelector('button');
            const originalText = btn.textContent;
            btn.textContent = 'SUBMITTING...';
            btn.disabled = true;
            
            try {
                // Collect form data using FormData API
                const formData = new FormData(form);
                const leadData = {
                    name: formData.get('name') || '',
                    phone: formData.get('phone') || '',
                    email: formData.get('email') || '',
                    configuration: formData.get('configuration') || '',
                    message: formData.get('message') || ''
                };
                
                // Validate required fields
                if (!leadData.name || !leadData.phone) {
                    throw new Error('Please fill in all required fields');
                }
                
                // Submit to Supabase
                let result;
                if (formId === 'mainLeadForm') {
                    result = await window.submitLead(leadData);
                } else {
                    result = await window.submitQuickEnquiry(leadData);
                }
                
                if (result.success) {
                    alert('Thank you for your interest! Our team will contact you shortly.');
                    form.reset();
                    if (formId === 'mainLeadForm') closeLeadForm();
                    
                    // Track event
                    if (window.trackEvent) {
                        window.trackEvent('form_submission', {
                            form_id: formId,
                            configuration: leadData.configuration
                        });
                    }
                } else {
                    throw new Error('Submission failed');
                }
            } catch (error) {
                console.error('Form submission error:', error);
                alert('There was an error submitting your request. Please try again or call us directly at +91 9844935531.');
            } finally {
                btn.textContent = originalText;
                btn.disabled = false;
            }
        });
    }
});

// Smooth Scroll for Navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            window.scrollTo({
                top: target.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});

// Auto-open modal after 10 seconds
setTimeout(() => {
    if (!localStorage.getItem('formOpened')) {
        openLeadForm();
        localStorage.setItem('formOpened', 'true');
    }
}, 10000);

// Expose functions to global window
window.openLeadForm = openLeadForm;
window.closeLeadForm = closeLeadForm;
// Enhanced Floor Plan Tab Functionality
document.addEventListener('DOMContentLoaded', function() {
    const tabBtns = document.querySelectorAll('.plans-tabs .tab-btn');
    const planContents = document.querySelectorAll('.plan-content');
    
    // Initialize first tab as active
    if (tabBtns.length > 0 && planContents.length > 0) {
        tabBtns[0].classList.add('active');
        planContents[0].classList.add('active');
    }
    
    tabBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const targetType = this.getAttribute('data-type');
            
            // Remove active class from all tabs and contents
            tabBtns.forEach(tab => tab.classList.remove('active'));
            planContents.forEach(content => content.classList.remove('active'));
            
            // Add active class to clicked tab
            this.classList.add('active');
            
            // Show corresponding content
            const targetContent = document.getElementById(`plan-${targetType}`);
            if (targetContent) {
                targetContent.classList.add('active');
            }
        });
    });
});