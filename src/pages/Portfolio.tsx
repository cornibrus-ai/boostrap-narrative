
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState<string>('all');
  
  const filters = ['all', 'Co-Founding', 'Angel Investments'];
  
  const coFoundingProjects = [
    {
      id: 1,
      title: "Bloopa, Inc.",
      description: "Welcome to 'The Bloops'—adorable characters who become wild with anger and cute with wholesome traits. We're building an engaging IP through short, humorous social media clips that educate and inspire reflection.",
      image: "/lovable-uploads/cfc0945a-5ed5-4768-8626-be59a140b16f.png",
      link: "/portfolio/cofounding/bloopa",
    },
    {
      id: 2,
      title: "TechFamily",
      description: "Our portfolio raised 1.5bn in follow-up funding. I did over a thousand deals. Helped startups across the globe go from an idea to something real. It was beautiful. And chaotic.",
      image: "/placeholder.svg",
      link: "/portfolio/cofounding/techfamily",
    }
  ];

  const angelInvestments = [
    {
      id: 1,
      title: "Startup X",
      description: "Building the next generation of AI tools for content creators and marketers.",
      image: "/placeholder.svg",
      link: "/portfolio/investments/startupx",
    },
    {
      id: 2,
      title: "DataSense",
      description: "Making big data accessible and actionable for small businesses through intuitive visualization tools.",
      image: "/placeholder.svg",
      link: "/portfolio/investments/datasense",
    },
    {
      id: 3,
      title: "EcoTech",
      description: "Sustainable technology solutions for reducing carbon footprint in urban environments.",
      image: "/placeholder.svg",
      link: "/portfolio/investments/ecotech",
    }
  ];
  
  const filteredProjects = activeFilter === 'all' 
    ? [...coFoundingProjects, ...angelInvestments]
    : activeFilter === 'Co-Founding' 
      ? coFoundingProjects 
      : angelInvestments;

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
            Portfolio
          </motion.h1>
          
          <motion.p
            className="text-center text-muted-foreground max-w-xl mx-auto font-mono"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Selected ventures and investments that showcase my approach to building and supporting impactful projects.
          </motion.p>
          
          <motion.div 
            className="w-16 h-1 bg-foreground mx-auto my-10"
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          ></motion.div>
        </div>
      </section>
      
      {/* Portfolio Filters */}
      <section className="py-8">
        <div className="content-wrapper">
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {filters.map((filter) => (
              <button
                key={filter}
                className={`px-4 py-2 capitalize transition-colors duration-300 rounded-xl font-mono ${
                  activeFilter === filter 
                    ? 'bg-foreground text-background' 
                    : 'bg-secondary text-foreground hover:bg-foreground/20'
                }`}
                onClick={() => setActiveFilter(filter)}
              >
                {filter === 'all' ? 'All Projects' : filter}
              </button>
            ))}
          </div>
        </div>
      </section>
      
      {/* Project Grid - With rectangular frames instead of direct images */}
      <section className="pb-20">
        <div className="content-wrapper">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredProjects.map((project) => (
              <motion.article 
                key={project.id}
                className="group"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <div className="overflow-hidden mb-4 rounded-[15px] border border-white/20 relative aspect-video bg-secondary/30">
                  <motion.div 
                    className="absolute inset-0"
                    animate={{ 
                      y: [0, -15, 0],
                      opacity: [0.7, 1, 0.7]
                    }}
                    transition={{ 
                      duration: 8, 
                      repeat: Infinity, 
                      repeatType: "reverse" 
                    }}
                  >
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover" 
                    />
                  </motion.div>
                </div>
                <span className="text-sm text-muted-foreground font-mono">
                  {coFoundingProjects.some(p => p.id === project.id) ? "Co-Founding" : "Angel Investment"}
                </span>
                <h2 className="font-serif text-xl md:text-2xl mt-2 mb-3">{project.title}</h2>
                <p className="text-muted-foreground mb-4 font-mono">{project.description}</p>
                <Link 
                  to={project.link} 
                  className="text-pink-400 hover:text-pink-300 flex items-center gap-1 font-mono mt-2 inline-flex"
                >
                  Learn more <ArrowRight size={16} />
                </Link>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="py-16 bg-secondary/30 rounded-xl mx-8">
        <div className="content-wrapper text-center">
          <h2 className="font-serif text-2xl md:text-3xl mb-6">Let's Build Something Together</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8 font-mono">
            Whether you're looking for a co-founder, an investment, or just some advice, I'd love to hear from you.
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

export default Portfolio;
