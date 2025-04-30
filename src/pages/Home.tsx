
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';

const Home = () => {
  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="min-h-[85vh] flex items-center justify-center relative">
        <div className="content-wrapper text-center">
          <motion.h1 
            className="font-serif text-4xl md:text-6xl lg:text-7xl mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Weaving Ideas Into Reality
          </motion.h1>
          
          <motion.p 
            className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto mb-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            A journey through thoughts, projects, and the space between possibility and creation.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Link 
              to="/about" 
              className="inline-block px-8 py-3 border border-foreground text-foreground hover:bg-foreground hover:text-background transition-colors duration-300"
            >
              Discover My Journey
            </Link>
          </motion.div>
        </div>
        
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 cursor-pointer animate-pulse-slow">
          <ArrowDown size={24} />
        </div>
      </section>
      
      {/* Introduction Section */}
      <section className="py-20">
        <div className="content-wrapper">
          <div className="max-w-3xl mx-auto">
            <h2 className="section-title">Currently Working On</h2>
            <div className="prose prose-invert max-w-none">
              <p className="text-lg mb-6">
                I'm exploring the intersection of technology, design, and human experience. 
                Focused on creating meaningful projects that solve real problems and push the 
                boundaries of what's possible.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
                <div className="border border-border/50 p-6 rounded-md hover:border-foreground/50 transition-colors">
                  <h3 className="font-serif text-xl mb-3">Latest Project</h3>
                  <p className="text-muted-foreground mb-4">An interactive platform connecting creative minds across disciplines.</p>
                  <Link to="/portfolio" className="animated-link">Explore Project</Link>
                </div>
                
                <div className="border border-border/50 p-6 rounded-md hover:border-foreground/50 transition-colors">
                  <h3 className="font-serif text-xl mb-3">Recent Reflection</h3>
                  <p className="text-muted-foreground mb-4">Thoughts on the future of collaborative creation in a digital world.</p>
                  <Link to="/reflections" className="animated-link">Read More</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Featured Quote */}
      <section className="py-20 bg-secondary">
        <div className="content-wrapper">
          <blockquote className="text-2xl md:text-3xl lg:text-4xl font-serif text-center max-w-3xl mx-auto italic">
            "The intersection of imagination and execution is where innovation lives."
          </blockquote>
        </div>
      </section>
    </div>
  );
};

export default Home;
