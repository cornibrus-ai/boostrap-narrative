
import React from 'react';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { Share2, MessageSquare, Twitter, Linkedin, Link as LinkIcon } from 'lucide-react'; // Assuming you have icons for these

interface ShareOption {
  name: string;
  icon: React.ElementType;
  url?: string; // For direct links
  action?: () => void; // For custom actions like copy to clipboard
}

interface SharePopoverProps {
  articleTitle: string;
  articleUrl: string;
}

const SharePopover: React.FC<SharePopoverProps> = ({ articleTitle, articleUrl }) => {
  const encodedUrl = encodeURIComponent(articleUrl);
  const encodedTitle = encodeURIComponent(articleTitle);

  const shareOptions: ShareOption[] = [
    { name: 'Twitter', icon: Twitter, url: `https://twitter.com/intent/tweet?text=${encodedTitle}&url=${encodedUrl}` },
    { name: 'LinkedIn', icon: Linkedin, url: `https://www.linkedin.com/shareArticle?mini=true&url=${encodedUrl}&title=${encodedTitle}` },
    { name: 'Copy Link', icon: LinkIcon, action: () => {
        navigator.clipboard.writeText(articleUrl);
        // Consider adding a toast notification here for feedback
        alert('Link copied to clipboard!'); // Simple feedback
      } 
    },
    // Add more platforms like Facebook, WhatsApp, Email if needed
    // { name: 'WhatsApp', icon: MessageSquare, url: `https://api.whatsapp.com/send?text=${encodedTitle}%20${encodedUrl}` },
  ];

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button 
          variant="outline" 
          className="bg-background text-foreground border-foreground hover:bg-pink-300 hover:text-background px-5 py-2.5 text-xs"
        >
          <Share2 className="mr-2 h-4 w-4" />
          Share
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-2 bg-secondary border-border">
        <div className="flex flex-col gap-1">
          {shareOptions.map((option) => (
            <Button
              key={option.name}
              variant="ghost"
              className="w-full justify-start text-sm font-mono text-foreground hover:bg-foreground/10"
              onClick={() => {
                if (option.url) window.open(option.url, '_blank', 'noopener,noreferrer');
                if (option.action) option.action();
              }}
            >
              <option.icon className="mr-2 h-4 w-4 text-pink-400" />
              {option.name}
            </Button>
          ))}
        </div>
      </PopoverContent>
    </Popover>
  );
};

export default SharePopover;

