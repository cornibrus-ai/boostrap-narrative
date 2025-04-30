
import React from 'react';
import { motion } from 'framer-motion';

const Manifesto = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="min-h-[40vh] flex items-center justify-center relative">
        <div className="content-wrapper">
          <motion.h1 
            className="font-serif text-3xl md:text-5xl lg:text-6xl mb-6 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Manifesto of a Serial Loser
          </motion.h1>
          
          <motion.div 
            className="w-16 h-1 bg-foreground mx-auto my-10"
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          ></motion.div>
        </div>
      </section>
      
      {/* Manifesto Content */}
      <section className="py-16">
        <div className="content-wrapper max-w-3xl mx-auto">
          <div className="prose prose-invert max-w-none">
            <p className="text-lg font-mono mb-6">
              I've failed more times than I've succeeded. I've built products nobody wanted, 
              invested in ideas that didn't work, and spent years on projects that went nowhere. 
              But each failure taught me something valuable that the successes couldn't.
            </p>
            
            <p className="text-lg font-mono mb-6">
              This isn't about glorifying failure—it's about recognizing that the path to 
              creating something meaningful is rarely a straight line. It's messy, uncertain, 
              and full of setbacks.
            </p>
            
            <p className="text-lg font-mono mb-6">
              The traditional narrative of success often hides the countless failures that 
              preceded it. We celebrate the wins but rarely discuss the losses that shaped them. 
              This creates a distorted view of what it takes to build something worthwhile.
            </p>
            
            <p className="text-lg font-mono mb-6">
              I believe in embracing the entire journey—the missteps, the pivots, and the hard-won 
              lessons. They're not detours from the path; they are the path.
            </p>
            
            <h2 className="text-2xl font-serif mt-12 mb-4">The Principles I Live By</h2>
            
            <ol className="space-y-8 list-decimal pl-5">
              <li className="font-mono">
                <strong className="block text-xl mb-2">Fail purposefully.</strong>
                Every failure contains a lesson if you're willing to look for it. I don't just fail and move on—I dissect, analyze, and extract wisdom from each setback.
              </li>
              
              <li className="font-mono">
                <strong className="block text-xl mb-2">Stay curious, not certain.</strong>
                Certainty is the enemy of growth. I approach each new venture with curiosity, willing to have my assumptions challenged and my perspectives changed.
              </li>
              
              <li className="font-mono">
                <strong className="block text-xl mb-2">Value resilience over brilliance.</strong>
                Brilliant ideas are common. What's rare is the resilience to see them through the inevitable challenges, pivots, and dark moments.
              </li>
              
              <li className="font-mono">
                <strong className="block text-xl mb-2">Share openly, hide nothing.</strong>
                I believe in transparent learning. By sharing my failures openly, I hope to normalize the messy reality of creation and encourage others to persist through their own challenges.
              </li>
              
              <li className="font-mono">
                <strong className="block text-xl mb-2">Trust the process, not the outcome.</strong>
                I focus on building strong processes and habits, knowing that good outcomes will eventually follow—even if not in the way I initially expected.
              </li>
            </ol>
            
            <p className="text-lg font-mono mt-12">
              This manifesto isn't about embracing failure for failure's sake. It's about acknowledging 
              that worthwhile achievements rarely come without setbacks, and that those setbacks are 
              valuable parts of the journey, not embarrassments to be hidden.
            </p>
            
            <p className="text-lg font-mono mt-6">
              So here's to the serial losers—the ones who keep showing up, keep trying, and keep 
              learning. The ones who understand that losing is not the opposite of winning, but 
              an essential part of it.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Manifesto;
