
import React from 'react';
import { motion } from 'framer-motion';

const TravelInMyHead = () => {
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
            A Travel In My Head
          </motion.h1>
          
          <motion.p
            className="text-center text-muted-foreground max-w-xl mx-auto font-mono"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Explore the interconnected nodes of my thoughts, ideas, and the patterns that emerge from them.
          </motion.p>
          
          <motion.div 
            className="w-16 h-1 bg-foreground mx-auto my-10"
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          ></motion.div>
        </div>
      </section>
      
      {/* Introduction */}
      <section className="py-12">
        <div className="content-wrapper">
          <div className="max-w-3xl mx-auto">
            <p className="text-muted-foreground mb-8 font-mono leading-relaxed">
              Welcome to my digital thought garden. This is where I connect ideas, cultivate concepts, and let thoughts grow 
              organically. Unlike traditional blogs or articles, this space represents the natural web-like structure of how 
              we actually think - with connections, references, and constant evolution.
            </p>
            
            <p className="text-muted-foreground mb-12 font-mono leading-relaxed">
              Each node in this network represents a thought, concept, or idea that I'm exploring. The connections between them 
              show relationships, influences, and the paths my mind travels when contemplating complex topics. Feel free to 
              wander and discover unexpected connections.
            </p>
          </div>
        </div>
      </section>
      
      {/* Brain Map */}
      <section className="py-8">
        <div className="content-wrapper">
          <div className="max-w-5xl mx-auto">
            <a 
              href="https://publish.obsidian.md/firebank" 
              target="_blank" 
              rel="noopener noreferrer"
              className="block w-full aspect-[4/3] rounded-[15px] border border-white/20 overflow-hidden relative bg-secondary/30 backdrop-blur-sm hover:border-pink-400/50 transition-all"
            >
              <div className="absolute inset-0">
                <img 
                  src="/lovable-uploads/3d7ee2bc-c57a-4947-ac5e-88d5343f9ac3.png" 
                  alt="Mind map visualization" 
                  className="w-full h-full object-contain p-4"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-70 flex items-end justify-center p-6">
                <span className="text-white font-mono text-sm px-4 py-2 bg-pink-500/30 backdrop-blur-sm rounded-xl border border-white/20">
                  Click to explore my digital garden
                </span>
              </div>
            </a>
          </div>
        </div>
      </section>
      
      {/* How to Use Section */}
      <section className="py-16">
        <div className="content-wrapper">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-serif text-2xl md:text-3xl mb-6">How to Navigate</h2>
            
            <div className="space-y-6 font-mono text-muted-foreground">
              <p>
                This is not a linear reading experience. Start anywhere that catches your interest and follow the connections.
              </p>
              <p>
                You'll find half-formed ideas alongside more developed concepts. Some nodes may contradict others - that's part of the 
                thinking process. My digital garden is always growing and changing as my understanding evolves.
              </p>
              <p>
                If you find a connection that I haven't made yet or have thoughts to share, I'd love to hear from you. The best ideas
                often emerge through conversation and collaboration.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TravelInMyHead;
