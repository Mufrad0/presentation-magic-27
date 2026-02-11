import { ReactNode } from "react";
import { motion } from "framer-motion";
import { deckTransition } from "./animations";

interface SlideLayoutProps {
  children: ReactNode;
  className?: string;
}

export const SlideLayout = ({ children, className = "" }: SlideLayoutProps) => {
  const isExporting = document.body.classList.contains('pdf-exporting');
  
  if (isExporting) {
    return (
      <div
        className={`w-full h-full flex flex-col p-10 md:p-14 lg:p-20 ${className}`}
      >
        {children}
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3, ease: deckTransition.ease }}
      className={`w-full h-full flex flex-col p-10 md:p-14 lg:p-20 ${className}`}
    >
      {children}
    </motion.div>
  );
};

interface SlideTitleProps {
  children: ReactNode;
  className?: string;
}

export const SlideTitle = ({ children, className = "" }: SlideTitleProps) => {
  const isExporting = document.body.classList.contains('pdf-exporting');
  const trackingClass = isExporting ? 'tracking-normal' : 'tracking-tight';
  return (
    <h1 className={`text-4xl md:text-5xl lg:text-6xl font-bold text-foreground ${trackingClass} mb-3 ${className}`}>
      {children}
    </h1>
  );
};

interface SlideTakeawayProps {
  children: ReactNode;
}

export const SlideTakeaway = ({ children }: SlideTakeawayProps) => {
  const isExporting = document.body.classList.contains('pdf-exporting');

  // During PDF export, wrap each word in its own span so html2canvas
  // positions each word as a separate element instead of trying to
  // measure character positions within a single text node (which causes
  // spaces to collapse and words to merge together).
  if (isExporting && typeof children === 'string') {
    const words = children.split(/\s+/).filter(Boolean);
    return (
      <p
        className="text-lg md:text-xl lg:text-2xl text-muted-foreground mt-2 mb-10 max-w-4xl"
        style={{ lineHeight: '1.625', display: 'flex', flexWrap: 'wrap' }}
      >
        {words.map((word, i) => (
          <span key={i} style={{ marginRight: '0.3em', whiteSpace: 'nowrap' }}>
            {word}
          </span>
        ))}
      </p>
    );
  }

  return (
    <p className="text-lg md:text-xl lg:text-2xl text-muted-foreground mt-2 mb-10 max-w-4xl leading-relaxed">
      {children}
    </p>
  );
};

interface SlideContentProps {
  children: ReactNode;
  className?: string;
}

export const SlideContent = ({ children, className = "" }: SlideContentProps) => (
  <div className={`flex-1 flex flex-col justify-center ${className}`}>
    {children}
  </div>
);
