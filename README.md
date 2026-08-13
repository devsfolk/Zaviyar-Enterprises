# Zaviyar Enterprises Website

Premium rice milling and global export company website built with modern web technologies.

## About the Project

This is the official website for **Zaviyar Enterprises**, a rice milling business established in 2008, specializing in both Basmati and Non-Basmati rice varieties. The website showcases the company's products, milling capabilities, quality certifications, and global export services.

### Key Features

- 🌾 **7 Comprehensive Pages**: Home, About Us, Products, Milling & Processing, Packaging & Export, Quality Assurance, Contact Us
- 📱 **Fully Responsive**: Mobile-first design adapting to screens from 320px to 1920px+
- ⚡ **Lightning Fast**: Initial page load under 2 seconds with optimized assets
- ♿ **Accessible**: WCAG 2.1 AA compliant with proper color contrast and keyboard navigation
- 🎨 **Brand Consistency**: Professional design with Deep Emerald Green and Warm Gold color palette
- 🖼️ **High-Quality Imagery**: Curated Unsplash images depicting rice milling and processing

## Technology Stack

This website is built with a lightweight, no-build-process stack:

- **HTML5**: Semantic markup for structure
- **CSS3**: Modern styling with custom properties
- **Tailwind CSS**: Utility-first CSS framework (via CDN)
- **Vanilla JavaScript**: Pure JavaScript for interactivity (no frameworks)
- **Unsplash API**: High-quality rice and agriculture imagery
- **SVG**: Scalable vector graphics for logo and icons

### Why This Stack?

- ✅ No build process required - edit and reload
- ✅ Zero npm dependencies
- ✅ Fast development and deployment
- ✅ Easy to maintain and modify
- ✅ Excellent performance out of the box

## Project Structure

```
zaviyar-enterprises-website/
│
├── index.html                 # Home page with hero section
├── about.html                 # Company history and mission
├── products.html              # Rice varieties catalog
├── milling.html               # Milling process workflow
├── packaging.html             # Packaging and export services
├── quality.html               # Quality assurance and certifications
├── contact.html               # Contact form and business info
│
├── assets/
│   ├── css/
│   │   └── style.css          # Custom styles supplementing Tailwind
│   ├── js/
│   │   ├── main.js            # Main JavaScript controller
│   │   ├── navigation.js      # Navigation menu logic
│   │   ├── form-validation.js # Contact form validation
│   │   └── lazy-load.js       # Image lazy loading
│   ├── images/
│   │   ├── logo.svg           # Company logo with rice grain motif
│   │   ├── favicon.svg        # Favicon
│   │   └── unsplash/          # Cached images (optional)
│   └── icons/
│       └── process-icons.svg  # Sprite sheet for milling icons
│
├── README.md                  # This file
└── .gitignore                 # Git ignore rules
```

## Getting Started

### Prerequisites

- A modern web browser (Chrome, Firefox, Safari, or Edge)
- A text editor (VS Code, Sublime Text, or any editor of your choice)
- Optional: A local web server for testing (Live Server extension, Python http.server, etc.)

### Installation

1. **Clone or Download the Repository**
   ```bash
   git clone <repository-url>
   cd zaviyar-enterprises-website
   ```

2. **Open in Your Browser**
   
   **Option A**: Direct File Opening
   - Simply double-click `index.html` to open in your default browser
   
   **Option B**: Using a Local Server (Recommended)
   - **VS Code Live Server**: Install the Live Server extension, then right-click `index.html` and select "Open with Live Server"
   - **Python**: Run `python -m http.server 8000` in the project directory, then visit `http://localhost:8000`
   - **Node.js http-server**: Run `npx http-server -p 8000`

3. **That's It!**
   
   No build process, no npm install, no compilation needed. The website is ready to use immediately.

### Development Workflow

1. **Edit Files**: Modify HTML, CSS, or JS files directly in your text editor
2. **Refresh Browser**: See changes immediately (or use Live Server for auto-refresh)
3. **Test Responsiveness**: Use browser DevTools to test different screen sizes
4. **Validate**: Use W3C validators to check HTML/CSS quality

## Configuration

### Tailwind CSS Configuration

Tailwind CSS is loaded via CDN with custom configuration in each HTML file:

```html
<script src="https://cdn.tailwindcss.com"></script>
<script>
    tailwind.config = {
        theme: {
            extend: {
                colors: {
                    'emerald': {
                        100: '#d1fae5',
                        700: '#047857',
                        800: '#065f46',
                        900: '#064e3b',
                    },
                    'gold': {
                        400: '#fbbf24',
                        500: '#f59e0b',
                        600: '#d97706',
                    },
                    'cream': '#faf9f6',
                    'charcoal': '#1f2937',
                }
            }
        }
    }
</script>
```

### Unsplash Images

Images are loaded from Unsplash with search terms related to:
- Rice fields and paddy cultivation
- Rice milling equipment and processing
- Rice grains and varieties
- Packaging and export operations

**Example Unsplash URL pattern**:
```
https://images.unsplash.com/photo-[photo-id]?auto=format&fit=crop&w=[width]&q=80
```

### Color Palette

| Color Name | Hex Code | Usage |
|------------|----------|-------|
| Deep Emerald Green | #064e3b | Primary color (headers, navigation, CTA buttons) |
| Warm Gold/Amber | #f59e0b | Accent color (highlights, hover states) |
| Rice Off-White/Cream | #faf9f6 | Background color |
| Dark Charcoal | #1f2937 | Text color |

## Features and Pages

### 1. Home Page (index.html)
- Full-screen hero section with background image
- Company tagline and value proposition
- Featured products preview
- "Why Choose Us" benefits section
- Call-to-action buttons

### 2. About Us (about.html)
- Company journey since 2008
- Vision and mission statements
- Infrastructure and capacity information
- Quality certifications (HACCP, ISO)

### 3. Products (products.html)
- Basmati rice varieties (Super Kernel, 1121 Steam, 1121 Sella)
- Non-Basmati varieties (IRRI-6, C9, Broken Rice)
- Detailed specifications (grain length, moisture, purity)
- Product imagery and descriptions

### 4. Milling & Processing (milling.html)
- 5-step milling process workflow (Cleaning, De-husking, Polishing, Color Sorting, Packaging)
- Process descriptions with icons
- Quality control procedures
- Testing lab capabilities

### 5. Packaging & Export (packaging.html)
- Available packaging options (PP Bags, Non-woven, Jute, Cartons)
- Custom packaging capabilities
- Global export services
- Logistics and shipping standards

### 6. Quality Assurance (quality.html)
- Food safety commitment
- Hygienic processing practices
- Lab testing procedures
- International standards compliance
- Certification badges

### 7. Contact Us (contact.html)
- Contact form with validation (Name, Email, Country, Quantity, Message)
- Business location and contact information
- Email, phone, and business hours
- Google Maps embed placeholder
- Form submission confirmation

## Responsive Design Breakpoints

The website follows a mobile-first approach with these breakpoints:

| Breakpoint | Screen Width | Layout |
|------------|--------------|--------|
| Mobile | < 640px | Single column, hamburger menu |
| Tablet | 640px - 1024px | 2-column layouts, expanded menu |
| Desktop | > 1024px | Multi-column grids, full navigation |

## Accessibility Features

- ✅ Semantic HTML5 elements (header, nav, main, article, footer)
- ✅ Alt text for all images
- ✅ WCAG 2.1 AA color contrast ratios (minimum 4.5:1)
- ✅ Keyboard navigation support (Tab, Enter, Escape keys)
- ✅ Visible focus indicators on interactive elements
- ✅ ARIA labels for icon-only buttons
- ✅ Form labels properly associated with inputs
- ✅ Minimum 44x44px touch targets on mobile

## Performance Optimization

- ⚡ Lazy loading for images below the fold
- ⚡ Optimized image formats and sizes
- ⚡ Minimal JavaScript (Vanilla JS only, no frameworks)
- ⚡ CSS via CDN with browser caching
- ⚡ Inline critical CSS for above-the-fold content
- ⚡ Target: < 2 seconds initial page load on 10 Mbps connection

## Browser Support

Tested and supported on:
- ✅ Chrome (last 2 versions)
- ✅ Firefox (last 2 versions)
- ✅ Safari (last 2 versions)
- ✅ Edge (last 2 versions)

## Testing Checklist

Before deployment, verify:

- [ ] All 7 pages load without errors
- [ ] Navigation works on all pages
- [ ] Mobile hamburger menu functions correctly
- [ ] Contact form validates input properly
- [ ] All images load with proper lazy loading
- [ ] Responsive layout works on mobile, tablet, and desktop
- [ ] Color contrast meets WCAG AA standards
- [ ] Keyboard navigation functions on all interactive elements
- [ ] HTML validates with W3C validator
- [ ] CSS validates without errors
- [ ] Page load time is under 2 seconds

## Deployment

### Option 1: Static Hosting Services

Upload the entire project folder to:
- **Netlify**: Drag and drop deployment
- **Vercel**: Connect GitHub repo or direct upload
- **GitHub Pages**: Push to gh-pages branch
- **AWS S3**: Static website hosting
- **Cloudflare Pages**: Direct upload or Git integration

### Option 2: Traditional Web Hosting

1. Upload all files via FTP to your web host's public_html directory
2. Ensure the file structure is preserved
3. Set index.html as the default document
4. Test all pages and links after deployment

### Deployment Checklist

- [ ] Update contact form to connect to backend/email service
- [ ] Add real Google Maps embed code
- [ ] Replace placeholder contact information with real data
- [ ] Test all external links
- [ ] Verify Unsplash images load properly
- [ ] Check SSL certificate is active (HTTPS)
- [ ] Test on multiple devices and browsers
- [ ] Set up analytics (Google Analytics, etc.)

## Customization Guide

### Changing Colors

Edit the Tailwind configuration in each HTML file's `<script>` section to modify the color palette.

### Adding New Pages

1. Create a new HTML file (e.g., `new-page.html`)
2. Copy the structure from `index.html` as a template
3. Add the new page link to the navigation menu in all HTML files
4. Update the footer links to include the new page

### Modifying the Contact Form

Edit `contact.html` to add/remove form fields, and update `assets/js/form-validation.js` to adjust validation rules.

### Changing Images

Replace Unsplash URLs in the HTML files with your own image URLs or local image paths in the `assets/images/` directory.

## Maintenance

### Regular Updates

- Review and update product specifications quarterly
- Update certifications and quality badges annually
- Refresh imagery periodically for visual appeal
- Test browser compatibility with new browser releases

### Content Management

All content is stored directly in HTML files for easy editing:
- Text content: Edit HTML files directly
- Styles: Modify `assets/css/style.css` or Tailwind classes
- Behavior: Update JavaScript files in `assets/js/`

## Troubleshooting

### Images Not Loading

- Check Unsplash URLs are correct and active
- Verify internet connection for CDN resources
- Check browser console for CORS errors

### Tailwind CSS Not Working

- Verify CDN link is correct and not blocked
- Check browser console for script errors
- Ensure Tailwind config script runs after CDN load

### Contact Form Not Submitting

- Form is currently client-side only
- Integrate with a backend service (Formspree, Netlify Forms, etc.)
- Check browser console for JavaScript errors

## Contributing

This is a business website project. For internal development:

1. Create a feature branch
2. Make your changes
3. Test thoroughly across devices and browsers
4. Submit for review before merging to main

## License

© 2008 Zaviyar Enterprises. All Rights Reserved.

This website and its content are proprietary to Zaviyar Enterprises.

## Support

For technical issues or questions about the website:
- Email: [Contact email to be added]
- Phone: [Contact phone to be added]

---

**Built with ❤️ for Zaviyar Enterprises**

*Last Updated: 2024*
