import { initNavigation } from './navigation.js';
import { initDarkMode } from './darkMode.js';
import { initProjectFilter } from './projects.js';
import { initAnimations } from './animations.js';
import { initFormValidation } from './form.js';

// Initialize all modules when DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {
  // Initialize navigation
  initNavigation();
  
  // Initialize dark mode
  initDarkMode();
  
  // Initialize project filter
  initProjectFilter();
  
  // Initialize animations
  initAnimations();
  
  // Initialize form validation
  initFormValidation();
  
  console.log('Portfolio initialized successfully!');
});