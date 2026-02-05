import { SlideLayout, SlideTitle, SlideTakeaway, SlideContent } from "../SlideLayout";
import { motion } from "framer-motion";
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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="space-y-8"
          >
            <div className="space-y-6">
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
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-card border border-border rounded-2xl p-8"
          >
            <div className="aspect-[4/3] bg-muted rounded-xl flex items-center justify-center mb-6">
              <div className="text-center p-6">
                <FileCheck className="w-16 h-16 text-primary mx-auto mb-4" />
                <p className="text-lg font-medium text-foreground">Product Mockup</p>
                <p className="text-muted-foreground mt-2">Map layers · Risk summary · Compliance checklist</p>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-4">
              <div className="bg-muted/50 rounded-xl p-4 text-center">
                <p className="font-medium text-foreground">Map Panel</p>
              </div>
              <div className="bg-muted/50 rounded-xl p-4 text-center">
                <p className="font-medium text-foreground">Risk Chart</p>
              </div>
              <div className="bg-muted/50 rounded-xl p-4 text-center">
                <p className="font-medium text-foreground">Citations</p>
              </div>
            </div>
          </motion.div>
        </div>
      </SlideContent>
    </SlideLayout>
  );
};
