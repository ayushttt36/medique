# Mediqura - Enterprise Hospital Information Management Software

## Overview

Mediqura is an enterprise-grade Hospital Information Management Software (HIMS) developed by **Mobimp Services Private Limited**, based in Manipur, India. This website showcases the comprehensive features and capabilities of the Mediqura platform designed to digitize clinical, administrative, and financial workflows.

## Features

### Core Modules
- **OPD Management** - Registration, UHID generation, appointment scheduling, queue management
- **IPD Management** - Admission-Transfer-Discharge workflows, bed/ward management, nursing stations
- **Electronic Medical Records** - Digital prescriptions, clinical notes, patient history, vitals recording
- **Diagnostics & LIMS** - Lab test ordering, automated results, radiology integration
- **Pharmacy & Inventory** - GST-ready billing, stock tracking, expiry alerts, purchase orders
- **Financials & Billing** - IPD/OPD billing, Tally integration, insurance/TPA management

### Technical Features
- ✅ 100% Customizable platform
- ✅ Centralized database for multi-branch management
- ✅ Role-Based Access Control (RBAC)
- ✅ NABH and NABL compliance ready
- ✅ On-premise and cloud deployment options
- ✅ Advanced MIS reporting and analytics

### Ecosystem Integration
- **InstaBill** - Rapid POS billing with GST integration
- **Inventosoft** - Advanced supply chain management
- **Mobile Connectivity** - SMS/Email alerts, remote doctor access

## Project Structure

```
medqura-frontend/
├── src/
│   ├── components/
│   │   ├── Header.jsx       - Navigation header with smooth scrolling
│   │   ├── Hero.jsx         - Hero section with key stats & floating cards
│   │   ├── Modules.jsx      - 6 core modules showcase with details
│   │   ├── Features.jsx     - Technical features & compliance badges
│   │   ├── Ecosystem.jsx    - Ecosystem & supporting products
│   │   ├── Benefits.jsx     - Business benefits & ROI metrics
│   │   ├── CTA.jsx         - Call-to-action with contact form
│   │   └── Footer.jsx      - Footer with links & certifications
│   ├── App.jsx             - Main app component
│   ├── main.jsx            - React entry point
│   └── index.css           - Tailwind CSS imports
├── public/                  - Static files
├── index.html              - HTML template with metadata
├── vite.config.js          - Vite configuration
├── tailwind.config.js      - Tailwind CSS configuration
├── eslint.config.js        - ESLint configuration
└── package.json            - Dependencies and scripts
```

## Setup & Installation

### Prerequisites
- Node.js 16+ installed
- npm or yarn package manager

### Installation Steps

1. **Install Dependencies**
   ```bash
   cd medqura-frontend
   npm install
   ```

2. **Start Development Server**
   ```bash
   npm run dev
   ```
   The website will be available at `http://localhost:5173`

3. **Build for Production**
   ```bash
   npm run build
   ```

4. **Preview Production Build**
   ```bash
   npm run preview
   ```

5. **Run ESLint**
   ```bash
   npm run lint
   ```

## Technologies Used

- **React 19** - UI framework for building interactive components
- **Vite 8** - Lightning-fast build tool and dev server
- **Tailwind CSS 4** - Utility-first CSS framework for styling
- **Lucide React** - Beautiful icon library with 400+ icons
- **PostCSS & Autoprefixer** - CSS processing and browser compatibility

## Website Sections

### 1. Header Navigation
- Fixed navigation with smooth scrolling
- Logo with gradient shield icon
- Desktop menu with section links
- Mobile hamburger menu
- Get Demo CTA button

### 2. Hero Section
- Gradient headline text
- Key statistics (Customizable, Support, Compliance)
- CTA buttons (Get Demo, Learn More)
- Floating feature cards with icons
- Visual design elements

### 3. Modules Section
- 6 color-coded module cards
- Module descriptions and key features
- Interactive card design with hover effects
- Call-to-action for full demonstration

### 4. Features Section
- 6 technical feature cards
- Benefits checklist for each feature
- Compliance & certification badges (NABH, NABL, RBAC, ISO)
- Comprehensive coverage of enterprise features

### 5. Ecosystem Section
- Mediqura as central hub concept
- 3 complementary products with descriptions
- Deployment options (on-premise, cloud, hybrid)
- Support & training highlights

### 6. Benefits Section
- 6 business benefit cards with icons
- Market position statistics
- ROI metrics and expected improvements
- Real-world impact numbers

### 7. Contact & CTA Section
- Contact information cards
- Quick link resources
- Contact form with validation
- Privacy assurance message

### 8. Footer
- Company information with social links
- Product links
- Company links
- Legal and compliance sections
- Certification badges

## Responsive Design

The website is fully responsive and optimized for:
- 📱 Mobile devices (320px - 767px)
- 📱 Tablets (768px - 1024px)
- 🖥️ Desktop devices (1025px - 1920px)
- 🖥️ Large displays (1920px+)

## Customization Guide

### Colors & Branding
Update color schemes in components:
```jsx
// Primary gradient
from-blue-600 to-emerald-500

// Secondary accents
text-blue-600, text-emerald-500, text-purple-600
```

### Content Updates
- Module descriptions: [Modules.jsx](src/components/Modules.jsx)
- Feature details: [Features.jsx](src/components/Features.jsx)
- Contact info: [CTA.jsx](src/components/CTA.jsx)
- Footer links: [Footer.jsx](src/components/Footer.jsx)

### Company Information
Update company details in:
- [Header.jsx](src/components/Header.jsx) - Logo and branding
- [CTA.jsx](src/components/CTA.jsx) - Contact information
- [Footer.jsx](src/components/Footer.jsx) - Company details

## Performance Optimization

- ⚡ Automatic code splitting by Vite
- 📦 Tree-shaking for unused CSS
- 🖼️ Optimized SVG icons from Lucide
- 🚀 Lazy component loading ready
- 📊 Minified assets in production builds

## Browser Support

- ✅ Chrome/Edge (Latest 2 versions)
- ✅ Firefox (Latest 2 versions)
- ✅ Safari (Latest 2 versions)
- ✅ Mobile browsers (iOS Safari 12+, Chrome Android)

## Key Features Implementation

### Smooth Scrolling Navigation
```jsx
const scrollToSection = (id) => {
  const element = document.getElementById(id);
  element?.scrollIntoView({ behavior: 'smooth' });
};
```

### Gradient Text
```jsx
bg-gradient-to-r from-blue-600 to-emerald-500 bg-clip-text text-transparent
```

### Responsive Grid
```jsx
grid md:grid-cols-2 lg:grid-cols-3 gap-8
```

### Interactive Forms
- Real-time validation
- Form state management
- User feedback messages

## About Mobimp Services

**Mobimp Services Private Limited** - Healthcare Technology Solutions

📍 **Location:** Manipur, India  
🏥 **Specialization:** Hospital Management Software (HIMS)  
⭐ **Experience:** 15+ years in healthcare IT  
🌟 **Key Markets:** North East India (Manipur, Assam)  

### Service Highlights
- NABH & NABL compliance expertise
- Custom pricing: ₹2,500/day for enterprise installations
- 24/7 dedicated support teams
- On-site training and documentation
- Flexible deployment (on-premise/cloud)

## Deployment Instructions

### Development Environment
```bash
npm install
npm run dev
```

### Production Build
```bash
npm run build
npm run preview
```

### Deploy to Web Hosting
1. Run `npm run build` to generate the `dist/` folder
2. Upload the `dist/` folder to your hosting provider
3. Configure server to serve `index.html` for 404 errors (SPA routing)

### Environment Variables
Create a `.env` file if needed:
```
VITE_API_URL=https://api.mediqura.com
VITE_APP_NAME=Mediqura
```

## Troubleshooting

### Port Already in Use
```bash
npm run dev -- --port 3000
```

### Cache Issues
```bash
rm -rf node_modules package-lock.json
npm install
```

### Build Errors
```bash
npm run lint
npm run build
```

## SEO Optimization

The website includes:
- ✅ Meta descriptions and keywords
- ✅ Open Graph tags for social sharing
- ✅ Semantic HTML structure
- ✅ Proper heading hierarchy
- ✅ Mobile viewport configuration

## Analytics Ready

Components are structured for easy integration with:
- Google Analytics
- Mixpanel
- Segment
- Custom event tracking

## Contact & Support

For Mediqura inquiries:
- 📧 **Email:** sales@mobimp.com, support@mobimp.com
- 📞 **Support:** 24/7 available
- 🏢 **Headquarters:** Manipur, India

## License

© 2026 Mobimp Services Private Limited. All rights reserved.

## Notes

- Website is fully responsive and mobile-optimized
- All components use Tailwind CSS utility classes
- Smooth animations and transitions throughout
- Professional gradient color scheme
- Call-to-action forms ready for backend integration

---

**Built with React + Vite + Tailwind CSS**  
**Designed for Enterprise Healthcare Solutions**  
**Built with ❤️ for Modern Hospitals**
