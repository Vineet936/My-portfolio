/**
 * Form validation and submission handling
 */
export function initFormValidation() {
    const contactForm = document.getElementById('contact-form');
    
    if (contactForm) {
      contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Get form fields
        const nameInput = document.getElementById('name');
        const emailInput = document.getElementById('email');
        const subjectInput = document.getElementById('subject');
        const messageInput = document.getElementById('message');
        
        // Reset previous validation states
        resetValidation();
        
        // Validate all fields
        let isValid = true;
        
        // Name validation
        if (nameInput.value.trim() === '') {
          showError(nameInput, 'Name is required');
          isValid = false;
        }
        
        // Email validation
        if (emailInput.value.trim() === '') {
          showError(emailInput, 'Email is required');
          isValid = false;
        } else if (!isValidEmail(emailInput.value)) {
          showError(emailInput, 'Please enter a valid email address');
          isValid = false;
        }
        
        // Subject validation
        if (subjectInput.value.trim() === '') {
          showError(subjectInput, 'Subject is required');
          isValid = false;
        }
        
        // Message validation
        if (messageInput.value.trim() === '') {
          showError(messageInput, 'Message is required');
          isValid = false;
        }
        
        // If all valid, proceed with form submission
        if (isValid) {
          // In a real implementation, you would send the form data to a server
          // For this demo, we'll just show a success message
          showSuccessMessage();
          contactForm.reset();
        }
      });
      
      // Add real-time validation for email field
      const emailInput = document.getElementById('email');
      if (emailInput) {
        emailInput.addEventListener('blur', () => {
          if (emailInput.value.trim() !== '' && !isValidEmail(emailInput.value)) {
            showError(emailInput, 'Please enter a valid email address');
          } else {
            clearError(emailInput);
          }
        });
      }
      
      // Clear error when user starts typing
      const formInputs = contactForm.querySelectorAll('input, textarea');
      formInputs.forEach(input => {
        input.addEventListener('input', () => {
          clearError(input);
        });
      });
    }
    
    // Helper function to show error message
    function showError(input, message) {
      const formGroup = input.closest('.form-group');
      
      // Remove any existing error message
      clearError(input);
      
      // Add error class to input
      input.classList.add('error');
      
      // Create error message element
      const errorElement = document.createElement('div');
      errorElement.className = 'error-message';
      errorElement.textContent = message;
      errorElement.style.color = 'var(--error-500)';
      errorElement.style.fontSize = 'var(--font-size-sm)';
      errorElement.style.marginTop = '4px';
      
      // Add error message to form group
      formGroup.appendChild(errorElement);
    }
    
    // Helper function to clear error message
    function clearError(input) {
      const formGroup = input.closest('.form-group');
      const errorElement = formGroup.querySelector('.error-message');
      
      input.classList.remove('error');
      
      if (errorElement) {
        formGroup.removeChild(errorElement);
      }
    }
    
    // Reset all validation states
    function resetValidation() {
      const errorMessages = document.querySelectorAll('.error-message');
      const inputs = document.querySelectorAll('.error');
      
      errorMessages.forEach(message => message.remove());
      inputs.forEach(input => input.classList.remove('error'));
    }
    
    // Validate email format
    function isValidEmail(email) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(email);
    }
    
    // Show success message after form submission
    function showSuccessMessage() {
      const formContainer = contactForm.parentElement;
      
      // Create success message element
      const successMessage = document.createElement('div');
      successMessage.className = 'success-message';
      successMessage.innerHTML = `
        <div style="text-align: center; padding: 20px; background-color: var(--success-50); border-radius: var(--radius-md); margin-top: 20px;">
          <i class="fas fa-check-circle" style="color: var(--success-500); font-size: 48px; margin-bottom: 16px;"></i>
          <h3 style="color: var(--success-600); margin-bottom: 8px;">Message Sent Successfully!</h3>
          <p style="color: var(--neutral-700);">Thank you for reaching out. I'll get back to you soon.</p>
        </div>
      `;
      
      // Add success message to the page
      formContainer.appendChild(successMessage);
      
      // Remove the success message after 5 seconds
      setTimeout(() => {
        if (successMessage.parentElement) {
          successMessage.parentElement.removeChild(successMessage);
        }
      }, 5000);
    }
  }