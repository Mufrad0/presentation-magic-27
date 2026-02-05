import { SlideLayout, SlideTitle, SlideTakeaway, SlideContent } from "../SlideLayout";
import { quotes, gtmStages } from "@/data/deckData";
import { motion } from "framer-motion";
import { Quote, Users, Building2, Globe, Handshake } from "lucide-react";

const stageIcons = [Users, Building2, Globe];

export const ValidationGTMSlide = () => {
  return (
    <SlideLayout>
      <SlideTitle>Validation & Go-to-Market</SlideTitle>
      <SlideTakeaway>
        The pain is confirmed by senior practitioners. GTM lands with consultants, then expands.
      </SlideTakeaway>

      <SlideContent>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Quotes */}
          <div>
            <p className="text-sm text-muted-foreground uppercase tracking-wide mb-4">Market Validation</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {quotes.map((quote, index) => (
                <motion.div
                  key={quote.author}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + index * 0.08 }}
                  className="bg-card border border-border rounded-lg p-4"
                >
                  <Quote className="w-4 h-4 text-primary/50 mb-2" />
                  <p className="text-sm text-foreground italic mb-3 line-clamp-3">"{quote.text}"</p>
                  <div className="border-t border-border pt-2">
                    <p className="text-xs font-medium text-foreground">{quote.author}</p>
                    <p className="text-xs text-muted-foreground">{quote.title}</p>
                  </div>
                </motion.div>
              ))}
            </div>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="text-xs text-muted-foreground mt-3 italic"
            >
              All quoted individuals are principals or senior environmental consultants.
            </motion.p>
          </div>

          {/* GTM Funnel */}
          <div>
            <p className="text-sm text-muted-foreground uppercase tracking-wide mb-4">Go-to-Market</p>
            <div className="space-y-4">
              {gtmStages.map((stage, index) => {
                const Icon = stageIcons[index];
                const widths = ["w-full", "w-5/6", "w-4/6"];
                return (
                  <motion.div
                    key={stage.stage}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 + index * 0.15 }}
                    className={`${widths[index]}`}
                  >
                    <div className="bg-primary/10 border border-primary/20 rounded-xl p-4 flex items-start gap-3">
                      <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center flex-shrink-0">
                        <Icon className="w-4 h-4 text-primary-foreground" />
                      </div>
                      <div>
                        <p className="text-xs text-primary uppercase tracking-wide">{stage.stage}</p>
                        <h4 className="font-semibold text-foreground">{stage.title}</h4>
                        <p className="text-sm text-muted-foreground">{stage.description}</p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="flex items-center gap-3 mt-6 p-4 bg-accent/50 rounded-lg border border-border"
            >
              <Handshake className="w-5 h-5 text-primary" />
              <p className="text-sm text-foreground">
                <strong>Ophanim AI</strong> supports sales acquisition and market outreach.
              </p>
            </motion.div>
          </div>
        </div>
      </SlideContent>
    </SlideLayout>
  );
};
