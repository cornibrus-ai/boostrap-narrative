
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';

const CoFoundingDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  
  // This would ideally come from a CMS or API
  const projectData = {
    bloopa: {
      title: "Bloopa, Inc.",
      description: "Welcome to "The Bloops"—adorable characters who become wild with anger and cute with wholesome traits. We're building an engaging IP through short, humorous social media clips that educate and inspire reflection.",
      role: "Co-Founder & Creative Director",
      period: "2023 - Present",
      image: "/lovable-uploads/cfc0945a-5ed5-4768-8626-be59a140b16f.png",
      details: [
        "Built the foundational concept and character design for the Bloops universe.",
        "Led a team of 5 designers and developers to create the initial prototype.",
        "Secured $1.2M in seed funding from top-tier investors.",
        "Grew social media following to 500K+ across platforms in under 6 months."
      ],
      website: "https://bloopa.example.com"
    },
    techfamily: {
      title: "TechFamily",
      description: "Our portfolio raised 1.5bn in follow-up funding. I did over a thousand deals. Helped startups across the globe go from an idea to something real. It was beautiful. And chaotic.",
      role: "Co-Founder & Investment Lead",
      period: "2015 - 2022",
      image: "/placeholder.svg",
      details: [
        "Co-founded one of Europe's most active early-stage investment firms.",
        "Personally led investments in over 200 startups across 15 countries.",
        "Built a team of 30 investment professionals and operators.",
        "Exited in 2022 through acquisition by a major financial institution."
      ],
      website: "https://techfamily.example.com"
    }
  };
  
  const project = slug === 'bloopa' ? projectData.bloopa : projectData.techfamily;

  return (
    <div className="py-16">
      <div className="content-wrapper">
        <Link to="/portfolio" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8">
          <ArrowLeft size={16} />
          <span>Back to Portfolio</span>
        </Link>
        
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          <div className="lg:col-span-3">
            <motion.h1 
              className="text-3xl md:text-4xl lg:text-5xl mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              {project.title}
            </motion.h1>
            
            <div className="prose prose-invert max-w-none">
              <motion.p 
                className="text-xl text-muted-foreground mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                {project.description}
              </motion.p>
              
              <motion.div
                className="space-y-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <div>
                  <h2 className="text-2xl mb-4">My Role</h2>
                  <div className="flex items-center gap-4 mb-2">
                    <div className="bg-secondary/50 px-4 py-2 rounded-xl">
                      <span>{project.role}</span>
                    </div>
                    <div className="bg-secondary/50 px-4 py-2 rounded-xl">
                      <span>{project.period}</span>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h2 className="text-2xl mb-4">Highlights</h2>
                  <ul className="space-y-2">
                    {project.details.map((detail, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <span className="text-pink-400 mt-1">•</span>
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h2 className="text-2xl mb-4">Visit</h2>
                  <a 
                    href={project.website} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-pink-400 hover:text-pink-300 underline"
                  >
                    {project.website}
                  </a>
                </div>
              </motion.div>
            </div>
          </div>
          
          <div className="lg:col-span-2">
            <motion.div 
              className="sticky top-32"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <div className="overflow-hidden rounded-xl mb-6">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full object-cover" 
                />
              </div>
              
              <div className="bg-secondary/50 p-6 rounded-xl border border-border/30">
                <h3 className="text-xl mb-4">Interested in collaborating?</h3>
                <p className="text-muted-foreground mb-6">
                  If you're interested in learning more about this project or discussing potential collaborations, I'd love to hear from you.
                </p>
                <Link 
                  to="/contact" 
                  className="btn-primary inline-block"
                >
                  Get in Touch
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoFoundingDetail;
