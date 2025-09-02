/**
 * Animations and scroll effects
 */
export function initAnimations() {
    // Elements to animate on scroll
    const animatedElements = document.querySelectorAll('.skills-item, .project-card, .about-image, .contact-form');
    
    // Scroll-triggered animation function
    function handleScrollAnimations() {
      const triggerBottom = window.innerHeight * 0.8;
      
      animatedElements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        
        if (elementTop < triggerBottom) {
          if (!element.classList.contains('animated')) {
            element.classList.add('animated');
            
            // Add specific animation class based on element type or position
            if (element.classList.contains('skills-item')) {
              element.style.animation = 'fadeIn 0.5s ease-out forwards';
            } else if (element.classList.contains('project-card')) {
              element.style.animation = 'slideUp 0.5s ease-out forwards';
            } else if (element.classList.contains('about-image')) {
              element.style.animation = 'slideRight 0.5s ease-out forwards';
            } else if (element.classList.contains('contact-form')) {
              element.style.animation = 'fadeIn 0.8s ease-out forwards';
            }
          }
        }
      });
      
      // Parallax effect for floating shapes
      const shapes = document.querySelectorAll('.shape');
      const scrollPosition = window.scrollY;
      
      shapes.forEach((shape, index) => {
        const speed = 0.1 * (index + 1);
        shape.style.transform = `translateY(${scrollPosition * speed}px)`;
      });
    }
    
    // Initialize skill bar animations
    function animateSkillBars() {
      const skillBars = document.querySelectorAll('.skill-progress');
      
      skillBars.forEach(bar => {
        const width = bar.style.width;
        
        // Reset width to 0 initially
        bar.style.width = '0%';
        
        // Create observer for each skill bar
        const observer = new IntersectionObserver(entries => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              // Animate to the proper width when visible
              setTimeout(() => {
                bar.style.transition = 'width 1s ease-out';
                bar.style.width = width;
              }, 200);
              
              // Unobserve after animation
              observer.unobserve(entry.target);
            }
          });
        }, { threshold: 0.5 });
        
        // Start observing
        observer.observe(bar.parentElement);
      });
    }
    
    // Mouse move parallax effect for hero section
    function initParallaxEffect() {
      const heroSection = document.querySelector('.hero');
      const shapes = document.querySelectorAll('.shape');
      
      if (heroSection && shapes.length) {
        heroSection.addEventListener('mousemove', (e) => {
          const x = e.clientX / window.innerWidth;
          const y = e.clientY / window.innerHeight;
          
          shapes.forEach((shape, index) => {
            const speed = 20 * (index + 1);
            const xOffset = (x - 0.5) * speed;
            const yOffset = (y - 0.5) * speed;
            
            shape.style.transform = `translate(${xOffset}px, ${yOffset}px)`;
          });
        });
      }
    }
    
    // Set up animation events
    window.addEventListener('scroll', handleScrollAnimations);
    window.addEventListener('load', () => {
      handleScrollAnimations();
      animateSkillBars();
      initParallaxEffect();
    });
    
    // Handle initial animations
    setTimeout(handleScrollAnimations, 100);
  }