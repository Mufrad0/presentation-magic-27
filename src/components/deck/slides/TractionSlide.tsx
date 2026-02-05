import { SlideLayout, SlideTitle, SlideTakeaway, SlideContent } from "../SlideLayout";
import { tractionItems } from "@/data/deckData";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

export const TractionSlide = () => {
  return (
    <SlideLayout>
      <SlideTitle>Traction & Milestones</SlideTitle>
      <SlideTakeaway>
        Alpha complete, beta live, and pilot motion underway with consultants.
      </SlideTakeaway>

      <SlideContent>
        <div className="max-w-2xl">
          <div className="space-y-4">
            {tractionItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 + index * 0.1 }}
                className="flex items-start gap-4 bg-card border border-border rounded-xl p-5"
              >
                <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                <p className="text-lg text-foreground">{item}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </SlideContent>
    </SlideLayout>
  );
};
