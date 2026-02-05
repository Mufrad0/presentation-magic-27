import { SlideLayout, SlideTitle, SlideTakeaway, SlideContent } from "../SlideLayout";
import { moatItems } from "@/data/deckData";
import { Map, Database, Workflow, Users } from "lucide-react";

const icons = [Map, Database, Workflow, Users];

export const MoatSlide = () => {
  return (
    <SlideLayout>
      <SlideTitle>Why We Win</SlideTitle>
      <SlideTakeaway>
        Defensibility from jurisdiction logic, reproducible data pipelines, and workflow integration.
      </SlideTakeaway>

      <SlideContent>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {moatItems.map((item, index) => {
            const Icon = icons[index];
            return (
              <div
                key={item.title}
                className="flex items-start gap-4 bg-card border border-border rounded-xl p-6"
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
      </SlideContent>
    </SlideLayout>
  );
};
