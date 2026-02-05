import { SlideLayout, SlideTitle, SlideTakeaway, SlideContent } from "../SlideLayout";
import { moatItems } from "@/data/deckData";
import { motion } from "framer-motion";
import { RefreshCw, Map, Database, Workflow, Users } from "lucide-react";

const icons = [Map, Database, Workflow, Users];

export const MoatSlide = () => {
  return (
    <SlideLayout>
      <SlideTitle>Why We Win</SlideTitle>
      <SlideTakeaway>
        Defensibility from jurisdiction logic, reproducible data pipelines, and workflow integration.
      </SlideTakeaway>

      <SlideContent className="items-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Flywheel */}
          <motion.div
            initial={{ opacity: 0, rotate: -10 }}
            animate={{ opacity: 1, rotate: 0 }}
            transition={{ delay: 0.3 }}
            className="relative w-72 h-72 mx-auto"
          >
            <div className="absolute inset-0 rounded-full border-4 border-dashed border-primary/30" />
            
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute inset-4"
            >
              <RefreshCw className="w-8 h-8 text-primary absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2" />
            </motion.div>

            {/* Center */}
            <div className="absolute inset-8 rounded-full bg-primary/10 flex items-center justify-center">
              <div className="text-center p-4">
                <p className="text-lg font-bold text-primary">Flywheel</p>
                <p className="text-xs text-muted-foreground mt-1">More usage → Better outputs</p>
              </div>
            </div>

            {/* Labels around */}
            <div className="absolute -top-2 left-1/2 -translate-x-1/2 bg-card px-3 py-1 rounded-full border border-border text-xs font-medium">
              More Jurisdictions
            </div>
            <div className="absolute top-1/2 -right-2 -translate-y-1/2 bg-card px-3 py-1 rounded-full border border-border text-xs font-medium">
              More Users
            </div>
            <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-card px-3 py-1 rounded-full border border-border text-xs font-medium">
              Better Outputs
            </div>
            <div className="absolute top-1/2 -left-2 -translate-y-1/2 bg-card px-3 py-1 rounded-full border border-border text-xs font-medium">
              More Templates
            </div>
          </motion.div>

          {/* Moat items */}
          <div className="space-y-4">
            {moatItems.map((item, index) => {
              const Icon = icons[index];
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  className="flex items-start gap-4 bg-card border border-border rounded-xl p-4"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">{item.title}</h4>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </SlideContent>
    </SlideLayout>
  );
};
