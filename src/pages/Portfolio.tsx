
import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState<string>('all');
  
  const projects = [
    {
      id: 1,
      title: "Spatial Data Explorer",
      description: "An interactive platform for visualizing and exploring complex geospatial datasets through an intuitive interface.",
      category: "Web Application",
      technologies: ["React", "Three.js", "D3.js", "Node.js"],
      image: "/placeholder.svg",
      link: "#",
    },
    {
      id: 2,
      title: "Mindful Productivity",
      description: "A minimalist task management system designed to help users focus on what matters most without digital distractions.",
      category: "Mobile App",
      technologies: ["React Native", "TypeScript", "Firebase"],
      image: "/placeholder.svg",
      link: "#",
    },
    {
      id: 3,
      title: "Narrative Threads",
      description: "A collaborative storytelling platform that weaves together contributions from multiple authors into cohesive narratives.",
      category: "Web Application",
      technologies: ["Next.js", "GraphQL", "MongoDB"],
      image: "/placeholder.svg",
      link: "#",
    },
    {
      id: 4,
      title: "Ambient Data",
      description: "An experimental system that transforms data streams into subtle ambient visualizations for passive awareness.",
      category: "Installation",
      technologies: ["Processing", "Arduino", "Custom Hardware"],
      image: "/placeholder.svg",
      link: "#",
    },
  ];
  
  const filters = ['all', 'Web Application', 'Mobile App', 'Installation'];
  
  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

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
            className="text-center text-muted-foreground max-w-xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Selected projects that showcase my approach to problem-solving and creation.
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
                className={`px-4 py-2 capitalize transition-colors duration-300 ${
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
      
      {/* Project Grid */}
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
                <div className="overflow-hidden mb-4">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full aspect-video object-cover transform transition-transform duration-500 group-hover:scale-105" 
                  />
                </div>
                <span className="text-sm text-muted-foreground">{project.category}</span>
                <h2 className="font-serif text-xl md:text-2xl mt-2 mb-3">{project.title}</h2>
                <p className="text-muted-foreground mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span 
                      key={tech} 
                      className="text-xs px-2 py-1 bg-secondary text-muted-foreground rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <a 
                  href={project.link} 
                  className="animated-link"
                  target="_blank"
                  rel="noreferrer"
                >
                  View Project
                </a>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
