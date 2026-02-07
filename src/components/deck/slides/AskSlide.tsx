import { SlideLayout, SlideTitle, SlideTakeaway, SlideContent } from "../SlideLayout";
import { useOfFunds } from "@/data/deckData";
import { motion } from "framer-motion";
import { Mail, Globe } from "lucide-react";

export const AskSlide = () => {
  return (
    <SlideLayout>
      <SlideTitle>The Ask</SlideTitle>
      <SlideTakeaway>
        $500K pre-seed to ship product and acquire first customers.
      </SlideTakeaway>

      <SlideContent>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Left: Investment Terms + Contact */}
          <div className="space-y-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-primary/5 border border-primary rounded-xl p-5"
            >
              <div className="grid grid-cols-3 gap-4">
                <div>
                  <p className="text-xs text-muted-foreground mb-1">Raising</p>
                  <p className="text-2xl font-bold text-foreground">$500K</p>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground mb-1">Instrument</p>
                  <p className="text-2xl font-bold text-foreground">Post-Money SAFE</p>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground mb-1">Valuation Cap</p>
                  <p className="text-2xl font-bold text-foreground">$3.33M</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-accent rounded-xl p-3 md:p-4 flex flex-col md:flex-row items-start md:items-center justify-between gap-2 md:gap-0"
            >
              <div className="flex items-center gap-2 md:gap-3">
                <Mail className="w-4 h-4 md:w-5 md:h-5 text-primary flex-shrink-0" />
                <span className="text-foreground text-xs md:text-sm font-medium break-all md:break-normal">daniel.guzman@terrafox.site</span>
              </div>
              <div className="flex items-center gap-2 md:gap-3">
                <Globe className="w-4 h-4 md:w-5 md:h-5 text-primary flex-shrink-0" />
                <span className="text-foreground text-xs md:text-sm font-medium">terrafox.site</span>
              </div>
            </motion.div>
          </div>

          {/* Right: Use of Funds */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-card border border-border rounded-xl p-5"
          >
            <h3 className="font-semibold text-foreground mb-3 text-sm">Use of Funds</h3>
            <div className="space-y-2">
              {useOfFunds.map((item, index) => (
                <div key={item.label} className="flex items-start gap-2">
                  <div className="w-5 h-5 rounded-full bg-primary/10 text-primary flex items-center justify-center text-xs font-bold flex-shrink-0">
                    {index + 1}
                  </div>
                  <div>
                    <p className="font-medium text-foreground text-xs">{item.label}</p>
                    <p className="text-xs text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </SlideContent>
    </SlideLayout>
  );
};
