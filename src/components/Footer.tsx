
import React from 'react';
import { Link } from 'react-router-dom';
import { Github, Linkedin, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="py-12 border-t border-border/30">
      <div className="content-wrapper">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-serif text-xl mb-4">The Woven Narrative</h3>
            <p className="text-muted-foreground max-w-md">
              A personal journey through ideas, projects, and reflections.
            </p>
          </div>
          
          <div>
            <h3 className="font-serif text-lg mb-4">Navigation</h3>
            <nav>
              <ul className="space-y-2">
                <li><Link to="/" className="nav-link">Home</Link></li>
                <li><Link to="/about" className="nav-link">About</Link></li>
                <li><Link to="/now" className="nav-link">Now</Link></li>
                <li><Link to="/reflections" className="nav-link">Reflections</Link></li>
                <li><Link to="/portfolio" className="nav-link">Portfolio</Link></li>
                <li><Link to="/contact" className="nav-link">Contact</Link></li>
              </ul>
            </nav>
          </div>
          
          <div>
            <h3 className="font-serif text-lg mb-4">Connect</h3>
            <div className="flex space-x-4">
              <a href="https://github.com" 
                 target="_blank" 
                 rel="noopener noreferrer" 
                 className="text-muted-foreground hover:text-foreground transition-colors"
                 aria-label="GitHub">
                <Github size={20} />
              </a>
              <a href="https://linkedin.com" 
                 target="_blank" 
                 rel="noopener noreferrer" 
                 className="text-muted-foreground hover:text-foreground transition-colors"
                 aria-label="LinkedIn">
                <Linkedin size={20} />
              </a>
              <a href="mailto:hello@example.com" 
                 className="text-muted-foreground hover:text-foreground transition-colors"
                 aria-label="Email">
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-12 pt-6 border-t border-border/30 text-sm text-muted-foreground flex flex-col md:flex-row justify-between">
          <p>© {new Date().getFullYear()} The Woven Narrative. All rights reserved.</p>
          <div className="mt-2 md:mt-0">
            <Link to="/privacy" className="mr-4 animated-link">Privacy</Link>
            <Link to="/terms" className="animated-link">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
