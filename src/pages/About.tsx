
import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="min-h-[50vh] flex items-center justify-center relative">
        <div className="content-wrapper">
          <motion.h1 
            className="font-display-alt text-3xl md:text-5xl lg:text-6xl mb-3 text-center" // Updated font
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            About Me
          </motion.h1>
          
          <motion.div 
            className="w-16 h-1 bg-foreground mx-auto mb-6"
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          ></motion.div>
        </div>
      </section>
      
      {/* Background & Story */}
      <section className="py-12">
        <div className="content-wrapper">
          <div className="max-w-3xl mx-auto">
            {/* h2 will use font-display-alt from index.css */}
            <h2 className="text-2xl md:text-3xl mb-4">My Background</h2>
            <div className="prose prose-invert max-w-none font-mono"> {/* Ensure prose content uses mono */}
              <p className="text-lg mb-6">
                I'm a multidisciplinary creator passionate about building meaningful experiences 
                at the intersection of technology and design. With a background spanning software 
                development, creative direction, and entrepreneurship, I bring a unique perspective 
                to every project.
              </p>
              
              <p className="text-lg mb-6">
                My journey began in traditional software development, where I honed my technical 
                skills by working on complex systems. However, I quickly realized that my true passion 
                lay in creating experiences that combine technical excellence with thoughtful design 
                and human-centered thinking.
              </p>
              
              <p className="text-lg mb-10">
                Over the years, I've collaborated with startups, established companies, and independent 
                creators to build products that not only function flawlessly but also connect with users 
                on a deeper level. I believe technology should enhance our humanity, not diminish it.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Values */}
      <section className="py-12 bg-secondary">
        <div className="content-wrapper">
          <div className="max-w-3xl mx-auto">
            {/* h2 will use font-display-alt from index.css */}
            <h2 className="text-2xl md:text-3xl text-center mb-8">Core Values</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="p-6">
                {/* h3 will use font-display-alt from index.css */}
                <h3 className="text-xl mb-3">Intentional Creation</h3>
                <p className="text-muted-foreground font-mono"> {/* Ensure paragraphs use mono */}
                  I believe in creating with purpose, always questioning the "why" before the "how." 
                  Every project should solve a meaningful problem or enhance the human experience.
                </p>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl mb-3">Endless Curiosity</h3>
                <p className="text-muted-foreground font-mono">
                  I continuously explore new technologies, methodologies, and disciplines, 
                  recognizing that true innovation happens at the edges where fields intersect.
                </p>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl mb-3">Elegant Simplicity</h3>
                <p className="text-muted-foreground font-mono">
                  I strive for solutions that are as simple as possible but no simpler. Complexity 
                  should exist in the thinking, not in the final experience.
                </p>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl mb-3">Deep Collaboration</h3>
                <p className="text-muted-foreground font-mono">
                  I thrive in environments where diverse perspectives come together. The most 
                  powerful ideas emerge when different viewpoints collide and connect.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Vision */}
      <section className="py-12">
        <div className="content-wrapper">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl mb-4">My Vision</h2>
            <div className="prose prose-invert max-w-none font-mono"> {/* Ensure prose content uses mono */}
              <p className="text-lg mb-6">
                I envision a world where technology serves as a tool for human flourishing rather than 
                distraction or exploitation. My goal is to contribute to a digital landscape that 
                respects human attention, enhances our capabilities, and connects us in meaningful ways.
              </p>
              
              <p className="text-lg">
                Through my work, I aim to demonstrate that technical excellence and human-centered design 
                are not opposing forces but complementary aspects of truly great products. I'm committed 
                to creating experiences that feel both cutting-edge and deeply familiar—technology that 
                feels like an extension of ourselves rather than something foreign or imposing.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
