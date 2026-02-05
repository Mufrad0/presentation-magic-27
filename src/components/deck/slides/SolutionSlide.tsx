import { SlideLayout, SlideTitle, SlideTakeaway, SlideContent } from "../SlideLayout";
import { motion } from "framer-motion";
import { MapPin, FileCheck, Flame, Droplets, TreeDeciduous, Scale } from "lucide-react";

const riskLayers = [
  { icon: Droplets, label: "Flood" },
  { icon: Flame, label: "Fire" },
  { icon: TreeDeciduous, label: "Vegetation" },
  { icon: Droplets, label: "Water" }
];

const complianceChecks = ["CEQA", "NEPA", "Regional programs"];

export const SolutionSlide = () => {
  return (
    <SlideLayout>
      <SlideTitle>The Solution</SlideTitle>
      <SlideTakeaway>
        Instant, cited, audit-ready environmental reports in under 60 seconds.
      </SlideTakeaway>

      <SlideContent>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Input</h3>
                  <p className="text-muted-foreground">Site address or coordinates, jurisdiction</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <FileCheck className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Output</h3>
                  <p className="text-muted-foreground">Audit-ready report with citations and regulatory references</p>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <p className="text-sm text-muted-foreground uppercase tracking-wide mb-3">Risk Layers</p>
              <div className="flex flex-wrap gap-2">
                {riskLayers.map((layer) => (
                  <span
                    key={layer.label}
                    className="flex items-center gap-2 px-3 py-1.5 bg-card border border-border rounded-lg text-sm"
                  >
                    <layer.icon className="w-4 h-4 text-primary" />
                    {layer.label}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-6">
              <p className="text-sm text-muted-foreground uppercase tracking-wide mb-3">Compliance Checks</p>
              <div className="flex flex-wrap gap-2">
                {complianceChecks.map((check) => (
                  <span
                    key={check}
                    className="flex items-center gap-2 px-3 py-1.5 bg-primary/10 text-primary rounded-lg text-sm font-medium"
                  >
                    <Scale className="w-4 h-4" />
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
            className="bg-card border border-border rounded-xl p-6"
          >
            <div className="aspect-video bg-muted rounded-lg flex items-center justify-center mb-4">
              <div className="text-center">
                <FileCheck className="w-12 h-12 text-primary mx-auto mb-2" />
                <p className="text-sm text-muted-foreground">Product Mockup</p>
                <p className="text-xs text-muted-foreground">Map layers · Risk summary · Compliance checklist</p>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-2 text-xs">
              <div className="bg-muted/50 rounded p-2 text-center">
                <p className="font-medium text-foreground">Map Panel</p>
              </div>
              <div className="bg-muted/50 rounded p-2 text-center">
                <p className="font-medium text-foreground">Risk Chart</p>
              </div>
              <div className="bg-muted/50 rounded p-2 text-center">
                <p className="font-medium text-foreground">Citations</p>
              </div>
            </div>
          </motion.div>
        </div>
      </SlideContent>
    </SlideLayout>
  );
};
