
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';

const AngelInvestmentDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  
  // This would ideally come from a CMS or API
  const investmentData = {
    startupx: {
      title: "Startup X",
      description: "Building the next generation of AI tools for content creators and marketers.",
      investment: "Seed Round, $250K",
      period: "2022",
      founders: "Jane Doe, John Smith",
      status: "Active",
      image: "/placeholder.svg",
      details: [
        "AI-powered content generation platform focused on ethical AI practices.",
        "Grew from 0 to 10,000 active users in first 6 months post-investment.",
        "Raised a $3M Series A round in 2023 led by top-tier VCs.",
        "Currently expanding into enterprise solutions."
      ],
      website: "https://startupx.example.com"
    },
    datasense: {
      title: "DataSense",
      description: "Making big data accessible and actionable for small businesses through intuitive visualization tools.",
      investment: "Pre-seed, $100K",
      period: "2021",
      founders: "Alex Chen, Maria Rodriguez",
      status: "Active",
      image: "/placeholder.svg",
      details: [
        "No-code data visualization platform for small businesses.",
        "Integrated with popular small business software platforms.",
        "Grew to $500K ARR within first year of operation.",
        "Currently expanding team and feature set."
      ],
      website: "https://datasense.example.com"
    },
    ecotech: {
      title: "EcoTech",
      description: "Sustainable technology solutions for reducing carbon footprint in urban environments.",
      investment: "Seed Extension, $150K",
      period: "2023",
      founders: "Sam Green, Taylor Kim",
      status: "Active",
      image: "/placeholder.svg",
      details: [
        "IoT solutions for smart buildings to reduce energy consumption.",
        "Deployed in 50+ commercial buildings across North America.",
        "Awarded several clean tech innovation grants.",
        "Currently expanding into residential solutions."
      ],
      website: "https://ecotech.example.com"
    }
  };
  
  const investment = investmentData[slug as keyof typeof investmentData] || investmentData.startupx;

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
              {investment.title}
            </motion.h1>
            
            <div className="prose prose-invert max-w-none">
              <motion.p 
                className="text-xl text-muted-foreground mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                {investment.description}
              </motion.p>
              
              <motion.div
                className="space-y-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <div>
                  <h2 className="text-2xl mb-4">Investment Details</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                    <div className="bg-secondary/50 p-4 rounded-xl">
                      <span className="text-muted-foreground">Investment:</span>
                      <p className="text-lg">{investment.investment}</p>
                    </div>
                    <div className="bg-secondary/50 p-4 rounded-xl">
                      <span className="text-muted-foreground">Year:</span>
                      <p className="text-lg">{investment.period}</p>
                    </div>
                    <div className="bg-secondary/50 p-4 rounded-xl">
                      <span className="text-muted-foreground">Founders:</span>
                      <p className="text-lg">{investment.founders}</p>
                    </div>
                    <div className="bg-secondary/50 p-4 rounded-xl">
                      <span className="text-muted-foreground">Status:</span>
                      <p className="text-lg">{investment.status}</p>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h2 className="text-2xl mb-4">Highlights</h2>
                  <ul className="space-y-2">
                    {investment.details.map((detail, index) => (
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
                    href={investment.website} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-pink-400 hover:text-pink-300 underline"
                  >
                    {investment.website}
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
                  src={investment.image} 
                  alt={investment.title}
                  className="w-full object-cover" 
                />
              </div>
              
              <div className="bg-secondary/50 p-6 rounded-xl border border-border/30">
                <h3 className="text-xl mb-4">Are you fundraising?</h3>
                <p className="text-muted-foreground mb-6">
                  If you're working on something interesting and looking for an angel investor, I'd love to hear about your project.
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

export default AngelInvestmentDetail;
