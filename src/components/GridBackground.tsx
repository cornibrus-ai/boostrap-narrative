
import React, { useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import type { SiteSection } from '@/hooks/useCurrentSection';

interface GridBackgroundProps {
  section: SiteSection;
}

const sectionThemes = {
  home: {
    gridColor: 'rgba(255, 255, 255, 0.07)', // Subtle white grid
    objectColor1: 'rgba(255, 149, 221, 0.3)', // Light Pink
    objectColor2: 'rgba(155, 135, 245, 0.3)', // Light Purple
    objectShape1: 'circle',
    objectShape2: 'square',
  },
  wisdom: {
    gridColor: 'rgba(200, 220, 255, 0.08)', // Light blueish tint
    objectColor1: 'rgba(255, 214, 153, 0.35)', // Soft Yellow
    objectColor2: 'rgba(163, 237, 209, 0.35)', // Soft Teal
    objectShape1: 'triangle',
    objectShape2: 'line',
  },
  portfolio: {
    gridColor: 'rgba(100, 100, 120, 0.1)', // Darker, techy grid
    objectColor1: 'rgba(0, 255, 255, 0.25)', // Cyan
    objectColor2: 'rgba(255, 0, 150, 0.25)', // Magenta
    objectShape1: 'square',
    objectShape2: 'plus',
  },
  connect: {
    gridColor: 'rgba(255, 200, 200, 0.09)', // Warm pinkish tint
    objectColor1: 'rgba(255, 160, 122, 0.4)', // Light Salmon
    objectColor2: 'rgba(173, 216, 230, 0.4)', // Light Blue
    objectShape1: 'circle',
    objectShape2: 'line',
  },
};

const DynamicObject: React.FC<{ color: string; shape: string; animationClass: string; sizeClass: string; initialDelay?: string }> = ({ color, shape, animationClass, sizeClass, initialDelay }) => {
  const style = {
    backgroundColor: shape !== 'line' && shape !== 'plus' ? color : undefined,
    borderColor: (shape === 'line' || shape === 'plus') ? color : undefined,
    animationDelay: initialDelay,
  };

  if (shape === 'circle') {
    return <div className={`absolute rounded-full ${sizeClass} ${animationClass}`} style={style}></div>;
  }
  if (shape === 'square') {
    return <div className={`absolute ${sizeClass} ${animationClass}`} style={style}></div>;
  }
  if (shape === 'triangle') {
    return <div className={`absolute w-0 h-0 border-l-[10px] border-l-transparent border-r-[10px] border-r-transparent border-b-[15px] ${sizeClass} ${animationClass}`} style={{ borderBottomColor: color, ...style, backgroundColor: 'transparent' }}></div>;
  }
  if (shape === 'line') {
    return <div className={`absolute h-[2px] w-8 md:h-[3px] md:w-12 ${sizeClass} ${animationClass}`} style={style}></div>;
  }
   if (shape === 'plus') {
    return (
      <div className={`absolute ${sizeClass} ${animationClass}`} style={{ ...style, width: '12px', height: '12px', backgroundColor: 'transparent' }}>
        <div className="absolute top-1/2 left-0 w-full h-[2px] -translate-y-1/2" style={{ backgroundColor: color }}></div>
        <div className="absolute top-0 left-1/2 h-full w-[2px] -translate-x-1/2" style={{ backgroundColor: color }}></div>
      </div>
    );
  }
  return null;
};

const GridBackground: React.FC<GridBackgroundProps> = ({ section }) => {
  const theme = sectionThemes[section] || sectionThemes.home;
  const gridSize = 30; // pixels

  // Memoize dynamic objects to prevent re-rendering if props don't change
  const dynamicObjects = useMemo(() => (
    <>
      <DynamicObject color={theme.objectColor1} shape={theme.objectShape1} animationClass="animate-dynamic-object-1" sizeClass="w-3 h-3 md:w-4 md:h-4" initialDelay="0s" />
      <DynamicObject color={theme.objectColor2} shape={theme.objectShape2} animationClass="animate-dynamic-object-2" sizeClass="w-4 h-4 md:w-5 md:h-5" initialDelay="1s" />
      <DynamicObject color={theme.objectColor1} shape={theme.objectShape2} animationClass="animate-dynamic-object-1" sizeClass="w-2 h-2 md:w-3 md:h-3" initialDelay="2.5s" />
       <DynamicObject color={theme.objectColor2} shape={theme.objectShape1} animationClass="animate-dynamic-object-2" sizeClass="w-3 h-3 md:w-4 md:h-4" initialDelay="4s" />
    </>
  ), [theme]);

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={section} // This key is crucial for AnimatePresence to detect changes
        className="fixed inset-0 -z-10 overflow-hidden"
        style={{
          backgroundImage: `
            linear-gradient(to right, ${theme.gridColor} 1px, transparent 1px),
            linear-gradient(to bottom, ${theme.gridColor} 1px, transparent 1px)
          `,
          backgroundSize: `${gridSize}px ${gridSize}px`,
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.7 }} // Duration for fade in/out of background theme
      >
        {dynamicObjects}
      </motion.div>
    </AnimatePresence>
  );
};

export default GridBackground;
