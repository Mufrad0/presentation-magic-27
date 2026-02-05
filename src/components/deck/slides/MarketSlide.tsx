import { SlideLayout, SlideTitle, SlideTakeaway, SlideContent } from "../SlideLayout";

export const MarketSlide = () => {
  return (
    <SlideLayout>
      <SlideTitle>Market Opportunity</SlideTitle>
      <SlideTakeaway>
        Large market, clear wedge, expandable geography and products.
      </SlideTakeaway>

      <SlideContent>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* TAM */}
          <div className="bg-card border border-border rounded-xl p-6 text-center">
            <p className="text-sm font-semibold text-primary uppercase tracking-wide mb-2">TAM</p>
            <p className="text-4xl font-bold text-foreground mb-2">$45B</p>
            <p className="text-base text-muted-foreground">Global Environmental Consulting Services Spend</p>
          </div>

          {/* SAM */}
          <div className="bg-card border-2 border-primary/30 rounded-xl p-6 text-center">
            <p className="text-sm font-semibold text-primary uppercase tracking-wide mb-2">SAM</p>
            <p className="text-4xl font-bold text-foreground mb-2">$8B</p>
            <p className="text-base text-muted-foreground">Compliance & permitting work automatable by software</p>
          </div>

          {/* SOM */}
          <div className="bg-primary/10 border-2 border-primary rounded-xl p-6 text-center">
            <p className="text-sm font-semibold text-primary uppercase tracking-wide mb-2">SOM</p>
            <p className="text-4xl font-bold text-primary mb-2">$500M</p>
            <p className="text-base text-muted-foreground">California CEQA-aligned construction screening</p>
          </div>
        </div>

        {/* Expansion path */}
        <div className="bg-accent rounded-xl p-5 mt-8">
          <p className="text-base text-foreground">
            <strong>Expansion path:</strong> Start with consultants in California → expand to additional U.S. markets → adjacent verticals (infrastructure, utilities, renewables)
          </p>
        </div>
      </SlideContent>
    </SlideLayout>
  );
};
