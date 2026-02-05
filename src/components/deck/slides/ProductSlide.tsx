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
  { icon: Quote, label: "Citations and data sources" },
  { icon: ClipboardList, label: "Permit checklist and timelines" }
];

export const ProductSlide = () => {
  return (
    <SlideLayout>
      <SlideTitle>How It Works</SlideTitle>
      <SlideTakeaway>
        A simple workflow that replaces weeks of manual work.
      </SlideTakeaway>

      <SlideContent>
        <div className="mb-12">
          <div className="flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-0">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + index * 0.15 }}
                className="flex-1 flex items-center"
              >
                <div className="flex items-center gap-4 flex-1">
                  <div className="w-14 h-14 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-xl flex-shrink-0">
                    {step.number}
                  </div>
                  <div className="flex-1">
                    <step.icon className="w-5 h-5 text-primary mb-1" />
                    <p className="text-foreground font-medium">{step.text}</p>
                  </div>
                </div>
                {index < steps.length - 1 && (
                  <div className="hidden md:block w-12 h-0.5 bg-border mx-4" />
                )}
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          <p className="text-sm text-muted-foreground uppercase tracking-wide mb-4">Outputs</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {outputs.map((output, index) => (
              <motion.div
                key={output.label}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.7 + index * 0.1 }}
                className="bg-card border border-border rounded-xl p-4 text-center"
              >
                <output.icon className="w-8 h-8 text-primary mx-auto mb-2" />
                <p className="text-sm font-medium text-foreground">{output.label}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </SlideContent>
    </SlideLayout>
  );
};
