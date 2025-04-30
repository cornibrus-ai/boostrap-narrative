
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { toast } from 'sonner';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast.success("Message sent successfully! I'll get back to you soon.");
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      });
      setIsSubmitting(false);
    }, 1500);
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
            className="text-center text-muted-foreground max-w-xl mx-auto"
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
      
      {/* Contact Form */}
      <section className="py-16">
        <div className="content-wrapper">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <div>
              <h2 className="font-serif text-2xl md:text-3xl mb-6">Get In Touch</h2>
              <p className="text-muted-foreground mb-8">
                I'm always interested in hearing about new projects, opportunities, or just 
                connecting with like-minded individuals. Feel free to reach out using the form 
                or through any of my social channels.
              </p>
              
              <div className="space-y-6">
                <div>
                  <h3 className="font-serif text-lg mb-2">Email</h3>
                  <a href="mailto:hello@example.com" className="text-muted-foreground hover:text-foreground transition-colors">
                    hello@example.com
                  </a>
                </div>
                
                <div>
                  <h3 className="font-serif text-lg mb-2">Social</h3>
                  <div className="flex space-x-4">
                    <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
                      GitHub
                    </a>
                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
                      LinkedIn
                    </a>
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
                      Twitter
                    </a>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block mb-2">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full bg-secondary border border-border px-4 py-2 focus:outline-none focus:border-foreground"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block mb-2">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full bg-secondary border border-border px-4 py-2 focus:outline-none focus:border-foreground"
                  />
                </div>
                
                <div>
                  <label htmlFor="subject" className="block mb-2">Subject</label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full bg-secondary border border-border px-4 py-2 focus:outline-none focus:border-foreground"
                  >
                    <option value="">Select a subject</option>
                    <option value="Project Inquiry">Project Inquiry</option>
                    <option value="Collaboration">Collaboration</option>
                    <option value="Speaking Request">Speaking Request</option>
                    <option value="Just Saying Hello">Just Saying Hello</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="message" className="block mb-2">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full bg-secondary border border-border px-4 py-2 focus:outline-none focus:border-foreground"
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full px-6 py-3 bg-foreground text-background hover:bg-foreground/80 transition-colors duration-300 disabled:opacity-50"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
