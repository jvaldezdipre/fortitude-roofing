
import { useEffect } from 'react';

const ScrollToTop = () => {
  useEffect(() => {
    const handleScroll = () => {
      // Add 'visible' class to elements when they're in the viewport
      const animatedElements = document.querySelectorAll('.animate-on-scroll, .staggered-fade-in');
      
      animatedElements.forEach(element => {
        const position = element.getBoundingClientRect();
        
        // If element is in viewport
        if (position.top < window.innerHeight * 0.85) {
          element.classList.add('visible');
        }
      });
    };

    // Run once on mount
    handleScroll();
    
    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);
    
    // Clean up
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return null;
};

export default ScrollToTop;
