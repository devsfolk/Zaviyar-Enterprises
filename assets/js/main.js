// main.js
// Main JavaScript controller for Zaviyar Enterprises website
// Requirements: 13.3, 13.4

(function() {
    'use strict';
    
    // Smooth scroll for anchor links
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    anchorLinks.forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');
            
            // Skip if href is just "#"
            if (targetId === '#') {
                e.preventDefault();
                return;
            }
            
            const target = document.querySelector(targetId);
            if (target) {
                e.preventDefault();
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
                
                // Update focus for accessibility
                target.focus({ preventScroll: true });
            }
        });
    });
    
    // Keyboard navigation detection
    let isUsingKeyboard = false;
    
    // Detect Tab key for keyboard navigation
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Tab') {
            isUsingKeyboard = true;
            document.body.classList.add('keyboard-nav');
        }
    });
    
    // Detect mouse use
    document.addEventListener('mousedown', function() {
        isUsingKeyboard = false;
        document.body.classList.remove('keyboard-nav');
    });
    
    // Performance monitoring - log page load time
    window.addEventListener('load', function() {
        if (window.performance && window.performance.timing) {
            const loadTime = performance.timing.domContentLoadedEventEnd - 
                            performance.timing.navigationStart;
            console.log(`Page loaded in ${loadTime}ms`);
            
            // Log if page load exceeds 2 seconds (target)
            if (loadTime > 2000) {
                console.warn(`Page load time (${loadTime}ms) exceeds 2 second target`);
            }
        }
    });
    
    // Global error handler for debugging
    window.addEventListener('error', function(event) {
        console.error('JavaScript error:', event.error);
        // In production, send to error tracking service
    });
    
    // Handle unhandled promise rejections
    window.addEventListener('unhandledrejection', function(event) {
        console.error('Unhandled promise rejection:', event.reason);
        // In production, send to error tracking service
    });
    
    // Add current year to copyright if needed
    const copyrightElements = document.querySelectorAll('[data-copyright-year]');
    if (copyrightElements.length > 0) {
        const currentYear = new Date().getFullYear();
        copyrightElements.forEach(el => {
            el.textContent = el.textContent.replace('{{year}}', currentYear);
        });
    }
})();
