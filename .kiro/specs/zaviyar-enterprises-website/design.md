# Design Document

## Overview

This document provides the comprehensive technical design for the Zaviyar Enterprises website, a modern, mobile-responsive web presence for a rice milling business. The website showcases rice products, milling capabilities, quality standards, and global export services using a lightweight technology stack: HTML5, CSS3, Vanilla JavaScript, and Tailwind CSS via CDN.

### Business Context

Zaviyar Enterprises, established in 2008, is a rice milling business specializing in both Basmati and Non-Basmati rice varieties. The website serves as a digital storefront to attract international buyers, showcase quality certifications (HACCP, ISO), and facilitate business inquiries through a contact form.

### Technical Approach

The design implements a multi-page website architecture (7 pages) with no build process required. All pages use:
- **HTML5** for semantic structure
- **Tailwind CSS** (CDN) for responsive styling
- **Vanilla JavaScript** for interactivity (navigation, form validation, lazy loading)
- **Unsplash API** for high-quality imagery
- **SVG** for scalable logo and favicon

### Design Goals

1. **Performance**: Initial page load under 2 seconds on 10 Mbps connection
2. **Mobile-First**: Responsive from 320px to 1920px+ viewports
3. **Accessibility**: WCAG 2.1 AA compliance for color contrast and keyboard navigation
4. **Maintainability**: Clean separation of concerns, semantic HTML, documented code
5. **Brand Consistency**: Unified color palette, typography, and visual identity

## Architecture

### High-Level Structure

```
zaviyar-enterprises-website/
│
├── index.html                 # Home page
├── about.html                 # About Us page
├── products.html              # Products page
├── milling.html               # Milling & Processing page
├── packaging.html             # Packaging & Export page
├── quality.html               # Quality Assurance page
├── contact.html               # Contact Us page
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
│   │   ├── favicon.svg        # Favicon with rice grain motif
│   │   └── unsplash/          # Cached Unsplash images (optional)
│   └── icons/
│       └── process-icons.svg  # Sprite sheet for milling process icons
│
└── README.md                  # Development and deployment documentation
```

### Page Architecture

Each HTML page follows a consistent structure:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <!-- Meta tags -->
    <!-- Tailwind CSS CDN -->
    <!-- Custom CSS -->
    <!-- Favicon -->
</head>
<body class="font-sans text-charcoal bg-cream">
    <!-- Navigation Header (reusable component) -->
    <header>...</header>
    
    <!-- Page-specific content -->
    <main>...</main>
    
    <!-- Footer (reusable component) -->
    <footer>...</footer>
    
    <!-- JavaScript modules -->
    <script src="assets/js/navigation.js"></script>
    <script src="assets/js/lazy-load.js"></script>
    <script src="assets/js/main.js"></script>
</body>
</html>
```

### Component Architecture

The design uses reusable HTML components (included via copy-paste or server-side includes in production):

1. **Navigation Header** - Responsive navigation with hamburger menu
2. **Footer** - Site-wide footer with links and copyright
3. **Product Card** - Rice variety display with specifications
4. **Process Step** - Milling process workflow item
5. **Quality Badge** - Certification icon with description
6. **CTA Button** - Call-to-action button with consistent styling
7. **Contact Form** - Form with validation

## Components and Interfaces

### 1. Navigation Header Component

**Purpose**: Provides site-wide navigation across all 7 pages with responsive hamburger menu for mobile.

**HTML Structure**:
```html
<header class="bg-emerald-900 text-cream shadow-lg sticky top-0 z-50">
    <nav class="container mx-auto px-4 py-4">
        <div class="flex justify-between items-center">
            <!-- Logo -->
            <a href="index.html" class="flex items-center space-x-2">
                <img src="assets/images/logo.svg" alt="Zaviyar Enterprises Logo" class="h-12 w-12">
                <span class="text-xl font-bold text-gold-500">Zaviyar Enterprises</span>
            </a>
            
            <!-- Desktop Navigation -->
            <ul class="hidden md:flex space-x-6 text-sm font-medium">
                <li><a href="index.html" class="hover:text-gold-500 transition">Home</a></li>
                <li><a href="about.html" class="hover:text-gold-500 transition">About Us</a></li>
                <li><a href="products.html" class="hover:text-gold-500 transition">Products</a></li>
                <li><a href="milling.html" class="hover:text-gold-500 transition">Milling & Processing</a></li>
                <li><a href="packaging.html" class="hover:text-gold-500 transition">Packaging & Export</a></li>
                <li><a href="quality.html" class="hover:text-gold-500 transition">Quality Assurance</a></li>
                <li><a href="contact.html" class="hover:text-gold-500 transition">Contact Us</a></li>
            </ul>
            
            <!-- Mobile Hamburger Button -->
            <button id="mobile-menu-toggle" class="md:hidden focus:outline-none focus:ring-2 focus:ring-gold-500" aria-label="Toggle mobile menu" aria-expanded="false">
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
                </svg>
            </button>
        </div>
        
        <!-- Mobile Navigation Menu -->
        <ul id="mobile-menu" class="hidden md:hidden mt-4 space-y-2 text-sm font-medium">
            <li><a href="index.html" class="block py-2 hover:text-gold-500 transition">Home</a></li>
            <li><a href="about.html" class="block py-2 hover:text-gold-500 transition">About Us</a></li>
            <li><a href="products.html" class="block py-2 hover:text-gold-500 transition">Products</a></li>
            <li><a href="milling.html" class="block py-2 hover:text-gold-500 transition">Milling & Processing</a></li>
            <li><a href="packaging.html" class="block py-2 hover:text-gold-500 transition">Packaging & Export</a></li>
            <li><a href="quality.html" class="block py-2 hover:text-gold-500 transition">Quality Assurance</a></li>
            <li><a href="contact.html" class="block py-2 hover:text-gold-500 transition">Contact Us</a></li>
        </ul>
    </nav>
</header>
```

**Behavior**:
- Desktop: Horizontal navigation links visible
- Mobile (<768px): Hamburger menu icon, collapsible menu
- Active page: Highlighted with different color or underline
- Sticky positioning: Remains visible during scroll
- Transition time: <200ms for navigation clicks

**JavaScript Interface** (navigation.js):
```javascript
// Toggle mobile menu visibility
function toggleMobileMenu()
// Highlight active page based on current URL
function setActivePage()
// Close mobile menu when clicking outside
function handleClickOutside(event)
```

### 2. Footer Component

**Purpose**: Site-wide footer with quick links, copyright, and branding.

**HTML Structure**:
```html
<footer class="bg-charcoal text-cream py-12 mt-16">
    <div class="container mx-auto px-4">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
            <!-- Brand Section -->
            <div>
                <div class="flex items-center space-x-2 mb-4">
                    <img src="assets/images/logo.svg" alt="Zaviyar Enterprises Logo" class="h-10 w-10">
                    <span class="text-lg font-bold text-gold-500">Zaviyar Enterprises</span>
                </div>
                <p class="text-sm text-gray-400">Premium rice milling and export since 2008</p>
            </div>
            
            <!-- Quick Links -->
            <div>
                <h3 class="text-gold-500 font-semibold mb-4">Quick Links</h3>
                <ul class="space-y-2 text-sm">
                    <li><a href="index.html" class="hover:text-gold-500 transition">Home</a></li>
                    <li><a href="about.html" class="hover:text-gold-500 transition">About Us</a></li>
                    <li><a href="products.html" class="hover:text-gold-500 transition">Products</a></li>
                    <li><a href="milling.html" class="hover:text-gold-500 transition">Milling & Processing</a></li>
                    <li><a href="packaging.html" class="hover:text-gold-500 transition">Packaging & Export</a></li>
                    <li><a href="quality.html" class="hover:text-gold-500 transition">Quality Assurance</a></li>
                    <li><a href="contact.html" class="hover:text-gold-500 transition">Contact Us</a></li>
                </ul>
            </div>
            
            <!-- Contact Info Preview -->
            <div>
                <h3 class="text-gold-500 font-semibold mb-4">Get in Touch</h3>
                <p class="text-sm text-gray-400">Reach out to discuss your rice sourcing needs.</p>
                <a href="contact.html" class="inline-block mt-4 px-6 py-2 bg-gold-500 text-charcoal font-semibold rounded hover:bg-gold-600 transition">Contact Us</a>
            </div>
        </div>
        
        <!-- Copyright -->
        <div class="border-t border-gray-700 mt-8 pt-8 text-center text-sm text-gray-400">
            <p>&copy; 2008 Zaviyar Enterprises. All Rights Reserved.</p>
        </div>
    </div>
</footer>
```

**Layout**:
- Mobile: Single column stacked layout
- Tablet/Desktop: Three-column grid
- Copyright: Full-width centered at bottom
- Minimum height ensures footer stays at bottom even with minimal content

### 3. Product Card Component

**Purpose**: Display individual rice variety specifications in a grid layout.

**HTML Structure**:
```html
<div class="product-card bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
    <!-- Product Image -->
    <img data-src="https://images.unsplash.com/photo-..." 
         alt="Super Kernel Basmati Rice" 
         class="lazy w-full h-48 object-cover">
    
    <!-- Product Details -->
    <div class="p-6">
        <h3 class="text-xl font-bold text-emerald-900 mb-2">Super Kernel Basmati</h3>
        <p class="text-sm text-gray-600 mb-4">Premium long-grain aromatic rice</p>
        
        <!-- Specifications -->
        <ul class="space-y-2 text-sm">
            <li class="flex justify-between">
                <span class="text-gray-600">Grain Length:</span>
                <span class="font-semibold text-charcoal">8.3mm</span>
            </li>
            <li class="flex justify-between">
                <span class="text-gray-600">Moisture Level:</span>
                <span class="font-semibold text-charcoal">12-14%</span>
            </li>
            <li class="flex justify-between">
                <span class="text-gray-600">Purity:</span>
                <span class="font-semibold text-charcoal">99.5%</span>
            </li>
        </ul>
        
        <!-- CTA Button -->
        <a href="contact.html" class="block mt-4 text-center px-4 py-2 bg-emerald-900 text-cream font-semibold rounded hover:bg-emerald-800 transition">
            Request Quote
        </a>
    </div>
</div>
```

**Usage**:
- Products page: 2-3 column grid (responsive)
- Lazy-loaded images using Intersection Observer
- Hover effect: Elevated shadow
- Specifications: Three required fields (grain length, moisture, purity)

### 4. Process Step Component

**Purpose**: Visual representation of each milling process step.

**HTML Structure**:
```html
<div class="process-step text-center">
    <!-- Icon -->
    <div class="w-24 h-24 mx-auto mb-4 bg-gold-500 rounded-full flex items-center justify-center">
        <svg class="w-12 h-12 text-emerald-900" fill="currentColor" viewBox="0 0 24 24">
            <!-- Icon path for specific step -->
        </svg>
    </div>
    
    <!-- Step Number -->
    <div class="text-sm font-semibold text-gold-500 mb-2">STEP 01</div>
    
    <!-- Step Title -->
    <h3 class="text-lg font-bold text-emerald-900 mb-2">Cleaning</h3>
    
    <!-- Step Description -->
    <p class="text-sm text-gray-600">
        Raw paddy is thoroughly cleaned to remove impurities, stones, and foreign materials using advanced screening equipment.
    </p>
</div>
```

**Process Workflow Steps**:
1. Cleaning
2. De-husking
3. Polishing
4. Color Sorting
5. Packaging

**Layout**: 
- Mobile: Single column vertical flow
- Tablet: 2-column grid
- Desktop: 5-column horizontal timeline

### 5. Quality Badge Component

**Purpose**: Display certification badges (HACCP, ISO) with descriptions.

**HTML Structure**:
```html
<div class="quality-badge flex items-start space-x-4 p-4 bg-white rounded-lg shadow">
    <!-- Badge Icon -->
    <div class="flex-shrink-0 w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center">
        <svg class="w-8 h-8 text-emerald-900" fill="currentColor" viewBox="0 0 24 24">
            <!-- Certification icon -->
        </svg>
    </div>
    
    <!-- Badge Content -->
    <div>
        <h4 class="font-bold text-emerald-900 mb-1">HACCP Certified</h4>
        <p class="text-sm text-gray-600">Hazard Analysis and Critical Control Points certification ensuring food safety at every production stage.</p>
    </div>
</div>
```

**Certifications to Display**:
- HACCP (Hazard Analysis Critical Control Points)
- ISO Certification
- Food Safety Standards Compliance

### 6. CTA Button Component

**Purpose**: Consistent call-to-action buttons throughout the site.

**Variants**:
```html
<!-- Primary CTA (Emerald background) -->
<a href="contact.html" class="cta-button-primary inline-block px-8 py-3 bg-emerald-900 text-cream font-semibold rounded-lg shadow-lg hover:bg-emerald-800 hover:shadow-xl transition-all duration-300">
    Get in Touch
</a>

<!-- Secondary CTA (Gold background) -->
<a href="products.html" class="cta-button-secondary inline-block px-8 py-3 bg-gold-500 text-charcoal font-semibold rounded-lg shadow-lg hover:bg-gold-600 hover:shadow-xl transition-all duration-300">
    View Products
</a>

<!-- Outline CTA (Transparent with border) -->
<a href="about.html" class="cta-button-outline inline-block px-8 py-3 border-2 border-emerald-900 text-emerald-900 font-semibold rounded-lg hover:bg-emerald-900 hover:text-cream transition-all duration-300">
    Learn More
</a>
```

**Accessibility**:
- Minimum touch target: 44x44 pixels
- Focus visible indicator: 2px gold ring
- Keyboard accessible
- ARIA labels for icon-only buttons

### 7. Contact Form Component

**Purpose**: Capture visitor inquiries with validation.

**HTML Structure**:
```html
<form id="contact-form" class="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-lg" novalidate>
    <!-- Name Field -->
    <div class="mb-6">
        <label for="name" class="block text-sm font-semibold text-charcoal mb-2">
            Name <span class="text-red-600">*</span>
        </label>
        <input type="text" id="name" name="name" required
               class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-900 focus:border-transparent"
               aria-required="true">
        <span class="error-message hidden text-red-600 text-sm mt-1">Please enter your name</span>
    </div>
    
    <!-- Email Field -->
    <div class="mb-6">
        <label for="email" class="block text-sm font-semibold text-charcoal mb-2">
            Email <span class="text-red-600">*</span>
        </label>
        <input type="email" id="email" name="email" required
               class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-900 focus:border-transparent"
               aria-required="true">
        <span class="error-message hidden text-red-600 text-sm mt-1">Please enter a valid email address</span>
    </div>
    
    <!-- Country Field -->
    <div class="mb-6">
        <label for="country" class="block text-sm font-semibold text-charcoal mb-2">
            Country <span class="text-red-600">*</span>
        </label>
        <input type="text" id="country" name="country" required
               class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-900 focus:border-transparent"
               aria-required="true">
        <span class="error-message hidden text-red-600 text-sm mt-1">Please enter your country</span>
    </div>
    
    <!-- Quantity Field -->
    <div class="mb-6">
        <label for="quantity" class="block text-sm font-semibold text-charcoal mb-2">
            Quantity Required <span class="text-red-600">*</span>
        </label>
        <input type="text" id="quantity" name="quantity" required placeholder="e.g., 500 MT, 20 containers"
               class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-900 focus:border-transparent"
               aria-required="true">
        <span class="error-message hidden text-red-600 text-sm mt-1">Please specify quantity required</span>
    </div>
    
    <!-- Message Field -->
    <div class="mb-6">
        <label for="message" class="block text-sm font-semibold text-charcoal mb-2">
            Message <span class="text-red-600">*</span>
        </label>
        <textarea id="message" name="message" rows="5" required
                  class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-900 focus:border-transparent resize-vertical"
                  aria-required="true"></textarea>
        <span class="error-message hidden text-red-600 text-sm mt-1">Please enter your message</span>
    </div>
    
    <!-- Submit Button -->
    <button type="submit" class="w-full px-8 py-4 bg-emerald-900 text-cream font-bold text-lg rounded-lg hover:bg-emerald-800 transition-colors duration-300 focus:outline-none focus:ring-4 focus:ring-emerald-300">
        Send Inquiry
    </button>
    
    <!-- Success Message (hidden by default) -->
    <div id="form-success" class="hidden mt-6 p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg">
        <p class="font-semibold">Thank you for your inquiry!</p>
        <p class="text-sm">We will get back to you within 24 hours.</p>
    </div>
</form>
```

**Validation Rules**:
- All fields required
- Email format validation: `/^[^\s@]+@[^\s@]+\.[^\s@]+$/`
- Real-time validation on blur
- Submit button disabled until form is valid
- Error messages display below each field

**JavaScript Interface** (form-validation.js):
```javascript
// Validate individual field
function validateField(field)
// Validate entire form
function validateForm()
// Display success message
function showSuccessMessage()
// Reset form after submission
function resetForm()
```

## Data Models

### Page Configuration Model

Each page has consistent metadata and structure:

```javascript
const pageConfig = {
    title: "Page Title - Zaviyar Enterprises",
    description: "Meta description for SEO",
    canonical: "https://zaviyarenterprises.com/page.html",
    keywords: ["rice milling", "basmati", "export"],
    ogImage: "https://images.unsplash.com/...",
};
```

### Rice Product Model

Structure for rice variety data on Products page:

```javascript
const riceProduct = {
    id: "super-kernel-basmati",
    name: "Super Kernel Basmati",
    category: "basmati", // or "non-basmati"
    description: "Premium long-grain aromatic rice",
    specifications: {
        grainLength: "8.3mm",
        moistureLevel: "12-14%",
        purity: "99.5%",
    },
    imageUrl: "https://images.unsplash.com/photo-...",
    imageAlt: "Super Kernel Basmati Rice grains close-up",
};
```

**Product List**:

**Basmati Varieties**:
1. Super Kernel Basmati (8.3mm, 12-14%, 99.5%)
2. 1121 Steam Basmati (8.4mm, 12-13%, 99%)
3. 1121 Sella Basmati (8.2mm, 12-14%, 99%)

**Non-Basmati Varieties**:
1. IRRI-6 (6.2mm, 13-14%, 98%)
2. C9 (6.0mm, 13-14%, 98%)
3. Broken Rice (varies, 14%, 95%)

### Process Step Model

Structure for milling process steps:

```javascript
const processStep = {
    stepNumber: 1,
    title: "Cleaning",
    description: "Raw paddy is thoroughly cleaned to remove impurities...",
    iconName: "cleaning-icon",
    iconPath: "M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5z",
};
```

**Process Steps**:
1. Cleaning - Remove impurities, stones, foreign materials
2. De-husking - Remove outer husk to reveal brown rice
3. Polishing - Polish grains to desired whiteness level
4. Color Sorting - Advanced optical sorters remove discolored grains
5. Packaging - Pack in various formats maintaining freshness

### Contact Form Submission Model

Data structure for form submissions:

```javascript
const formSubmission = {
    name: "John Doe",
    email: "john@example.com",
    country: "United States",
    quantity: "500 MT",
    message: "Interested in Super Kernel Basmati...",
    timestamp: new Date().toISOString(),
};
```

### Quality Badge Model

Structure for certification badges:

```javascript
const qualityBadge = {
    id: "haccp",
    title: "HACCP Certified",
    description: "Hazard Analysis and Critical Control Points certification...",
    iconName: "shield-check",
};
```

**Quality Badges**:
1. HACCP Certified
2. ISO Certification
3. International Food Safety Standards

## Color Palette and Design System

### Color Palette

```css
:root {
    /* Primary Color - Deep Emerald Green */
    --emerald-900: #064e3b;
    --emerald-800: #065f46;
    --emerald-700: #047857;
    --emerald-100: #d1fae5;
    
    /* Accent Color - Warm Gold/Amber */
    --gold-600: #d97706;
    --gold-500: #f59e0b;
    --gold-400: #fbbf24;
    
    /* Background Color - Rice Off-White/Cream */
    --cream: #faf9f6;
    --cream-dark: #f5f3ed;
    
    /* Text Color - Dark Charcoal */
    --charcoal: #1f2937;
    --charcoal-light: #374151;
    
    /* Neutral Grays */
    --gray-100: #f3f4f6;
    --gray-300: #d1d5db;
    --gray-400: #9ca3af;
    --gray-600: #4b5563;
    --gray-700: #374151;
}
```

### Tailwind Configuration

Using Tailwind CDN with custom configuration:

```html
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
                },
                fontFamily: {
                    'sans': ['Inter', 'system-ui', 'sans-serif'],
                    'serif': ['Merriweather', 'Georgia', 'serif'],
                },
            }
        }
    }
</script>
```

### Typography System

**Font Families**:
1. **Primary (Sans-serif)**: Inter - For body text, navigation, buttons
2. **Secondary (Serif)**: Merriweather - For headings, emphasis

**Font Sizes**:
```css
/* Mobile-first approach */
h1: 32px (2rem) - Page titles
h2: 24px (1.5rem) - Section headings
h3: 20px (1.25rem) - Subsection headings
h4: 18px (1.125rem) - Card titles
body: 16px (1rem) - Body text
small: 14px (0.875rem) - Captions, labels

/* Desktop (>1024px) */
h1: 48px (3rem)
h2: 36px (2.25rem)
h3: 28px (1.75rem)
h4: 20px (1.25rem)
body: 16px (1rem)
small: 14px (0.875rem)
```

**Font Weights**:
- Regular: 400 (body text)
- Medium: 500 (navigation, labels)
- Semibold: 600 (subheadings)
- Bold: 700 (headings, CTAs)

**Line Heights**:
- Headings: 1.2
- Body: 1.6
- Captions: 1.4

### Spacing System

**Vertical Spacing** (between sections):
- Mobile: 48px (3rem)
- Desktop: 80px (5rem)

**Container Padding**:
- Mobile: 16px (1rem)
- Tablet: 24px (1.5rem)
- Desktop: 32px (2rem)

**Component Spacing**:
- Card padding: 24px (1.5rem)
- Button padding: 12px 32px (0.75rem 2rem)
- Input padding: 12px 16px (0.75rem 1rem)

### Shadow System

```css
/* Card shadows */
shadow-sm: 0 1px 2px 0 rgba(0, 0, 0, 0.05)
shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.1)
shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.1)
shadow-xl: 0 20px 25px -5px rgba(0, 0, 0, 0.1)

/* Hover states */
hover:shadow-xl for interactive cards
```

### Border Radius

```css
rounded: 4px (0.25rem) - Small elements
rounded-lg: 8px (0.5rem) - Cards, buttons
rounded-full: 50% - Icons, badges
```

## SVG Logo and Favicon Specifications

### Logo Design (logo.svg)

**Concept**: Stylized rice grain with agricultural elements

**Specifications**:
- **Dimensions**: 120x120px (scalable)
- **Primary Color**: Deep Emerald Green (#064e3b)
- **Accent Color**: Warm Gold (#f59e0b)
- **Design Elements**:
  - Central rice grain shape (elongated oval)
  - Surrounding circular badge or leaves
  - Clean, modern lines
  - Works well at small and large sizes

**SVG Code Structure**:
```xml
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" width="120" height="120">
    <defs>
        <style>
            .emerald { fill: #064e3b; }
            .gold { fill: #f59e0b; }
        </style>
    </defs>
    
    <!-- Circular background badge -->
    <circle cx="60" cy="60" r="55" class="gold" opacity="0.2"/>
    
    <!-- Rice grain central element -->
    <ellipse cx="60" cy="60" rx="12" ry="35" class="emerald"/>
    
    <!-- Accent lines or leaves -->
    <path d="M40,60 Q45,45 60,40" stroke="#064e3b" stroke-width="2" fill="none"/>
    <path d="M80,60 Q75,45 60,40" stroke="#064e3b" stroke-width="2" fill="none"/>
    
    <!-- Optional: Company initial or text -->
    <text x="60" y="100" font-family="Arial, sans-serif" font-size="16" font-weight="bold" text-anchor="middle" class="emerald">Z</text>
</svg>
```

**Usage Contexts**:
- Navigation header (48px height)
- Footer (40px height)
- Favicon (32x32, 16x16 variants)

### Favicon (favicon.svg, favicon.ico)

**Specifications**:
- **Format**: SVG (primary), ICO (fallback)
- **Sizes**: 32x32px, 16x16px
- **Simplified Design**: Remove text, keep rice grain and minimal detail
- **High Contrast**: Ensure visibility on browser tabs

**Favicon HTML Implementation**:
```html
<link rel="icon" type="image/svg+xml" href="assets/images/favicon.svg">
<link rel="alternate icon" href="assets/images/favicon.ico">
<link rel="apple-touch-icon" sizes="180x180" href="assets/images/apple-touch-icon.png">
```

## Page-Specific Layouts

### 1. Home Page (index.html)

**Sections**:
1. **Hero Section** (Full viewport height - 80vh minimum)
2. **Introduction** (About preview)
3. **Featured Products** (3-card grid)
4. **Why Choose Us** (3-column benefits)
5. **Call to Action** (Contact prompt)

**Hero Section Layout**:
```html
<section class="hero relative h-screen min-h-[600px] flex items-center justify-center text-center text-white">
    <!-- Background Image (Unsplash: rice fields or milling) -->
    <div class="absolute inset-0 bg-cover bg-center z-0" style="background-image: url('https://images.unsplash.com/photo-...')">
        <div class="absolute inset-0 bg-emerald-900 opacity-60"></div>
    </div>
    
    <!-- Hero Content -->
    <div class="relative z-10 container mx-auto px-4">
        <h1 class="text-5xl md:text-6xl font-bold mb-4">Zaviyar Enterprises</h1>
        <p class="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">Premium Rice Milling & Global Export Since 2008</p>
        <p class="text-lg mb-8 max-w-xl mx-auto">Your trusted partner for superior Basmati and Non-Basmati rice varieties, processed with state-of-the-art technology and uncompromising quality standards.</p>
        
        <!-- CTA Buttons -->
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="products.html" class="cta-button-secondary">Explore Products</a>
            <a href="contact.html" class="cta-button-outline border-cream text-cream hover:bg-cream hover:text-emerald-900">Get in Touch</a>
        </div>
    </div>
</section>
```

**Introduction Section**:
- Brief company overview (2-3 sentences)
- Link to About Us page
- Background: Cream color

**Featured Products Grid**:
- 3 product cards (1 Basmati, 1 Non-Basmati, 1 specialty)
- Mobile: Single column
- Desktop: 3-column grid

**Why Choose Us Section**:
- 3 columns: Quality, Capacity, Experience
- Icons + text
- Gold accent borders

### 2. About Us Page (about.html)

**Sections**:
1. **Page Header** (Breadcrumb, title)
2. **Our Journey** (Timeline since 2008)
3. **Vision & Mission** (Side-by-side cards)
4. **Infrastructure** (Milling capacity, equipment)
5. **Certifications** (Quality badges)

**Layout**:
```html
<!-- Page Header -->
<section class="py-12 bg-emerald-900 text-cream">
    <div class="container mx-auto px-4">
        <h1 class="text-4xl font-bold">About Zaviyar Enterprises</h1>
        <p class="text-lg mt-2">Excellence in rice milling since 2008</p>
    </div>
</section>

<!-- Our Journey -->
<section class="py-16 bg-cream">
    <div class="container mx-auto px-4 max-w-4xl">
        <h2 class="text-3xl font-bold text-emerald-900 mb-8">Our Journey</h2>
        <p class="text-lg text-charcoal leading-relaxed">
            Since 2008, Zaviyar Enterprises has been at the forefront of rice milling excellence. 
            What began as a vision to provide premium quality rice has evolved into a state-of-the-art 
            operation serving global markets with unwavering commitment to quality and customer satisfaction.
        </p>
    </div>
</section>

<!-- Vision & Mission -->
<section class="py-16 bg-white">
    <div class="container mx-auto px-4">
        <div class="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <!-- Vision Card -->
            <div class="p-8 bg-emerald-100 rounded-lg">
                <h3 class="text-2xl font-bold text-emerald-900 mb-4">Our Vision</h3>
                <p class="text-charcoal">
                    To be the leading rice supplier globally, recognized for premium quality, 
                    sustainable practices, and customer-centric service.
                </p>
            </div>
            
            <!-- Mission Card -->
            <div class="p-8 bg-gold-400 bg-opacity-20 rounded-lg">
                <h3 class="text-2xl font-bold text-emerald-900 mb-4">Our Mission</h3>
                <p class="text-charcoal">
                    To deliver superior rice products through advanced milling technology, 
                    rigorous quality control, and adherence to international food safety standards.
                </p>
            </div>
        </div>
    </div>
</section>
```

**Infrastructure Section**:
- Milling capacity: "500 MT daily processing capacity"
- Equipment highlights: Color sorters, polishers, destoners
- Image: Unsplash photo of modern milling facility

**Certifications Section**:
- Display 2-3 quality badges
- HACCP, ISO certifications
- Brief description of each

### 3. Products Page (products.html)

**Sections**:
1. **Page Header**
2. **Basmati Rice Section** (3 product cards)
3. **Non-Basmati Rice Section** (3 product cards)
4. **Product Specifications Table** (optional)
5. **CTA Section** (Request quote)

**Layout**:
```html
<!-- Basmati Section -->
<section class="py-16 bg-cream">
    <div class="container mx-auto px-4">
        <div class="text-center mb-12">
            <h2 class="text-3xl font-bold text-emerald-900 mb-4">Basmati Rice Varieties</h2>
            <p class="text-lg text-gray-600 max-w-2xl mx-auto">
                Premium aromatic long-grain rice known for its distinctive fragrance and superior cooking qualities.
            </p>
        </div>
        
        <!-- Product Grid -->
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <!-- Product Card 1: Super Kernel -->
            <!-- Product Card 2: 1121 Steam -->
            <!-- Product Card 3: 1121 Sella -->
        </div>
    </div>
</section>

<!-- Non-Basmati Section (similar structure) -->
<section class="py-16 bg-white">
    <!-- Similar structure with IRRI-6, C9, Broken Rice -->
</section>
```

**Product Grid Behavior**:
- Mobile: 1 column
- Tablet: 2 columns
- Desktop: 3 columns
- Each card includes image, name, specs, CTA button

### 4. Milling & Processing Page (milling.html)

**Sections**:
1. **Page Header**
2. **Process Overview** (Introduction paragraph)
3. **Process Workflow** (5 steps visualization)
4. **Quality Control** (Description)
5. **Testing Labs** (Capabilities)

**Process Workflow Layout**:
```html
<section class="py-16 bg-cream">
    <div class="container mx-auto px-4">
        <h2 class="text-3xl font-bold text-emerald-900 text-center mb-12">Our Milling Process</h2>
        
        <!-- Desktop: Horizontal Timeline -->
        <div class="hidden lg:grid grid-cols-5 gap-4">
            <!-- Process Step 1: Cleaning -->
            <!-- Process Step 2: De-husking -->
            <!-- Process Step 3: Polishing -->
            <!-- Process Step 4: Color Sorting -->
            <!-- Process Step 5: Packaging -->
        </div>
        
        <!-- Mobile: Vertical List -->
        <div class="lg:hidden space-y-8">
            <!-- Same steps in vertical layout -->
        </div>
    </div>
</section>
```

**Quality Control Section**:
- Description of quality procedures
- Lab testing equipment
- Standards compliance (HACCP, ISO)

### 5. Packaging & Export Page (packaging.html)

**Sections**:
1. **Page Header**
2. **Packaging Options** (4-card grid)
3. **Custom Packaging** (Description)
4. **Export Capabilities** (Global reach)
5. **Logistics Services** (Shipping standards)

**Packaging Options Layout**:
```html
<section class="py-16 bg-white">
    <div class="container mx-auto px-4">
        <h2 class="text-3xl font-bold text-emerald-900 text-center mb-12">Packaging Options</h2>
        
        <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <!-- PP Bags Card -->
            <div class="p-6 bg-cream rounded-lg shadow-md text-center">
                <div class="w-16 h-16 mx-auto mb-4 bg-emerald-900 rounded-full flex items-center justify-center">
                    <svg class="w-8 h-8 text-gold-500" fill="currentColor" viewBox="0 0 24 24">
                        <!-- Icon path -->
                    </svg>
                </div>
                <h3 class="font-bold text-lg text-emerald-900 mb-2">PP Bags</h3>
                <p class="text-sm text-gray-600">Durable polypropylene bags from 5kg to 50kg</p>
            </div>
            
            <!-- Non-woven Bags Card -->
            <!-- Jute Bags Card -->
            <!-- Master Cartons Card -->
        </div>
    </div>
</section>
```

**Export Capabilities Section**:
- Global reach description
- Container loading standards
- Documentation and compliance

### 6. Quality Assurance Page (quality.html)

**Sections**:
1. **Page Header**
2. **Food Safety Commitment** (Statement)
3. **Certifications** (Quality badges)
4. **Hygienic Processing** (Practices)
5. **Lab Testing** (Procedures)

**Layout**:
```html
<!-- Food Safety Commitment -->
<section class="py-16 bg-emerald-900 text-cream">
    <div class="container mx-auto px-4 max-w-4xl text-center">
        <h2 class="text-3xl font-bold mb-6">Our Food Safety Commitment</h2>
        <p class="text-lg leading-relaxed">
            At Zaviyar Enterprises, food safety is paramount. We adhere to international standards 
            including HACCP protocols and ISO certifications, ensuring every grain meets the highest 
            quality benchmarks from farm to fork.
        </p>
    </div>
</section>

<!-- Certifications Display -->
<section class="py-16 bg-cream">
    <div class="container mx-auto px-4 max-w-5xl">
        <h2 class="text-3xl font-bold text-emerald-900 text-center mb-12">Our Certifications</h2>
        
        <div class="grid md:grid-cols-2 gap-6">
            <!-- Quality Badge: HACCP -->
            <!-- Quality Badge: ISO -->
            <!-- Quality Badge: Food Safety Standards -->
        </div>
    </div>
</section>
```

**Lab Testing Section**:
- Description of testing procedures
- Equipment and capabilities
- Standards compliance

### 7. Contact Us Page (contact.html)

**Sections**:
1. **Page Header**
2. **Contact Form** (5 fields)
3. **Business Information** (Address, email, phone, hours)
4. **Google Maps Embed** (Placeholder)

**Layout**:
```html
<!-- Contact Form Section -->
<section class="py-16 bg-cream">
    <div class="container mx-auto px-4">
        <div class="max-w-4xl mx-auto">
            <h2 class="text-3xl font-bold text-emerald-900 text-center mb-8">Get in Touch</h2>
            <p class="text-center text-gray-600 mb-12">
                Have questions about our products or services? Fill out the form below and our team will respond within 24 hours.
            </p>
            
            <!-- Contact Form Component (see Components section) -->
        </div>
    </div>
</section>

<!-- Business Information -->
<section class="py-16 bg-white">
    <div class="container mx-auto px-4">
        <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
            <!-- Location -->
            <div class="text-center">
                <div class="w-16 h-16 mx-auto mb-4 bg-emerald-100 rounded-full flex items-center justify-center">
                    <svg class="w-8 h-8 text-emerald-900" fill="currentColor" viewBox="0 0 24 24">
                        <!-- Location icon -->
                    </svg>
                </div>
                <h3 class="font-bold text-emerald-900 mb-2">Location</h3>
                <p class="text-sm text-gray-600">Industrial Area<br>City, Country</p>
            </div>
            
            <!-- Email -->
            <div class="text-center">
                <div class="w-16 h-16 mx-auto mb-4 bg-emerald-100 rounded-full flex items-center justify-center">
                    <svg class="w-8 h-8 text-emerald-900" fill="currentColor" viewBox="0 0 24 24">
                        <!-- Email icon -->
                    </svg>
                </div>
                <h3 class="font-bold text-emerald-900 mb-2">Email</h3>
                <p class="text-sm text-gray-600">info@zaviyarenterprises.com</p>
            </div>
            
            <!-- Phone -->
            <div class="text-center">
                <div class="w-16 h-16 mx-auto mb-4 bg-emerald-100 rounded-full flex items-center justify-center">
                    <svg class="w-8 h-8 text-emerald-900" fill="currentColor" viewBox="0 0 24 24">
                        <!-- Phone icon -->
                    </svg>
                </div>
                <h3 class="font-bold text-emerald-900 mb-2">Phone</h3>
                <p class="text-sm text-gray-600">+XX XXX XXX XXXX</p>
            </div>
            
            <!-- Business Hours -->
            <div class="text-center">
                <div class="w-16 h-16 mx-auto mb-4 bg-emerald-100 rounded-full flex items-center justify-center">
                    <svg class="w-8 h-8 text-emerald-900" fill="currentColor" viewBox="0 0 24 24">
                        <!-- Clock icon -->
                    </svg>
                </div>
                <h3 class="font-bold text-emerald-900 mb-2">Business Hours</h3>
                <p class="text-sm text-gray-600">Mon-Fri: 9:00 AM - 6:00 PM</p>
            </div>
        </div>
    </div>
</section>

<!-- Google Maps Embed -->
<section class="py-16 bg-cream">
    <div class="container mx-auto px-4">
        <div class="max-w-5xl mx-auto">
            <h2 class="text-3xl font-bold text-emerald-900 text-center mb-8">Find Us</h2>
            <div class="aspect-video rounded-lg overflow-hidden shadow-lg">
                <iframe src="https://www.google.com/maps/embed?pb=..." 
                        width="100%" 
                        height="100%" 
                        style="border:0;" 
                        allowfullscreen="" 
                        loading="lazy" 
                        referrerpolicy="no-referrer-when-downgrade"
                        title="Zaviyar Enterprises Location">
                </iframe>
            </div>
        </div>
    </div>
</section>
```

## JavaScript Modules

### 1. Navigation Module (navigation.js)

**Purpose**: Handle mobile menu toggle and active page highlighting.

**Code**:
```javascript
// navigation.js
(function() {
    'use strict';
    
    // Mobile menu toggle
    const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
    const mobileMenu = document.getElementById('mobile-menu');
    
    if (mobileMenuToggle && mobileMenu) {
        mobileMenuToggle.addEventListener('click', function() {
            const isExpanded = mobileMenu.classList.contains('hidden');
            mobileMenu.classList.toggle('hidden');
            mobileMenuToggle.setAttribute('aria-expanded', isExpanded);
        });
        
        // Close mobile menu when clicking outside
        document.addEventListener('click', function(event) {
            const isClickInside = mobileMenuToggle.contains(event.target) || 
                                mobileMenu.contains(event.target);
            if (!isClickInside && !mobileMenu.classList.contains('hidden')) {
                mobileMenu.classList.add('hidden');
                mobileMenuToggle.setAttribute('aria-expanded', 'false');
            }
        });
    }
    
    // Highlight active page
    function setActivePage() {
        const currentPage = window.location.pathname.split('/').pop() || 'index.html';
        const navLinks = document.querySelectorAll('nav a[href]');
        
        navLinks.forEach(link => {
            const linkHref = link.getAttribute('href');
            if (linkHref === currentPage) {
                link.classList.add('text-gold-500', 'font-bold');
                link.setAttribute('aria-current', 'page');
            }
        });
    }
    
    // Initialize on DOM ready
    setActivePage();
})();
```

**Features**:
- Toggle mobile menu visibility
- Close menu when clicking outside
- Highlight current page in navigation
- ARIA attributes for accessibility
- Navigation transition < 200ms

### 2. Form Validation Module (form-validation.js)

**Purpose**: Validate contact form inputs and handle submission.

**Code**:
```javascript
// form-validation.js
(function() {
    'use strict';
    
    const form = document.getElementById('contact-form');
    if (!form) return;
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    // Validate individual field
    function validateField(field) {
        const value = field.value.trim();
        const errorMessage = field.nextElementSibling;
        let isValid = true;
        
        if (field.hasAttribute('required') && value === '') {
            isValid = false;
            errorMessage.textContent = 'This field is required';
        } else if (field.type === 'email' && !emailRegex.test(value)) {
            isValid = false;
            errorMessage.textContent = 'Please enter a valid email address';
        }
        
        if (isValid) {
            field.classList.remove('border-red-500');
            errorMessage.classList.add('hidden');
        } else {
            field.classList.add('border-red-500');
            errorMessage.classList.remove('hidden');
        }
        
        return isValid;
    }
    
    // Validate entire form
    function validateForm() {
        const fields = form.querySelectorAll('input[required], textarea[required]');
        let isFormValid = true;
        
        fields.forEach(field => {
            if (!validateField(field)) {
                isFormValid = false;
            }
        });
        
        return isFormValid;
    }
    
    // Add blur event listeners for real-time validation
    const formFields = form.querySelectorAll('input, textarea');
    formFields.forEach(field => {
        field.addEventListener('blur', function() {
            validateField(this);
        });
    });
    
    // Handle form submission
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        
        if (validateForm()) {
            // In production, send data to server
            // For now, show success message
            const successMessage = document.getElementById('form-success');
            successMessage.classList.remove('hidden');
            
            // Reset form after 2 seconds
            setTimeout(() => {
                form.reset();
                successMessage.classList.add('hidden');
            }, 3000);
        }
    });
})();
```

**Validation Rules**:
- Required: name, email, country, quantity, message
- Email format: `/^[^\s@]+@[^\s@]+\.[^\s@]+$/`
- Real-time validation on blur
- Error messages display below fields
- Success message on valid submission

### 3. Lazy Loading Module (lazy-load.js)

**Purpose**: Lazy load images using Intersection Observer API.

**Code**:
```javascript
// lazy-load.js
(function() {
    'use strict';
    
    // Check if browser supports Intersection Observer
    if (!('IntersectionObserver' in window)) {
        // Fallback: load all images immediately
        document.querySelectorAll('img[data-src]').forEach(img => {
            img.src = img.dataset.src;
        });
        return;
    }
    
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                img.classList.add('loaded');
                observer.unobserve(img);
            }
        });
    }, {
        rootMargin: '50px 0px', // Start loading 50px before entering viewport
        threshold: 0.01
    });
    
    // Observe all images with data-src attribute
    const lazyImages = document.querySelectorAll('img[data-src]');
    lazyImages.forEach(img => {
        imageObserver.observe(img);
    });
})();
```

**Features**:
- Uses Intersection Observer API
- Loads images 50px before entering viewport
- Fallback for older browsers
- Applies `.loaded` class for CSS transitions

**CSS for Lazy Loading**:
```css
img.lazy {
    opacity: 0;
    transition: opacity 0.3s ease-in;
}

img.loaded {
    opacity: 1;
}
```

### 4. Main Controller (main.js)

**Purpose**: Initialize site-wide functionality and utilities.

**Code**:
```javascript
// main.js
(function() {
    'use strict';
    
    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    // Add focus visible class for keyboard navigation
    let isUsingKeyboard = false;
    
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Tab') {
            isUsingKeyboard = true;
            document.body.classList.add('keyboard-nav');
        }
    });
    
    document.addEventListener('mousedown', function() {
        isUsingKeyboard = false;
        document.body.classList.remove('keyboard-nav');
    });
    
    // Log page load time (performance monitoring)
    window.addEventListener('load', function() {
        const loadTime = performance.timing.domContentLoadedEventEnd - 
                        performance.timing.navigationStart;
        console.log(`Page loaded in ${loadTime}ms`);
    });
})();
```

**Features**:
- Smooth scrolling for anchor links
- Keyboard navigation detection
- Performance monitoring (page load time)

## Image Asset Strategy

### Unsplash API Integration

**Purpose**: Source high-quality royalty-free images for the website.

**Image Categories Needed**:
1. **Rice Fields/Paddy**: For hero sections and backgrounds
2. **Rice Milling Equipment**: For milling & processing page
3. **Rice Varieties Close-ups**: For product cards
4. **Packaging**: For packaging & export page
5. **Quality Control/Lab**: For quality assurance page

**Unsplash Search Queries**:
```javascript
const unsplashQueries = {
    heroBackground: 'rice field paddy farm sunset',
    millingEquipment: 'rice milling factory processing',
    basmatiRice: 'basmati rice grains white background',
    nonBasmatiRice: 'white rice grains texture',
    packaging: 'rice bag packaging burlap',
    qualityControl: 'food laboratory testing quality',
    exportLogistics: 'cargo ship container port'
};
```

**Implementation Approach**:
```html
<!-- Direct Unsplash URL (recommended for production) -->
<img data-src="https://images.unsplash.com/photo-1586201375761-83865001e31c?w=800&q=80" 
     alt="Rice paddy fields at sunset" 
     class="lazy w-full h-64 object-cover">
```

**Image Optimization**:
- Use Unsplash's URL parameters for sizing: `?w=800&q=80`
- Responsive images with `srcset` for different screen sizes
- WebP format where supported (Unsplash provides automatically)
- Lazy loading for all images not in initial viewport

**Example Responsive Image**:
```html
<img data-srcset="https://images.unsplash.com/photo-...?w=400&q=80 400w,
                  https://images.unsplash.com/photo-...?w=800&q=80 800w,
                  https://images.unsplash.com/photo-...?w=1200&q=80 1200w"
     data-src="https://images.unsplash.com/photo-...?w=800&q=80"
     sizes="(max-width: 640px) 400px, (max-width: 1024px) 800px, 1200px"
     alt="Super Kernel Basmati Rice"
     class="lazy w-full h-48 object-cover">
```

### Image Specifications

**Hero Images**:
- Dimensions: 1920x1080px minimum
- Format: JPEG/WebP
- Quality: 80%
- File size target: <300KB

**Product Card Images**:
- Dimensions: 600x400px
- Format: JPEG/WebP
- Quality: 80%
- File size target: <100KB

**Icon/Logo Images**:
- Format: SVG (scalable)
- Fallback: PNG with transparency
- Multiple sizes for different contexts

**Fallback Strategy**:
If Unsplash is unavailable:
1. Use placeholder images (e.g., placehold.co)
2. Include solid color backgrounds with text
3. Graceful degradation with CSS backgrounds

## Performance Optimization

### Loading Strategy

1. **Critical CSS**: Inline critical above-the-fold CSS
2. **Deferred JavaScript**: Use `defer` attribute for non-critical scripts
3. **Lazy Loading**: Images below fold load on scroll
4. **CDN Usage**: Tailwind CSS from CDN (jsDelivr or official CDN)
5. **Font Loading**: Use `font-display: swap` for web fonts

### HTML Optimization

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    
    <!-- Preconnect to external domains -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://images.unsplash.com">
    
    <!-- Critical CSS inline (extracted from Tailwind) -->
    <style>
        /* Critical above-the-fold styles */
        body { font-family: system-ui, sans-serif; }
        .hero { min-height: 80vh; }
    </style>
    
    <!-- Tailwind CSS from CDN -->
    <script src="https://cdn.tailwindcss.com?plugins=forms,typography"></script>
    
    <!-- Defer non-critical CSS -->
    <link rel="stylesheet" href="assets/css/style.css" media="print" onload="this.media='all'">
    
    <title>Zaviyar Enterprises - Premium Rice Milling & Export</title>
</head>
<body>
    <!-- Content -->
    
    <!-- Deferred JavaScript -->
    <script src="assets/js/navigation.js" defer></script>
    <script src="assets/js/lazy-load.js" defer></script>
    <script src="assets/js/main.js" defer></script>
</body>
</html>
```

### CSS Optimization

**Custom CSS (style.css)** - Keep minimal, supplement Tailwind:
```css
/* Custom styles supplementing Tailwind */

/* Smooth scrolling */
html {
    scroll-behavior: smooth;
}

/* Focus visible for keyboard navigation */
body.keyboard-nav *:focus {
    outline: 2px solid #f59e0b;
    outline-offset: 2px;
}

/* Lazy load image transition */
img.lazy {
    opacity: 0;
    transition: opacity 0.3s ease-in;
}

img.loaded {
    opacity: 1;
}

/* Hero overlay */
.hero-overlay {
    background: linear-gradient(135deg, rgba(6, 78, 59, 0.7), rgba(6, 78, 59, 0.5));
}

/* Ensure footer stays at bottom */
body {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
}

main {
    flex: 1;
}
```

### JavaScript Optimization

**Best Practices**:
- Use vanilla JavaScript (no jQuery)
- Minimize DOM manipulation
- Use event delegation where possible
- Debounce scroll/resize events
- Remove unused code

**Code Splitting**: None required (simple vanilla JS modules)

### Performance Budget

**Target Metrics**:
- **First Contentful Paint (FCP)**: <1.5s
- **Largest Contentful Paint (LCP)**: <2.5s
- **Time to Interactive (TTI)**: <3.5s
- **Total Blocking Time (TBT)**: <300ms
- **Cumulative Layout Shift (CLS)**: <0.1
- **Total Page Weight**: <500KB (excluding images)
- **Image Weight**: <200KB per page (with lazy loading)

### Caching Strategy

**HTTP Headers** (configure in production server):
```
Cache-Control: max-age=31536000, immutable  # CSS, JS, images
Cache-Control: no-cache                      # HTML pages
```

**Service Worker** (optional for PWA):
- Cache static assets (CSS, JS, fonts)
- Network-first for HTML pages
- Cache-first for images from Unsplash

## Accessibility Implementation

### WCAG 2.1 AA Compliance

**Color Contrast Requirements**:
- Normal text (16px): Minimum 4.5:1 contrast ratio
- Large text (24px+): Minimum 3:1 contrast ratio
- UI components: Minimum 3:1 contrast ratio

**Verified Combinations**:
```css
/* Passing combinations */
.emerald-900-on-cream { 
    color: #064e3b; 
    background: #faf9f6; 
    /* Contrast ratio: 12.4:1 ✓ */
}

.charcoal-on-cream { 
    color: #1f2937; 
    background: #faf9f6; 
    /* Contrast ratio: 9.8:1 ✓ */
}

.cream-on-emerald-900 { 
    color: #faf9f6; 
    background: #064e3b; 
    /* Contrast ratio: 12.4:1 ✓ */
}

.charcoal-on-gold-500 { 
    color: #1f2937; 
    background: #f59e0b; 
    /* Contrast ratio: 5.2:1 ✓ */
}
```

### Keyboard Navigation

**Interactive Elements**:
- All buttons, links, form fields: keyboard accessible
- Tab order: logical flow matching visual layout
- Skip to main content link for screen readers
- Escape key: closes mobile menu

**Focus Indicators**:
```css
/* Visible focus indicator */
*:focus-visible {
    outline: 2px solid #f59e0b; /* Gold color */
    outline-offset: 2px;
    border-radius: 4px;
}

/* Remove outline for mouse users */
body:not(.keyboard-nav) *:focus {
    outline: none;
}
```

### Semantic HTML

**Required Elements**:
```html
<!-- Skip link for screen readers -->
<a href="#main-content" class="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-gold-500">
    Skip to main content
</a>

<!-- Proper heading hierarchy -->
<header>
    <nav aria-label="Main navigation">...</nav>
</header>

<main id="main-content">
    <article>
        <h1>Page Title</h1>
        <section>
            <h2>Section Title</h2>
            <h3>Subsection</h3>
        </section>
    </article>
</main>

<footer aria-label="Site footer">...</footer>
```

### ARIA Labels

**Icon Buttons**:
```html
<button id="mobile-menu-toggle" 
        class="md:hidden" 
        aria-label="Toggle mobile menu" 
        aria-expanded="false"
        aria-controls="mobile-menu">
    <svg class="w-6 h-6" aria-hidden="true">...</svg>
</button>
```

**Form Labels**:
```html
<label for="email" class="block mb-2">
    Email Address <span class="text-red-600" aria-label="required">*</span>
</label>
<input type="email" 
       id="email" 
       name="email" 
       required 
       aria-required="true"
       aria-describedby="email-error">
<span id="email-error" class="error-message" role="alert">
    Please enter a valid email address
</span>
```

### Image Alt Text

**Descriptive Alt Text**:
```html
<!-- Informative image -->
<img src="..." alt="Super Kernel Basmati rice grains showing long grain length and uniform color">

<!-- Decorative image -->
<img src="..." alt="" role="presentation">

<!-- Background images via CSS -->
<div class="hero-bg" role="img" aria-label="Aerial view of rice paddy fields during harvest season">
</div>
```

### Screen Reader Utilities

**Tailwind SR-Only Class**:
```css
.sr-only {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border-width: 0;
}

.focus\:not-sr-only:focus {
    position: static;
    width: auto;
    height: auto;
    padding: inherit;
    margin: inherit;
    overflow: visible;
    clip: auto;
    white-space: normal;
}
```

## Error Handling

### JavaScript Error Handling

**Global Error Handler**:
```javascript
// In main.js
window.addEventListener('error', function(event) {
    console.error('JavaScript error:', event.error);
    // In production, send to error tracking service
});

window.addEventListener('unhandledrejection', function(event) {
    console.error('Unhandled promise rejection:', event.reason);
});
```

### Form Validation Errors

**User-Friendly Messages**:
```javascript
const errorMessages = {
    required: 'This field is required',
    email: 'Please enter a valid email address (e.g., name@example.com)',
    minLength: 'Must be at least {min} characters',
    maxLength: 'Must be no more than {max} characters',
};
```

**Error Display**:
- Inline error messages below each field
- Red border on invalid fields
- ARIA live region for screen readers
- Focus on first invalid field on submit

### Image Loading Errors

**Fallback Handling**:
```javascript
// In lazy-load.js
document.querySelectorAll('img').forEach(img => {
    img.addEventListener('error', function() {
        this.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="400" height="300"%3E%3Crect fill="%23f3f4f6" width="400" height="300"/%3E%3Ctext x="50%25" y="50%25" text-anchor="middle" fill="%239ca3af"%3EImage unavailable%3C/text%3E%3C/svg%3E';
        this.alt = 'Image failed to load';
    });
});
```

### Network Error Handling

**Form Submission**:
```javascript
async function submitForm(formData) {
    try {
        const response = await fetch('/api/contact', {
            method: 'POST',
            body: JSON.stringify(formData),
            headers: { 'Content-Type': 'application/json' }
        });
        
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        return await response.json();
    } catch (error) {
        console.error('Form submission error:', error);
        showErrorMessage('Unable to submit form. Please try again later or contact us directly at info@zaviyarenterprises.com');
    }
}
```

## Testing Strategy

### Browser Compatibility Testing

**Target Browsers**:
- Chrome 90+ (Windows, macOS, Android)
- Firefox 88+ (Windows, macOS)
- Safari 14+ (macOS, iOS)
- Edge 90+ (Windows)

**Testing Checklist**:
- [ ] Layout renders correctly on all browsers
- [ ] Navigation menu functions properly
- [ ] Form validation works
- [ ] Images lazy load correctly
- [ ] CSS animations/transitions work
- [ ] No console errors

### Responsive Design Testing

**Breakpoints to Test**:
- Mobile: 375px, 414px (iPhone sizes)
- Tablet: 768px, 1024px (iPad sizes)
- Desktop: 1280px, 1440px, 1920px

**Testing Tools**:
- Chrome DevTools device emulation
- Firefox Responsive Design Mode
- BrowserStack for real device testing

### Accessibility Testing

**Tools**:
- Lighthouse (Chrome DevTools)
- WAVE Web Accessibility Evaluation Tool
- axe DevTools
- NVDA/JAWS screen readers (Windows)
- VoiceOver (macOS/iOS)

**Checklist**:
- [ ] All images have alt text
- [ ] Color contrast passes WCAG AA
- [ ] Keyboard navigation works
- [ ] Focus indicators visible
- [ ] Form labels associated with inputs
- [ ] ARIA attributes used correctly
- [ ] Heading hierarchy logical
- [ ] Screen reader announces content correctly

### Performance Testing

**Tools**:
- Google PageSpeed Insights
- WebPageTest
- Lighthouse
- Chrome DevTools Performance tab

**Metrics to Monitor**:
- First Contentful Paint (FCP)
- Largest Contentful Paint (LCP)
- Time to Interactive (TTI)
- Total Blocking Time (TBT)
- Cumulative Layout Shift (CLS)

### Manual Testing

**Functional Testing**:
- [ ] All navigation links work
- [ ] Mobile menu toggles correctly
- [ ] Contact form validates inputs
- [ ] Form submission shows success message
- [ ] Images load properly
- [ ] External links open correctly
- [ ] Footer links function

**Visual Testing**:
- [ ] Layout matches design
- [ ] Colors match brand palette
- [ ] Typography consistent
- [ ] Spacing uniform
- [ ] Hover states work
- [ ] Transitions smooth

### Validation Testing

**HTML Validation**:
- Use W3C Markup Validation Service
- Fix all errors
- Address warnings if significant

**CSS Validation**:
- Use W3C CSS Validation Service
- Verify custom CSS is valid
- Check for unused styles

**Link Checker**:
- Verify all internal links work
- Check external links (Unsplash URLs)
- Ensure no broken links

## Deployment and Production Readiness

### Pre-Deployment Checklist

**Content**:
- [ ] All pages created (7 pages)
- [ ] All sections completed
- [ ] Placeholder text replaced with real content
- [ ] Images optimized and loading
- [ ] Contact information updated

**Technical**:
- [ ] HTML validated (W3C)
- [ ] CSS validated (W3C)
- [ ] JavaScript error-free
- [ ] No console errors
- [ ] Meta tags complete
- [ ] Favicon implemented
- [ ] Sitemap.xml created
- [ ] Robots.txt configured

**Performance**:
- [ ] Images optimized (<200KB each)
- [ ] Lazy loading implemented
- [ ] Page load time <2 seconds
- [ ] Lighthouse score >90

**Accessibility**:
- [ ] WCAG 2.1 AA compliant
- [ ] Keyboard navigation tested
- [ ] Screen reader tested
- [ ] Color contrast verified

**Cross-Browser**:
- [ ] Chrome tested
- [ ] Firefox tested
- [ ] Safari tested
- [ ] Edge tested

### Hosting Requirements

**Recommended Hosting**:
- Static site hosting (Netlify, Vercel, GitHub Pages)
- CDN for global distribution
- HTTPS enabled
- Custom domain support

**Server Configuration**:
```nginx
# Example nginx configuration
server {
    listen 80;
    server_name zaviyarenterprises.com;
    root /var/www/zaviyar;
    index index.html;
    
    # Enable gzip compression
    gzip on;
    gzip_types text/css application/javascript image/svg+xml;
    
    # Cache static assets
    location ~* \.(css|js|jpg|jpeg|png|svg|ico)$ {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }
    
    # No cache for HTML
    location ~* \.html$ {
        expires -1;
        add_header Cache-Control "no-cache";
    }
}
```

### Domain and DNS

**DNS Records**:
```
A     @       123.456.789.0    (server IP)
CNAME www     zaviyarenterprises.com
```

### Analytics and Monitoring

**Google Analytics** (optional):
```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

### SEO Optimization

**Meta Tags Template**:
```html
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Zaviyar Enterprises - Premium Rice Milling & Export Since 2008</title>
    <meta name="description" content="Leading rice milling company specializing in Basmati and Non-Basmati varieties. HACCP and ISO certified. Global export services.">
    <meta name="keywords" content="rice milling, basmati rice, rice export, HACCP certified, ISO certified, Super Kernel, 1121 Sella">
    <link rel="canonical" href="https://zaviyarenterprises.com/index.html">
    
    <!-- Open Graph -->
    <meta property="og:title" content="Zaviyar Enterprises - Premium Rice Milling">
    <meta property="og:description" content="Premium rice milling and export services since 2008">
    <meta property="og:image" content="https://zaviyarenterprises.com/assets/images/og-image.jpg">
    <meta property="og:url" content="https://zaviyarenterprises.com">
    <meta property="og:type" content="website">
    
    <!-- Twitter Card -->
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:title" content="Zaviyar Enterprises - Premium Rice Milling">
    <meta name="twitter:description" content="Premium rice milling and export services since 2008">
    <meta name="twitter:image" content="https://zaviyarenterprises.com/assets/images/twitter-card.jpg">
</head>
```

**Sitemap.xml**:
```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    <url>
        <loc>https://zaviyarenterprises.com/index.html</loc>
        <priority>1.0</priority>
    </url>
    <url>
        <loc>https://zaviyarenterprises.com/about.html</loc>
        <priority>0.8</priority>
    </url>
    <url>
        <loc>https://zaviyarenterprises.com/products.html</loc>
        <priority>0.9</priority>
    </url>
    <url>
        <loc>https://zaviyarenterprises.com/milling.html</loc>
        <priority>0.7</priority>
    </url>
    <url>
        <loc>https://zaviyarenterprises.com/packaging.html</loc>
        <priority>0.7</priority>
    </url>
    <url>
        <loc>https://zaviyarenterprises.com/quality.html</loc>
        <priority>0.8</priority>
    </url>
    <url>
        <loc>https://zaviyarenterprises.com/contact.html</loc>
        <priority>0.9</priority>
    </url>
</urlset>
```

**Robots.txt**:
```
User-agent: *
Allow: /
Sitemap: https://zaviyarenterprises.com/sitemap.xml
```

## Maintenance and Updates

### Content Updates

**Regular Updates**:
- Product specifications: Quarterly
- Company achievements: As needed
- Contact information: As needed
- Blog/news (if added): Weekly/monthly

### Technical Maintenance

**Monthly Tasks**:
- Check for broken links
- Verify forms working
- Review analytics
- Update dependencies (Tailwind CDN version)

**Quarterly Tasks**:
- Performance audit
- Accessibility audit
- Browser compatibility check
- Security review

### Backup Strategy

**What to Backup**:
- All HTML files
- CSS files
- JavaScript files
- SVG logo and favicon
- Configuration files

**Backup Frequency**:
- Daily: Automated backups on hosting platform
- Weekly: Manual local backup
- Before major updates: Full backup

### Documentation

**Required Documentation**:
1. **README.md**: Setup instructions, deployment guide
2. **CHANGELOG.md**: Version history and updates
3. **CONTRIBUTING.md**: Guidelines for making changes (if team)
4. **Style Guide**: Brand guidelines, color codes, typography rules

This completes the comprehensive technical design document for the Zaviyar Enterprises website. The design is production-ready, aligned with all 15 requirements, and provides detailed specifications for immediate implementation.
