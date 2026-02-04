// Supabase Configuration
const SUPABASE_URL = 'https://nlssoryytnbykfhsnktb.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5sc3Nvcnl5dG5ieWtmaHNua3RiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mzg0MjE4NzAsImV4cCI6MjA1Mzk5Nzg3MH0.Qlkp4Qpob0AztQsrYfF9Sg_XcSZsgk6';

// Initialize Supabase client
const supabaseClient = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

// Lead submission function
async function submitLead(leadData) {
    try {
        // Check if Supabase is properly configured
        if (!supabaseClient) {
            throw new Error('Supabase not configured');
        }

        const { data, error } = await supabaseClient
            .from('leads')
            .insert([
                {
                    name: leadData.name,
                    phone: leadData.phone,
                    email: leadData.email,
                    configuration: leadData.configuration,
                    budget: leadData.budget,
                    message: leadData.message,
                    source: 'website',
                    project: 'Godrej Yelahanka',
                    created_at: new Date().toISOString(),
                    utm_source: getUrlParameter('utm_source') || null,
                    utm_medium: getUrlParameter('utm_medium') || null,
                    utm_campaign: getUrlParameter('utm_campaign') || null,
                    referrer: document.referrer || null,
                    user_agent: navigator.userAgent,
                    ip_address: null
                }
            ]);

        if (error) {
            console.error('Supabase error:', error);
            throw error;
        }

        console.log('Lead submitted successfully:', data);
        return { success: true, data };
    } catch (error) {
        console.error('Error submitting lead:', error);
        
        // Fallback: Log to console and localStorage for now
        const fallbackData = {
            ...leadData,
            timestamp: new Date().toISOString(),
            source: 'website'
        };
        
        // Store in localStorage as backup
        const existingLeads = JSON.parse(localStorage.getItem('godrej_leads') || '[]');
        existingLeads.push(fallbackData);
        localStorage.setItem('godrej_leads', JSON.stringify(existingLeads));
        
        console.log('Lead stored locally as fallback:', fallbackData);
        
        // Still return success to user
        return { success: true, data: fallbackData, fallback: true };
    }
}

// Quick enquiry submission (hero form)
async function submitQuickEnquiry(enquiryData) {
    try {
        // Check if Supabase is properly configured
        if (!supabaseClient) {
            throw new Error('Supabase not configured');
        }

        const { data, error } = await supabaseClient
            .from('leads')
            .insert([
                {
                    name: enquiryData.name,
                    phone: enquiryData.phone,
                    email: enquiryData.email,
                    configuration: null,
                    budget: null,
                    message: 'Quick enquiry from hero section',
                    source: 'website_hero',
                    project: 'Godrej Yelahanka',
                    created_at: new Date().toISOString(),
                    utm_source: getUrlParameter('utm_source') || null,
                    utm_medium: getUrlParameter('utm_medium') || null,
                    utm_campaign: getUrlParameter('utm_campaign') || null,
                    referrer: document.referrer || null,
                    user_agent: navigator.userAgent,
                    ip_address: null
                }
            ]);

        if (error) {
            console.error('Supabase error:', error);
            throw error;
        }

        console.log('Quick enquiry submitted successfully:', data);
        return { success: true, data };
    } catch (error) {
        console.error('Error submitting quick enquiry:', error);
        
        // Fallback: Log to console and localStorage for now
        const fallbackData = {
            ...enquiryData,
            timestamp: new Date().toISOString(),
            source: 'website_hero',
            message: 'Quick enquiry from hero section'
        };
        
        // Store in localStorage as backup
        const existingLeads = JSON.parse(localStorage.getItem('godrej_leads') || '[]');
        existingLeads.push(fallbackData);
        localStorage.setItem('godrej_leads', JSON.stringify(existingLeads));
        
        console.log('Quick enquiry stored locally as fallback:', fallbackData);
        
        // Still return success to user
        return { success: true, data: fallbackData, fallback: true };
    }
}

// Utility function to get URL parameters
function getUrlParameter(name) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(name);
}

// Analytics tracking function
async function trackEvent(eventName, eventData = {}) {
    try {
        const { data, error } = await supabaseClient
            .from('analytics')
            .insert([
                {
                    event_name: eventName,
                    event_data: eventData,
                    page_url: window.location.href,
                    referrer: document.referrer || null,
                    user_agent: navigator.userAgent,
                    timestamp: new Date().toISOString(),
                    utm_source: getUrlParameter('utm_source') || null,
                    utm_medium: getUrlParameter('utm_medium') || null,
                    utm_campaign: getUrlParameter('utm_campaign') || null
                }
            ]);

        if (error) {
            console.error('Analytics tracking error:', error);
        }
    } catch (error) {
        console.error('Error tracking event:', error);
    }
}

// Export functions for global use
window.submitLead = submitLead;
window.submitQuickEnquiry = submitQuickEnquiry;
window.trackEvent = trackEvent;

// Function to view locally stored leads (fallback)
function viewLocalLeads() {
    const leads = JSON.parse(localStorage.getItem('godrej_leads') || '[]');
    console.log('Locally stored leads:', leads);
    return leads;
}

// Add to window for debugging
window.viewLocalLeads = viewLocalLeads;