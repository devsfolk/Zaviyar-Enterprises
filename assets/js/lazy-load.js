// lazy-load.js
// Image lazy loading using Intersection Observer API
// Requirements: 11.6

(function() {
    'use strict';
    
    // Check if browser supports Intersection Observer
    if (!('IntersectionObserver' in window)) {
        // Fallback: load all images immediately for older browsers
        const images = document.querySelectorAll('img[data-src]');
        images.forEach(img => {
            img.src = img.dataset.src;
            if (img.dataset.srcset) {
                img.srcset = img.dataset.srcset;
            }
        });
        return;
    }
    
    // Create Intersection Observer instance
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                
                // Load the image
                if (img.dataset.src) {
                    img.src = img.dataset.src;
                }
                
                // Load srcset if available
                if (img.dataset.srcset) {
                    img.srcset = img.dataset.srcset;
                }
                
                // Remove lazy class and add loaded class
                img.classList.remove('lazy');
                img.classList.add('loaded');
                
                // Stop observing this image
                observer.unobserve(img);
                
                // Handle image load error
                img.addEventListener('error', function() {
                    // Replace with placeholder on error
                    this.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="400" height="300"%3E%3Crect fill="%23f3f4f6" width="400" height="300"/%3E%3Ctext x="50%25" y="50%25" text-anchor="middle" fill="%239ca3af" font-size="14"%3EImage unavailable%3C/text%3E%3C/svg%3E';
                    this.alt = 'Image failed to load';
                });
            }
        });
    }, {
        // Start loading 50px before image enters viewport
        rootMargin: '50px 0px',
        threshold: 0.01
    });
    
    // Observe all images with data-src attribute
    const lazyImages = document.querySelectorAll('img[data-src]');
    lazyImages.forEach(img => {
        imageObserver.observe(img);
    });
    
    // Also observe images that may be added dynamically
    const mutationObserver = new MutationObserver((mutations) => {
        mutations.forEach((mutation) => {
            mutation.addedNodes.forEach((node) => {
                if (node.nodeType === 1) { // Element node
                    // Check if the node itself is a lazy image
                    if (node.matches && node.matches('img[data-src]')) {
                        imageObserver.observe(node);
                    }
                    // Check for lazy images within the added node
                    const lazyImgs = node.querySelectorAll && node.querySelectorAll('img[data-src]');
                    if (lazyImgs) {
                        lazyImgs.forEach(img => imageObserver.observe(img));
                    }
                }
            });
        });
    });
    
    // Start observing the document for changes
    mutationObserver.observe(document.body, {
        childList: true,
        subtree: true
    });
})();
