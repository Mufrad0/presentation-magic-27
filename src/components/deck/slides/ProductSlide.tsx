import { SlideLayout, SlideTitle, SlideTakeaway, SlideContent } from "../SlideLayout";
import { motion } from "framer-motion";
import { MapPin, Cpu, Download, FileText, AlertTriangle, Quote, ClipboardList } from "lucide-react";

const steps = [
  { number: "1", icon: MapPin, text: "Enter site and jurisdiction" },
  { number: "2", icon: Cpu, text: "TerraFox runs geospatial analytics and compliance checks" },
  { number: "3", icon: Download, text: "Download a cited report, ready for review and filing" }
];

const outputs = [
  { icon: FileText, label: "Risk summary" },
  { icon: AlertTriangle, label: "Mitigation prompts" },
  { icon: Quote, label: "Citations & sources" },
  { icon: ClipboardList, label: "Permit checklist" }
];

export const ProductSlide = () => {
  return (
    <SlideLayout>
      <SlideTitle>How It Works</SlideTitle>
      <SlideTakeaway>
        A simple workflow that replaces weeks of manual work.
      </SlideTakeaway>

      <SlideContent>
        <div className="space-y-12">
          {/* Steps */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + index * 0.15 }}
                className="relative"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="w-20 h-20 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-3xl mb-6">
                    {step.number}
                  </div>
                  <step.icon className="w-8 h-8 text-primary mb-4" />
                  <p className="text-lg text-foreground font-medium leading-relaxed">{step.text}</p>
                </div>
                
                {/* Arrow connector */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-10 -right-4 w-8 h-0.5 bg-border" />
                )}
              </motion.div>
            ))}
          </div>

          {/* Outputs */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            <p className="text-sm text-muted-foreground uppercase tracking-wide mb-6 text-center">Outputs</p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {outputs.map((output, index) => (
                <motion.div
                  key={output.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.7 + index * 0.1 }}
                  className="bg-card border border-border rounded-2xl p-6 text-center"
                >
                  <output.icon className="w-10 h-10 text-primary mx-auto mb-4" />
                  <p className="text-base font-medium text-foreground">{output.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </SlideContent>
    </SlideLayout>
  );
};
