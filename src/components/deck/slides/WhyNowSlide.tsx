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

      <SlideContent>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cards.map((card) => {
            const Icon = card.icon;
            return (
              <div
                key={card.title}
                className="bg-card border border-border rounded-2xl p-8"
              >
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-5">
                  <Icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">{card.title}</h3>
                <div className="mb-3">
                  {card.stat.map((line, i) => (
                    <p key={i} className="text-lg font-bold text-primary">{line}</p>
                  ))}
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">{card.description}</p>
              </div>
            );
          })}
        </div>
      </SlideContent>
    </SlideLayout>
  );
};
