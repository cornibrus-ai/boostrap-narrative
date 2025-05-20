
import React from 'react';
import Sidebar from './Sidebar';
import Footer from './Footer';
// Removed AnimatedBackground and DynamicElements
import GridBackground from './GridBackground';
import useCurrentSection from '@/hooks/useCurrentSection';
import { useIsMobile } from '@/hooks/use-mobile';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const isMobile = useIsMobile();
  const currentSection = useCurrentSection();
  
  return (
    <div className="flex flex-col min-h-screen relative">
      <GridBackground section={currentSection} />
      {/* AnimatedBackground and DynamicElements are replaced by GridBackground */}
      
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
