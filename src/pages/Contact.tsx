
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { toast } from 'sonner';
import { Linkedin, Youtube, CheckCircle } from 'lucide-react'; // Added CheckCircle
import { Link } from 'react-router-dom';

const Contact = () => {
  const [email, setEmail] = useState('');
  const [isSending, setIsSending] = useState(false);
  const [sent, setSent] = useState(false);
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email) {
      toast.error("Please enter your email address.");
      return;
    }
    setIsSending(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    setIsSending(false);
    setSent(true);
    toast.success("Cool, you're one of our new contributors! You'll soon receive an email to celebrate your welcome :)", {
      duration: 5000,
    });
    setEmail('');
    setTimeout(() => setSent(false), 3000); // Reset button state
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="min-h-[40vh] flex items-center justify-center relative">
        <div className="content-wrapper">
          <motion.h1 
            className="font-display-alt text-3xl md:text-5xl lg:text-6xl mb-3 text-center" // Updated font
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Contact
          </motion.h1>
          
          <motion.p
            className="text-center text-muted-foreground max-w-xl mx-auto font-mono" // Font-mono kept
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Let's start a conversation about how we might work together.
          </motion.p>
          
          <motion.div 
            className="w-16 h-1 bg-foreground mx-auto my-6"
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          ></motion.div>
        </div>
      </section>
      
      {/* Contact Form Section */}
      <section className="py-12">
        <div className="content-wrapper">
          <div className="max-w-2xl mx-auto">
            <h2 className="font-display-alt text-2xl md:text-3xl mb-4 text-center">Get In Touch</h2> {/* Updated font */}
            <p className="text-muted-foreground mb-6 text-center font-mono"> {/* Font-mono kept */}
              I'm always interested in hearing about new projects, opportunities, or just 
              connecting with like-minded individuals. Drop your email below and I'll get back to you.
            </p>
            
            <form onSubmit={handleSubmit} className="max-w-md mx-auto mb-12">
              <div className="flex items-center gap-2">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="w-full bg-secondary border border-border px-4 py-3 rounded-xl font-mono text-sm focus:outline-none focus:border-foreground" // Font-mono kept
                  disabled={isSending || sent}
                />
                <button
                  type="submit"
                  className={`px-6 py-3 transition-colors duration-300 rounded-xl font-mono whitespace-nowrap ${ // Font-mono kept
                    sent 
                    ? 'bg-green-500 text-white cursor-default' 
                    : 'bg-foreground text-background hover:bg-foreground/90'
                  }`}
                  disabled={isSending || sent}
                >
                  {isSending ? 'Sending...' : sent ? <CheckCircle className="h-5 w-5 inline" /> : 'Send'}
                </button>
              </div>
            </form>
          </div>
          
          {/* Connection options */}
          <div className="max-w-2xl mx-auto">
            <h2 className="font-display-alt text-2xl md:text-3xl mb-6 text-center">Other Ways to Connect</h2> {/* Updated font */}
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <a 
                href="https://youtube.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex flex-col items-center p-6 bg-secondary/50 rounded-xl border border-border/30 hover:border-border transition-all"
              >
                <Youtube size={32} className="text-pink-400 mb-4" />
                <h3 className="font-display-alt text-lg mb-2">YouTube</h3> {/* Updated font */}
                <p className="text-muted-foreground text-sm font-mono text-center"> {/* Font-mono kept */}
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
                <h3 className="font-display-alt text-lg mb-2">LinkedIn</h3> {/* Updated font */}
                <p className="text-muted-foreground text-sm font-mono text-center"> {/* Font-mono kept */}
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
