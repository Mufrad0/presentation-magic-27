import { SlideLayout, SlideTitle, SlideTakeaway, SlideContent } from "../SlideLayout";
import { motion } from "framer-motion";
import { Clock, FileCheck, Zap } from "lucide-react";

const competitors = [
  {
    name: "Traditional Consultants",
    position: { x: 20, y: 20 },
    traits: "Trusted, comprehensive",
    weakness: "Slow, expensive, limited scale"
  },
  {
    name: "Point Solutions",
    position: { x: 60, y: 60 },
    traits: "Narrow automation",
    weakness: "Not end-to-end, weak audit trail"
  }
];

export const CompetitionSlide = () => {
  return (
    <SlideLayout>
      <SlideTitle>Competitive Landscape</SlideTitle>
      <SlideTakeaway>
        Incumbents have relationships. TerraFox wins on speed, repeatability, and audit trail.
      </SlideTakeaway>

      <SlideContent>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* 2x2 Matrix */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="relative bg-card border border-border rounded-xl p-6 aspect-square max-w-md"
          >
            {/* Axes */}
            <div className="absolute left-6 top-6 bottom-6 w-0.5 bg-border" />
            <div className="absolute left-6 right-6 bottom-6 h-0.5 bg-border" />
            
            {/* Labels */}
            <div className="absolute left-0 top-1/2 -translate-y-1/2 -rotate-90 origin-center">
              <span className="text-xs text-muted-foreground uppercase tracking-wide">Audit Readiness</span>
            </div>
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2">
              <span className="text-xs text-muted-foreground uppercase tracking-wide">Speed</span>
            </div>

            {/* Quadrant labels */}
            <div className="absolute top-8 left-10 text-xs text-muted-foreground">Slow + High Audit</div>
            <div className="absolute top-8 right-8 text-xs text-muted-foreground">Fast + High Audit</div>
            <div className="absolute bottom-10 left-10 text-xs text-muted-foreground">Slow + Low Audit</div>
            <div className="absolute bottom-10 right-8 text-xs text-muted-foreground">Fast + Low Audit</div>

            {/* Traditional consultants - top left */}
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.4 }}
              className="absolute top-16 left-12 w-20 h-20 rounded-full bg-muted flex items-center justify-center"
            >
              <div className="text-center">
                <Clock className="w-4 h-4 mx-auto text-muted-foreground" />
                <p className="text-[10px] text-muted-foreground mt-1">Consultants</p>
              </div>
            </motion.div>

            {/* Point solutions - middle */}
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.5 }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full bg-muted/50 flex items-center justify-center"
            >
              <div className="text-center">
                <Zap className="w-4 h-4 mx-auto text-muted-foreground" />
                <p className="text-[10px] text-muted-foreground mt-1">Point Tools</p>
              </div>
            </motion.div>

            {/* TerraFox - top right */}
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.6 }}
              className="absolute top-16 right-8 w-24 h-24 rounded-full bg-primary/20 border-2 border-primary flex items-center justify-center"
            >
              <div className="text-center">
                <FileCheck className="w-5 h-5 mx-auto text-primary" />
                <p className="text-xs font-semibold text-primary mt-1">TerraFox</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Legend */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="space-y-4"
          >
            <div className="bg-muted/30 rounded-xl p-5 border border-border">
              <h4 className="font-semibold text-foreground mb-2">Traditional Consultants</h4>
              <p className="text-sm text-muted-foreground mb-1">✓ Trusted and comprehensive</p>
              <p className="text-sm text-destructive">✗ Slow, expensive, limited scale</p>
            </div>

            <div className="bg-muted/30 rounded-xl p-5 border border-border">
              <h4 className="font-semibold text-foreground mb-2">Point Solutions</h4>
              <p className="text-sm text-muted-foreground mb-1">✓ Narrow automation</p>
              <p className="text-sm text-destructive">✗ Not end-to-end, weak audit trail</p>
            </div>

            <div className="bg-primary/10 rounded-xl p-5 border border-primary">
              <h4 className="font-semibold text-primary mb-2">TerraFox</h4>
              <p className="text-sm text-foreground">Instant, cited, jurisdiction-aware, repeatable outputs</p>
            </div>
          </motion.div>
        </div>
      </SlideContent>
    </SlideLayout>
  );
};
