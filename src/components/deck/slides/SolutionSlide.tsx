import { SlideLayout, SlideTitle, SlideTakeaway, SlideContent } from "../SlideLayout";
import { MapPin, FileCheck, Flame, Droplets, TreeDeciduous, Scale, Mountain, Zap, Clock, Shield } from "lucide-react";
import { motion } from "framer-motion";

const riskLayers = [
  { icon: Droplets, label: "Flood" },
  { icon: Flame, label: "Fire" },
  { icon: TreeDeciduous, label: "Vegetation" },
  { icon: Mountain, label: "Soil" }
];

const jurisdictions = {
  US: ["Municipality", "City", "State", "Federal"],
  Canada: ["Municipality", "City", "Province", "Federal"]
};

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
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1, duration: 0.45, ease: [0.4, 0, 0.2, 1] }}
              className="bg-card border border-border rounded-2xl p-6"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground uppercase tracking-wide mb-1">Input</p>
                  <h3 className="text-lg font-semibold text-foreground">Site address + jurisdiction</h3>
                </div>
              </div>
            </motion.div>

            {/* Arrow */}
            <motion.div
              initial={{ opacity: 0, scaleY: 0 }}
              animate={{ opacity: 1, scaleY: 1 }}
              transition={{ delay: 0.25, duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
              className="flex justify-center origin-top"
            >
              <div className="w-0.5 h-8 bg-primary/30 relative">
                <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-t-[8px] border-t-primary/30" />
              </div>
            </motion.div>

            {/* Output */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.35, duration: 0.45, ease: [0.4, 0, 0.2, 1] }}
              className="bg-primary/10 border-2 border-primary rounded-2xl p-6"
            >
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
            </motion.div>

            {/* Benefits row */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.45, ease: [0.4, 0, 0.2, 1] }}
              className="flex gap-3 justify-center"
            >
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.55 + index * 0.08, duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
                  className="flex items-center gap-2 px-4 py-2 bg-card border border-border rounded-full"
                >
                  <benefit.icon className="w-4 h-4 text-primary" />
                  <span className="text-sm font-medium text-foreground">{benefit.label}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Right: What TerraFox analyzes */}
          <div className="space-y-6">
            {/* Risk Layers */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.45, ease: [0.4, 0, 0.2, 1] }}
            >
              <p className="text-xs text-muted-foreground uppercase tracking-widest mb-3 font-medium">Risk Layers Analyzed</p>
              <div className="grid grid-cols-2 gap-2">
                {riskLayers.map((layer, index) => (
                  <motion.div
                    key={layer.label}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.3 + index * 0.08, duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
                    className="flex items-center gap-3 px-4 py-3 bg-card border border-border rounded-xl"
                  >
                    <layer.icon className="w-5 h-5 text-primary" />
                    <span className="text-sm font-medium text-foreground">{layer.label}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Jurisdiction Coverage */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.45, ease: [0.4, 0, 0.2, 1] }}
            >
              <p className="text-xs text-muted-foreground uppercase tracking-widest mb-3 font-medium">Jurisdiction Coverage</p>
              <div className="grid grid-cols-2 gap-4">
                {Object.entries(jurisdictions).map(([country, levels], countryIndex) => (
                  <motion.div
                    key={country}
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.6 + countryIndex * 0.1, duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
                    className="space-y-2"
                  >
                    <p className="text-sm font-semibold text-primary">{country}</p>
                    <div className="space-y-1">
                      {levels.map((level, levelIndex) => (
                        <motion.div
                          key={level}
                          initial={{ opacity: 0, x: 8 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.65 + countryIndex * 0.1 + levelIndex * 0.05, duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
                          className="flex items-center gap-2 px-3 py-2 bg-primary/10 border border-primary/20 rounded-lg"
                        >
                          <Scale className="w-4 h-4 text-primary" />
                          <span className="text-xs font-medium text-foreground">{level}</span>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </SlideContent>
    </SlideLayout>
  );
};
