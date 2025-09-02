/**
 * Dark mode toggle functionality
 */
export function initDarkMode() {
    const themeToggleBtn = document.getElementById('theme-toggle-btn');
    const body = document.body;
    
    // Check for saved theme preference or prefer-color-scheme
    const savedTheme = localStorage.getItem('theme');
    const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    // Apply saved theme if available, otherwise use system preference
    if (savedTheme === 'dark' || (!savedTheme && prefersDarkScheme)) {
      enableDarkMode();
    } else {
      disableDarkMode();
    }
    
    // Toggle theme when button is clicked
    themeToggleBtn.addEventListener('click', () => {
      if (body.classList.contains('dark-mode')) {
        disableDarkMode();
      } else {
        enableDarkMode();
      }
    });
    
    // Function to enable dark mode
    function enableDarkMode() {
      body.classList.add('dark-mode');
      localStorage.setItem('theme', 'dark');
      updateThemeButtonIcon(true);
    }
    
    // Function to disable dark mode
    function disableDarkMode() {
      body.classList.remove('dark-mode');
      localStorage.setItem('theme', 'light');
      updateThemeButtonIcon(false);
    }
    
    // Update theme toggle button icon
    function updateThemeButtonIcon(isDark) {
      // No need to change the icons, they're controlled by CSS
      // This function is here for potential future enhancements
    }
    
    // Listen for system theme changes
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
      if (!localStorage.getItem('theme')) {
        if (e.matches) {
          enableDarkMode();
        } else {
          disableDarkMode();
        }
      }
    });
  }