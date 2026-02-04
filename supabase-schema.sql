-- Supabase Database Schema for Godrej Yelahanka Lead Management

-- Create leads table
CREATE TABLE IF NOT EXISTS leads (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    phone VARCHAR(20) NOT NULL,
    email VARCHAR(255) NOT NULL,
    configuration VARCHAR(50),
    budget VARCHAR(50),
    message TEXT,
    source VARCHAR(50) NOT NULL DEFAULT 'website',
    project VARCHAR(100) NOT NULL DEFAULT 'Godrej Yelahanka',
    status VARCHAR(20) DEFAULT 'new',
    utm_source VARCHAR(100),
    utm_medium VARCHAR(100),
    utm_campaign VARCHAR(100),
    referrer TEXT,
    user_agent TEXT,
    ip_address INET,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create analytics table for tracking user interactions
CREATE TABLE IF NOT EXISTS analytics (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    event_name VARCHAR(100) NOT NULL,
    event_data JSONB,
    page_url TEXT,
    referrer TEXT,
    user_agent TEXT,
    utm_source VARCHAR(100),
    utm_medium VARCHAR(100),
    utm_campaign VARCHAR(100),
    timestamp TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create indexes for better performance
CREATE INDEX IF NOT EXISTS idx_leads_created_at ON leads(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_leads_status ON leads(status);
CREATE INDEX IF NOT EXISTS idx_leads_source ON leads(source);
CREATE INDEX IF NOT EXISTS idx_leads_project ON leads(project);
CREATE INDEX IF NOT EXISTS idx_leads_phone ON leads(phone);
CREATE INDEX IF NOT EXISTS idx_leads_email ON leads(email);

CREATE INDEX IF NOT EXISTS idx_analytics_event_name ON analytics(event_name);
CREATE INDEX IF NOT EXISTS idx_analytics_timestamp ON analytics(timestamp DESC);

-- Create updated_at trigger for leads table
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ language 'plpgsql';

CREATE TRIGGER update_leads_updated_at 
    BEFORE UPDATE ON leads 
    FOR EACH ROW 
    EXECUTE FUNCTION update_updated_at_column();

-- Enable Row Level Security (RLS)
ALTER TABLE leads ENABLE ROW LEVEL SECURITY;
ALTER TABLE analytics ENABLE ROW LEVEL SECURITY;

-- Create policies for public access (adjust as needed for your security requirements)
-- Note: In production, you should create more restrictive policies

-- Allow public to insert leads (for form submissions)
CREATE POLICY "Allow public lead insertion" ON leads
    FOR INSERT TO anon
    WITH CHECK (true);

-- Allow public to insert analytics (for event tracking)
CREATE POLICY "Allow public analytics insertion" ON analytics
    FOR INSERT TO anon
    WITH CHECK (true);

-- For authenticated users (admin panel access), allow all operations
CREATE POLICY "Allow authenticated users full access to leads" ON leads
    FOR ALL TO authenticated
    USING (true)
    WITH CHECK (true);

CREATE POLICY "Allow authenticated users full access to analytics" ON analytics
    FOR ALL TO authenticated
    USING (true)
    WITH CHECK (true);

-- Create a view for lead statistics (optional)
CREATE OR REPLACE VIEW lead_stats AS
SELECT 
    COUNT(*) as total_leads,
    COUNT(*) FILTER (WHERE created_at >= CURRENT_DATE) as today_leads,
    COUNT(*) FILTER (WHERE created_at >= CURRENT_DATE - INTERVAL '7 days') as week_leads,
    COUNT(*) FILTER (WHERE created_at >= CURRENT_DATE - INTERVAL '30 days') as month_leads,
    COUNT(*) FILTER (WHERE source = 'website') as website_leads,
    COUNT(*) FILTER (WHERE source = 'website_hero') as hero_form_leads,
    COUNT(DISTINCT configuration) FILTER (WHERE configuration IS NOT NULL) as unique_configurations
FROM leads;

-- Grant access to the view
GRANT SELECT ON lead_stats TO anon, authenticated;