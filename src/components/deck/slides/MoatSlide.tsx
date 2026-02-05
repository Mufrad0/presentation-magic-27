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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Static Flywheel - Simplified */}
          <div className="flex flex-col items-center gap-6">
            <div className="w-48 h-48 rounded-full bg-primary/10 border-4 border-primary flex items-center justify-center">
              <div className="text-center px-4">
                <p className="text-2xl font-bold text-primary">Flywheel</p>
                <p className="text-sm text-muted-foreground mt-2">More usage → Better outputs</p>
              </div>
            </div>
            
            {/* Flywheel items as simple list */}
            <div className="grid grid-cols-2 gap-4">
              {flywheelItems.map((item) => (
                <div 
                  key={item}
                  className="bg-card border border-border rounded-lg px-4 py-3 text-center"
                >
                  <p className="text-sm font-medium text-foreground">{item}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Moat items - vertical stack */}
          <div className="space-y-4">
            {moatItems.map((item, index) => {
              const Icon = icons[index];
              return (
                <div
                  key={item.title}
                  className="flex items-start gap-4 bg-card border border-border rounded-xl p-5"
                >
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-foreground">{item.title}</h4>
                    <p className="text-base text-muted-foreground mt-1">{item.description}</p>
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