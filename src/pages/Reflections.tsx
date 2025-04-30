
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Reflections = () => {
  const reflections = [
    {
      id: 1,
      title: "The Space Between Thinking and Making",
      excerpt: "Exploring the critical gap between ideation and execution, and how to navigate it effectively.",
      date: "April 15, 2025",
      category: "Process",
      slug: "thinking-making-gap",
    },
    {
      id: 2,
      title: "Designing for Meaningful Engagement",
      excerpt: "How can we create digital experiences that foster genuine connection instead of mindless consumption?",
      date: "March 22, 2025",
      category: "Design Philosophy",
      slug: "meaningful-engagement",
    },
    {
      id: 3,
      title: "The Evolution of Creative Tools",
      excerpt: "Reflecting on how the tools we use shape our thinking and the work we produce.",
      date: "February 10, 2025",
      category: "Technology",
      slug: "creative-tools-evolution",
    },
    {
      id: 4,
      title: "Finding Clarity Through Constraints",
      excerpt: "Why limitations might be the key to more focused and impactful creative work.",
      date: "January 5, 2025",
      category: "Creativity",
      slug: "clarity-through-constraints",
    },
  ];

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
            Reflections
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
      
      {/* Articles Grid */}
      <section className="py-16">
        <div className="content-wrapper">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {reflections.map((post) => (
                <article 
                  key={post.id} 
                  className="border border-border/50 p-6 rounded-md hover:border-foreground/50 transition-all duration-300"
                >
                  <span className="text-sm text-muted-foreground">{post.category}</span>
                  <h2 className="font-serif text-xl md:text-2xl mt-2 mb-4">
                    <Link to={`/reflections/${post.slug}`} className="animated-link">
                      {post.title}
                    </Link>
                  </h2>
                  <p className="text-muted-foreground mb-6">
                    {post.excerpt}
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">{post.date}</span>
                    <Link 
                      to={`/reflections/${post.slug}`} 
                      className="text-sm animated-link"
                    >
                      Read More
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* Newsletter Section */}
      <section className="py-16 bg-secondary">
        <div className="content-wrapper">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="font-serif text-2xl md:text-3xl mb-4">Join the Conversation</h2>
            <p className="text-muted-foreground mb-8">
              Subscribe to receive new reflections directly in your inbox.
            </p>
            
            <form className="flex flex-col md:flex-row gap-4 justify-center">
              <input 
                type="email"
                placeholder="Your email address"
                className="bg-background border border-border px-4 py-2 focus:outline-none focus:border-foreground"
                required
              />
              <button 
                type="submit" 
                className="px-6 py-2 bg-foreground text-background hover:bg-foreground/80 transition-colors duration-300"
              >
                Subscribe
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

export default Reflections;
