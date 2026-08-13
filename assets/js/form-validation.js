// form-validation.js
// Contact form validation module
// Requirements: 10.2, 10.3, 10.10

(function() {
    'use strict';
    
    const form = document.getElementById('contact-form');
    if (!form) return; // Exit if form doesn't exist on this page
    
    // Email validation regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    /**
     * Validate individual field
     * @param {HTMLElement} field - The input or textarea field to validate
     * @returns {boolean} - True if field is valid, false otherwise
     */
    function validateField(field) {
        const value = field.value.trim();
        const errorMessage = field.parentElement.querySelector('.error-message');
        let isValid = true;
        let message = '';
        
        // Check if required field is empty
        if (field.hasAttribute('required') && value === '') {
            isValid = false;
            message = 'This field is required';
        }
        // Validate email format
        else if (field.type === 'email' && value !== '' && !emailRegex.test(value)) {
            isValid = false;
            message = 'Please enter a valid email address (e.g., name@example.com)';
        }
        // Check minimum length if specified
        else if (field.hasAttribute('minlength')) {
            const minLength = parseInt(field.getAttribute('minlength'));
            if (value.length > 0 && value.length < minLength) {
                isValid = false;
                message = `Must be at least ${minLength} characters`;
            }
        }
        
        // Update UI based on validation result
        if (isValid) {
            field.classList.remove('border-red-500');
            field.classList.add('border-gray-300');
            if (errorMessage) {
                errorMessage.classList.add('hidden');
            }
        } else {
            field.classList.add('border-red-500');
            field.classList.remove('border-gray-300');
            if (errorMessage) {
                errorMessage.textContent = message;
                errorMessage.classList.remove('hidden');
            }
        }
        
        return isValid;
    }
    
    /**
     * Validate entire form
     * @returns {boolean} - True if all fields are valid, false otherwise
     */
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
    
    /**
     * Show success message and reset form
     */
    function showSuccessMessage() {
        const successMessage = document.getElementById('form-success');
        if (successMessage) {
            successMessage.classList.remove('hidden');
            
            // Scroll to success message
            successMessage.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
            
            // Reset form after 3 seconds
            setTimeout(() => {
                form.reset();
                successMessage.classList.add('hidden');
                
                // Remove all error states
                const fields = form.querySelectorAll('input, textarea');
                fields.forEach(field => {
                    field.classList.remove('border-red-500');
                    field.classList.add('border-gray-300');
                });
            }, 3000);
        }
    }
    
    // Add blur event listeners for real-time validation
    const formFields = form.querySelectorAll('input, textarea');
    formFields.forEach(field => {
        field.addEventListener('blur', function() {
            // Only validate if field has been touched and has a value or is required
            if (this.value.trim() !== '' || this.hasAttribute('required')) {
                validateField(this);
            }
        });
        
        // Also validate on input for better UX (remove error as user types)
        field.addEventListener('input', function() {
            // If field was showing an error, re-validate as user types
            if (this.classList.contains('border-red-500')) {
                validateField(this);
            }
        });
    });
    
    // Handle form submission
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        
        // Validate all fields
        if (validateForm()) {
            // Get form data
            const formData = {
                name: form.querySelector('#name').value.trim(),
                email: form.querySelector('#email').value.trim(),
                country: form.querySelector('#country').value.trim(),
                quantity: form.querySelector('#quantity').value.trim(),
                message: form.querySelector('#message').value.trim(),
                timestamp: new Date().toISOString()
            };
            
            // Log form data (in production, send to server)
            console.log('Form submitted:', formData);
            
            // In production, you would send data to server here:
            // fetch('/api/contact', {
            //     method: 'POST',
            //     headers: { 'Content-Type': 'application/json' },
            //     body: JSON.stringify(formData)
            // })
            // .then(response => response.json())
            // .then(data => {
            //     showSuccessMessage();
            // })
            // .catch(error => {
            //     console.error('Form submission error:', error);
            //     alert('Unable to submit form. Please try again or contact us directly.');
            // });
            
            // For now, just show success message
            showSuccessMessage();
        } else {
            // Focus on first invalid field
            const firstInvalidField = form.querySelector('.border-red-500');
            if (firstInvalidField) {
                firstInvalidField.focus();
                firstInvalidField.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }
        }
    });
})();
