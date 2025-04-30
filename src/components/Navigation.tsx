
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '@/lib/utils';

const Navigation: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Now', path: '/now' },
    { name: 'Reflections', path: '/reflections' },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'Contact', path: '/contact' },
  ];

  const isActive = (path: string) => {
    if (path === '/') {
      return location.pathname === '/';
    }
    return location.pathname.startsWith(path);
  };

  return (
    <header 
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-6', 
        isScrolled ? 'bg-background/80 backdrop-blur-md py-4 border-b border-border/50' : ''
      )}
    >
      <div className="content-wrapper flex justify-between items-center">
        <div className="font-serif text-xl md:text-2xl">
          <Link to="/" className="animated-link">The Woven Narrative</Link>
        </div>
        
        <nav className="hidden md:block">
          <ul className="flex space-x-8">
            {navLinks.map((link) => (
              <li key={link.path}>
                <Link 
                  to={link.path} 
                  className={cn("nav-link", isActive(link.path) && "active")}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <button className="md:hidden">
          <div className="space-y-2">
            <span className="block w-8 h-0.5 bg-foreground"></span>
            <span className="block w-8 h-0.5 bg-foreground"></span>
            <span className="block w-8 h-0.5 bg-foreground"></span>
          </div>
        </button>
      </div>
    </header>
  );
};

export default Navigation;
