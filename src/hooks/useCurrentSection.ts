
import { useLocation } from 'react-router-dom';

export type SiteSection = 'wisdom' | 'portfolio' | 'connect' | 'home';

const useCurrentSection = (): SiteSection => {
  const location = useLocation();
  const { pathname } = location;

  if (pathname === '/') {
    return 'home'; // Or 'wisdom' if home is part of wisdom
  }
  if (pathname.startsWith('/reflections') || 
      pathname.startsWith('/advices') || 
      pathname.startsWith('/manifesto') || 
      pathname.startsWith('/now') ||
      pathname.startsWith('/travel-in-my-head')) {
    return 'wisdom';
  }
  if (pathname.startsWith('/portfolio')) {
    return 'portfolio';
  }
  if (pathname.startsWith('/contact') || pathname.startsWith('/about')) {
    return 'connect';
  }
  
  return 'home'; // Default section
};

export default useCurrentSection;
