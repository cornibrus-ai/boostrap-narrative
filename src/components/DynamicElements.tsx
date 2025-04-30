
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
      {/* Enhanced background highlights with more white and pink colors */}
      <div 
        ref={highlightsRef}
        className="fixed inset-0 z-0 pointer-events-none"
      >
        {/* White highlight in top-right - enlarged */}
        <div className="absolute top-20 right-20 w-[40rem] h-[40rem] bg-white/20 rounded-full blur-[150px]" />
        
        {/* Pink highlight in bottom-left - enhanced */}
        <div className="absolute bottom-40 left-40 w-[40rem] h-[40rem] bg-pink-500/25 rounded-full blur-[180px]" />
        
        {/* Small pink accent - brighter */}
        <div className="absolute top-1/3 left-1/4 w-80 h-80 bg-pink-400/30 rounded-full blur-[100px]" />
        
        {/* Additional white glow - enlarged */}
        <div className="absolute bottom-1/4 right-1/4 w-[30rem] h-[30rem] bg-white/15 rounded-full blur-[120px]" />
        
        {/* New pink accent in center */}
        <div className="absolute top-1/2 left-1/2 w-[25rem] h-[25rem] bg-pink-300/20 rounded-full blur-[130px] -translate-x-1/2 -translate-y-1/2" />
        
        {/* New white accent near top */}
        <div className="absolute top-[15%] left-[35%] w-64 h-64 bg-white/20 rounded-full blur-[90px]" />
      </div>

      {/* Floating shapes that move slowly - more of them and more varied */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        {/* Triangle 1 */}
        <motion.div
          className="absolute w-16 h-16 border-l-[32px] border-l-transparent border-r-[32px] border-r-transparent border-b-[32px] border-white/15"
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
        
        {/* Triangle 2 - new */}
        <motion.div
          className="absolute w-12 h-12 border-l-[24px] border-l-transparent border-r-[24px] border-r-transparent border-b-[24px] border-pink-300/20"
          style={{ bottom: '15%', right: '18%' }}
          animate={{
            y: [0, -25, 0],
            rotate: [0, -15, 0]
          }}
          transition={{ 
            duration: 16,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        {/* Square 1 */}
        <motion.div
          className="absolute w-16 h-16 border border-white/15 rounded-xl"
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
        
        {/* Square 2 - new */}
        <motion.div
          className="absolute w-10 h-10 border border-pink-400/20 rounded-xl"
          style={{ top: '70%', left: '22%' }}
          animate={{
            y: [0, -35, 0],
            x: [0, -15, 0],
            rotate: [0, 25, 0]
          }}
          transition={{ 
            duration: 22,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        {/* Circle 1 */}
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
        
        {/* Circle 2 - new */}
        <motion.div
          className="absolute w-8 h-8 bg-white/10 rounded-full"
          style={{ top: '45%', right: '8%' }}
          animate={{
            y: [0, -20, 0],
            opacity: [0.2, 0.4, 0.2]
          }}
          transition={{ 
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        {/* Rectangle 1 */}
        <motion.div
          className="absolute w-20 h-10 border border-white/10 rounded-xl"
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
        
        {/* Rectangle 2 - new */}
        <motion.div
          className="absolute w-16 h-8 bg-pink-400/5 rounded-xl"
          style={{ top: '25%', left: '25%' }}
          animate={{
            y: [0, -15, 0],
            x: [0, 10, 0],
            rotate: [0, -10, 0]
          }}
          transition={{ 
            duration: 17,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        {/* Small dot 1 */}
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
        
        {/* Small dot 2 - new */}
        <motion.div
          className="absolute w-3 h-3 bg-white/15 rounded-full"
          style={{ bottom: '35%', left: '30%' }}
          animate={{
            y: [0, -15, 0],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{ 
            duration: 13,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        {/* Plus shape 1 */}
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
        
        {/* Plus shape 2 - new */}
        <motion.div
          className="absolute flex items-center justify-center"
          style={{ top: '15%', left: '45%' }}
          animate={{
            y: [0, -20, 0],
            rotate: [0, -30, 0]
          }}
          transition={{ 
            duration: 19,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <div className="w-10 h-1.5 bg-pink-400/15"></div>
          <div className="w-1.5 h-10 bg-pink-400/15 absolute"></div>
        </motion.div>
        
        {/* New diamond shape */}
        <motion.div
          className="absolute w-12 h-12 bg-white/5 rounded"
          style={{ top: '50%', left: '75%', borderRadius: '4px' }}
          animate={{
            y: [0, -25, 0],
            rotate: [0, 45, 0],
            scale: [1, 1.05, 1]
          }}
          transition={{ 
            duration: 23,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>
    </>
  );
};

export default DynamicElements;
