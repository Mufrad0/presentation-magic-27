import { SlideLayout, SlideContent } from "../SlideLayout";
import { motion } from "framer-motion";
import terrafoxLogo from "@/assets/terrafox-logo-black.png";

export const TitleSlide = () => {
  return (
    <SlideLayout className="items-center justify-center text-center bg-gradient-to-br from-background via-background to-accent/20">
      <SlideContent className="items-center justify-center w-full">
        <motion.div
          initial={{ scale: 0.92, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.1, duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
          className="mb-8"
        >
          <div className="flex flex-col md:flex-row items-center justify-center gap-2 md:gap-4 mb-6">
            <img src={terrafoxLogo} alt="TerraFox" className="w-14 h-14 md:w-20 md:h-20" />
            <span className="text-4xl md:text-7xl font-bold text-foreground tracking-tight text-center">
              TerraFox
            </span>
          </div>
        </motion.div>
        
        <motion.h2
          initial={{ y: 14, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.25, duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
          className="text-2xl md:text-3xl lg:text-4xl text-foreground font-medium mb-4"
        >
          Instant Environmental Compliance Intelligence
        </motion.h2>
        
        <motion.p
          initial={{ y: 14, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
          className="text-lg md:text-xl text-muted-foreground"
        >
          Pre-Seed · Q1 2026
        </motion.p>
      </SlideContent>
    </SlideLayout>
  );
};
