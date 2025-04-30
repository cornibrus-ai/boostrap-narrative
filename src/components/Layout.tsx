
import React, { useState } from 'react';
import Navigation from './Navigation';
import MobileMenu from './MobileMenu';
import Footer from './Footer';
import AnimatedBackground from './AnimatedBackground';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="flex flex-col min-h-screen">
      <AnimatedBackground />
      
      <Navigation />
      
      <MobileMenu 
        isOpen={mobileMenuOpen} 
        onClose={() => setMobileMenuOpen(false)} 
      />
      
      <main className="flex-grow pt-28 pb-16">
        {children}
      </main>
      
      <Footer />
    </div>
  );
};

export default Layout;
