# Samiina Enterprise - Professional Website

A complete, professional, fully responsive multi-page website for Samiina Enterprise, a Ghanaian processed food business showcasing products and company information.

## Features

✅ **Fully Responsive Design** - Mobile, tablet, and desktop optimized  
✅ **Modern UI/UX** - Clean, professional food-industry inspired design  
✅ **React Router** - Smooth page navigation  
✅ **SVG Icons** - Custom SVG icons throughout (no emojis)  
✅ **Smooth Animations** - Page transitions and hover effects  
✅ **Product Inventory** - Complete product catalog with search and filter  
✅ **Contact Form** - Functional form with validation  
✅ **Embedded Google Maps** - Location display  
✅ **Performance Optimized** - Fast loading with Vite  
✅ **SEO Friendly** - Proper meta tags and structure  

## Tech Stack

- **React.js** - UI framework
- **React Router v6** - Client-side routing
- **Vite** - Fast build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **SVG Icons** - Custom inline SVG icons

## Project Structure

```
samina/
├── src/
│   ├── components/
│   │   ├── Navigation.jsx      # Header with mobile menu
│   │   ├── Footer.jsx          # Footer with links and social media
│   │   ├── Icons.jsx           # All SVG icons
│   │   ├── LoadingAnimation.jsx # Page transition loading
│   │   └── ScrollToTop.jsx     # Scroll to top button
│   ├── pages/
│   │   ├── Home.jsx            # Home page with hero and featured products
│   │   ├── About.jsx           # About us page with mission and values
│   │   ├── Inventory.jsx       # Products catalog with search/filter
│   │   └── Contact.jsx         # Contact page with form and info
│   ├── App.jsx                 # Main app with routing
│   ├── index.css               # Global styles and animations
│   └── main.jsx                # React entry point
├── index.html                  # HTML template
├── vite.config.js              # Vite configuration
├── tailwind.config.js          # Tailwind CSS configuration
├── postcss.config.js           # PostCSS configuration
├── package.json                # Dependencies
└── README.md                   # This file
```

## Color Palette

- **Primary**: #2E7D32 (Green)
- **Secondary**: #F9A825 (Golden Yellow)
- **Background**: #FAFAFA
- **Text**: #212121
- **Accent**: #8D6E63

## Pages

### 1. Home Page
- Hero section with call-to-action buttons
- Why Choose Us cards with SVG icons
- Featured products showcase (6 products)
- Customer testimonials with 5-star ratings
- Call-to-action section

### 2. About Us Page
- Company story and background
- Mission statement
- Vision statement
- Core values (Quality, Integrity, Innovation, Customer Satisfaction)
- Processing standards

### 3. Inventory Page
- Complete product catalog (12+ products)
- Search functionality
- Category filtering
- Product cards with details (name, category, weight, price)
- Responsive grid layout

### 4. Contact Page
- Contact information (phone, WhatsApp, email, location)
- Functional contact form with validation
- Business hours
- Embedded Google Maps
- Success message after form submission

## Installation & Setup

### Prerequisites
- Node.js 16+ installed

### Steps

1. **Clone/Download the project**
   ```bash
   cd samina
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```
   The website will open automatically at `http://localhost:3000`

4. **Build for production**
   ```bash
   npm run build
   ```
   The optimized files will be in the `dist/` folder

## Features Explained

### Responsive Design
- Mobile-first approach
- Hamburger menu on mobile
- Tailwind CSS responsive utilities
- Optimized for all screen sizes

### Loading Animation
- Shows when navigating between pages
- Logo centered in the middle
- Spinning SVG animation
- 0.8 second duration

### Navigation
- Sticky header
- Desktop: Horizontal menu
- Mobile: Hamburger menu with slide-in drawer
- Active link highlighting

### Search & Filter
- Real-time product search by name/description
- Filter by product categories
- Shows product count
- Responsive filter UI

### Contact Form
- Validates all fields
- Email format validation
- Phone number validation
- Error messages display
- Success message after submission
- Form resets on successful submission

### SEO Optimization
- Proper meta tags
- Semantic HTML
- Keyword-rich content
- Mobile viewport optimization

## Customization Guide

### Changing Colors
Edit `tailwind.config.js`:
```javascript
colors: {
  primary: '#2E7D32',      // Green
  secondary: '#F9A825',    // Golden Yellow
  // ... add more colors
}
```

### Adding Products
Edit product arrays in:
- `src/pages/Home.jsx` (FEATURED_PRODUCTS)
- `src/pages/Inventory.jsx` (ALL_PRODUCTS)

### Updating Contact Information
Edit in `src/components/Footer.jsx` and `src/pages/Contact.jsx`:
- Phone number
- Email
- WhatsApp link
- Physical address

### Business Hours
Edit in `src/pages/Contact.jsx`:
```javascript
Monday–Friday: 8:00 AM – 5:00 PM
Saturday: 8:00 AM – 2:00 PM
Sunday: Closed
```

### Social Media Links
Edit in `src/components/Footer.jsx`:
- Facebook
- Instagram
- TikTok
- LinkedIn

## Performance Tips

1. **Replace placeholder images** - Add actual product photos
2. **Lazy loading** - Images load as users scroll
3. **Code splitting** - React Router handles page splitting
4. **Minification** - Build automatically minifies code
5. **Caching** - Configure browser caching headers

## Browser Support

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Mobile browsers (iOS Safari, Chrome Mobile)

## Deployment

### Firebase Hosting
```bash
npm install -g firebase-tools
npm run build
firebase login
firebase init
firebase deploy
```

### Netlify
```bash
npm run build
# Deploy the dist/ folder to Netlify
```

### Vercel
```bash
npm run build
# Deploy the dist/ folder to Vercel
```

## Assets & Images

The website uses placeholder product images. To replace them:

1. Add product images to `public/images/` folder
2. Update image paths in components
3. Optimize images before deployment (compress, use WebP format)

## Future Enhancements

- [ ] Add blog section
- [ ] Integrate online ordering system
- [ ] Add testimonials/reviews section
- [ ] Implement email notifications
- [ ] Add multi-language support
- [ ] Add customer testimonial form
- [ ] Implement analytics

## License

This project is created for NutriMix Foods Ghana.

## Support

For issues or questions:
- Email: info@samiina.com
- Phone: +233 244 117 0600 / +233 241 170 400
- WhatsApp: +233 244 117 0600

---

**Built with React, Tailwind CSS, and modern web technologies.**  
**Professional, responsive, and production-ready.**
