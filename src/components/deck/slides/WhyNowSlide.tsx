import { SlideLayout, SlideTitle, SlideTakeaway, SlideContent } from "../SlideLayout";
import { motion } from "framer-motion";
import { Scale, Clock, Database } from "lucide-react";

const cards = [
  {
    icon: Scale,
    title: "Regulation Pressure",
    stat: "NEPA, CEQA, local ordinances",
    description: "Demand verified environmental data before construction approval"
  },
  {
    icon: Clock,
    title: "Process Bottleneck",
    stat: "14–56 days · $15K–$75K",
    description: "Manual reviews are slow and expensive"
  },
  {
    icon: Database,
    title: "Infrastructure Ready",
    stat: "EPA, FEMA, USGS",
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
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cards.map((card, index) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + index * 0.15 }}
              className="bg-card border border-border rounded-xl p-6"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <card.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-1">{card.title}</h3>
              <p className="text-2xl font-bold text-primary mb-2">{card.stat}</p>
              <p className="text-sm text-muted-foreground">{card.description}</p>
            </motion.div>
          ))}
        </div>
      </SlideContent>
    </SlideLayout>
  );
};
