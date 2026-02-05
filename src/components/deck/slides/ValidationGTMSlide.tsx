import { SlideLayout, SlideTitle, SlideTakeaway, SlideContent } from "../SlideLayout";
import { quotes, gtmStages } from "@/data/deckData";
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
        <div className="flex gap-10 h-full">
          {/* Left: Market Validation */}
          <div className="flex-1">
            <p className="text-xs text-muted-foreground uppercase tracking-widest mb-4 font-medium">Market Validation</p>
            <div className="grid grid-cols-2 gap-3">
              {quotes.map((quote) => (
                <div
                  key={quote.author}
                  className="bg-card border border-border rounded-xl p-4"
                >
                  <Quote className="w-4 h-4 text-primary/40 mb-2" />
                  <p className="text-sm text-foreground italic leading-relaxed mb-3">"{quote.text}"</p>
                  <div className="border-t border-border pt-2">
                    <p className="text-sm font-medium text-foreground">{quote.author}</p>
                    <p className="text-xs text-muted-foreground">{quote.title}</p>
                  </div>
                </div>
              ))}
            </div>
            <p className="text-xs text-muted-foreground mt-4 italic">
              All quoted individuals are principals or senior environmental consultants.
            </p>
          </div>

          {/* Right: GTM Funnel */}
          <div className="w-[400px] flex-shrink-0">
            <p className="text-xs text-muted-foreground uppercase tracking-widest mb-4 font-medium">Go-to-Market</p>
            <div className="space-y-3">
              {gtmStages.map((stage, index) => {
                const Icon = stageIcons[index];
                const widths = ["w-full", "w-[90%]", "w-[80%]"];
                return (
                  <div
                    key={stage.stage}
                    className={`${widths[index]}`}
                  >
                    <div className="bg-primary/10 border border-primary/20 rounded-xl p-4 flex items-start gap-3">
                      <div className="w-9 h-9 rounded-lg bg-primary flex items-center justify-center flex-shrink-0">
                        <Icon className="w-4 h-4 text-primary-foreground" />
                      </div>
                      <div>
                        <p className="text-xs text-primary uppercase tracking-wide font-medium">{stage.stage}</p>
                        <h4 className="font-semibold text-foreground">{stage.title}</h4>
                        <p className="text-sm text-muted-foreground">{stage.description}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="flex items-center gap-3 mt-5 p-4 bg-accent/50 rounded-xl border border-border">
              <Handshake className="w-5 h-5 text-primary flex-shrink-0" />
              <p className="text-sm text-foreground">
                <strong>Ophanim AI</strong> supports sales acquisition and market outreach.
              </p>
            </div>
          </div>
        </div>
      </SlideContent>
    </SlideLayout>
  );
};
