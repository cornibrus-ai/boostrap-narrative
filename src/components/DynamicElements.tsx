
import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const DynamicElements: React.FC = () => {
  const highlightsRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    // Mouse movement effect for highlights
    const handleMouseMove = (event: MouseEvent) => {
      if (!highlightsRef.current) return;
      
      const { clientX, clientY } = event;
      const moveX = clientX - window.innerWidth / 2;
      const moveY = clientY - window.innerHeight / 2;
      
      highlightsRef.current.style.transform = `translate(${moveX * 0.01}px, ${moveY * 0.01}px)`;
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);
  
  return (
    <>
      {/* Pink highlight blob */}
      <div 
        ref={highlightsRef}
        className="fixed inset-0 z-0 pointer-events-none"
      >
        {/* White highlight in top-right */}
        <div className="absolute top-20 right-20 w-80 h-80 bg-white/5 rounded-full blur-[100px]" />
        
        {/* Pink highlight in bottom-left */}
        <div className="absolute bottom-40 left-40 w-96 h-96 bg-pink-500/10 rounded-full blur-[120px]" />
        
        {/* Small pink accent */}
        <div className="absolute top-1/3 left-1/4 w-40 h-40 bg-pink-400/10 rounded-full blur-[50px]" />
      </div>

      {/* Floating elements */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        <motion.div
          className="absolute w-8 h-8 border border-white/10 rounded-full"
          style={{ top: '20%', left: '10%' }}
          animate={{
            y: [0, -20, 0],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{ 
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        <motion.div
          className="absolute w-16 h-16 border border-pink-400/20 rounded-full"
          style={{ top: '35%', right: '15%' }}
          animate={{
            y: [0, -30, 0],
            x: [0, 10, 0],
            opacity: [0.2, 0.5, 0.2]
          }}
          transition={{ 
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        <motion.div
          className="absolute w-6 h-6 bg-white/5 rounded-full"
          style={{ bottom: '25%', right: '30%' }}
          animate={{
            y: [0, -15, 0],
            opacity: [0.2, 0.4, 0.2]
          }}
          transition={{ 
            duration: 9,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        <motion.div
          className="absolute w-12 h-12 border border-white/5 rounded-full"
          style={{ bottom: '15%', left: '20%' }}
          animate={{
            y: [0, -20, 0],
            x: [0, -10, 0],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{ 
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>
    </>
  );
};

export default DynamicElements;
