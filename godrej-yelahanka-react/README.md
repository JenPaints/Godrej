# Godrej Yelahanka - React Website

Premium real estate landing page for Godrej Yelahanka residential project in Bangalore.

## Features

- ✅ Modern React + Vite setup
- ✅ Fully responsive design
- ✅ Scroll animations with Intersection Observer
- ✅ Interactive floor plan tabs
- ✅ Lead capture forms with Supabase integration
- ✅ Modal-based enquiry system
- ✅ Floating WhatsApp & enquiry buttons
- ✅ Mobile-optimized navigation
- ✅ Analytics tracking

## Tech Stack

- **React 18** - UI framework
- **Vite** - Build tool
- **Supabase** - Backend & database
- **CSS3** - Styling with custom properties
- **Font Awesome** - Icons
- **Google Fonts** - Typography (Inter & Montserrat)

## Getting Started

### Prerequisites

- Node.js 16+ installed
- npm or yarn package manager

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Project Structure

```
src/
├── components/          # React components
│   ├── Navbar.jsx
│   ├── Hero.jsx
│   ├── Overview.jsx
│   ├── Configurations.jsx
│   ├── Amenities.jsx
│   ├── FloorPlans.jsx
│   ├── Connectivity.jsx
│   ├── Gallery.jsx
│   ├── Developer.jsx
│   ├── Terms.jsx
│   ├── Footer.jsx
│   ├── FloatingActions.jsx
│   ├── MobileNav.jsx
│   └── LeadModal.jsx
├── lib/
│   └── supabase.js      # Supabase client & functions
├── App.jsx              # Main app component
├── App.css              # Global styles
├── main.jsx             # Entry point
└── index.css            # Base styles

public/
└── assets/              # Images and static files
```

## Environment Variables

The Supabase configuration is in `src/lib/supabase.js`. Update the following if needed:

- `SUPABASE_URL` - Your Supabase project URL
- `SUPABASE_ANON_KEY` - Your Supabase anonymous key

## Features Breakdown

### Components

1. **Navbar** - Fixed navigation with scroll effect
2. **Hero** - Auto-sliding banner with CTA
3. **Overview** - Project description with downloads
4. **Configurations** - 4 apartment types with pricing
5. **Amenities** - Grid of facilities with images
6. **FloorPlans** - Tabbed interface with master plan
7. **Connectivity** - Blurred map with location details
8. **Gallery** - Image grid with hover effects
9. **Developer** - About Godrej Properties
10. **Terms** - Terms & conditions section
11. **Footer** - Sticky form with lead capture
12. **FloatingActions** - WhatsApp & enquiry buttons
13. **MobileNav** - Bottom navigation for mobile
14. **LeadModal** - Popup form for enquiries

### Form Submissions

All forms submit to Supabase `leads` table with:
- Name, phone, email
- Configuration preference
- Optional message
- UTM parameters
- Referrer & user agent
- Timestamp

### Analytics

Events tracked in Supabase `analytics` table:
- Form submissions
- Page views
- User interactions

## Deployment

### Build

```bash
npm run build
```

The `dist` folder contains the production build.

### Deploy to Vercel/Netlify

1. Connect your Git repository
2. Set build command: `npm run build`
3. Set output directory: `dist`
4. Deploy!

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

Proprietary - Godrej Properties

## Contact

For support: +91 9844935531
