import { SlideLayout, SlideTitle, SlideTakeaway, SlideContent } from "../SlideLayout";

export const MarketSlide = () => {
  return (
    <SlideLayout>
      <SlideTitle>Market Opportunity</SlideTitle>
      <SlideTakeaway>
        Large market, clear wedge, expandable geography and products.
      </SlideTakeaway>

      <SlideContent>
        <div className="flex flex-col items-center gap-6">
          {/* Concentric Circles */}
          <div className="relative flex items-center justify-center flex-shrink-0">
            {/* TAM - Outer circle */}
            <div className="w-56 h-56 md:w-64 md:h-64 rounded-full bg-primary/5 border-2 border-primary/20 flex items-center justify-center">
              {/* SAM - Middle circle */}
              <div className="w-40 h-40 md:w-44 md:h-44 rounded-full bg-primary/10 border-2 border-primary/30 flex items-center justify-center">
                {/* SOM - Inner circle */}
                <div className="w-24 h-24 md:w-28 md:h-28 rounded-full bg-primary/20 border-2 border-primary flex items-center justify-center">
                  <div className="text-center">
                    <p className="text-xl md:text-2xl font-bold text-primary">$500M</p>
                    <p className="text-xs text-primary font-medium">SOM</p>
                  </div>
                </div>
              </div>
            </div>
            {/* TAM Label */}
            <div className="absolute -top-2 left-1/2 -translate-x-1/2 bg-background px-2 py-0.5 rounded-full border border-border">
              <p className="text-sm font-semibold text-foreground">$45B <span className="text-muted-foreground font-normal">TAM</span></p>
            </div>
            {/* SAM Label */}
            <div className="absolute top-10 -right-2 bg-background px-2 py-0.5 rounded-full border border-border">
              <p className="text-sm font-semibold text-foreground">$8B <span className="text-muted-foreground font-normal">SAM</span></p>
            </div>
          </div>

          {/* Descriptions */}
          <div className="flex flex-wrap justify-center gap-6 mt-2">
            <div className="flex items-start gap-2">
              <div className="w-3 h-3 rounded-full bg-primary/20 border border-primary/20 flex-shrink-0 mt-1" />
              <div>
                <p className="font-semibold text-foreground text-sm">TAM: $45B</p>
                <p className="text-muted-foreground text-xs">Global Environmental Consulting Services</p>
              </div>
            </div>
            <div className="flex items-start gap-2">
              <div className="w-3 h-3 rounded-full bg-primary/30 border border-primary/30 flex-shrink-0 mt-1" />
              <div>
                <p className="font-semibold text-foreground text-sm">SAM: $8B</p>
                <p className="text-muted-foreground text-xs">Compliance & permitting automatable by software</p>
              </div>
            </div>
            <div className="flex items-start gap-2">
              <div className="w-3 h-3 rounded-full bg-primary border border-primary flex-shrink-0 mt-1" />
              <div>
                <p className="font-semibold text-primary text-sm">SOM: $500M</p>
                <p className="text-muted-foreground text-xs">California CEQA-aligned construction screening</p>
              </div>
            </div>
          </div>

          {/* Expansion path */}
          <div className="bg-accent rounded-xl px-4 py-2 mt-2">
            <p className="text-sm text-foreground">
              <strong>Expansion:</strong> CA consultants → U.S. markets → infrastructure, utilities, renewables
            </p>
          </div>
        </div>

        {/* Source */}
        <div className="mt-4 pt-3 border-t border-border">
          <p className="text-xs text-muted-foreground">
            Sources: IBISWorld (2024); EPA CEQA/NEPA Compliance Data; Grand View Research
          </p>
        </div>
      </SlideContent>
    </SlideLayout>
  );
};
