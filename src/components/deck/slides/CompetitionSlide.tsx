import { SlideLayout, SlideTitle, SlideTakeaway, SlideContent } from "../SlideLayout";
import { motion } from "framer-motion";
import { Clock, FileCheck, Zap } from "lucide-react";

export const CompetitionSlide = () => {
  return (
    <SlideLayout>
      <SlideTitle>Competitive Landscape</SlideTitle>
      <SlideTakeaway>
        Incumbents have relationships. TerraFox wins on speed, repeatability, and audit trail.
      </SlideTakeaway>

      <SlideContent>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* 2x2 Matrix */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="relative bg-card border border-border rounded-2xl p-8 aspect-square max-w-[400px] mx-auto lg:mx-0"
          >
            {/* Grid lines */}
            <div className="absolute left-8 right-8 top-1/2 h-px bg-border" />
            <div className="absolute top-8 bottom-8 left-1/2 w-px bg-border" />
            
            {/* Axis Labels */}
            <div className="absolute -left-2 top-1/2 -translate-y-1/2 -rotate-90 origin-center whitespace-nowrap">
              <span className="text-sm font-medium text-muted-foreground">← Low Audit | High Audit →</span>
            </div>
            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 whitespace-nowrap">
              <span className="text-sm font-medium text-muted-foreground">← Slow | Fast →</span>
            </div>

            {/* Traditional consultants - top left quadrant */}
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.4 }}
              className="absolute top-12 left-12 w-24 h-24 rounded-full bg-muted border-2 border-border flex items-center justify-center"
            >
              <div className="text-center p-2">
                <Clock className="w-6 h-6 mx-auto text-muted-foreground mb-1" />
                <p className="text-xs font-medium text-muted-foreground leading-tight">Traditional Consultants</p>
              </div>
            </motion.div>

            {/* Point solutions - center-ish */}
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.5 }}
              className="absolute bottom-1/3 left-1/2 -translate-x-1/4 w-20 h-20 rounded-full bg-muted/50 border border-border flex items-center justify-center"
            >
              <div className="text-center p-2">
                <Zap className="w-5 h-5 mx-auto text-muted-foreground mb-1" />
                <p className="text-[10px] font-medium text-muted-foreground leading-tight">Point Tools</p>
              </div>
            </motion.div>

            {/* TerraFox - top right quadrant */}
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.6 }}
              className="absolute top-12 right-12 w-28 h-28 rounded-full bg-primary/15 border-3 border-primary flex items-center justify-center"
            >
              <div className="text-center p-2">
                <FileCheck className="w-7 h-7 mx-auto text-primary mb-1" />
                <p className="text-sm font-bold text-primary">TerraFox</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Legend cards */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="space-y-6"
          >
            <div className="bg-card rounded-2xl p-6 border border-border">
              <div className="flex items-center gap-3 mb-3">
                <Clock className="w-6 h-6 text-muted-foreground" />
                <h4 className="text-lg font-semibold text-foreground">Traditional Consultants</h4>
              </div>
              <p className="text-base text-muted-foreground mb-2">✓ Trusted and comprehensive</p>
              <p className="text-base text-destructive">✗ Slow, expensive, limited scale</p>
            </div>

            <div className="bg-card rounded-2xl p-6 border border-border">
              <div className="flex items-center gap-3 mb-3">
                <Zap className="w-6 h-6 text-muted-foreground" />
                <h4 className="text-lg font-semibold text-foreground">Point Solutions</h4>
              </div>
              <p className="text-base text-muted-foreground mb-2">✓ Narrow automation</p>
              <p className="text-base text-destructive">✗ Not end-to-end, weak audit trail</p>
            </div>

            <div className="bg-primary/10 rounded-2xl p-6 border-2 border-primary">
              <div className="flex items-center gap-3 mb-3">
                <FileCheck className="w-6 h-6 text-primary" />
                <h4 className="text-lg font-semibold text-primary">TerraFox</h4>
              </div>
              <p className="text-base text-foreground">Instant, cited, jurisdiction-aware, repeatable outputs</p>
            </div>
          </motion.div>
        </div>
      </SlideContent>
    </SlideLayout>
  );
};
