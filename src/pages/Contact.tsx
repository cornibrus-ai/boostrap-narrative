
import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Linkedin, Youtube, ExternalLink } from 'lucide-react';
// Removed toast and CheckCircle as the form is gone
// import { toast } from 'sonner';
// import { CheckCircle } from 'lucide-react';

const Contact = () => {
  const calendlyUrl = "https://calendly.com/stratadeus/audit";
  // Removed form states: email, isSending, sent
  
  // Removed handleSubmit

  return (
    <div>
      {/* Hero Section */}
      <section className="min-h-[40vh] flex items-center justify-center relative">
        <div className="content-wrapper">
          <motion.h1 
            className="font-display-alt text-3xl md:text-5xl lg:text-6xl mb-3 text-center"
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
            className="w-16 h-1 bg-foreground mx-auto my-6"
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          ></motion.div>
        </div>
      </section>
      
      {/* Contact Section - Replaced form with Calendly link */}
      <section className="py-12">
        <div className="content-wrapper">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="font-display-alt text-2xl md:text-3xl mb-4">Book a Consultation</h2>
            <p className="text-muted-foreground mb-8 font-mono">
              Ready to discuss your project or explore ideas? Schedule a time directly on my Calendly.
            </p>
            
            <Button 
              asChild 
              className="bg-foreground text-background hover:bg-pink-300 hover:text-background px-8 py-4 rounded-xl font-mono text-base" // Larger button
            >
              <a href={calendlyUrl} target="_blank" rel="noopener noreferrer">
                Schedule Now <ExternalLink className="ml-2 h-5 w-5" />
              </a>
            </Button>
          </div>
          
          {/* Connection options - Kept as is */}
          <div className="max-w-2xl mx-auto mt-16"> {/* Added margin top */}
            <h2 className="font-display-alt text-2xl md:text-3xl mb-6 text-center">Other Ways to Connect</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <a 
                href="https://youtube.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex flex-col items-center p-6 bg-secondary/50 rounded-xl border border-border/30 hover:border-border transition-all"
              >
                <Youtube size={32} className="text-pink-400 mb-4" />
                <h3 className="font-display-alt text-lg mb-2">YouTube</h3>
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
                <h3 className="font-display-alt text-lg mb-2">LinkedIn</h3>
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
