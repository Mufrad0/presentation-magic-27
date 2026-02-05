import { motion } from "framer-motion";

interface ProgressBarProps {
  currentSlide: number;
  totalSlides: number;
}

export const ProgressBar = ({ currentSlide, totalSlides }: ProgressBarProps) => {
  const progress = ((currentSlide + 1) / totalSlides) * 100;

  return (
    <div className="fixed bottom-0 left-0 right-0 h-1 bg-muted z-50">
      <motion.div
        className="h-full bg-primary"
        initial={{ width: 0 }}
        animate={{ width: `${progress}%` }}
        transition={{ duration: 0.3, ease: "easeOut" }}
      />
    </div>
  );
};

interface SlideIndicatorProps {
  currentSlide: number;
  totalSlides: number;
}

export const SlideIndicator = ({ currentSlide, totalSlides }: SlideIndicatorProps) => (
  <div className="fixed bottom-4 right-4 text-sm text-muted-foreground font-mono z-50">
    {currentSlide + 1} / {totalSlides}
  </div>
);
