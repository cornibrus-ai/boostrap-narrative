import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Download, PlayCircle, StopCircle, Share2, Heart, ArrowUpCircle, MessageSquare, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from '@/components/ui/use-toast'; // Corrected import path
import DetailedAudioPlayerModal from './DetailedAudioPlayerModal'; // New Import

interface ArticleButtonsProps {
  articleTitle: string;
  articleUrl: string;
}

export const DownloadArticleButton: React.FC = () => {
  const [downloadState, setDownloadState] = useState<'idle' | 'downloading' | 'stopped'>('idle');

  const handleDownload = () => {
    setDownloadState('downloading');
    console.log('Simulating PDF download process...');
    // Simulate download
    setTimeout(() => {
      if (downloadState !== 'stopped') { // an actual stop click would clear this timeout
        console.log('PDF download "completed".');
        toast({ title: "Download Started", description: "Your article download has started." });
        setDownloadState('idle');
      }
    }, 3000);
  };

  const handleStop = () => {
    setDownloadState('stopped');
    console.log('PDF download stopped.');
    toast({ title: "Download Stopped", description: "Article download has been cancelled." });
    // In a real scenario, you'd cancel the download process here
    // For simulation, we'll just reset to idle after a short delay
    setTimeout(() => setDownloadState('idle'), 1000);
  };

  if (downloadState === 'downloading') {
    return (
      <Button variant="outline" onClick={handleStop} className="bg-background text-foreground border-foreground hover:bg-pink-300 hover:text-background px-4 py-2 text-sm">
        <StopCircle className="mr-2 h-4 w-4" />
        Downloading... Stop
      </Button>
    );
  }

  return (
    <Button variant="outline" onClick={handleDownload} className="bg-background text-foreground border-foreground hover:bg-pink-300 hover:text-background px-4 py-2 text-sm">
      <Download className="mr-2 h-4 w-4" />
      Download as PDF
    </Button>
  );
};

export const ArticleAudioPlayer: React.FC<{ articleTitle: string }> = ({ articleTitle }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const togglePlay = () => {
    setIsModalOpen(true); // Open the modal
    // Actual play logic would be handled within the modal or via a global audio player service
    console.log('Opening detailed audio player modal...');
    // toast({ title: "Audio Player", description: "Audio player modal opened." });
  };

  return (
    <>
      <Button variant="ghost" size="icon" onClick={togglePlay} title={"Play audio"}>
        <PlayCircle className="h-5 w-5 text-foreground hover:text-pink-400" />
      </Button>
      <DetailedAudioPlayerModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)}
        articleTitle={articleTitle} 
      />
    </>
  );
};

export const LikeArticleButton: React.FC = () => {
  const [liked, setLiked] = useState(false);
  const handleClick = () => {
    setLiked(!liked);
    toast({ title: liked ? "Unliked" : "Liked!", description: `You ${liked ? 'unliked' : 'liked'} this article.` });
  };
  return (
    <Button 
      variant="outline" 
      onClick={handleClick} 
      className={`px-5 py-2.5 text-xs ${liked ? 'bg-pink-500 text-white border-pink-500 hover:bg-pink-600' : 'bg-background text-foreground border-foreground hover:bg-pink-300 hover:text-background'}`}
    >
      <Heart className={`mr-2 h-4 w-4 ${liked ? 'fill-white' : 'fill-transparent'}`} />
      Click me!
    </Button>
  );
};

export const DiscussArticleButton: React.FC = () => {
  return (
    <Button asChild variant="outline" className="bg-background text-foreground border-foreground hover:bg-pink-300 hover:text-background px-5 py-2.5 text-xs">
      <Link to="/contact">
        <MessageSquare className="mr-2 h-4 w-4" />
        Discuss with Me
      </Link>
    </Button>
  );
};


export const BackToTopButton: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  const toggleVisibilityAndProgress = () => {
    const scrolled = document.documentElement.scrollTop;
    const maxHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }

    if (maxHeight > 0) {
      const progress = (scrolled / maxHeight) * 100;
      setScrollProgress(Math.min(progress, 100)); // Cap at 100
    } else {
      setScrollProgress(0);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibilityAndProgress);
    return () => window.removeEventListener('scroll', toggleVisibilityAndProgress);
  }, []);

  return (
    <>
      {isVisible && (
        <Button
          variant="outline"
          size="icon"
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 bg-foreground text-background border-2 border-pink-500 hover:bg-pink-400 hover:text-white rounded-full shadow-lg z-50 transition-all duration-300 ease-in-out"
          style={{ padding: '15px', height: 'auto', width: 'auto', position: 'relative', overflow: 'hidden' }} 
        >
          <div 
            className="absolute bottom-0 left-0 right-0 bg-pink-500 transition-all duration-200 ease-linear"
            style={{ height: `${scrollProgress}%`, animation: scrollProgress > 0 && scrollProgress < 100 ? 'ripple-pink 1.5s infinite ease-out' : 'none' }}
          />
          <ArrowUpCircle className="h-6 w-6 relative z-10" />
        </Button>
      )}
    </>
  );
};

export const RateArticleButton: React.FC = () => {
  const handleRate = () => {
    toast({
      title: "Rate Article",
      description: "Thank you for your feedback! (Rating system coming soon)",
    });
    console.log("Rate article clicked. Placeholder for rating system.");
  };

  return (
    <Button
      variant="outline"
      onClick={handleRate}
      className="bg-background text-foreground border-foreground hover:bg-pink-300 hover:text-background px-4 py-2 text-sm"
    >
      <Star className="mr-2 h-4 w-4" />
      Leave a Rating
    </Button>
  );
};
