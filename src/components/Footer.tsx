
import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="py-8 bg-gradient-to-b from-background to-secondary/50 border-t border-border/30">
      <div className="content-wrapper">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-sm text-muted-foreground">
            <p>© {new Date().getFullYear()} Bootstrap Narrative.</p>
            <p>All rights reserved.</p>
          </div>
          <div className="mt-2 md:mt-0">
            <Link to="/privacy" className="mr-6 animated-link">Privacy</Link>
            <Link to="/terms" className="animated-link">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
