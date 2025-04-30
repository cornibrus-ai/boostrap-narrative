
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const OffTheRecord = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  
  // All categories for filtering
  const categories = ['all', 'Grow Your Business', 'That\'s not investing', 'Advices', 'Visit my head'];
  
  // Articles data
  const reflections = [
    {
      id: 1,
      title: "The Space Between Thinking and Making",
      excerpt: "Exploring the critical gap between ideation and execution, and how to navigate it effectively.",
      date: "April 15, 2025",
      category: "Grow Your Business",
      slug: "thinking-making-gap",
    },
    {
      id: 2,
      title: "Designing for Meaningful Engagement",
      excerpt: "How can we create digital experiences that foster genuine connection instead of mindless consumption?",
      date: "March 22, 2025",
      category: "That's not investing",
      slug: "meaningful-engagement",
    },
    {
      id: 3,
      title: "The Evolution of Creative Tools",
      excerpt: "Reflecting on how the tools we use shape our thinking and the work we produce.",
      date: "February 10, 2025",
      category: "Visit my head",
      slug: "creative-tools-evolution",
    },
    {
      id: 4,
      title: "Finding Clarity Through Constraints",
      excerpt: "Why limitations might be the key to more focused and impactful creative work.",
      date: "January 5, 2025",
      category: "Advices",
      slug: "clarity-through-constraints",
    },
    {
      id: 5,
      title: "The Stablecoin Divide",
      excerpt: "Why the US is unlocking crypto while Europe shuts it down.",
      date: "April 6, 2025",
      category: "That's not investing",
      slug: "stablecoin-divide",
    },
    {
      id: 6,
      title: "Blockchain & IP",
      excerpt: "How blockchain technology is transforming intellectual property management.",
      date: "April 3, 2025",
      category: "That's not investing",
      slug: "blockchain-ip",
    },
    {
      id: 7,
      title: "Price it bitch!",
      excerpt: "The art and science of effective pricing strategies for startups.",
      date: "January 15, 2025",
      category: "Grow Your Business",
      slug: "price-it",
    }
  ];

  // Filter articles based on selected category
  const filteredArticles = activeCategory === 'all' 
    ? reflections 
    : reflections.filter(article => article.category === activeCategory);

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
            Off The Record
          </motion.h1>
          
          <motion.p
            className="text-center text-muted-foreground max-w-xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Thoughts, ideas, and explorations on creativity, technology, and the human experience.
          </motion.p>
          
          <motion.div 
            className="w-16 h-1 bg-foreground mx-auto my-10"
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          ></motion.div>
        </div>
      </section>
      
      {/* Category Filters */}
      <section className="py-8">
        <div className="content-wrapper">
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                className={`px-4 py-2 capitalize transition-colors duration-300 rounded-xl font-mono ${
                  activeCategory === category 
                    ? 'bg-foreground text-background' 
                    : 'bg-secondary text-foreground hover:bg-foreground/20'
                }`}
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>
      
      {/* Articles Listing */}
      <section className="py-16">
        <div className="content-wrapper">
          <div className="max-w-4xl mx-auto">
            <div className="space-y-4">
              {filteredArticles.map((post) => (
                <div key={post.id} className="flex justify-between items-center border-b border-border/30 pb-3 group">
                  <Link to={`/reflections/${post.slug}`} className="text-foreground hover:text-pink-300 font-mono flex-grow">
                    {post.title}
                  </Link>
                  <div className="flex items-center gap-4">
                    <span className="text-xs px-3 py-1 bg-secondary/50 rounded-full text-muted-foreground">
                      {post.category}
                    </span>
                    <span className="text-muted-foreground text-sm font-mono">{post.date}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* Newsletter Section - REUSING CONTACT FORM */}
      <section className="py-16 bg-secondary">
        <div className="content-wrapper">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="font-serif text-2xl md:text-3xl mb-4">Join the Conversation</h2>
            <p className="text-muted-foreground mb-8">
              Subscribe to receive new reflections directly in your inbox.
            </p>
            
            <form className="flex flex-col md:flex-row gap-4 justify-center max-w-md mx-auto">
              <input 
                type="email"
                placeholder="Enter your email"
                className="w-full bg-secondary border border-border px-4 py-3 rounded-xl font-mono text-sm focus:outline-none focus:border-foreground"
              />
              <button 
                type="submit" 
                className="px-6 py-3 rounded-xl bg-foreground text-background hover:bg-foreground/90 transition-colors duration-300 font-mono whitespace-nowrap"
              >
                Send
              </button>
            </form>
            <p className="text-xs text-muted-foreground mt-4">
              I respect your privacy. Unsubscribe at any time.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OffTheRecord;
