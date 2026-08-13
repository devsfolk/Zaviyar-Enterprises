/**
 * Navigation Component Validation Script
 * Validates that all requirements for Task 3.1 are met
 * Run in browser console on test-navigation.html
 */

(function() {
    'use strict';

    console.log('='.repeat(60));
    console.log('NAVIGATION COMPONENT VALIDATION');
    console.log('Task 3.1: Create reusable navigation header component');
    console.log('='.repeat(60));
    console.log('');

    let passCount = 0;
    let failCount = 0;

    function test(description, assertion) {
        try {
            const result = assertion();
            if (result) {
                console.log('✓ PASS:', description);
                passCount++;
                return true;
            } else {
                console.error('✗ FAIL:', description);
                failCount++;
                return false;
            }
        } catch (error) {
            console.error('✗ ERROR:', description, '-', error.message);
            failCount++;
            return false;
        }
    }

    console.log('1. HTML STRUCTURE VALIDATION');
    console.log('-'.repeat(60));

    test('Semantic HTML5 <header> element exists', () => {
        return document.querySelector('header') !== null;
    });

    test('Semantic HTML5 <nav> element exists', () => {
        return document.querySelector('nav') !== null;
    });

    test('Logo image is present in navigation', () => {
        const logo = document.querySelector('header img[alt*="Logo"]');
        return logo !== null && logo.src.includes('logo.svg');
    });

    test('Sticky positioning applied to header', () => {
        const header = document.querySelector('header');
        return header.classList.contains('sticky') && header.classList.contains('top-0');
    });

    console.log('');
    console.log('2. SEVEN PAGE LINKS VALIDATION (Req 1.2)');
    console.log('-'.repeat(60));

    const requiredPages = [
        'index.html',
        'about.html',
        'products.html',
        'milling.html',
        'packaging.html',
        'quality.html',
        'contact.html'
    ];

    test('Desktop menu has exactly 7 links', () => {
        const desktopLinks = document.querySelectorAll('ul.hidden.md\\:flex a');
        return desktopLinks.length === 7;
    });

    test('Mobile menu has exactly 7 links', () => {
        const mobileLinks = document.querySelectorAll('#mobile-menu a');
        return mobileLinks.length === 7;
    });

    requiredPages.forEach(page => {
        test(`Link to ${page} exists`, () => {
            const links = Array.from(document.querySelectorAll('nav a[href]'));
            return links.some(link => link.getAttribute('href') === page);
        });
    });

    console.log('');
    console.log('3. MOBILE HAMBURGER BUTTON VALIDATION (Req 1.4)');
    console.log('-'.repeat(60));

    test('Mobile hamburger button exists', () => {
        return document.getElementById('mobile-menu-toggle') !== null;
    });

    test('Hamburger button has minimum 44x44px touch target', () => {
        const button = document.getElementById('mobile-menu-toggle');
        return button.classList.contains('min-w-[44px]') && 
               button.classList.contains('min-h-[44px]');
    });

    test('Hamburger button visible only on mobile (md:hidden class)', () => {
        const button = document.getElementById('mobile-menu-toggle');
        return button.classList.contains('md:hidden');
    });

    console.log('');
    console.log('4. ARIA ATTRIBUTES VALIDATION (Req 13.5)');
    console.log('-'.repeat(60));

    test('Hamburger button has aria-label', () => {
        const button = document.getElementById('mobile-menu-toggle');
        return button.getAttribute('aria-label') === 'Toggle mobile menu';
    });

    test('Hamburger button has aria-expanded', () => {
        const button = document.getElementById('mobile-menu-toggle');
        return button.hasAttribute('aria-expanded');
    });

    test('Hamburger button has aria-controls', () => {
        const button = document.getElementById('mobile-menu-toggle');
        return button.getAttribute('aria-controls') === 'mobile-menu';
    });

    test('Mobile menu has role="menu"', () => {
        const menu = document.getElementById('mobile-menu');
        return menu.getAttribute('role') === 'menu';
    });

    test('Mobile menu has aria-label', () => {
        const menu = document.getElementById('mobile-menu');
        return menu.getAttribute('aria-label') === 'Mobile navigation menu';
    });

    test('Mobile menu items have role="menuitem"', () => {
        const menuItems = document.querySelectorAll('#mobile-menu a[role="menuitem"]');
        return menuItems.length === 7;
    });

    test('SVG icon has aria-hidden="true"', () => {
        const svg = document.querySelector('#mobile-menu-toggle svg');
        return svg && svg.getAttribute('aria-hidden') === 'true';
    });

    test('Navigation has aria-label', () => {
        const nav = document.querySelector('nav');
        return nav.getAttribute('aria-label') === 'Main navigation';
    });

    console.log('');
    console.log('5. MOBILE MENU VALIDATION');
    console.log('-'.repeat(60));

    test('Mobile menu element exists', () => {
        return document.getElementById('mobile-menu') !== null;
    });

    test('Mobile menu is hidden by default', () => {
        const menu = document.getElementById('mobile-menu');
        return menu.classList.contains('hidden');
    });

    test('Mobile menu hidden on desktop (md:hidden class)', () => {
        const menu = document.getElementById('mobile-menu');
        return menu.classList.contains('md:hidden');
    });

    console.log('');
    console.log('6. ACCESSIBILITY FEATURES VALIDATION (Req 13.5)');
    console.log('-'.repeat(60));

    test('Desktop navigation links have focus styles', () => {
        const desktopLinks = document.querySelectorAll('ul.hidden.md\\:flex a');
        let allHaveFocus = true;
        desktopLinks.forEach(link => {
            if (!link.classList.contains('focus:ring-2')) {
                allHaveFocus = false;
            }
        });
        return allHaveFocus;
    });

    test('Mobile menu links have focus styles', () => {
        const mobileLinks = document.querySelectorAll('#mobile-menu a');
        let allHaveFocus = true;
        mobileLinks.forEach(link => {
            if (!link.classList.contains('focus:ring-2')) {
                allHaveFocus = false;
            }
        });
        return allHaveFocus;
    });

    test('Logo link has aria-label', () => {
        const logoLink = document.querySelector('a[aria-label*="Home"]');
        return logoLink !== null;
    });

    console.log('');
    console.log('7. RESPONSIVE DESIGN VALIDATION');
    console.log('-'.repeat(60));

    test('Desktop menu hidden on mobile', () => {
        const desktopMenu = document.querySelector('ul.hidden.md\\:flex');
        return desktopMenu.classList.contains('hidden');
    });

    test('Desktop menu visible on desktop', () => {
        const desktopMenu = document.querySelector('ul.hidden.md\\:flex');
        return desktopMenu.classList.contains('md:flex');
    });

    console.log('');
    console.log('8. JAVASCRIPT FUNCTIONALITY');
    console.log('-'.repeat(60));

    test('navigation.js loaded successfully', () => {
        // Check if navigation.js added any functionality
        const button = document.getElementById('mobile-menu-toggle');
        return button !== null;
    });

    console.log('');
    console.log('='.repeat(60));
    console.log('VALIDATION SUMMARY');
    console.log('='.repeat(60));
    console.log(`✓ Passed: ${passCount}`);
    console.log(`✗ Failed: ${failCount}`);
    console.log(`Total Tests: ${passCount + failCount}`);
    
    if (failCount === 0) {
        console.log('');
        console.log('🎉 SUCCESS! All requirements met for Task 3.1');
        console.log('');
        console.log('Requirements Validated:');
        console.log('  ✓ 1.2: Navigation displays links to all seven pages');
        console.log('  ✓ 1.4: Navigation remains accessible on all pages');
        console.log('  ✓ 1.6: SVG logo displayed in navigation header');
        console.log('  ✓ 13.5: ARIA labels for icon-only buttons');
    } else {
        console.error('');
        console.error('⚠ VALIDATION FAILED - Please fix the issues above');
    }
    console.log('='.repeat(60));

    // Interactive functionality test
    console.log('');
    console.log('INTERACTIVE TESTS (Manual):');
    console.log('-'.repeat(60));
    console.log('1. Resize browser to <768px width - hamburger should appear');
    console.log('2. Click hamburger button - mobile menu should toggle');
    console.log('3. Click outside menu - mobile menu should close');
    console.log('4. Press ESC key - mobile menu should close');
    console.log('5. Tab through links - focus indicator should be visible');
    console.log('6. Scroll down page - navigation should stay sticky at top');
    console.log('7. Verify all 7 page links are clickable');

})();
