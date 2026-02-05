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

      <SlideContent className="overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-h-full">
          {/* Quotes */}
          <div className="flex flex-col min-h-0">
            <p className="text-sm text-muted-foreground uppercase tracking-wide mb-3">Market Validation</p>
            <div className="grid grid-cols-2 gap-2 flex-1 min-h-0">
              {quotes.map((quote, index) => (
                <motion.div
                  key={quote.author}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + index * 0.08 }}
                  className="bg-card border border-border rounded-lg p-3"
                >
                  <Quote className="w-3 h-3 text-primary/50 mb-1" />
                  <p className="text-xs text-foreground italic mb-2 line-clamp-3">"{quote.text}"</p>
                  <div className="border-t border-border pt-1.5">
                    <p className="text-xs font-medium text-foreground">{quote.author}</p>
                    <p className="text-[10px] text-muted-foreground">{quote.title}</p>
                  </div>
                </motion.div>
              ))}
            </div>
            <p className="text-[10px] text-muted-foreground mt-2 italic">
              All quoted individuals are principals or senior environmental consultants.
            </p>
          </div>

          {/* GTM Funnel */}
          <div className="flex flex-col min-h-0">
            <p className="text-sm text-muted-foreground uppercase tracking-wide mb-3">Go-to-Market</p>
            <div className="space-y-3 flex-1">
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
                    <div className="bg-primary/10 border border-primary/20 rounded-xl p-3 flex items-start gap-3">
                      <div className="w-7 h-7 rounded-lg bg-primary flex items-center justify-center flex-shrink-0">
                        <Icon className="w-3.5 h-3.5 text-primary-foreground" />
                      </div>
                      <div>
                        <p className="text-[10px] text-primary uppercase tracking-wide">{stage.stage}</p>
                        <h4 className="font-semibold text-foreground text-sm">{stage.title}</h4>
                        <p className="text-xs text-muted-foreground">{stage.description}</p>
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
              className="flex items-center gap-2 mt-3 p-3 bg-accent/50 rounded-lg border border-border"
            >
              <Handshake className="w-4 h-4 text-primary flex-shrink-0" />
              <p className="text-xs text-foreground">
                <strong>Ophanim AI</strong> supports sales acquisition and market outreach.
              </p>
            </motion.div>
          </div>
        </div>
      </SlideContent>
    </SlideLayout>
  );
};
