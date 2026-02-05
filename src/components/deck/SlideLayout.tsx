import { ReactNode } from "react";
import { motion } from "framer-motion";

interface SlideLayoutProps {
  children: ReactNode;
  className?: string;
}

export const SlideLayout = ({ children, className = "" }: SlideLayoutProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
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

export const SlideTitle = ({ children, className = "" }: SlideTitleProps) => (
  <h1 className={`text-4xl md:text-5xl lg:text-6xl font-bold text-foreground tracking-tight mb-3 ${className}`}>
    {children}
  </h1>
);

interface SlideTakeawayProps {
  children: ReactNode;
}

export const SlideTakeaway = ({ children }: SlideTakeawayProps) => (
  <p className="text-lg md:text-xl lg:text-2xl text-muted-foreground mt-2 mb-10 max-w-4xl leading-relaxed">
    {children}
  </p>
);

interface SlideContentProps {
  children: ReactNode;
  className?: string;
}

export const SlideContent = ({ children, className = "" }: SlideContentProps) => (
  <div className={`flex-1 flex flex-col justify-center ${className}`}>
    {children}
  </div>
);
