import { SlideLayout, SlideTitle, SlideTakeaway, SlideContent } from "../SlideLayout";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export const MarketSlide = () => {
  return (
    <SlideLayout>
      <SlideTitle>Market Opportunity</SlideTitle>
      <SlideTakeaway>
        Large market, clear wedge, expandable geography and products.
      </SlideTakeaway>

      <SlideContent className="items-center justify-center">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-20 w-full max-w-6xl mx-auto">
          {/* Concentric circles */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
            className="relative w-[320px] h-[320px] lg:w-[380px] lg:h-[380px] flex-shrink-0"
          >
            {/* TAM - outer circle */}
            <div className="absolute inset-0 rounded-full bg-primary/5 border-2 border-primary/20" />
            <div className="absolute top-6 left-1/2 -translate-x-1/2 text-center">
              <p className="text-xs font-semibold text-primary uppercase tracking-wider">TAM</p>
            </div>
            
            {/* SAM - middle circle */}
            <div className="absolute inset-[60px] lg:inset-[70px] rounded-full bg-primary/10 border-2 border-primary/30" />
            <div className="absolute top-[75px] lg:top-[85px] left-1/2 -translate-x-1/2 text-center">
              <p className="text-xs font-semibold text-primary uppercase tracking-wider">SAM</p>
            </div>
            
            {/* SOM - inner circle */}
            <div className="absolute inset-[120px] lg:inset-[140px] rounded-full bg-primary/20 border-3 border-primary flex items-center justify-center">
              <div className="text-center">
                <p className="text-sm font-bold text-primary">SOM</p>
                <p className="text-xs text-primary/80">California</p>
              </div>
            </div>

            {/* Expansion arrow */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.7 }}
              className="absolute -right-6 top-1/2 -translate-y-1/2"
            >
              <ArrowRight className="w-10 h-10 text-primary" />
            </motion.div>
          </motion.div>

          {/* Definitions */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="space-y-8 flex-1 max-w-lg"
          >
            <div className="border-l-4 border-primary/20 pl-6 py-2">
              <p className="text-sm text-primary font-semibold uppercase tracking-wide mb-1">TAM</p>
              <p className="text-xl font-semibold text-foreground">Global Environmental Consulting Services Spend</p>
            </div>
            
            <div className="border-l-4 border-primary/40 pl-6 py-2">
              <p className="text-sm text-primary font-semibold uppercase tracking-wide mb-1">SAM</p>
              <p className="text-xl font-semibold text-foreground">Compliance & permitting work automatable by software</p>
            </div>
            
            <div className="border-l-4 border-primary pl-6 py-2">
              <p className="text-sm text-primary font-semibold uppercase tracking-wide mb-1">SOM</p>
              <p className="text-xl font-semibold text-foreground">California CEQA-aligned construction screening</p>
            </div>

            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="bg-accent rounded-xl p-5 mt-8"
            >
              <p className="text-base text-foreground">
                <strong>Expansion path:</strong> Start with consultants in California → expand to additional U.S. markets → adjacent verticals
              </p>
            </motion.div>
          </motion.div>
        </div>
      </SlideContent>
    </SlideLayout>
  );
};
