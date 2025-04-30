
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
      {/* Enhanced background highlights with white and pink colors */}
      <div 
        ref={highlightsRef}
        className="fixed inset-0 z-0 pointer-events-none"
      >
        {/* White highlight in top-right */}
        <div className="absolute top-20 right-20 w-96 h-96 bg-white/10 rounded-full blur-[120px]" />
        
        {/* Pink highlight in bottom-left */}
        <div className="absolute bottom-40 left-40 w-[30rem] h-[30rem] bg-pink-500/15 rounded-full blur-[150px]" />
        
        {/* Small pink accent */}
        <div className="absolute top-1/3 left-1/4 w-64 h-64 bg-pink-400/20 rounded-full blur-[80px]" />
        
        {/* Additional white glow */}
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-white/10 rounded-full blur-[100px]" />
      </div>

      {/* Floating shapes that move slowly */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        {/* Triangle */}
        <motion.div
          className="absolute w-16 h-16 border-l-[32px] border-l-transparent border-r-[32px] border-r-transparent border-b-[32px] border-white/10"
          style={{ top: '15%', left: '8%' }}
          animate={{
            y: [0, -30, 0],
            rotate: [0, 10, 0]
          }}
          transition={{ 
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        {/* Square */}
        <motion.div
          className="absolute w-16 h-16 border border-white/10 rounded-xl"
          style={{ top: '30%', right: '12%' }}
          animate={{
            y: [0, -40, 0],
            x: [0, 20, 0],
            rotate: [0, -15, 0]
          }}
          transition={{ 
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        {/* Circle */}
        <motion.div
          className="absolute w-12 h-12 border border-pink-400/20 rounded-full"
          style={{ bottom: '28%', right: '25%' }}
          animate={{
            y: [0, -25, 0],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{ 
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        {/* Rectangle */}
        <motion.div
          className="absolute w-20 h-10 border border-white/5 rounded-xl"
          style={{ bottom: '20%', left: '15%' }}
          animate={{
            y: [0, -25, 0],
            x: [0, -15, 0],
            rotate: [0, 5, 0]
          }}
          transition={{ 
            duration: 16,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        {/* Small dot */}
        <motion.div
          className="absolute w-4 h-4 bg-pink-400/10 rounded-full"
          style={{ top: '45%', left: '60%' }}
          animate={{
            y: [0, -20, 0],
            opacity: [0.2, 0.5, 0.2]
          }}
          transition={{ 
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        {/* Plus shape */}
        <motion.div
          className="absolute flex items-center justify-center"
          style={{ top: '60%', right: '35%' }}
          animate={{
            y: [0, -15, 0],
            rotate: [0, 45, 0]
          }}
          transition={{ 
            duration: 14,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <div className="w-12 h-2 bg-white/10"></div>
          <div className="w-2 h-12 bg-white/10 absolute"></div>
        </motion.div>
      </div>
    </>
  );
};

export default DynamicElements;
