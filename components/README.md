# Navigation Component Documentation

## Overview

The navigation header component is a reusable HTML component for the Zaviyar Enterprises website. It provides responsive navigation across all seven pages with mobile-friendly hamburger menu functionality.

## Requirements Fulfilled

- **Requirement 1.2**: Navigation menu displays links to all seven pages
- **Requirement 1.4**: Navigation menu remains accessible on all pages
- **Requirement 1.6**: SVG logo displayed in navigation header
- **Requirement 13.5**: ARIA labels for icon-only buttons (hamburger menu)

## Files

- `components/navigation.html` - HTML structure for the navigation component
- `assets/js/navigation.js` - JavaScript for mobile menu toggle and active page highlighting
- `assets/images/logo.svg` - Company logo with rice grain motif

## Features

### Desktop Navigation (≥768px)
- Horizontal navigation bar with all seven page links
- Hover effects with gold color transition
- Visible focus indicators for keyboard navigation
- Logo and company name on the left

### Mobile Navigation (<768px)
- Hamburger menu button (44x44px minimum touch target)
- Collapsible mobile menu with vertical link layout
- Icon changes from hamburger to X when menu is open
- Click outside to close functionality
- ESC key to close menu

### Accessibility Features
- Semantic HTML5 elements (header, nav)
- ARIA attributes:
  - `aria-label` on navigation and hamburger button
  - `aria-expanded` to indicate menu state
  - `aria-controls` to link button with menu
  - `aria-current="page"` for active page
  - `role="menu"` and `role="menuitem"` for mobile menu
- Keyboard navigation support (Tab, Enter, ESC)
- Visible focus indicators (2px gold ring)
- Minimum touch target size (44x44px)

### Design
- Sticky positioning (stays at top when scrolling)
- Deep emerald green background (#064e3b)
- Cream text color (#faf9f6)
- Warm gold accent for hover/active states (#f59e0b)
- Smooth transitions (300ms duration)
- Drop shadow for depth

## Usage

### Including in HTML Pages

Copy the entire `<header>` element from `components/navigation.html` into each page, then include the JavaScript file before the closing `</body>` tag:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <!-- ... other head elements ... -->
</head>
<body>
    <!-- Include navigation component -->
    <header class="bg-emerald-900 text-cream shadow-lg sticky top-0 z-50">
        <!-- ... navigation HTML ... -->
    </header>
    
    <!-- Page content -->
    <main>
        <!-- ... page-specific content ... -->
    </main>
    
    <!-- Include navigation JavaScript -->
    <script src="assets/js/navigation.js"></script>
</body>
</html>
```

### Required Dependencies

1. **Tailwind CSS CDN** - Add to `<head>`:
```html
<script src="https://cdn.tailwindcss.com"></script>
```

2. **Tailwind Custom Configuration** - Add after Tailwind CDN:
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
            }
        }
    }
</script>
```

3. **Logo SVG** - Ensure `assets/images/logo.svg` exists

## Testing

### Manual Testing

1. Open `test-navigation.html` in a browser
2. Test desktop navigation (resize window to ≥768px width)
3. Test mobile navigation (resize window to <768px width)
4. Verify hamburger button toggles mobile menu
5. Test keyboard navigation (Tab, Enter, ESC keys)
6. Verify sticky behavior by scrolling down
7. Check all seven page links are present

### Automated Testing

Run the unit test suite:
```bash
# Install test runner (e.g., Jest)
npm install --save-dev jest jest-environment-jsdom

# Run tests
npm test navigation.test.js
```

### Accessibility Testing

1. **Keyboard Navigation**:
   - Tab through all navigation links
   - Verify visible focus indicators
   - Enter key should activate links
   - ESC key should close mobile menu

2. **Screen Reader Testing**:
   - Verify ARIA labels are announced
   - Check aria-expanded state changes
   - Confirm menu role and menuitem roles

3. **Color Contrast**:
   - Text on background: Meets WCAG AA (4.5:1 minimum)
   - Gold hover text: Verified contrast ratio

## Customization

### Changing Colors

Modify Tailwind config colors:
```javascript
tailwind.config = {
    theme: {
        extend: {
            colors: {
                'emerald': { 900: '#YOUR_COLOR' },
                'gold': { 500: '#YOUR_COLOR' },
                // ...
            }
        }
    }
}
```

### Adding/Removing Pages

1. Update both desktop and mobile menu lists in `navigation.html`
2. Ensure link order matches in both menus
3. Test active page highlighting still works

### Adjusting Breakpoints

Change `md:` breakpoint by modifying Tailwind classes:
- `md:flex` = show on medium screens and up (default 768px)
- `md:hidden` = hide on medium screens and up

## Browser Compatibility

- Chrome (last 2 versions) ✓
- Firefox (last 2 versions) ✓
- Safari (last 2 versions) ✓
- Edge (last 2 versions) ✓

## Performance

- JavaScript: ~2KB minified
- HTML: ~3KB
- Logo SVG: ~1KB
- No external dependencies except Tailwind CSS CDN
- No build process required

## Known Limitations

1. Navigation HTML must be manually copied to each page (no server-side includes)
2. Tailwind CSS loaded via CDN (consider self-hosting for production)
3. Logo path is relative (ensure correct path from each page)

## Future Enhancements

- [ ] Add smooth scroll to page sections (for single-page layout)
- [ ] Add active page highlighting based on URL
- [ ] Add dropdown submenus if needed
- [ ] Add search functionality
- [ ] Add language switcher for internationalization

## Support

For issues or questions about the navigation component, refer to the main project documentation or contact the development team.
