import { SlideLayout, SlideTitle, SlideTakeaway, SlideContent } from "../SlideLayout";

export const MarketSlide = () => {
  return (
    <SlideLayout>
      <SlideTitle>Market Opportunity</SlideTitle>
      <SlideTakeaway>
        Large market, clear wedge, expandable geography and products.
      </SlideTakeaway>

      <SlideContent>
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Concentric Circles */}
          <div className="relative flex items-center justify-center flex-shrink-0">
            {/* TAM - Outer circle */}
            <div className="w-72 h-72 md:w-80 md:h-80 rounded-full bg-primary/5 border-2 border-primary/20 flex items-center justify-center">
              {/* SAM - Middle circle */}
              <div className="w-52 h-52 md:w-56 md:h-56 rounded-full bg-primary/10 border-2 border-primary/30 flex items-center justify-center">
                {/* SOM - Inner circle */}
                <div className="w-32 h-32 md:w-36 md:h-36 rounded-full bg-primary/20 border-2 border-primary flex items-center justify-center">
                  <div className="text-center">
                    <p className="text-2xl md:text-3xl font-bold text-primary">$500M</p>
                    <p className="text-xs text-primary font-medium">SOM</p>
                  </div>
                </div>
              </div>
            </div>
            {/* TAM Label */}
            <div className="absolute -top-2 left-1/2 -translate-x-1/2 bg-background px-3 py-1 rounded-full border border-border">
              <p className="text-sm font-semibold text-foreground">$45B <span className="text-muted-foreground font-normal">TAM</span></p>
            </div>
            {/* SAM Label */}
            <div className="absolute top-14 -right-4 bg-background px-3 py-1 rounded-full border border-border">
              <p className="text-sm font-semibold text-foreground">$8B <span className="text-muted-foreground font-normal">SAM</span></p>
            </div>
          </div>

          {/* Descriptions */}
          <div className="flex-1 space-y-5">
            <div className="flex items-start gap-4">
              <div className="w-4 h-4 rounded-full bg-primary/20 border-2 border-primary/20 flex-shrink-0 mt-1" />
              <div>
                <p className="font-semibold text-foreground">TAM: $45B</p>
                <p className="text-muted-foreground">Global Environmental Consulting Services Spend</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-4 h-4 rounded-full bg-primary/30 border-2 border-primary/30 flex-shrink-0 mt-1" />
              <div>
                <p className="font-semibold text-foreground">SAM: $8B</p>
                <p className="text-muted-foreground">Compliance & permitting work automatable by software</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-4 h-4 rounded-full bg-primary border-2 border-primary flex-shrink-0 mt-1" />
              <div>
                <p className="font-semibold text-primary">SOM: $500M</p>
                <p className="text-muted-foreground">California CEQA-aligned construction screening</p>
              </div>
            </div>

            {/* Expansion path */}
            <div className="bg-accent rounded-xl p-4 mt-6">
              <p className="text-sm text-foreground">
                <strong>Expansion:</strong> CA consultants → U.S. markets → infrastructure, utilities, renewables
              </p>
            </div>
          </div>
        </div>

        {/* Source */}
        <div className="mt-8 pt-4 border-t border-border">
          <p className="text-xs text-muted-foreground">
            Sources: IBISWorld Environmental Consulting Industry Report (2024); EPA CEQA/NEPA Compliance Data; Grand View Research Environmental Services Market Analysis
          </p>
        </div>
      </SlideContent>
    </SlideLayout>
  );
};
