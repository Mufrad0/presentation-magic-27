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
      className={`w-full h-full flex flex-col p-8 md:p-12 lg:p-16 ${className}`}
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
  <h1 className={`text-4xl md:text-5xl lg:text-6xl font-bold text-foreground tracking-tight ${className}`}>
    {children}
  </h1>
);

interface SlideTakeawayProps {
  children: ReactNode;
}

export const SlideTakeaway = ({ children }: SlideTakeawayProps) => (
  <p className="text-lg md:text-xl text-muted-foreground mt-2 mb-8 max-w-3xl">
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
