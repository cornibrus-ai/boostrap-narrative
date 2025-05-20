
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Download, PlayCircle, StopCircle, Share2, Heart, ArrowUpCircle, MessageSquare, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from '@/components/ui/use-toast'; // Corrected import path

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

export const ArticleAudioPlayer: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
    if (!isPlaying) {
      console.log('Simulating audio playback start...');
      toast({ title: "Audio Playing", description: "Article audio has started." });
      // Placeholder for actual TTS API call
    } else {
      console.log('Simulating audio playback stop...');
      toast({ title: "Audio Stopped", description: "Article audio has stopped." });
      // Placeholder for stopping TTS
    }
  };

  return (
    <Button variant="ghost" size="icon" onClick={togglePlay} title={isPlaying ? "Stop audio" : "Play audio"}>
      {isPlaying ? <StopCircle className="h-5 w-5 text-pink-400" /> : <PlayCircle className="h-5 w-5 text-foreground" />}
    </Button>
  );
};

export const ShareArticleButton: React.FC<ArticleButtonsProps> = ({ articleTitle, articleUrl }) => {
  const handleShare = () => {
    console.log(`Sharing article: ${articleTitle} at ${articleUrl}`);
    // Basic share (e.g. Twitter intent)
    const tweetText = encodeURIComponent(`Reading "${articleTitle}"`);
    const tweetUrl = encodeURIComponent(articleUrl);
    window.open(`https://twitter.com/intent/tweet?text=${tweetText}&url=${tweetUrl}`, '_blank', 'noopener,noreferrer');
    toast({ title: "Share", description: "Opened Twitter to share the article." });
  };
  return (
    <Button 
      variant="outline" 
      onClick={handleShare} 
      className="bg-foreground text-background hover:bg-pink-400 hover:text-background px-5 py-2.5 text-xs" // Adjusted padding & font
    >
      <Share2 className="mr-2 h-4 w-4" />
      Share Article
    </Button>
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

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  return (
    <>
      {isVisible && (
        <Button
          variant="outline"
          size="icon"
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 bg-foreground text-background border-background hover:bg-pink-400 hover:text-white p-3 rounded-full shadow-lg z-50"
          style={{ padding: '15px' }} // Explicit padding to meet 15px requirement
        >
          <ArrowUpCircle className="h-6 w-6" />
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

