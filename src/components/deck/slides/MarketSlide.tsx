import { SlideLayout, SlideTitle, SlideTakeaway, SlideContent } from "../SlideLayout";
import { motion } from "framer-motion";
import { TrendingUp } from "lucide-react";

export const MarketSlide = () => {
  return (
    <SlideLayout>
      <SlideTitle>Market Opportunity</SlideTitle>
      <SlideTakeaway>
        Large market, clear wedge, expandable geography and products.
      </SlideTakeaway>

      <SlideContent className="items-center">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Concentric circles */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
            className="relative w-80 h-80"
          >
            {/* TAM - outer circle */}
            <div className="absolute inset-0 rounded-full bg-primary/5 border-2 border-primary/20 flex items-start justify-center pt-8">
              <div className="text-center">
                <p className="text-xs text-muted-foreground uppercase tracking-wide">TAM</p>
                <p className="text-sm text-foreground">Global Environmental Consulting</p>
              </div>
            </div>
            
            {/* SAM - middle circle */}
            <div className="absolute inset-12 rounded-full bg-primary/10 border-2 border-primary/30 flex items-start justify-center pt-6">
              <div className="text-center">
                <p className="text-xs text-muted-foreground uppercase tracking-wide">SAM</p>
                <p className="text-sm text-foreground">U.S. Automation</p>
              </div>
            </div>
            
            {/* SOM - inner circle */}
            <div className="absolute inset-24 rounded-full bg-primary/20 border-2 border-primary flex items-center justify-center">
              <div className="text-center">
                <p className="text-xs text-muted-foreground uppercase tracking-wide">SOM</p>
                <p className="text-sm font-semibold text-primary">California</p>
              </div>
            </div>

            {/* Arrow */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6 }}
              className="absolute -right-4 top-1/2 -translate-y-1/2"
            >
              <TrendingUp className="w-8 h-8 text-primary" />
            </motion.div>
          </motion.div>

          {/* Definitions */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="space-y-6 max-w-md"
          >
            <div className="border-l-4 border-primary/20 pl-4">
              <p className="text-sm text-muted-foreground uppercase tracking-wide">TAM</p>
              <p className="text-lg font-semibold text-foreground">Global Environmental Consulting Services Spend</p>
            </div>
            
            <div className="border-l-4 border-primary/30 pl-4">
              <p className="text-sm text-muted-foreground uppercase tracking-wide">SAM</p>
              <p className="text-lg font-semibold text-foreground">Compliance and permitting work automatable by software</p>
            </div>
            
            <div className="border-l-4 border-primary pl-4">
              <p className="text-sm text-muted-foreground uppercase tracking-wide">SOM</p>
              <p className="text-lg font-semibold text-foreground">California CEQA-aligned construction screening and compliance</p>
            </div>

            <div className="bg-muted/50 rounded-lg p-4 mt-6">
              <p className="text-sm text-muted-foreground">
                <strong>Expansion path:</strong> Start with consultants and developer teams in California, expand to additional U.S. markets, then adjacent verticals.
              </p>
            </div>
          </motion.div>
        </div>
      </SlideContent>
    </SlideLayout>
  );
};
