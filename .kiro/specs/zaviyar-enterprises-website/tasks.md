# Implementation Plan: Zaviyar Enterprises Website

## Overview

This implementation plan breaks down the Zaviyar Enterprises website development into discrete, actionable tasks. The website is a modern, mobile-responsive multi-page site built with HTML5, CSS3, Vanilla JavaScript, and Tailwind CSS via CDN. The implementation follows a logical progression: project setup, asset creation, shared components, page implementation, JavaScript functionality, styling, and final optimization.

## Tasks

- [x] 1. Project setup and directory structure
  - Create root directory and all subdirectories (assets/css, assets/js, assets/images, assets/icons)
  - Create README.md with project description and setup instructions
  - Set up .gitignore file for version control
  - _Requirements: 1.1, 12.4_

- [ ] 2. Create SVG logo and favicon assets
  - [x] 2.1 Design and create logo.svg with rice grain motif
    - Create SVG file with 120x120px viewBox
    - Use emerald green (#064e3b) and gold (#f59e0b) colors
    - Include rice grain central element and circular badge
    - _Requirements: 3.2, 3.3_
  
  - [-] 2.2 Create favicon.svg from logo design
    - Simplify logo design for 32x32px and 16x16px sizes
    - Remove text elements, keep only rice grain icon
    - Ensure high contrast for browser tab visibility
    - _Requirements: 3.3_

- [ ] 3. Create base HTML template structure
  - [-] 3.1 Create reusable navigation header component
    - Write HTML structure for sticky navigation with logo and menu items
    - Include mobile hamburger button with ARIA attributes
    - Create hidden mobile menu with all 7 page links
    - Add proper semantic HTML5 elements (header, nav)
    - _Requirements: 1.2, 1.4, 1.6, 13.5_
  
  - [x] 3.2 Create reusable footer component
    - Write HTML structure with 3-column grid layout (brand, quick links, contact CTA)
    - Include all 7 page links in quick links section
    - Add copyright notice "© 2008 Zaviyar Enterprises. All Rights Reserved."
    - Include footer ARIA label for accessibility
    - _Requirements: 14.1, 14.2, 14.3, 14.4_

- [x] 4. Implement Home page (index.html)
  - [x] 4.1 Create index.html with hero section
    - Set up HTML5 doctype and meta tags for SEO and performance
    - Include Tailwind CSS CDN link and custom CSS
    - Create full-viewport hero section with background image overlay
    - Add heading "Zaviyar Enterprises" and tagline
    - Include two CTA buttons (Explore Products, Get in Touch)
    - _Requirements: 2.1, 2.2, 2.3, 2.4, 2.5, 2.6, 11.2_
  
  - [x] 4.2 Add Introduction, Featured Products, and Why Choose Us sections
    - Create Introduction section with company overview paragraph
    - Build 3-card featured products grid (responsive: 1 col mobile, 3 col desktop)
    - Create Why Choose Us section with 3 columns (Quality, Capacity, Experience)
    - Add final CTA section prompting contact
    - _Requirements: 1.1, 4.1, 4.2, 4.3, 4.4_

- [ ] 5. Implement About Us page (about.html)
  - [x] 5.1 Create about.html with page header and Our Journey section
    - Copy navigation and footer from index.html
    - Create page header section with emerald background
    - Write "Our Journey" section describing company history since 2008
    - _Requirements: 5.1_
  
  - [-] 5.2 Add Vision & Mission and Infrastructure sections
    - Create 2-column grid for Vision and Mission cards
    - Style Vision card with emerald background, Mission with gold accent
    - Add Infrastructure section with milling capacity specification (500 MT daily)
    - Include equipment highlights (color sorters, polishers, destoners)
    - _Requirements: 5.2, 5.3, 5.5, 5.6_
  
  - [-] 5.3 Add Certifications section with quality badges
    - Create 2-3 quality badge components for HACCP and ISO certifications
    - Each badge includes icon, title, and description
    - Use grid layout responsive to screen size
    - _Requirements: 5.4_

- [ ] 6. Implement Products page (products.html)
  - [ ] 6.1 Create products.html with Basmati Rice section
    - Copy navigation and footer components
    - Create page header and Basmati section introduction
    - Build 3 product cards for: Super Kernel, 1121 Steam, 1121 Sella
    - Each card includes image placeholder, name, description, specifications (grain length, moisture, purity)
    - Add "Request Quote" CTA button on each card
    - _Requirements: 6.1, 6.2, 6.4, 6.5, 6.6, 6.7_
  
  - [~] 6.2 Add Non-Basmati Rice section
    - Create Non-Basmati section with introduction
    - Build 3 product cards for: IRRI-6, C9, Broken Rice
    - Include specifications for each variety
    - Ensure responsive grid layout (1 col mobile, 2 col tablet, 3 col desktop)
    - _Requirements: 6.3, 6.4, 6.8_

- [ ] 7. Implement Milling & Processing page (milling.html)
  - [~] 7.1 Create milling.html with Process Workflow visualization
    - Copy navigation and footer components
    - Create page header and process overview introduction
    - Build 5 process step components in sequential order: Cleaning, De-husking, Polishing, Color Sorting, Packaging
    - Each step includes icon, step number, title, and description
    - Implement responsive layout (vertical mobile, horizontal desktop)
    - _Requirements: 7.1, 7.2, 7.3, 7.6_
  
  - [~] 7.2 Add Quality Control and Testing Labs sections
    - Create Quality Control section describing procedures
    - Add Testing Labs section with capabilities description
    - Include standards compliance information (HACCP, ISO)
    - _Requirements: 7.4, 7.5_

- [ ] 8. Implement Packaging & Export page (packaging.html)
  - [~] 8.1 Create packaging.html with Packaging Options section
    - Copy navigation and footer components
    - Create page header section
    - Build 4 packaging option cards: PP Bags, Non-woven bags, Jute bags, Master Cartons
    - Each card includes icon, title, and description
    - Use 4-column responsive grid (1 col mobile, 2 col tablet, 4 col desktop)
    - _Requirements: 8.1_
  
  - [~] 8.2 Add Custom Packaging and Export Capabilities sections
    - Create Custom Packaging section indicating availability
    - Add Export Capabilities section describing global reach
    - Include Logistics Services section with shipping standards
    - _Requirements: 8.2, 8.3, 8.4, 8.5_

- [ ] 9. Implement Quality Assurance page (quality.html)
  - [~] 9.1 Create quality.html with Food Safety Commitment section
    - Copy navigation and footer components
    - Create prominent commitment statement section with emerald background
    - Add certification badges display (2-3 badges in grid)
    - _Requirements: 9.1, 9.4_
  
  - [~] 9.2 Add Hygienic Processing and Lab Testing sections
    - Create Hygienic Processing section describing practices
    - Add Lab Testing section with procedures and equipment
    - Emphasize international food safety standards compliance
    - _Requirements: 9.2, 9.3, 9.5_

- [ ] 10. Implement Contact Us page (contact.html)
  - [~] 10.1 Create contact.html with contact form
    - Copy navigation and footer components
    - Create form with 5 input fields: Name, Email, Country, Quantity Required, Message
    - Add labels with red asterisks for required fields
    - Include hidden error message spans below each field
    - Add submit button with proper styling
    - Include hidden success message div
    - Set novalidate attribute on form for custom validation
    - _Requirements: 10.1, 10.9, 13.6_
  
  - [~] 10.2 Add Business Information and Google Maps sections
    - Create 4-column grid for business information: Location, Email, Phone, Business Hours
    - Each info card includes icon, heading, and details
    - Add Google Maps iframe placeholder section
    - Ensure responsive layout (1 col mobile, 2 col tablet, 4 col desktop)
    - _Requirements: 10.4, 10.5, 10.6, 10.7, 10.8_

- [~] 11. Checkpoint - Verify all HTML pages structure
  - Ensure all tests pass, ask the user if questions arise.

- [ ] 12. Implement JavaScript modules
  - [~] 12.1 Create navigation.js module
    - Write mobile menu toggle function with ARIA attribute updates
    - Implement click-outside handler to close mobile menu
    - Create setActivePage function to highlight current page in navigation
    - Add aria-expanded and aria-current attributes management
    - Use IIFE pattern for encapsulation
    - _Requirements: 1.3, 1.5, 13.3_
  
  - [~] 12.2 Create form-validation.js module
    - Write validateField function for individual field validation
    - Implement email regex pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    - Create validateForm function to check all required fields
    - Add blur event listeners for real-time validation
    - Implement form submit handler with preventDefault
    - Show success message and reset form after valid submission
    - Display error messages with proper styling (red border, visible error text)
    - _Requirements: 10.2, 10.3, 10.10_
  
  - [~] 12.3 Create lazy-load.js module
    - Implement Intersection Observer for lazy loading images
    - Set rootMargin to '50px 0px' for preloading
    - Add fallback for browsers without Intersection Observer support
    - Apply .loaded class when image loads for CSS transitions
    - Target all images with data-src attribute
    - _Requirements: 11.6_
  
  - [~] 12.4 Create main.js controller
    - Implement smooth scroll for anchor links
    - Add keyboard navigation detection (Tab key listener)
    - Apply .keyboard-nav class to body during keyboard navigation
    - Add page load time performance logging
    - Include global error handlers for JavaScript errors
    - _Requirements: 13.3, 13.4_

- [ ] 13. Create custom CSS stylesheet (assets/css/style.css)
  - [~] 13.1 Add core CSS utilities and variables
    - Define CSS custom properties for color palette
    - Add smooth scrolling behavior to html element
    - Create focus-visible styles for keyboard navigation
    - Implement lazy image loading transitions (opacity animation)
    - Add hero overlay gradient styles
    - _Requirements: 3.1, 13.4, 15.6_
  
  - [~] 13.2 Add layout and component styles
    - Implement flexbox layout for body (footer at bottom)
    - Create .sr-only class for screen reader accessibility
    - Add focus:not-sr-only utility for skip links
    - Define consistent transition durations (300ms standard)
    - Add hover effects for cards and buttons
    - _Requirements: 14.6, 15.3, 15.4, 15.5_

- [ ] 14. Integrate Unsplash images across all pages
  - [~] 14.1 Add images to Home, About, and Products pages
    - Replace hero background placeholder with Unsplash rice field image
    - Add featured product images on Home page
    - Include company/infrastructure images on About page
    - Add Basmati and Non-Basmati rice close-up images on Products page
    - Use data-src attribute for lazy loading
    - Include descriptive alt text for all images
    - Apply Unsplash URL parameters for optimization (?w=800&q=80)
    - _Requirements: 3.6, 6.8, 13.1_
  
  - [~] 14.2 Add images to Milling, Packaging, Quality, and Contact pages
    - Include milling equipment images on Milling page
    - Add packaging and logistics images on Packaging page
    - Include quality control/lab testing images on Quality page
    - Add location or facility images on Contact page
    - Ensure all images have proper alt text and lazy loading
    - _Requirements: 3.6, 13.1_

- [ ] 15. Implement responsive design for all pages
  - [~] 15.1 Configure Tailwind CSS breakpoints and test mobile layout
    - Add Tailwind config script to HTML head sections
    - Test all pages at 375px and 414px viewport widths
    - Verify single-column layouts on mobile
    - Ensure hamburger menu functions correctly
    - Check minimum font size of 14px on mobile
    - Verify touch targets are at least 44x44 pixels
    - _Requirements: 4.1, 4.2, 4.5, 4.6_
  
  - [~] 15.2 Test tablet and desktop responsive layouts
    - Test all pages at 768px and 1024px (tablet)
    - Test all pages at 1280px, 1440px, 1920px (desktop)
    - Verify grid layouts adjust correctly (2-col tablet, 3-4 col desktop)
    - Check navigation displays horizontally on desktop
    - Ensure footer 3-column layout appears on desktop
    - _Requirements: 4.3, 4.4_

- [ ] 16. Implement accessibility features
  - [~] 16.1 Add ARIA attributes and semantic HTML
    - Add aria-label to navigation, footer, and icon buttons
    - Include aria-expanded on mobile menu toggle button
    - Add aria-current="page" to active navigation link
    - Use aria-required="true" on form required fields
    - Add aria-describedby linking inputs to error messages
    - Use role="alert" for error messages
    - Ensure proper heading hierarchy (h1 → h2 → h3)
    - _Requirements: 13.5, 13.3_
  
  - [~] 16.2 Verify color contrast and keyboard navigation
    - Test all text/background combinations meet WCAG AA 4.5:1 ratio
    - Verify focus indicators visible on all interactive elements
    - Test complete keyboard navigation (Tab, Enter, Escape)
    - Ensure skip-to-main-content link functions
    - Add aria-hidden="true" to decorative SVG icons
    - _Requirements: 13.2, 13.4, 13.1_

- [ ] 17. Implement performance optimizations
  - [~] 17.1 Optimize HTML and resource loading
    - Add preconnect links for fonts.googleapis.com and images.unsplash.com
    - Use defer attribute on all JavaScript files
    - Inline critical above-the-fold CSS
    - Add loading="lazy" attribute to below-fold images
    - Implement srcset for responsive images
    - _Requirements: 11.1, 11.6_
  
  - [~] 17.2 Test and verify performance metrics
    - Run Google PageSpeed Insights on all pages
    - Verify First Contentful Paint < 1.5s
    - Verify Largest Contentful Paint < 2.5s
    - Ensure Time to Interactive < 3.5s
    - Check total page weight < 500KB (excluding images)
    - Verify home page loads within 2 seconds on 10 Mbps connection
    - _Requirements: 11.1, 11.5_

- [~] 18. Checkpoint - Test all functionality and JavaScript modules
  - Ensure all tests pass, ask the user if questions arise.

- [ ] 19. Add SEO and metadata to all pages
  - [~] 19.1 Add meta tags to all 7 pages
    - Include title, description, keywords for each page
    - Add Open Graph meta tags (og:title, og:description, og:image, og:url)
    - Include Twitter Card meta tags
    - Add canonical link tags
    - Set viewport meta tag
    - Link favicon files (favicon.svg, favicon.ico, apple-touch-icon)
    - _Requirements: 3.3, 12.1_
  
  - [~] 19.2 Create sitemap.xml and robots.txt
    - Create sitemap.xml with all 7 pages and priority values
    - Create robots.txt allowing all user agents
    - Include sitemap reference in robots.txt
    - _Requirements: 12.1_

- [ ] 20. Validation and cross-browser testing
  - [~] 20.1 Validate HTML, CSS, and JavaScript
    - Run W3C HTML Validator on all 7 pages and fix errors
    - Run W3C CSS Validator on style.css and fix errors
    - Check browser console for JavaScript errors on all pages
    - Test form validation on Contact page
    - Verify all internal links work correctly
    - _Requirements: 12.6, 12.1, 12.2_
  
  - [~] 20.2 Test on multiple browsers
    - Test all pages on Chrome (latest version)
    - Test all pages on Firefox (latest version)
    - Test all pages on Safari (latest version)
    - Test all pages on Edge (latest version)
    - Verify consistent appearance and functionality across browsers
    - Test mobile browsers (Chrome Mobile, Safari iOS)
    - _Requirements: 12.7_

- [ ] 21. Accessibility audit
  - [~] 21.1 Run accessibility testing tools
    - Run Lighthouse accessibility audit on all pages (target score >90)
    - Use WAVE Web Accessibility Evaluation Tool
    - Test with axe DevTools browser extension
    - Verify all issues identified are addressed
    - _Requirements: 13.2, 13.3, 13.4_
  
  - [ ]* 21.2 Perform screen reader testing
    - Test navigation with NVDA or JAWS (Windows)
    - Test navigation with VoiceOver (macOS/iOS)
    - Verify all content is announced correctly
    - Check form labels and error messages are read properly
    - _Requirements: 13.1, 13.6_

- [ ] 22. Final production preparation
  - [~] 22.1 Review and update all content
    - Verify all placeholder text has been replaced
    - Check contact information is correct (email, phone, location, hours)
    - Ensure copyright year is correct (2008)
    - Verify no personal names of owners/employees appear
    - Review all product specifications for accuracy
    - _Requirements: 3.5, 14.2_
  
  - [~] 22.2 Create deployment documentation
    - Update README.md with comprehensive setup instructions
    - Document deployment process for static hosting (Netlify, Vercel, GitHub Pages)
    - Include configuration examples (nginx, Apache if applicable)
    - Add troubleshooting section
    - Document image optimization and Unsplash integration
    - _Requirements: 12.4_

- [~] 23. Final checkpoint and deployment readiness
  - Ensure all tests pass, ask the user if questions arise.

## Notes

- Tasks marked with `*` are optional and can be skipped for faster MVP (e.g., manual screen reader testing can be performed by the user separately)
- Each task references specific requirements for traceability
- The implementation follows a logical flow: structure → assets → components → pages → JavaScript → styling → optimization → testing
- All pages share consistent navigation and footer components to reduce duplication
- Images use lazy loading for performance except above-the-fold hero images
- Accessibility is integrated throughout rather than added at the end
- Checkpoints ensure incremental validation of core functionality
- No build process required - pure HTML/CSS/JavaScript with CDN-based Tailwind CSS
- The website is fully static with no backend required for initial deployment
- Form submission handling is client-side only (success message display); backend integration can be added later

## Task Dependency Graph

```json
{
  "waves": [
    { "id": 0, "tasks": ["1", "2.1"] },
    { "id": 1, "tasks": ["2.2", "3.1", "3.2"] },
    { "id": 2, "tasks": ["4.1"] },
    { "id": 3, "tasks": ["4.2", "5.1"] },
    { "id": 4, "tasks": ["5.2", "5.3", "6.1"] },
    { "id": 5, "tasks": ["6.2", "7.1"] },
    { "id": 6, "tasks": ["7.2", "8.1"] },
    { "id": 7, "tasks": ["8.2", "9.1"] },
    { "id": 8, "tasks": ["9.2", "10.1"] },
    { "id": 9, "tasks": ["10.2"] },
    { "id": 10, "tasks": ["12.1", "12.2", "12.3", "12.4"] },
    { "id": 11, "tasks": ["13.1", "13.2"] },
    { "id": 12, "tasks": ["14.1", "14.2"] },
    { "id": 13, "tasks": ["15.1"] },
    { "id": 14, "tasks": ["15.2", "16.1"] },
    { "id": 15, "tasks": ["16.2", "17.1"] },
    { "id": 16, "tasks": ["17.2"] },
    { "id": 17, "tasks": ["19.1", "19.2"] },
    { "id": 18, "tasks": ["20.1"] },
    { "id": 19, "tasks": ["20.2", "21.1"] },
    { "id": 20, "tasks": ["21.2", "22.1"] },
    { "id": 21, "tasks": ["22.2"] }
  ]
}
```
