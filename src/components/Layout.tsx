
import React, { useState, useEffect } from 'react';
import Sidebar from './Sidebar';
import Footer from './Footer';
import AnimatedBackground from './AnimatedBackground';
import DynamicElements from './DynamicElements';
import { useIsMobile } from '@/hooks/use-mobile';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const isMobile = useIsMobile();
  
  return (
    <div className="flex flex-col min-h-screen relative">
      <AnimatedBackground />
      <DynamicElements />
      
      <Sidebar />
      
      <main className={`flex-grow relative z-10 ${isMobile ? 'pl-0 pt-16' : 'pl-72'}`}>
        {children}
      </main>
      
      <div className={isMobile ? 'pl-0' : 'pl-72'}>
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
