import { SlideLayout, SlideTitle, SlideTakeaway, SlideContent } from "../SlideLayout";
import { Map, Database, Workflow, Users } from "lucide-react";

const advantages = [
  {
    icon: Map,
    title: "Jurisdiction Coverage",
    text: "Continuously maintained mapping of state, county, and city requirements into reusable compliance checks."
  },
  {
    icon: Database,
    title: "Evidence Grade Outputs",
    text: "Reproducible reports with citations, data provenance, and a clear audit trail that holds up under review."
  },
  {
    icon: Workflow,
    title: "Embedded in Delivery",
    text: "Consultant templates and developer portfolio monitoring fit existing workflows and create switching costs over time."
  },
  {
    icon: Users,
    title: "Repeat Usage Loop",
    text: "Consultants adopt first, then TerraFox becomes the default tool across recurring client projects and new jurisdictions."
  }
];

export const MoatSlide = () => {
  return (
    <SlideLayout>
      <SlideTitle>Our Advantages</SlideTitle>
      <SlideTakeaway>
        We compound defensibility through jurisdiction coverage, evidence grade outputs, and embedded workflows.
      </SlideTakeaway>

      <SlideContent>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {advantages.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="flex items-start gap-4 bg-card border border-border rounded-xl p-6"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-foreground">{item.title}</h4>
                  <p className="text-sm text-muted-foreground mt-1">{item.text}</p>
                </div>
              </div>
            );
          })}
        </div>
      </SlideContent>
    </SlideLayout>
  );
};
