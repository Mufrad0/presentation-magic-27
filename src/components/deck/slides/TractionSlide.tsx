import { SlideLayout, SlideTitle, SlideTakeaway, SlideContent } from "../SlideLayout";
import { CheckCircle2, Target, Calendar, Users, Rocket } from "lucide-react";

const tractionItems = [
  {
    headline: "Beta live and shipping reports",
    text: "Working product delivering cited, audit-ready outputs from site inputs."
  },
  {
    headline: "Demand validated by senior practitioners",
    text: "Discovery with principals and senior consultants confirming urgency."
  },
  {
    headline: "Pilot motion integrated into workflows",
    text: "Pilots running through real consultant deliverables."
  },
  {
    headline: "Outreach engine in place",
    text: "Partnership with Ophanim AI for sales and outreach."
  }
];

const nextMilestones = [
  {
    icon: Users,
    label: "10 paying customers",
    timeline: "Q2 2026"
  },
  {
    icon: Rocket,
    label: "Enterprise pilot signed",
    timeline: "Q3 2026"
  },
  {
    icon: Target,
    label: "$50K MRR",
    timeline: "Q4 2026"
  },
  {
    icon: Calendar,
    label: "Series A ready",
    timeline: "Q1 2027"
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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Completed Milestones */}
          <div className="space-y-3">
            <p className="text-xs text-muted-foreground uppercase tracking-widest mb-4 font-medium">Completed</p>
            {tractionItems.map((item, index) => (
              <div
                key={index}
                className="flex items-start gap-3 bg-card border border-border rounded-xl p-4"
              >
                <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-foreground text-sm mb-0.5">{item.headline}</h4>
                  <p className="text-xs text-muted-foreground leading-relaxed">{item.text}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Next Milestones */}
          <div className="space-y-3">
            <p className="text-xs text-muted-foreground uppercase tracking-widest mb-4 font-medium">Next Milestones</p>
            {nextMilestones.map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-4 bg-primary/5 border border-primary/20 rounded-xl p-4"
              >
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <item.icon className="w-5 h-5 text-primary" />
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold text-foreground text-sm">{item.label}</h4>
                </div>
                <span className="text-xs font-medium text-primary bg-primary/10 px-2 py-1 rounded-full">
                  {item.timeline}
                </span>
              </div>
            ))}
          </div>
        </div>
      </SlideContent>
    </SlideLayout>
  );
};
