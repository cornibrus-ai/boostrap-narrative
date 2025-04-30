
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const ReflectionDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  
  // This would normally come from an API or CMS
  const reflectionData = {
    "thinking-making-gap": {
      title: "The Space Between Thinking and Making",
      date: "April 15, 2025",
      category: "Process",
      content: `
        <p class="lead">There exists a critical space between having an idea and bringing it into reality—a gap that often determines whether a concept remains a fleeting thought or manifests as something tangible.</p>
        
        <p>This gap isn't merely a matter of execution. It represents a complex psychological terrain filled with doubt, uncertainty, and the fear of translating something perfect in imagination into something inevitably imperfect in reality.</p>
        
        <h2>The Perfection Paradox</h2>
        
        <p>In our minds, ideas exist in a state of perfect potential. They haven't yet confronted the constraints of reality—technical limitations, resource scarcity, or the messy complexity of human interaction. This creates what I call the "perfection paradox": the more attached we become to the perfection of an unrealized idea, the more difficult it becomes to start the actual making process.</p>
        
        <p>The paradox creates a painful cycle where our most cherished ideas often remain perpetually unrealized precisely because we cherish them so much.</p>
        
        <h2>Navigating the Gap</h2>
        
        <p>Through years of creative practice, I've developed several strategies for navigating this challenging space between thinking and making:</p>
        
        <h3>1. Embrace Imperfect Starts</h3>
        
        <p>The blank page, the empty canvas, the untouched codebase—these aren't just practical starting points but psychological hurdles. Creating something deliberately imperfect, even absurdly wrong, breaks this spell. A "bad first draft" liberates us from the paralysis of potential perfection.</p>
        
        <h3>2. Practice Idea Plurality</h3>
        
        <p>When we have only one precious idea, the stakes feel impossibly high. Generating multiple concepts creates a healthier relationship with our ideas. Some will succeed, others will fail, and that's not only acceptable but necessary.</p>
        
        <h3>3. Set Process Goals, Not Outcome Goals</h3>
        
        <p>Rather than focusing on creating something "great" (an outcome goal), commit to working consistently on something for a fixed period or until reaching a specific process milestone. This shifts focus from the quality of the result to the quality of engagement.</p>
        
        <h2>The Iterative Bridge</h2>
        
        <p>Perhaps the most effective approach to crossing the thinking-making gap is building an iterative bridge. Each small step of making informs the next step of thinking, which informs the next step of making, and so on.</p>
        
        <p>This iterative approach acknowledges that our initial ideas are almost always incomplete. They need contact with reality—through prototyping, testing, sharing, and refining—to reach their full potential.</p>
        
        <h2>Cultivating Creative Courage</h2>
        
        <p>Ultimately, traversing the gap between thinking and making requires a particular kind of courage—not the courage to be perfect, but the courage to be seen in a state of imperfection and growth.</p>
        
        <p>It's the willingness to let something exist in an unfinished state, to share work that still has rough edges, and to trust that the process of iteration will lead somewhere worth going, even if that somewhere isn't exactly what we initially imagined.</p>
        
        <p>In embracing this courage, we not only bring more ideas into reality but transform our relationship with creativity itself—from a high-stakes pursuit of perfection to a sustainable practice of curiosity, growth, and discovery.</p>
      `,
    },
    "meaningful-engagement": {
      title: "Designing for Meaningful Engagement",
      date: "March 22, 2025",
      category: "Design Philosophy",
      content: `
        <p class="lead">How can we create digital experiences that foster genuine connection instead of mindless consumption?</p>
        
        <p>As digital designers and developers, we face an ethical challenge: the tools and techniques that maximize "engagement" metrics often come at the cost of human wellbeing.</p>
        
        <h2>The Engagement Paradox</h2>
        
        <p>Today's digital products are increasingly sophisticated in their ability to capture and hold attention. Infinite scrolls, notification systems, and algorithmically-tuned content feeds are engineering marvels in their efficiency at keeping users "engaged." Yet this engagement often leaves people feeling depleted rather than enriched.</p>
        
        <p>The paradox is that our current metrics of success measure quantity of interaction (time spent, pages viewed, interactions) but tell us almost nothing about the quality of experience.</p>
        
        <h2>Towards Meaningful Metrics</h2>
        
        <p>What if we designed for different outcomes? What might our products look like if we optimized for:</p>
        
        <ul>
          <li>Sense of accomplishment after use</li>
          <li>Growth in knowledge or capability</li>
          <li>Quality of human connection facilitated</li>
          <li>Contribution to long-term goals</li>
          <li>Time saved rather than time spent</li>
        </ul>
        
        <h2>Design Patterns for Meaningful Engagement</h2>
        
        <p>Through experimentation and research, I've been developing a set of design patterns that aim to foster more meaningful engagement:</p>
        
        <h3>1. Intentional Onboarding</h3>
        
        <p>Begin the user relationship by establishing clear intentions. Help users articulate why they're using your product and what constitutes success for them. This creates a foundation for measuring meaningful engagement on their terms.</p>
        
        <h3>2. Natural Stopping Points</h3>
        
        <p>Instead of designing for endless use, create natural moments of completion and reflection. Netflix's "Are you still watching?" prompt, while initially implemented for bandwidth reasons, inadvertently created a pattern worth expanding upon.</p>
        
        <h3>3. Progress Over Infinity</h3>
        
        <p>Replace infinite content streams with experiences that have a sense of progress and accomplishment. This might mean curated collections over endless feeds, courses over continuous content, or projects over passive consumption.</p>
        
        <h3>4. Relationship-Centered Notifications</h3>
        
        <p>Redesign notification systems to prioritize meaningful human connections over engagement triggers. Ask: does this notification facilitate a meaningful interaction between humans, or is it primarily serving the product's metrics?</p>
        
        <h2>The Path Forward</h2>
        
        <p>Creating products that foster meaningful engagement isn't just an ethical choice—it's increasingly a business imperative. As digital consumers become more conscious of how they spend their time online, products that respect their humanity will earn deeper loyalty and more sustainable engagement.</p>
        
        <p>The challenge before us is to align business incentives with human flourishing, to create digital experiences that people look back on not with regret at time wasted, but with appreciation for value gained.</p>
        
        <p>This doesn't mean abandoning metrics—it means evolving them to capture what truly matters. The most successful digital products of the future will likely be those that help people engage not just more, but better.</p>
      `,
    },
    "creative-tools-evolution": {
      title: "The Evolution of Creative Tools",
      date: "February 10, 2025",
      category: "Technology",
      content: `<p>Full article content would be here...</p>`,
    },
    "clarity-through-constraints": {
      title: "Finding Clarity Through Constraints",
      date: "January 5, 2025",
      category: "Creativity",
      content: `<p>Full article content would be here...</p>`,
    },
  };

  const post = slug ? reflectionData[slug as keyof typeof reflectionData] : null;

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-serif mb-4">Reflection Not Found</h1>
          <p className="text-muted-foreground mb-6">The reflection you're looking for doesn't exist or has been moved.</p>
          <Link to="/reflections" className="animated-link">
            <ArrowLeft className="inline-block mr-2" size={16} />
            Back to Reflections
          </Link>
        </div>
      </div>
    );
  }

  return (
    <article className="py-20">
      <div className="content-wrapper">
        <div className="max-w-2xl mx-auto">
          <Link to="/reflections" className="inline-flex items-center text-muted-foreground hover:text-foreground transition-colors mb-8">
            <ArrowLeft className="mr-2" size={16} />
            All Reflections
          </Link>
          
          <span className="text-sm text-muted-foreground">{post.category}</span>
          <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl mt-2 mb-4">
            {post.title}
          </h1>
          
          <div className="flex items-center text-muted-foreground mb-8">
            <span>{post.date}</span>
          </div>
          
          <div className="prose prose-invert max-w-none" dangerouslySetInnerHTML={{ __html: post.content }} />
          
          <div className="mt-16 pt-8 border-t border-border/30">
            <h3 className="font-serif text-xl mb-6">Continue the conversation</h3>
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(`Reading "${post.title}" by @yourusername`)}&url=${encodeURIComponent(window.location.href)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 border border-foreground hover:bg-foreground hover:text-background transition-colors text-center"
              >
                Share on Twitter
              </a>
              <Link 
                to="/contact"
                className="px-6 py-3 border border-foreground hover:bg-foreground hover:text-background transition-colors text-center"
              >
                Discuss with Me
              </Link>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};

export default ReflectionDetail;
