// navigation.js
// Navigation menu logic for Zaviyar Enterprises website
// Requirements: 1.3, 1.5, 13.3

(function() {
    'use strict';
    
    // Mobile menu toggle
    const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
    const mobileMenu = document.getElementById('mobile-menu');
    
    if (mobileMenuToggle && mobileMenu) {
        // Toggle mobile menu visibility
        mobileMenuToggle.addEventListener('click', function() {
            const isHidden = mobileMenu.classList.contains('hidden');
            mobileMenu.classList.toggle('hidden');
            mobileMenuToggle.setAttribute('aria-expanded', isHidden ? 'true' : 'false');
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
        
        // Close mobile menu when clicking on a link
        const mobileMenuLinks = mobileMenu.querySelectorAll('a');
        mobileMenuLinks.forEach(link => {
            link.addEventListener('click', function() {
                mobileMenu.classList.add('hidden');
                mobileMenuToggle.setAttribute('aria-expanded', 'false');
            });
        });
        
        // Close mobile menu on Escape key
        document.addEventListener('keydown', function(event) {
            if (event.key === 'Escape' && !mobileMenu.classList.contains('hidden')) {
                mobileMenu.classList.add('hidden');
                mobileMenuToggle.setAttribute('aria-expanded', 'false');
                mobileMenuToggle.focus();
            }
        });
    }
    
    // Highlight active page in navigation
    function setActivePage() {
        // Get current page filename
        const currentPage = window.location.pathname.split('/').pop() || 'index.html';
        
        // Get all navigation links
        const navLinks = document.querySelectorAll('nav a[href]');
        
        navLinks.forEach(link => {
            const linkHref = link.getAttribute('href');
            
            // Check if this link matches the current page
            if (linkHref === currentPage || 
                (currentPage === '' && linkHref === 'index.html')) {
                
                // Add active styling
                link.classList.add('text-gold-500', 'font-bold');
                link.setAttribute('aria-current', 'page');
                
                // Remove hover class since it's the active page
                link.classList.remove('hover:text-gold-500');
            }
        });
    }
    
    // Initialize on DOM ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', setActivePage);
    } else {
        setActivePage();
    }
})();
