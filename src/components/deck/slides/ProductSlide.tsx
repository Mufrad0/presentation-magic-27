import { SlideLayout, SlideTitle, SlideTakeaway, SlideContent } from "../SlideLayout";
import { MapPin, Cpu, Download, FileText, AlertTriangle, Quote, ClipboardList, ArrowRight } from "lucide-react";

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
        <div className="space-y-8">
          {/* Steps with connecting arrows */}
          <div className="flex flex-col md:flex-row items-start justify-center gap-4 md:gap-0">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div key={step.number} className="flex items-start">
                  <div className="flex flex-col items-center w-56">
                    <div className="w-14 h-14 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-xl mb-4">
                      {step.number}
                    </div>
                    <div className="flex items-start gap-2">
                      <Icon className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <p className="text-sm text-foreground font-medium leading-snug text-left">{step.text}</p>
                    </div>
                  </div>
                  
                  {/* Arrow connector */}
                  {index < steps.length - 1 && (
                    <ArrowRight className="hidden md:block w-8 h-8 text-muted-foreground mx-4 mt-3 flex-shrink-0" />
                  )}
                </div>
              );
            })}
          </div>

          {/* Outputs */}
          <div className="pt-4">
            <p className="text-xs text-muted-foreground uppercase tracking-widest mb-4 text-center font-medium">Outputs</p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 max-w-3xl mx-auto">
              {outputs.map((output) => {
                const OutputIcon = output.icon;
                return (
                  <div
                    key={output.label}
                    className="bg-card border border-border rounded-xl p-4 text-center hover:border-primary/30 transition-colors"
                  >
                    <OutputIcon className="w-7 h-7 text-primary mx-auto mb-2" />
                    <p className="text-xs font-medium text-foreground">{output.label}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </SlideContent>
    </SlideLayout>
  );
};
