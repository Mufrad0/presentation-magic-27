import { SlideLayout, SlideTitle, SlideTakeaway, SlideContent } from "../SlideLayout";
import { CheckCircle2, Users, ClipboardCheck, Send } from "lucide-react";

const tractionCards = [
  {
    icon: CheckCircle2,
    headline: "Beta live and shipping reports",
    text: "Working product delivering cited, audit-ready outputs from site inputs, with active iteration from pilot feedback."
  },
  {
    icon: Users,
    headline: "Demand validated by senior practitioners",
    text: "Discovery and validation with principals and senior consultants, confirming urgency and willingness to adopt."
  },
  {
    icon: ClipboardCheck,
    headline: "Pilot motion integrated into workflows",
    text: "Pilots running through real consultant deliverables, validating repeat usage and upgrade path from per-report to bundles."
  },
  {
    icon: Send,
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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-4xl">
          {tractionCards.map((card, index) => {
            const Icon = card.icon;
            return (
              <div
                key={index}
                className="bg-card border border-border rounded-xl p-6"
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">{card.headline}</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">{card.text}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </SlideContent>
    </SlideLayout>
  );
};
