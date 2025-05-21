import React, { useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import type { SiteSection } from '@/hooks/useCurrentSection';

interface GridBackgroundProps {
  section: SiteSection;
}

// Inspired by uploaded images for themes
const sectionThemes = {
  home: { // Default/Home theme (inspired by space/techy doodle)
    gridColor: 'rgba(50, 50, 80, 0.1)', // Darker blueish grid
    bgColor: 'hsl(220, 30%, 10%)', // Deep space blue
    objectColor1: 'rgba(173, 216, 230, 0.5)', // Light Blue (like stars/nebulae)
    objectColor2: 'rgba(255, 223, 186, 0.4)', // Pale Gold (like distant planets)
    objectShape1: 'scribbleStar', // Custom "handmade" shapes
    objectShape2: 'wavyLine',
  },
  wisdom: { // Inspired by jungle/nature doodle
    gridColor: 'rgba(34, 139, 34, 0.15)', // Forest green grid
    bgColor: 'hsl(120, 20%, 25%)', // Earthy green background
    objectColor1: 'rgba(255, 215, 0, 0.5)', // Gold (sunlight/flowers)
    objectColor2: 'rgba(139, 69, 19, 0.4)', // Brown (branches/earth)
    objectShape1: 'leaf',
    objectShape2: 'pebble',
  },
  portfolio: { // Inspired by underwater/tech doodle
    gridColor: 'rgba(70, 130, 180, 0.15)', // Steel blue grid
    bgColor: 'hsl(200, 40%, 20%)', // Deep sea blue
    objectColor1: 'rgba(255, 105, 180, 0.5)', // Hot Pink (coral/anemone)
    objectColor2: 'rgba(0, 255, 255, 0.4)', // Cyan (bubbles/fish)
    objectShape1: 'bubble',
    objectShape2: 'seaweed',
  },
  connect: { // Inspired by cosmic/friendly doodle
    gridColor: 'rgba(128, 0, 128, 0.1)', // Purple grid
    bgColor: 'hsl(270, 30%, 15%)', // Cosmic purple
    objectColor1: 'rgba(255, 182, 193, 0.5)', // Light Pink (galaxies)
    objectColor2: 'rgba(240, 248, 255, 0.4)', // Alice Blue (stars)
    objectShape1: 'swirl',
    objectShape2: 'comet',
  },
};

const DynamicObject: React.FC<{ color: string; shape: string; animationClass: string; sizeClass: string; initialDelay?: string }> = ({ color, shape, animationClass, sizeClass, initialDelay }) => {
  const commonStyle = {
    position: 'absolute' as 'absolute',
    animationDelay: initialDelay,
    opacity: 0.7,
  };

  // Handmade style applied through Tailwind classes or inline styles
  // For simplicity, I'll use existing shapes and imply "handmade" through color/animation.
  // True "scribble" or "scratched" effects require more complex CSS/SVG.
  
  // Example of a "scribbleStar"
  if (shape === 'scribbleStar') {
    return <div className={`absolute ${sizeClass} ${animationClass}`} style={{ ...commonStyle, width: '15px', height: '15px', borderRadius: '50%', border: `2px dotted ${color}` }}></div>;
  }
  if (shape === 'wavyLine') {
    return <div className={`absolute ${sizeClass} ${animationClass}`} style={{ ...commonStyle, width: '25px', height: '3px', backgroundColor: color, borderRadius: '3px', transform: 'rotate(-15deg)' }}></div>;
  }
  if (shape === 'leaf') {
     return <div className={`absolute ${sizeClass} ${animationClass}`} style={{ ...commonStyle, width: '10px', height: '20px', backgroundColor: color, borderRadius: '50% 0 50% 0' }}></div>;
  }
  if (shape === 'pebble') {
    return <div className={`absolute ${sizeClass} ${animationClass}`} style={{ ...commonStyle, width: '12px', height: '10px', backgroundColor: color, borderRadius: '50%' }}></div>;
  }
  if (shape === 'bubble') {
    return <div className={`absolute ${sizeClass} ${animationClass}`} style={{ ...commonStyle, width: '10px', height: '10px', borderColor: color, borderWidth: '2px', borderStyle: 'solid', borderRadius: '50%' }}></div>;
  }
  if (shape === 'seaweed') {
    return <div className={`absolute ${sizeClass} ${animationClass}`} style={{ ...commonStyle, width: '3px', height: '30px', backgroundColor: color, borderRadius: '3px', transformOrigin: 'bottom center', animation: `${animationClass}, sway 3s ease-in-out infinite alternate` }}></div>;
  }
  if (shape === 'swirl') {
    return (
      <div className={`absolute ${sizeClass} ${animationClass}`} style={commonStyle}>
        <div style={{ width: '15px', height: '15px', border: `3px solid ${color}`, borderRadius: '50%', borderTopColor: 'transparent', animation: 'spin 1.5s linear infinite' }}></div>
      </div>
    );
  }
  if (shape === 'comet') {
     return (
        <div className={`absolute ${sizeClass} ${animationClass}`} style={{...commonStyle, display: 'flex', alignItems: 'center' }}>
          <div style={{ width: '8px', height: '8px', backgroundColor: color, borderRadius: '50%' }}></div>
          <div style={{ width: '15px', height: '2px', backgroundColor: color, marginLeft: '-2px', opacity: 0.7 }}></div>
        </div>
     );
  }

  // Fallback for original shapes if new ones aren't exhaustive
  if (shape === 'circle') {
    return <div className={`absolute rounded-full ${sizeClass} ${animationClass}`} style={{ ...commonStyle, backgroundColor: color }}></div>;
  }
  if (shape === 'square') {
    return <div className={`absolute ${sizeClass} ${animationClass}`} style={{ ...commonStyle, backgroundColor: color }}></div>;
  }
  if (shape === 'triangle') {
    return <div className={`absolute w-0 h-0 border-l-[10px] border-l-transparent border-r-[10px] border-r-transparent border-b-[15px] ${sizeClass} ${animationClass}`} style={{ borderBottomColor: color, ...commonStyle, backgroundColor: 'transparent' }}></div>;
  }
  if (shape === 'line') {
    return <div className={`absolute h-[2px] w-8 md:h-[3px] md:w-12 ${sizeClass} ${animationClass}`} style={{ ...commonStyle, backgroundColor: color }}></div>;
  }
   if (shape === 'plus') {
    return (
      <div className={`absolute ${sizeClass} ${animationClass}`} style={{ ...commonStyle, width: '12px', height: '12px', backgroundColor: 'transparent' }}>
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

  const dynamicObjects = useMemo(() => (
    <>
      {/* Added more objects and using new shapes */}
      <DynamicObject color={theme.objectColor1} shape={theme.objectShape1} animationClass="animate-dynamic-object-1" sizeClass="w-3 h-3 md:w-4 md:h-4" initialDelay="0s" />
      <DynamicObject color={theme.objectColor2} shape={theme.objectShape2} animationClass="animate-dynamic-object-2" sizeClass="w-4 h-4 md:w-5 md:h-5" initialDelay="1.5s" />
      <DynamicObject color={theme.objectColor1} shape={theme.objectShape2} animationClass="animate-dynamic-object-1" sizeClass="w-2 h-2 md:w-3 md:h-3" initialDelay="3s" />
      <DynamicObject color={theme.objectColor2} shape={theme.objectShape1} animationClass="animate-dynamic-object-2" sizeClass="w-3 h-3 md:w-4 md:h-4" initialDelay="4.5s" />
      <DynamicObject color={theme.objectColor1} shape={theme.objectShape1} animationClass="animate-dynamic-object-1" sizeClass="w-5 h-5 md:w-6 md:h-6" initialDelay="6s" />
      <DynamicObject color={theme.objectColor2} shape={theme.objectShape2} animationClass="animate-dynamic-object-2" sizeClass="w-3 h-3 md:w-4 md:h-4" initialDelay="7.5s" />
    </>
  ), [theme]);

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={section} 
        className="fixed inset-0 -z-10 overflow-hidden"
        style={{
          backgroundColor: theme.bgColor, // Added background color for wallpaper effect
          backgroundImage: `
            linear-gradient(to right, ${theme.gridColor} 1px, transparent 1px),
            linear-gradient(to bottom, ${theme.gridColor} 1px, transparent 1px)
          `,
          backgroundSize: `${gridSize}px ${gridSize}px`,
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.7 }}
      >
        {dynamicObjects}
      </motion.div>
    </AnimatePresence>
  );
};

export default GridBackground;
