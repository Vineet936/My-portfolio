/**
 * Project filtering functionality
 */
export function initProjectFilter() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');
    
    // Handle filter button clicks
    filterButtons.forEach(button => {
      button.addEventListener('click', () => {
        // Remove active class from all buttons
        filterButtons.forEach(btn => btn.classList.remove('active'));
        
        // Add active class to clicked button
        button.classList.add('active');
        
        // Get filter value from data attribute
        const filterValue = button.getAttribute('data-filter');
        
        // Filter projects
        filterProjects(filterValue);
      });
    });
    
    // Filter projects based on category
    function filterProjects(category) {
      projectCards.forEach(card => {
        const projectCategory = card.getAttribute('data-category');
        
        // Reset animation to enable re-triggering
        card.style.animation = 'none';
        card.offsetHeight; // Trigger reflow
        
        if (category === 'all' || projectCategory === category) {
          card.style.display = 'flex';
          card.style.animation = 'fadeIn 0.5s ease-out forwards';
        } else {
          card.style.display = 'none';
        }
      });
    }
    
    // Add custom project loading effects on page load
    function initializeProjectCards() {
      projectCards.forEach((card, index) => {
        // Stagger the animation delay
        card.style.animationDelay = `${index * 0.1}s`;
      });
    }
    
    // Initialize project cards with animations
    initializeProjectCards();
  }