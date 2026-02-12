import { SlideLayout, SlideTitle, SlideTakeaway, SlideContent } from "../SlideLayout";
import { proofChips } from "@/data/deckData";
import { motion } from "framer-motion";
import { deckTransition, getStaggerDelay } from "../animations";
import { MapPin, FileCheck, DollarSign, Users } from "lucide-react";
import danielPhoto from "@/assets/team-daniel.png";
import marrissaPhoto from "@/assets/team-marrissa.png";
import mufradPhoto from "@/assets/team-mufrad.png";
import paulPhoto from "@/assets/team-paul.png";
import terrafoxLogoBlack from "@/assets/terrafox-logo-black.png";
import terrafoxLogoGreen from "@/assets/terrafox-logo-green.png";

const founders = [
  {
    name: "Daniel Guzman",
    role: "CEO, Product & Geospatial Automation",
    bullets: [
      "UC Berkeley, geospatial research & sustainability workflows",
      "Owns permitting workflow design and automation roadmap"
    ],
    photo: danielPhoto
  },
  {
    name: "Marissa Ponce",
    role: "COO, Operations & Compliance Execution",
    bullets: [
      "Environmental economics & compliance ops, Lawrence Berkeley National Laboratory",
      "Owns evidence capture, QA, audit-ready process"
    ],
    photo: marrissaPhoto
  },
  {
    name: "Mohammad Mufrad Chowdhury",
    role: "Co-founder, Finance, Pricing & GTM",
    bullets: [
      "Economics & Statistics, London School of Economics",
      "Owns pricing, fundraising, partnerships, distribution"
    ],
    photo: mufradPhoto
  }
];

const coverageChips = [
  { label: "Jurisdictions & permitting workflows", icon: MapPin },
  { label: "Evidence, citations, audit readiness", icon: FileCheck },
  { label: "Pricing & packaging", icon: DollarSign },
  { label: "Distribution & partnerships", icon: Users },
];

export const TeamSlide = () => {
  return (
    <SlideLayout>
      {/* Header with logos */}
      <div className="flex items-start justify-between">
        <div>
          <SlideTitle>Team</SlideTitle>
          <SlideTakeaway>
            Built across geospatial workflows, environmental compliance execution, and pricing-led go-to-market.
          </SlideTakeaway>
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, ...deckTransition }}
          className="hidden md:flex items-center gap-3 shrink-0 mt-2"
        >
          <img src={terrafoxLogoBlack} alt="TerraFox" className="h-8 w-8 opacity-60" />
          <img src={terrafoxLogoGreen} alt="TerraFox" className="h-8 w-8 opacity-60" />
        </motion.div>
      </div>

      <SlideContent>
        {/* Founder cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-5">
          {founders.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: getStaggerDelay(index, 0.2), ...deckTransition }}
              className="bg-card border border-border rounded-xl p-5"
            >
              <img
                src={member.photo}
                alt={member.name}
                className="w-14 h-14 rounded-full object-cover mb-3"
              />
              <h3 className="text-base font-semibold text-foreground">{member.name}</h3>
              <p className="text-primary font-medium text-xs mb-3">{member.role}</p>
              <ul className="space-y-1.5">
                {member.bullets.map((bullet, i) => (
                  <li key={i} className="text-xs text-muted-foreground leading-relaxed flex items-start gap-1.5">
                    <span className="text-primary mt-0.5 shrink-0">•</span>
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Advisor strip */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.55, ...deckTransition }}
          className="flex items-center gap-3 px-4 py-2.5 bg-muted/50 rounded-lg border border-border mb-5"
        >
          <img
            src={paulPhoto}
            alt="Paul Bozzo"
            className="w-9 h-9 rounded-full object-cover shrink-0"
          />
          <p className="text-sm text-foreground">
            <span className="text-muted-foreground">Advisor:</span>{" "}
            <span className="font-medium">Paul Bozzo</span>
            <span className="text-muted-foreground"> · Startup strategy & fundraising, Tech Futures Group</span>
          </p>
        </motion.div>

        {/* Coverage chips */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.65, ...deckTransition }}
          className="flex flex-wrap gap-2"
        >
          {coverageChips.map((chip, index) => {
            const Icon = chip.icon;
            return (
              <span
                key={index}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-primary/10 text-primary text-xs rounded-full"
              >
                <Icon className="w-3.5 h-3.5" />
                {chip.label}
              </span>
            );
          })}
        </motion.div>
      </SlideContent>
    </SlideLayout>
  );
};
