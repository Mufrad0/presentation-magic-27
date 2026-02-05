import { SlideLayout, SlideTitle, SlideTakeaway, SlideContent } from "../SlideLayout";
import { MapPin, FileCheck, Flame, Droplets, TreeDeciduous, Scale, Mountain } from "lucide-react";

const riskLayers = [
  { icon: Droplets, label: "Flood" },
  { icon: Flame, label: "Fire" },
  { icon: TreeDeciduous, label: "Vegetation" },
  { icon: Droplets, label: "Water" },
  { icon: Mountain, label: "Soil" }
];

const complianceChecks = ["CEQA", "NEPA", "Regional Programs"];

export const SolutionSlide = () => {
  return (
    <SlideLayout>
      <SlideTitle>The Solution</SlideTitle>
      <SlideTakeaway>
        Instant, cited, audit-ready environmental reports in under 60 seconds.
      </SlideTakeaway>

      <SlideContent>
        <div className="space-y-10">
          {/* Input/Output row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex items-start gap-5">
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                <MapPin className="w-7 h-7 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-2">Input</h3>
                <p className="text-lg text-muted-foreground">Site address or coordinates, jurisdiction</p>
              </div>
            </div>

            <div className="flex items-start gap-5">
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                <FileCheck className="w-7 h-7 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-2">Output</h3>
                <p className="text-lg text-muted-foreground">Audit-ready report with citations and regulatory references</p>
              </div>
            </div>
          </div>

          {/* Risk Layers */}
          <div>
            <p className="text-sm text-muted-foreground uppercase tracking-wide mb-4">Risk Layers</p>
            <div className="flex flex-wrap gap-3">
              {riskLayers.map((layer) => (
                <span
                  key={layer.label}
                  className="flex items-center gap-2 px-4 py-2.5 bg-card border border-border rounded-xl text-base"
                >
                  <layer.icon className="w-5 h-5 text-primary" />
                  {layer.label}
                </span>
              ))}
            </div>
          </div>

          {/* Compliance Checks */}
          <div>
            <p className="text-sm text-muted-foreground uppercase tracking-wide mb-4">Compliance Checks</p>
            <div className="flex flex-wrap gap-3">
              {complianceChecks.map((check) => (
                <span
                  key={check}
                  className="flex items-center gap-2 px-4 py-2.5 bg-primary/10 text-primary rounded-xl text-base font-medium"
                >
                  <Scale className="w-5 h-5" />
                  {check}
                </span>
              ))}
            </div>
          </div>
        </div>
      </SlideContent>
    </SlideLayout>
  );
};
