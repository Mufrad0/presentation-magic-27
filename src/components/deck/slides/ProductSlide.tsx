import { SlideLayout, SlideTitle, SlideTakeaway, SlideContent } from "../SlideLayout";
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
        <div className="space-y-10">
          {/* Steps */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <div key={step.number} className="relative">
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-2xl mb-4">
                    {step.number}
                  </div>
                  <step.icon className="w-7 h-7 text-primary mb-3" />
                  <p className="text-base text-foreground font-medium leading-relaxed">{step.text}</p>
                </div>
                
                {/* Arrow connector */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-8 -right-4 w-8 h-0.5 bg-border" />
                )}
              </div>
            ))}
          </div>

          {/* Outputs */}
          <div>
            <p className="text-sm text-muted-foreground uppercase tracking-wide mb-4 text-center">Outputs</p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {outputs.map((output) => (
                <div
                  key={output.label}
                  className="bg-card border border-border rounded-2xl p-5 text-center"
                >
                  <output.icon className="w-8 h-8 text-primary mx-auto mb-3" />
                  <p className="text-sm font-medium text-foreground">{output.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </SlideContent>
    </SlideLayout>
  );
};
