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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Investment Terms */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-primary/5 border border-primary rounded-xl p-8"
          >
            <div className="space-y-6">
              <div>
                <p className="text-sm text-muted-foreground mb-1">Raising</p>
                <p className="text-4xl font-bold text-foreground">$500K</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground mb-1">Instrument</p>
                <p className="text-xl font-semibold text-foreground">Post-Money SAFE</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground mb-1">Valuation Cap</p>
                <p className="text-xl font-semibold text-foreground">$3.33M post-money</p>
              </div>
            </div>
          </motion.div>

          {/* Use of Funds & Contact */}
          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-card border border-border rounded-xl p-6"
            >
              <h3 className="font-semibold text-foreground mb-4">Use of Funds</h3>
              <div className="space-y-3">
                {useOfFunds.map((item, index) => (
                  <div key={item.label} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary/10 text-primary flex items-center justify-center text-xs font-bold flex-shrink-0">
                      {index + 1}
                    </div>
                    <div>
                      <p className="font-medium text-foreground text-sm">{item.label}</p>
                      <p className="text-xs text-muted-foreground">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="bg-card border border-border rounded-xl p-6"
            >
              <h3 className="font-semibold text-foreground mb-4">Contact</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-primary" />
                  <span className="text-foreground">daniel@terrafox.site</span>
                </div>
                <div className="flex items-center gap-3">
                  <Globe className="w-5 h-5 text-primary" />
                  <span className="text-foreground">terrafox.site</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </SlideContent>
    </SlideLayout>
  );
};
