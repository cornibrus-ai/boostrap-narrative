
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '@/lib/utils';

type MobileMenuProps = {
  isOpen: boolean;
  onClose: () => void;
};

const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose }) => {
  const location = useLocation();

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
    <div 
      className={cn(
        'fixed inset-0 z-50 bg-background/95 transition-all duration-300 backdrop-blur-md flex flex-col justify-center',
        isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
      )}
    >
      <button 
        onClick={onClose} 
        className="absolute top-6 right-6"
        aria-label="Close menu"
      >
        <div className="relative w-8 h-8">
          <span className="absolute inset-0 rotate-45 w-8 h-0.5 bg-foreground top-1/2"></span>
          <span className="absolute inset-0 -rotate-45 w-8 h-0.5 bg-foreground top-1/2"></span>
        </div>
      </button>
      
      <nav className="text-center">
        <ul className="flex flex-col space-y-6">
          {navLinks.map((link) => (
            <li key={link.path} className="text-2xl">
              <Link 
                to={link.path} 
                className={cn("nav-link", isActive(link.path) && "active")}
                onClick={onClose}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default MobileMenu;
