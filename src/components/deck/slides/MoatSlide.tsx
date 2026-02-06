import { SlideLayout, SlideTitle, SlideTakeaway, SlideContent } from "../SlideLayout";
import { Map, Layers, RefreshCw, ShieldCheck } from "lucide-react";

const advantages = [
  {
    icon: Map,
    title: "Jurisdiction Coverage",
    text: "80+ Cities covered across US and Canada, and growing. Continuously maintained mapping of state, county, and city requirements into reusable compliance checks."
  },
  {
    icon: Layers,
    title: "Multi-Layer Conflict Detection",
    text: "Our AI checks City, County, State, and Federal rules at the same time, catching conflicts that consultants working through PDFs will miss."
  },
  {
    icon: RefreshCw,
    title: "Real-Time Regulatory Data",
    text: "Regulations verified from 5 independent sources and updated within 90 days. Competitors use static databases that go stale within months."
  },
  {
    icon: ShieldCheck,
    title: "Audit-Ready Defensibility",
    text: "Full audit trail with cryptographic verification and exportable evidence chains. Every decision is traceable, making reports bank-ready and court-ready."
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
