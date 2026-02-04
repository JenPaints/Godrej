# Supabase Integration Setup for Godrej Yelahanka

## Overview
This project now includes Supabase integration for lead management and analytics tracking. All form submissions are automatically stored in your Supabase database.

## Setup Instructions

### 1. Database Setup
1. Go to your Supabase project dashboard: https://nlssoryytnbykfhsnktb.supabase.co
2. Navigate to the SQL Editor
3. Copy and paste the contents of `supabase-schema.sql`
4. Run the SQL to create the required tables and policies

### 2. Verify Configuration
The Supabase configuration is already set up in `supabase-config.js` with your project details:
- **Project URL**: https://nlssoryytnbykfhsnktb.supabase.co
- **Anon Key**: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...

### 3. Test the Integration
1. Open `index.html` in your browser
2. Fill out either the hero form or the detailed lead form
3. Check your Supabase dashboard to see the submitted data

### 4. Admin Dashboard
- Open `admin.html` to view and manage leads
- The dashboard shows real-time statistics and recent submissions
- Auto-refreshes every 30 seconds

## Database Tables

### `leads` Table
Stores all form submissions with the following fields:
- `id` - Unique identifier
- `name` - Customer name
- `phone` - Phone number
- `email` - Email address
- `configuration` - Selected apartment configuration
- `budget` - Budget range
- `message` - Additional message
- `source` - Form source (website/website_hero)
- `project` - Project name (Godrej Yelahanka)
- `status` - Lead status (new/contacted/qualified)
- `utm_*` - Marketing campaign tracking
- `created_at` - Submission timestamp

### `analytics` Table
Tracks user interactions and events:
- `event_name` - Type of event
- `event_data` - Additional event details
- `page_url` - Current page URL
- `timestamp` - Event timestamp

## Features

### Form Integration
- ✅ Hero section quick enquiry form
- ✅ Detailed lead capture modal
- ✅ Real-time validation
- ✅ Error handling and user feedback
- ✅ Loading states during submission

### Analytics Tracking
- ✅ Form submissions
- ✅ Button clicks
- ✅ Page interactions
- ✅ UTM parameter capture
- ✅ Referrer tracking

### Admin Features
- ✅ Lead statistics dashboard
- ✅ Real-time lead viewing
- ✅ Export capabilities (via Supabase dashboard)
- ✅ Lead status management

## Security

### Row Level Security (RLS)
- Public users can only INSERT leads and analytics
- Authenticated users have full access for admin functions
- All sensitive operations require authentication

### Data Protection
- Email validation
- Phone number validation
- Input sanitization
- HTTPS-only connections

## Customization

### Adding New Fields
1. Update the database schema in `supabase-schema.sql`
2. Modify the form HTML in `index.html`
3. Update the JavaScript functions in `supabase-config.js`
4. Refresh the admin dashboard in `admin.html`

### Marketing Integration
The system automatically captures:
- UTM parameters (source, medium, campaign)
- Referrer information
- User agent details
- Page URLs

## Troubleshooting

### Common Issues
1. **Forms not submitting**: Check browser console for errors
2. **Data not appearing**: Verify Supabase connection and table creation
3. **Admin dashboard empty**: Ensure RLS policies are correctly set up

### Debug Mode
Open browser developer tools to see detailed error messages and submission logs.

## Support
For technical support with Supabase integration, check:
1. Browser console for JavaScript errors
2. Supabase dashboard logs
3. Network tab for API request failures

## Next Steps
1. Set up email notifications for new leads
2. Integrate with CRM systems
3. Add lead scoring and qualification
4. Implement automated follow-up sequences