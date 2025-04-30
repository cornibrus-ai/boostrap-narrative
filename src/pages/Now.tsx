
import React from 'react';
import { motion } from 'framer-motion';

const Now = () => {
  const lastUpdated = new Date('2025-04-15').toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

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
            Now
          </motion.h1>
          
          <motion.p
            className="text-center text-muted-foreground"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            A snapshot of what I'm currently focused on
          </motion.p>
          
          <motion.div 
            className="w-16 h-1 bg-foreground mx-auto my-10"
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          ></motion.div>
        </div>
      </section>
      
      {/* Current Focus */}
      <section className="py-16">
        <div className="content-wrapper">
          <div className="max-w-3xl mx-auto">
            <div className="prose prose-invert max-w-none">
              <h2 className="font-serif text-2xl md:text-3xl mb-8">What I'm Working On</h2>
              
              <div className="mb-12">
                <h3 className="font-serif text-xl mb-4">Primary Project</h3>
                <p className="text-lg mb-4">
                  I'm currently building an experimental platform that makes complex data accessible 
                  and useful for non-technical users. This involves exploring new visualization 
                  techniques and interaction patterns to create an intuitive experience that 
                  preserves the richness of the underlying information.
                </p>
                <p className="text-muted-foreground mb-2">
                  Status: Research phase, early prototyping
                </p>
                <p className="text-muted-foreground">
                  Timeline: Aiming to launch a closed beta in Q3 2025
                </p>
              </div>
              
              <div className="mb-12">
                <h3 className="font-serif text-xl mb-4">Learning Focus</h3>
                <p className="text-lg mb-4">
                  Deepening my understanding of 3D visualization techniques and WebGL. I'm particularly 
                  interested in how these technologies can make abstract concepts more tangible and 
                  explorable. Currently working through several advanced courses and building small 
                  prototypes to practice these skills.
                </p>
              </div>
              
              <div className="mb-12">
                <h3 className="font-serif text-xl mb-4">Reading & Research</h3>
                <ul className="space-y-3">
                  <li>
                    <strong>Currently reading:</strong> "The Design of Everyday Things" by Don Norman (revisiting this classic)
                  </li>
                  <li>
                    <strong>Recently finished:</strong> "Designing Data-Driven Applications" by Martin Kleppmann
                  </li>
                  <li>
                    <strong>Research areas:</strong> Embodied cognition, spatial interfaces, and the future of human-computer interaction
                  </li>
                </ul>
              </div>
              
              <div className="mb-12">
                <h3 className="font-serif text-xl mb-4">Personal Development</h3>
                <p className="text-lg">
                  Practicing mindfulness meditation daily and focusing on creating more space for deep work 
                  and reflection. I'm also experimenting with different note-taking systems to better 
                  capture and connect ideas across projects and disciplines.
                </p>
              </div>
              
              <div className="pt-8 text-sm text-muted-foreground border-t border-border/30">
                <p>Last updated: {lastUpdated}</p>
                <p className="mt-2">
                  This is a "now page," inspired by <a href="https://nownownow.com/about" target="_blank" rel="noopener noreferrer" className="animated-link">Derek Sivers</a>. 
                  It's a snapshot of what I'm currently focused on, which changes over time.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Now;
