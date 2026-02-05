import { SlideLayout, SlideTitle, SlideTakeaway, SlideContent } from "../SlideLayout";
import { motion } from "framer-motion";
import { Scale, Clock, Database } from "lucide-react";

const cards = [
  {
    icon: Scale,
    title: "Regulation Pressure",
    stat: ["NEPA, CEQA, local ordinances"],
    description: "Demand verified environmental data before construction approval"
  },
  {
    icon: Clock,
    title: "Process Bottleneck",
    stat: ["14–56 days", "$15K–$75K"],
    description: "Manual reviews are slow and expensive"
  },
  {
    icon: Database,
    title: "Infrastructure Ready",
    stat: ["EPA, FEMA, USGS"],
    description: "Geospatial datasets are now accessible at scale"
  }
];

export const WhyNowSlide = () => {
  return (
    <SlideLayout>
      <SlideTitle>Why Now</SlideTitle>
      <SlideTakeaway>
        Regulatory pressure is rising, workflows are broken, and the data infrastructure is finally ready.
      </SlideTakeaway>

      <SlideContent className="flex-1">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 h-full">
          {cards.map((card, index) => {
            const Icon = card.icon;
            return (
              <div
                key={card.title}
                className="bg-card border border-border rounded-2xl p-10 flex flex-col justify-between h-full"
              >
                <div>
                  <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                    <Icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-2xl font-semibold text-foreground mb-3">{card.title}</h3>
                  <div className="mb-4">
                    {card.stat.map((line, i) => (
                      <p key={i} className="text-xl font-bold text-primary">{line}</p>
                    ))}
                  </div>
                </div>
                <p className="text-base text-muted-foreground leading-relaxed">{card.description}</p>
              </div>
            );
          })}
        </div>
      </SlideContent>
    </SlideLayout>
  );
};
