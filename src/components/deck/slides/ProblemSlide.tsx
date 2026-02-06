import { SlideLayout, SlideTitle, SlideTakeaway, SlideContent } from "../SlideLayout";
import { motion } from "framer-motion";
import { Clock, DollarSign, Users, AlertTriangle, Scale } from "lucide-react";

const stats = [
  { icon: Clock, label: "Turnaround", value: "14–56 days" },
  { icon: DollarSign, label: "Cost", value: "$15K–$75K" },
  { icon: Users, label: "Consultant Capacity", value: "10–20/month" },
  { icon: Scale, label: "Regulation Pressure", value: "Growing" }
];

const workflowSteps = [
  "Pull datasets",
  "Write narrative",
  "Stitch citations",
  "Repeat per jurisdiction"
];

export const ProblemSlide = () => {
  return (
    <SlideLayout>
      <SlideTitle>The Problem</SlideTitle>
      <SlideTakeaway>
        Manual compliance slows projects, drives costs, and creates deal risk.
      </SlideTakeaway>

      <SlideContent>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-xl text-foreground mb-8"
        >
          Every construction project needs environmental screening and compliance documentation.
        </motion.p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mb-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 + index * 0.1 }}
              className="bg-destructive/10 border border-destructive/20 rounded-xl p-6 text-center"
            >
              <stat.icon className="w-8 h-8 text-destructive mx-auto mb-3" />
              <p className="text-3xl font-bold text-foreground mb-1">{stat.value}</p>
              <p className="text-sm text-muted-foreground">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="bg-muted/50 rounded-xl p-6"
        >
          <p className="text-sm text-muted-foreground uppercase tracking-wide mb-3">Today's Workflow</p>
          <div className="flex flex-wrap gap-2 items-center">
            {workflowSteps.map((step, index) => (
              <span key={step} className="flex items-center">
                <span className="px-3 py-1.5 bg-card border border-border rounded-lg text-sm">
                  {step}
                </span>
                {index < workflowSteps.length - 1 && (
                  <span className="mx-2 text-muted-foreground">→</span>
                )}
              </span>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="flex items-center gap-3 mt-6 p-4 bg-destructive/5 rounded-lg"
        >
          <AlertTriangle className="w-5 h-5 text-destructive flex-shrink-0" />
          <p className="text-foreground font-medium">
            Outcome: delays, rework, and stalled deals
          </p>
        </motion.div>
      </SlideContent>
    </SlideLayout>
  );
};
