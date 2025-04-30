
import React from 'react';
import { motion } from 'framer-motion';

const Advices = () => {
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
            Advices
          </motion.h1>
          
          <motion.p
            className="text-center text-muted-foreground max-w-xl mx-auto font-mono"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Insights and lessons from years of building, investing, and creating
          </motion.p>
          
          <motion.div 
            className="w-16 h-1 bg-foreground mx-auto my-10"
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          ></motion.div>
        </div>
      </section>
      
      {/* Advices Content */}
      <section className="py-16">
        <div className="content-wrapper max-w-3xl mx-auto">
          <div className="space-y-16">
            <div className="bg-secondary/30 rounded-xl p-8 border border-border/20">
              <h2 className="text-2xl font-serif mb-4">On Starting</h2>
              <p className="text-lg font-mono mb-6">
                "The biggest risk is not taking any risk. In a world that's changing quickly, the only strategy that is guaranteed to fail is not taking risks."
              </p>
              <p className="text-muted-foreground font-mono">
                The hardest part is always getting started. We overthink, overplan, and overanalyze when what we really need is to take the first step, however imperfect. Start before you're ready.
              </p>
            </div>
            
            <div className="bg-secondary/30 rounded-xl p-8 border border-border/20">
              <h2 className="text-2xl font-serif mb-4">On Working with Others</h2>
              <p className="text-lg font-mono mb-6">
                "If you want to go fast, go alone. If you want to go far, go together."
              </p>
              <p className="text-muted-foreground font-mono">
                The right partnerships can exponentially increase what's possible. Seek complementary skills, aligned values, and people who make the journey worthwhile, even when it's challenging.
              </p>
            </div>
            
            <div className="bg-secondary/30 rounded-xl p-8 border border-border/20">
              <h2 className="text-2xl font-serif mb-4">On Perseverance</h2>
              <p className="text-lg font-mono mb-6">
                "The master has failed more times than the beginner has even tried."
              </p>
              <p className="text-muted-foreground font-mono">
                Persistence is more valuable than perfection. Most meaningful accomplishments come after numerous setbacks and iterations. The difference between success and failure often comes down to who stayed in the game longer.
              </p>
            </div>
            
            <div className="bg-secondary/30 rounded-xl p-8 border border-border/20">
              <h2 className="text-2xl font-serif mb-4">On Decision Making</h2>
              <p className="text-lg font-mono mb-6">
                "Make reversible decisions quickly and irreversible decisions slowly."
              </p>
              <p className="text-muted-foreground font-mono">
                Consider the permanence of your decisions. For easily reversed choices, move quickly and learn by doing. For more permanent decisions, take your time, gather input, and consider multiple scenarios.
              </p>
            </div>
            
            <div className="bg-secondary/30 rounded-xl p-8 border border-border/20">
              <h2 className="text-2xl font-serif mb-4">On Growth</h2>
              <p className="text-lg font-mono mb-6">
                "Seek discomfort. That's where growth happens."
              </p>
              <p className="text-muted-foreground font-mono">
                The most meaningful personal and professional growth often happens at the edge of your comfort zone. Regularly push those boundaries, even when it's uncomfortable. Your future self will thank you.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Advices;
