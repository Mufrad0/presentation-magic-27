import { SlideLayout, SlideTitle, SlideTakeaway, SlideContent } from "../SlideLayout";
import { CheckCircle2 } from "lucide-react";

const tractionItems = [
  {
    headline: "Beta live and shipping reports",
    text: "Working product delivering cited, audit-ready outputs from site inputs, with active iteration from pilot feedback."
  },
  {
    headline: "Demand validated by senior practitioners",
    text: "Discovery and validation with principals and senior consultants, confirming urgency and willingness to adopt."
  },
  {
    headline: "Pilot motion integrated into workflows",
    text: "Pilots running through real consultant deliverables, validating repeat usage and upgrade path from per-report to bundles."
  },
  {
    headline: "Outreach engine in place",
    text: "Partnership with Ophanim AI supporting sales acquisition and market outreach."
  }
];

export const TractionSlide = () => {
  return (
    <SlideLayout>
      <SlideTitle>Traction & Milestones</SlideTitle>
      <SlideTakeaway>
        Product shipped, demand validated, and pilots converting into repeatable workflows.
      </SlideTakeaway>

      <SlideContent>
        <div className="max-w-3xl space-y-4">
          {tractionItems.map((item, index) => (
            <div
              key={index}
              className="flex items-start gap-4 bg-card border border-border rounded-xl p-5"
            >
              <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
              <div>
                <h4 className="font-semibold text-foreground mb-1">{item.headline}</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </SlideContent>
    </SlideLayout>
  );
};
