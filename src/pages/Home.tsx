import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowDown, ArrowRight } from 'lucide-react';
import { toast } from 'sonner';

const Home = () => {
  const [email, setEmail] = useState('');
  
  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      toast.success('Thank you for subscribing!');
      setEmail('');
    } else {
      toast.error('Please enter your email address.');
    }
  };

  return (
    <div className="relative">
      {/* Hero Section with vertical frame instead of image */}
      <section className="min-h-[85vh] flex items-center justify-center relative">
        <div className="content-wrapper grid grid-cols-1 md:grid-cols-5 gap-8 items-center">
          <motion.div 
            className="order-1 md:col-span-2 flex justify-center"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="w-full aspect-[2/3] rounded-[15px] border border-white/20 overflow-hidden relative bg-secondary/30 backdrop-blur-sm">
              <motion.div 
                className="absolute inset-0"
                animate={{ 
                  y: [0, -20, 0],
                  opacity: [0.7, 1, 0.7]
                }}
                transition={{ 
                  duration: 10, 
                  repeat: Infinity, 
                  repeatType: "reverse" 
                }}
              >
                <img 
                  src="/lovable-uploads/9a361404-83db-4f15-ae3e-90201c14d331.png" 
                  alt="Vertical illustration" 
                  className="w-full h-full object-cover"
                />
              </motion.div>
            </div>
          </motion.div>

          <div className="order-2 md:col-span-3">
            <motion.h1 
              className="font-serif text-4xl md:text-6xl lg:text-7xl mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Often Wrong, Never Doubt
            </motion.h1>
            
            <motion.p 
              className="text-xl md:text-2xl text-muted-foreground max-w-2xl mb-10 font-mono"
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
              className="max-w-md"
            >
              <form onSubmit={handleSubscribe} className="flex items-center gap-2">
                <input 
                  type="email" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email" 
                  className="bg-secondary border border-border px-4 py-3 rounded-xl flex-grow font-mono text-sm"
                />
                <button 
                  type="submit"
                  className="px-6 py-3 rounded-xl bg-foreground text-background hover:bg-foreground/90 transition-colors"
                >
                  Subscribe
                </button>
              </form>
              <p className="text-muted-foreground text-sm mt-2 font-mono">
                Stay updated with my latest thoughts and projects.
              </p>
            </motion.div>
          </div>
        </div>
        
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 cursor-pointer animate-pulse-slow">
          <ArrowDown size={24} />
        </div>
      </section>
      
      {/* Off the Record Section Preview */}
      <section className="py-16">
        <div className="content-wrapper">
          <div className="flex items-center justify-between mb-6">
            <h2 className="section-title font-mono text-2xl">Off the Record</h2>
            <Link to="/reflections" className="text-pink-400 hover:text-pink-300 flex items-center gap-1 font-mono text-sm">
              View all <ArrowRight size={16} />
            </Link>
          </div>
          
          <div className="space-y-4">
            {[
              { title: 'The Stablecoin Divide: Why the US is Unlocking Crypto While Europe Shuts It Down', date: '06 Apr' },
              { title: 'Blockchain & IP', date: '03 Apr' },
              { title: 'Price it bitch!', date: '15 Jan' }
            ].map((post, index) => (
              <div key={index} className="flex justify-between items-center border-b border-border/30 pb-3 group">
                <Link to={`/reflections/${index}`} className="text-foreground hover:text-pink-300 font-mono">
                  {post.title}
                </Link>
                <span className="text-muted-foreground text-sm font-mono">{post.date}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Co-Founding Section Preview */}
      <section className="py-16">
        <div className="content-wrapper">
          <div className="flex items-center justify-between mb-6">
            <h2 className="section-title font-mono text-2xl">Co-Founding</h2>
            <Link to="/portfolio/cofounding" className="text-pink-400 hover:text-pink-300 flex items-center gap-1 font-mono text-sm">
              View all <ArrowRight size={16} />
            </Link>
          </div>
          
          <div className="rounded-xl overflow-hidden border border-border/40">
            <div className="p-6 space-y-4">
              <h3 className="font-mono text-xl">Bloopa, Inc. ✨</h3>
              <p className="text-muted-foreground font-mono text-sm">
                Welcome to 'The Bloops'—adorable characters who become wild with anger and cute with wholesome traits. We're building an engaging IP through short, humorous social media clips that educate and inspire reflection.
              </p>
              <Link to="/portfolio/cofounding/bloopa" className="text-pink-400 hover:text-pink-300 inline-block font-mono text-sm">Learn more</Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* Angel Investment Section Preview */}
      <section className="py-16">
        <div className="content-wrapper">
          <div className="flex items-center justify-between mb-6">
            <h2 className="section-title font-mono text-2xl">Angel Investments</h2>
            <Link to="/portfolio/investments" className="text-pink-400 hover:text-pink-300 flex items-center gap-1 font-mono text-sm">
              View all <ArrowRight size={16} />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[1, 2, 3].map((item) => (
              <div key={item} className="bg-secondary/50 rounded-xl p-6 border border-border/30 hover:border-border/60 transition-colors">
                <div className="w-10 h-10 bg-foreground/10 rounded-lg mb-4"></div>
                <h3 className="font-mono text-lg mb-2">Investment {item}</h3>
                <p className="text-muted-foreground text-sm font-mono">A brief description of this investment and what makes it special.</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Manifesto Section */}
      <section className="py-16">
        <div className="content-wrapper">
          <h2 className="font-serif text-3xl md:text-4xl mb-6 text-center">Manifesto of a Serial Loser</h2>
          <div className="max-w-3xl mx-auto">
            <p className="text-muted-foreground mb-6 font-mono leading-relaxed">
              I've failed more times than I've succeeded. I've built products nobody wanted, 
              invested in ideas that didn't work, and spent years on projects that went nowhere. 
              But each failure taught me something valuable that the successes couldn't.
            </p>
            <p className="text-muted-foreground mb-6 font-mono leading-relaxed">
              This isn't about glorifying failure—it's about recognizing that the path to 
              creating something meaningful is rarely a straight line. It's messy, uncertain, 
              and full of setbacks.
            </p>
            <div className="flex justify-center mt-8">
              <Link 
                to="/manifesto" 
                className="text-pink-400 hover:text-pink-300 flex items-center gap-1 font-mono"
              >
                Read the full manifesto <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* Call Me Section */}
      <section className="py-16 bg-gradient-to-b from-background to-secondary/50">
        <div className="content-wrapper text-center">
          <h2 className="font-serif text-3xl md:text-4xl mb-6">Call Me!</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8 font-mono">
            If you're working on something interesting or just want to connect, I'd love to hear from you.
          </p>
          <Link 
            to="/contact" 
            className="px-6 py-3 rounded-xl bg-foreground text-background hover:bg-foreground/90 transition-colors inline-block font-mono"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
