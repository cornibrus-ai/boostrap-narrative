
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { toast } from 'sonner';
import { Phone, Youtube, Linkedin } from 'lucide-react';
import { Link } from 'react-router-dom';

const Contact = () => {
  const [email, setEmail] = useState('');
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email) {
      toast.error("Please enter your email address.");
      return;
    }
    
    toast.success("Message sent successfully! I'll get back to you soon.");
    setEmail('');
  };

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
            Contact
          </motion.h1>
          
          <motion.p
            className="text-center text-muted-foreground max-w-xl mx-auto font-mono"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Let's start a conversation about how we might work together.
          </motion.p>
          
          <motion.div 
            className="w-16 h-1 bg-foreground mx-auto my-10"
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          ></motion.div>
        </div>
      </section>
      
      {/* Contact Form Section - Replaced with simplified email form */}
      <section className="py-16">
        <div className="content-wrapper">
          <div className="max-w-2xl mx-auto">
            <h2 className="font-serif text-2xl md:text-3xl mb-6 text-center">Get In Touch</h2>
            <p className="text-muted-foreground mb-8 text-center font-mono">
              I'm always interested in hearing about new projects, opportunities, or just 
              connecting with like-minded individuals. Drop your email below and I'll get back to you.
            </p>
            
            <form onSubmit={handleSubmit} className="max-w-md mx-auto mb-16">
              <div className="flex items-center gap-2">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="w-full bg-secondary border border-border px-4 py-3 rounded-xl font-mono text-sm focus:outline-none focus:border-foreground"
                />
                <button
                  type="submit"
                  className="px-6 py-3 bg-foreground text-background hover:bg-foreground/90 transition-colors duration-300 rounded-xl font-mono whitespace-nowrap"
                >
                  Send
                </button>
              </div>
            </form>
          </div>
          
          {/* Connection options */}
          <div className="max-w-2xl mx-auto">
            <h2 className="font-serif text-2xl md:text-3xl mb-8 text-center">Other Ways to Connect</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <a 
                href="tel:+1234567890" 
                className="flex flex-col items-center p-6 bg-secondary/50 rounded-xl border border-border/30 hover:border-border transition-all"
              >
                <Phone size={32} className="text-pink-400 mb-4" />
                <h3 className="font-serif text-lg mb-2">Call Me!</h3>
                <p className="text-muted-foreground text-sm font-mono text-center">
                  Let's have a direct conversation
                </p>
              </a>
              
              <a 
                href="https://youtube.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex flex-col items-center p-6 bg-secondary/50 rounded-xl border border-border/30 hover:border-border transition-all"
              >
                <Youtube size={32} className="text-pink-400 mb-4" />
                <h3 className="font-serif text-lg mb-2">YouTube</h3>
                <p className="text-muted-foreground text-sm font-mono text-center">
                  Watch my latest videos
                </p>
              </a>
              
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex flex-col items-center p-6 bg-secondary/50 rounded-xl border border-border/30 hover:border-border transition-all"
              >
                <Linkedin size={32} className="text-pink-400 mb-4" />
                <h3 className="font-serif text-lg mb-2">LinkedIn</h3>
                <p className="text-muted-foreground text-sm font-mono text-center">
                  Connect professionally
                </p>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
