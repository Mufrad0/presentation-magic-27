import { SlideLayout, SlideTitle, SlideTakeaway, SlideContent } from "../SlideLayout";
import { moatItems } from "@/data/deckData";
import { Map, Database, Workflow, Users } from "lucide-react";

const icons = [Map, Database, Workflow, Users];

const flywheelItems = [
  "More Jurisdictions",
  "More Users", 
  "Better Outputs",
  "More Templates"
];

export const MoatSlide = () => {
  return (
    <SlideLayout>
      <SlideTitle>Why We Win</SlideTitle>
      <SlideTakeaway>
        Defensibility from jurisdiction logic, reproducible data pipelines, and workflow integration.
      </SlideTakeaway>

      <SlideContent>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          {/* Flywheel section - compact */}
          <div className="flex flex-col items-center gap-4">
            <div className="w-36 h-36 rounded-full bg-primary/10 border-4 border-primary flex items-center justify-center">
              <div className="text-center px-3">
                <p className="text-lg font-bold text-primary">Flywheel</p>
                <p className="text-xs text-muted-foreground mt-1">More usage → Better outputs</p>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-2">
              {flywheelItems.map((item) => (
                <div 
                  key={item}
                  className="bg-card border border-border rounded-lg px-3 py-2 text-center"
                >
                  <p className="text-sm font-medium text-foreground">{item}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Moat items - compact */}
          <div className="space-y-2">
            {moatItems.map((item, index) => {
              const Icon = icons[index];
              return (
                <div
                  key={item.title}
                  className="flex items-start gap-3 bg-card border border-border rounded-xl p-3"
                >
                  <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Icon className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-foreground">{item.title}</h4>
                    <p className="text-xs text-muted-foreground mt-0.5">{item.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </SlideContent>
    </SlideLayout>
  );
};