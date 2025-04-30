
import React from 'react';
import Sidebar from './Sidebar';
import Footer from './Footer';
import AnimatedBackground from './AnimatedBackground';
import DynamicElements from './DynamicElements';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen relative">
      <AnimatedBackground />
      <DynamicElements />
      
      <Sidebar />
      
      <main className="pl-72 flex-grow relative z-10">
        {children}
      </main>
      
      <Footer />
    </div>
  );
};

export default Layout;
