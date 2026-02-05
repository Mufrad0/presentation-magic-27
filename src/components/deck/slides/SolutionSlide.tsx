import { SlideLayout, SlideTitle, SlideTakeaway, SlideContent } from "../SlideLayout";
import { MapPin, FileCheck, Flame, Droplets, TreeDeciduous, Scale, Mountain, Zap, Clock, Shield } from "lucide-react";

const riskLayers = [
  { icon: Droplets, label: "Flood" },
  { icon: Flame, label: "Fire" },
  { icon: TreeDeciduous, label: "Vegetation" },
  { icon: Mountain, label: "Soil" }
];

const complianceChecks = ["CEQA", "NEPA", "Regional Programs"];

const benefits = [
  { icon: Clock, label: "< 60 seconds" },
  { icon: Shield, label: "Audit-ready" },
  { icon: Zap, label: "Fully cited" }
];

export const SolutionSlide = () => {
  return (
    <SlideLayout>
      <SlideTitle>The Solution</SlideTitle>
      <SlideTakeaway>
        Instant, cited, audit-ready environmental reports in under 60 seconds.
      </SlideTakeaway>

      <SlideContent>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Left: Input → Output flow */}
          <div className="space-y-6">
            {/* Input */}
            <div className="bg-card border border-border rounded-2xl p-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground uppercase tracking-wide mb-1">Input</p>
                  <h3 className="text-lg font-semibold text-foreground">Site address + jurisdiction</h3>
                </div>
              </div>
            </div>

            {/* Arrow */}
            <div className="flex justify-center">
              <div className="w-0.5 h-8 bg-primary/30 relative">
                <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-t-[8px] border-t-primary/30" />
              </div>
            </div>

            {/* Output */}
            <div className="bg-primary/10 border-2 border-primary rounded-2xl p-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center flex-shrink-0">
                  <FileCheck className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="text-xs text-primary uppercase tracking-wide mb-1">Output</p>
                  <h3 className="text-lg font-semibold text-foreground">Audit-ready compliance report</h3>
                  <p className="text-sm text-muted-foreground mt-1">With citations, data provenance, and regulatory references</p>
                </div>
              </div>
            </div>

            {/* Benefits row */}
            <div className="flex gap-3 justify-center">
              {benefits.map((benefit) => (
                <div key={benefit.label} className="flex items-center gap-2 px-4 py-2 bg-card border border-border rounded-full">
                  <benefit.icon className="w-4 h-4 text-primary" />
                  <span className="text-sm font-medium text-foreground">{benefit.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: What TerraFox analyzes */}
          <div className="space-y-6">
            {/* Risk Layers */}
            <div>
              <p className="text-xs text-muted-foreground uppercase tracking-widest mb-3 font-medium">Risk Layers Analyzed</p>
              <div className="grid grid-cols-2 gap-2">
                {riskLayers.map((layer) => (
                  <div
                    key={layer.label}
                    className="flex items-center gap-3 px-4 py-3 bg-card border border-border rounded-xl"
                  >
                    <layer.icon className="w-5 h-5 text-primary" />
                    <span className="text-sm font-medium text-foreground">{layer.label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Compliance Checks */}
            <div>
              <p className="text-xs text-muted-foreground uppercase tracking-widest mb-3 font-medium">Compliance Frameworks</p>
              <div className="grid grid-cols-2 gap-2">
                {complianceChecks.map((check) => (
                  <div
                    key={check}
                    className="flex items-center gap-3 px-4 py-3 bg-primary/10 border border-primary/20 rounded-xl"
                  >
                    <Scale className="w-5 h-5 text-primary" />
                    <span className="text-sm font-semibold text-foreground">{check}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </SlideContent>
    </SlideLayout>
  );
};
