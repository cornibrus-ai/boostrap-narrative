
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowDown, ArrowRight, ArrowLeft } from 'lucide-react';
import { toast } from 'sonner';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { ScrollArea } from '@/components/ui/scroll-area';

const Home = () => {
  const [email, setEmail] = useState('');
  
  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      toast.success('Thank you for subscribing!');
      setEmail('');
    } else {
      toast.error('Please enter your email address.');
    }
  };

  // Best articles for carousel
  const bestArticles = [
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
    {
      id: 5,
      title: "The Stablecoin Divide",
      excerpt: "Why the US is unlocking crypto while Europe shuts it down.",
      date: "April 6, 2025",
      category: "Cryptocurrency",
      slug: "stablecoin-divide",
    }
  ];
  
  // Angel investments data from portfolio
  const angelInvestments = [
    {
      id: 1,
      title: "Startup TEST GITHUB",
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
  
  // Co-founding projects
  const coFoundingProjects = [
    {
      id: 1,
      title: "Bloopa, Inc.",
      description: "Welcome to 'The Bloops'—adorable characters who become wild with anger and cute with wholesome traits.",
      image: "/lovable-uploads/cfc0945a-5ed5-4768-8626-be59a140b16f.png",
      link: "/portfolio/cofounding/bloopa",
    },
    {
      id: 2,
      title: "TechFamily",
      description: "Our portfolio raised 1.5bn in follow-up funding. I did over a thousand deals. Helped startups across the globe.",
      image: "/placeholder.svg",
      link: "/portfolio/cofounding/techfamily",
    }
  ];

  return (
    <div className="relative">
      {/* Hero Section with vertical frame instead of image */}
      <section className="min-h-[85vh] flex items-center justify-center relative">
        <div className="content-wrapper grid grid-cols-1 md:grid-cols-5 gap-8 items-center">
          <motion.div 
            className="order-1 md:col-span-2 flex justify-center"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="w-full aspect-[2/3] rounded-[15px] border border-white/20 overflow-hidden relative bg-secondary/30 backdrop-blur-sm">
              <motion.div 
                className="absolute inset-0"
                animate={{ 
                  y: [0, -20, 0],
                  opacity: [0.7, 1, 0.7]
                }}
                transition={{ 
                  duration: 10, 
                  repeat: Infinity, 
                  repeatType: "reverse" 
                }}
              >
                <img 
                  src="/lovable-uploads/9a361404-83db-4f15-ae3e-90201c14d331.png" 
                  alt="Vertical illustration" 
                  className="w-full h-full object-cover"
                />
              </motion.div>
            </div>
          </motion.div>

          <div className="order-2 md:col-span-3">
            <motion.h1 
              className="font-serif text-4xl md:text-6xl lg:text-7xl mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Often Wrong, Never Doubt
            </motion.h1>
            
            <motion.p 
              className="text-xl md:text-2xl text-muted-foreground max-w-2xl mb-10 font-mono"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              A journey through thoughts, projects, and the space between possibility and creation.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="max-w-md"
            >
              <form onSubmit={handleSubscribe} className="flex items-center gap-2">
                <input 
                  type="email" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email" 
                  className="bg-secondary border border-border px-4 py-3 rounded-xl flex-grow font-mono text-sm"
                />
                <button 
                  type="submit"
                  className="px-6 py-3 rounded-xl bg-foreground text-background hover:bg-foreground/90 transition-colors"
                >
                  Subscribe
                </button>
              </form>
              <p className="text-muted-foreground text-sm mt-2 font-mono">
                Stay updated with my latest thoughts and projects.
              </p>
            </motion.div>
          </div>
        </div>
        
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 cursor-pointer animate-pulse-slow">
          <ArrowDown size={24} />
        </div>
      </section>
      
      {/* Off the Record Section - NEW CAROUSEL OF BEST ARTICLES */}
      <section className="py-16">
        <div className="content-wrapper">
          <div className="flex items-center justify-between mb-6">
            <h2 className="section-title font-mono text-2xl">Off the Record</h2>
            <Link to="/reflections" className="text-pink-400 hover:text-pink-300 flex items-center gap-1 font-mono text-sm">
              View all <ArrowRight size={16} />
            </Link>
          </div>
          
          <Carousel className="w-full">
            <CarouselContent>
              {bestArticles.map((article) => (
                <CarouselItem key={article.id} className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-1">
                    <div className="border border-border/50 p-6 rounded-xl hover:border-foreground/50 transition-all duration-300 h-full flex flex-col">
                      <span className="text-sm text-muted-foreground">{article.category}</span>
                      <h3 className="font-serif text-xl mt-2 mb-4">
                        <Link to={`/reflections/${article.slug}`} className="animated-link">
                          {article.title}
                        </Link>
                      </h3>
                      <p className="text-muted-foreground mb-6 flex-grow">
                        {article.excerpt}
                      </p>
                      <div className="flex justify-between items-center mt-auto">
                        <span className="text-sm">{article.date}</span>
                        <Link 
                          to={`/reflections/${article.slug}`} 
                          className="text-sm animated-link"
                        >
                          Read More
                        </Link>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-between items-center mt-8">
              <CarouselPrevious className="relative inset-auto translate-y-0 hover:bg-foreground/10 border-border" />
              <Link to="/reflections" className="text-pink-400 hover:text-pink-300 text-center font-mono">
                Read more articles or reflections
              </Link>
              <CarouselNext className="relative inset-auto translate-y-0 hover:bg-foreground/10 border-border" />
            </div>
          </Carousel>
        </div>
      </section>

      {/* Co-Founding Section Preview - WITH HORIZONTAL SCROLL */}
      <section className="py-16">
        <div className="content-wrapper">
          <div className="flex items-center justify-between mb-6">
            <h2 className="section-title font-mono text-2xl">Co-Founding</h2>
            <Link to="/portfolio/cofounding" className="text-pink-400 hover:text-pink-300 flex items-center gap-1 font-mono text-sm">
              View all <ArrowRight size={16} />
            </Link>
          </div>
          
          <div className="overflow-x-auto pb-4 no-scrollbar">
            <div className="flex gap-6 min-w-max">
              {coFoundingProjects.map((project) => (
                <div 
                  key={project.id}
                  className="w-[350px] rounded-xl border border-border/40 flex-shrink-0"
                >
                  <div className="h-40 w-full rounded-t-xl overflow-hidden">
                    <div className="w-full h-full rounded-[15px] overflow-hidden relative">
                      <motion.div 
                        className="absolute inset-0"
                        animate={{ 
                          y: [0, -10, 0],
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
                  </div>
                  <div className="p-6 space-y-4">
                    <h3 className="font-mono text-xl">{project.title}</h3>
                    <p className="text-muted-foreground font-mono text-sm">
                      {project.description}
                    </p>
                    <Link to={project.link} className="text-pink-400 hover:text-pink-300 inline-block font-mono text-sm">Learn more</Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* Angel Investment Section Preview - WITH HORIZONTAL SCROLL */}
      <section className="py-16">
        <div className="content-wrapper">
          <div className="flex items-center justify-between mb-6">
            <h2 className="section-title font-mono text-2xl">Angel Investments</h2>
            <Link to="/portfolio/investments" className="text-pink-400 hover:text-pink-300 flex items-center gap-1 font-mono text-sm">
              View all <ArrowRight size={16} />
            </Link>
          </div>
          
          <div className="overflow-x-auto pb-4 no-scrollbar">
            <div className="flex gap-6 min-w-max">
              {angelInvestments.map((investment) => (
                <div 
                  key={investment.id}
                  className="bg-secondary/50 rounded-xl p-6 border border-border/30 hover:border-border/60 transition-colors w-[350px] flex-shrink-0"
                >
                  <div className="w-10 h-10 bg-foreground/10 rounded-lg mb-4"></div>
                  <h3 className="font-mono text-lg mb-2">{investment.title}</h3>
                  <p className="text-muted-foreground text-sm font-mono">{investment.description}</p>
                  <Link to={investment.link} className="text-pink-400 hover:text-pink-300 flex items-center gap-1 font-mono text-sm mt-4">
                    Learn more <ArrowRight size={16} />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Manifesto Section */}
      <section className="py-16">
        <div className="content-wrapper">
          <h2 className="font-serif text-3xl md:text-4xl mb-6 text-center">Manifesto of a Serial Loser</h2>
          <div className="max-w-3xl mx-auto">
            <p className="text-muted-foreground mb-6 font-mono leading-relaxed">
              I've failed more times than I've succeeded. I've built products nobody wanted, 
              invested in ideas that didn't work, and spent years on projects that went nowhere. 
              But each failure taught me something valuable that the successes couldn't.
            </p>
            <p className="text-muted-foreground mb-6 font-mono leading-relaxed">
              This isn't about glorifying failure—it's about recognizing that the path to 
              creating something meaningful is rarely a straight line. It's messy, uncertain, 
              and full of setbacks.
            </p>
            <div className="flex justify-center mt-8">
              <Link 
                to="/manifesto" 
                className="text-pink-400 hover:text-pink-300 flex items-center gap-1 font-mono"
              >
                Read the full manifesto <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* Call Me Section */}
      <section className="py-16 bg-gradient-to-b from-background to-secondary/50">
        <div className="content-wrapper text-center">
          <h2 className="font-serif text-3xl md:text-4xl mb-6">Call Me!</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8 font-mono">
            If you're working on something interesting or just want to connect, I'd love to hear from you.
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

export default Home;
