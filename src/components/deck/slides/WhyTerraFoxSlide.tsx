import { SlideLayout, SlideTitle, SlideTakeaway, SlideContent } from "../SlideLayout";
import { comparisonData } from "@/data/deckData";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

export const WhyTerraFoxSlide = () => {
  return (
    <SlideLayout>
      <SlideTitle>Why TerraFox</SlideTitle>
      <SlideTakeaway>
        Weeks to minutes, expensive assessments to affordable reports, limited capacity to always-on scale.
      </SlideTakeaway>

      <SlideContent>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="overflow-hidden rounded-xl border border-border"
        >
          <table className="w-full">
            <thead>
              <tr className="bg-muted">
                <th className="text-left p-5 font-semibold text-foreground">Metric</th>
                <th className="text-left p-5 font-semibold text-muted-foreground">Traditional</th>
                <th className="text-left p-5 font-semibold text-primary bg-primary/5">TerraFox</th>
              </tr>
            </thead>
            <tbody>
              {comparisonData.map((row, index) => (
                <motion.tr
                  key={row.metric}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  className="border-t border-border"
                >
                  <td className="p-5 font-medium text-foreground">{row.metric}</td>
                  <td className="p-5 text-muted-foreground">{row.traditional}</td>
                  <td className="p-5 bg-primary/5">
                    <span className="flex items-center gap-2 text-primary font-semibold">
                      <CheckCircle2 className="w-5 h-5" />
                      {row.terrafox}
                    </span>
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="mt-6 text-center"
        >
          <p className="text-sm text-muted-foreground mb-1">When comparing 56 days to under 60 seconds:</p>
          <p className="text-2xl font-bold text-primary">Up to 80,000× faster</p>
        </motion.div>
      </SlideContent>
    </SlideLayout>
  );
};
