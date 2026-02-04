import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = 'https://nlssoryytnbykfhsnktb.supabase.co';
const SUPABASE_ANON_KEY = 'sb_publishable_Qlkp4Qpob0AztQsrYfF9Sg_XcSZsgk6';

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

// Test connection on load
supabase.from('leads').select('count', { count: 'exact', head: true })
  .then(({ count, error }) => {
    if (error) {
      console.error('Supabase connection test failed:', error);
      console.log('Using localStorage fallback for form submissions');
    } else {
      console.log('✅ Supabase connected successfully!');
    }
  });

// Utility function to get URL parameters
const getUrlParameter = (name) => {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(name);
};

// Lead submission function
export async function submitLead(leadData) {
  try {
    const { data, error } = await supabase
      .from('leads')
      .insert([
        {
          name: leadData.name,
          phone: leadData.phone,
          configuration: leadData.configuration,
          budget: leadData.budget || null,
          message: leadData.message || null,
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
      console.error('Full error details:', JSON.stringify(error, null, 2));
      throw error;
    }

    console.log('Lead submitted successfully:', data);
    return { success: true, data };
  } catch (error) {
    console.error('Error submitting lead:', error);
    
    // Fallback: Store in localStorage
    const fallbackData = {
      ...leadData,
      timestamp: new Date().toISOString(),
      source: 'website'
    };
    
    const existingLeads = JSON.parse(localStorage.getItem('godrej_leads') || '[]');
    existingLeads.push(fallbackData);
    localStorage.setItem('godrej_leads', JSON.stringify(existingLeads));
    
    console.log('Lead stored locally as fallback:', fallbackData);
    return { success: true, data: fallbackData, fallback: true };
  }
}

// Analytics tracking function
export async function trackEvent(eventName, eventData = {}) {
  try {
    const { data, error } = await supabase
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
