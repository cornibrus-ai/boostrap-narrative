
import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundCustom = () => {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-5xl font-serif mb-4">404</h1>
        <h2 className="text-2xl font-serif mb-6">Page Not Found</h2>
        <p className="text-muted-foreground max-w-md mx-auto mb-8">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Link 
          to="/" 
          className="px-6 py-3 border border-foreground hover:bg-foreground hover:text-background transition-colors"
        >
          Return Home
        </Link>
      </div>
    </div>
  );
};

export default NotFoundCustom;
