
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, User, AlertTriangle, BookOpen, Briefcase, MessageSquare, Youtube, Linkedin, Phone, X, Heart } from 'lucide-react';

const Sidebar = () => {
  const location = useLocation();
  
  // Navigation groups
  const mainNav = [
    { name: 'Home', path: '/', icon: <Home size={18} /> },
    { name: 'About', path: '/about', icon: <User size={18} /> },
    { name: 'Now!', path: '/now', icon: <AlertTriangle size={18} /> },
  ];
  
  const wisdomNav = [
    { name: 'Off The Record', path: '/reflections', icon: <BookOpen size={18} /> },
    { name: 'Advices', path: '/advices', icon: <BookOpen size={18} /> },
    { name: 'Manifesto of a serial looser', path: '/manifesto', icon: <Heart size={18} /> },
  ];
  
  const portfolioNav = [
    { name: 'Co-Founding', path: '/portfolio/cofounding/bloopa', icon: <Briefcase size={18} /> },
    { name: 'Angel Investments', path: '/portfolio/investments/startupx', icon: <Briefcase size={18} /> },
  ];
  
  const connectNav = [
    { name: 'Youtube', path: 'https://youtube.com', icon: <Youtube size={18} />, external: true },
    { name: 'LinkedIn', path: 'https://linkedin.com', icon: <Linkedin size={18} />, external: true },
    { name: 'X', path: 'https://x.com', icon: <X size={18} />, external: true },
    { name: 'Call Me!', path: '/contact', icon: <Phone size={18} /> },
  ];
  
  const isActive = (path: string) => {
    if (path === '/') {
      return location.pathname === '/';
    }
    return location.pathname.startsWith(path);
  };

  const NavItem = ({ item }: { item: { name: string; path: string; icon: React.ReactNode; external?: boolean } }) => {
    const linkProps = item.external ? { as: 'a', href: item.path, target: '_blank', rel: 'noopener noreferrer' } : {};
    
    return (
      <li>
        {item.external ? (
          <a
            href={item.path}
            target="_blank"
            rel="noopener noreferrer"
            className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-colors hover:bg-white/5
              ${isActive(item.path) ? 'text-foreground' : 'text-muted-foreground'}`}
          >
            <span className="text-pink-400">{item.icon}</span>
            <span className="font-mono text-sm">{item.name}</span>
          </a>
        ) : (
          <Link
            to={item.path}
            className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-colors hover:bg-white/5
              ${isActive(item.path) ? 'text-foreground' : 'text-muted-foreground'}`}
          >
            <span className="text-pink-400">{item.icon}</span>
            <span className="font-mono text-sm">{item.name}</span>
          </Link>
        )}
      </li>
    );
  };
  
  const NavGroup = ({ title, items }: { title?: string; items: { name: string; path: string; icon: React.ReactNode; external?: boolean }[] }) => (
    <div className="mb-6">
      {title && (
        <div className="px-4 py-2 text-xs font-mono text-muted-foreground/60 uppercase tracking-wider">
          {title}
        </div>
      )}
      <ul className="space-y-1">
        {items.map((item) => (
          <NavItem key={item.name} item={item} />
        ))}
      </ul>
    </div>
  );
  
  return (
    <aside className="fixed left-0 top-0 bottom-0 w-64 bg-secondary/30 backdrop-blur-lg border-r border-border/10 z-50 overflow-y-auto">
      <div className="p-6">
        <div className="font-serif text-xl mb-10">
          <Link to="/">The Woven Narrative</Link>
        </div>
        
        <nav>
          <NavGroup items={mainNav} />
          <NavGroup title="Wisdom" items={wisdomNav} />
          <NavGroup title="Portfolio" items={portfolioNav} />
          <NavGroup title="Connect" items={connectNav} />
        </nav>
      </div>
    </aside>
  );
};

export default Sidebar;
