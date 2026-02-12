import { SlideLayout, SlideTitle, SlideTakeaway, SlideContent } from "../SlideLayout";
import { motion } from "framer-motion";
import { deckTransition, getStaggerDelay } from "../animations";
import danielPhoto from "@/assets/team-daniel.png";
import marrissaPhoto from "@/assets/team-marrissa.png";
import mufradPhoto from "@/assets/team-mufrad.png";
import paulPhoto from "@/assets/team-paul.png";

const founders = [
  {
    name: "Daniel Guzman",
    role: "CEO, Product & Geospatial Automation",
    bullets: [
      "Former Earth System Science and Geospatial Representation Research Assistant at UC Berkeley",
      "Manages permitting workflow design and automation roadmap"
    ],
    photo: danielPhoto
  },
  {
    name: "Marissa Ponce",
    role: "COO, Operations & Compliance Execution",
    bullets: [
      "Environmental Economics and Policy and Sustainable Environmental Design, triple major at UC Berkeley",
      "UI/UX, manages evidence capture, QA, audit-ready process"
    ],
    photo: marrissaPhoto
  },
  {
    name: "Mohammad Mufrad Chowdhury",
    role: "Co-founder, Finance, Pricing & GTM",
    bullets: [
      "Economics & Statistics, London School of Economics; Grinnell College",
      "Manages pricing, fundraising, partnerships, distribution"
    ],
    photo: mufradPhoto
  }
];

export const TeamSlide = () => {
  return (
    <SlideLayout>
      <SlideTitle>Team</SlideTitle>
      <SlideTakeaway>
        Product engineering, compliance execution, and go-to-market, one founding team.
      </SlideTakeaway>

      <SlideContent>
        {/* Founder cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-6">
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
          className="mb-6"
        >
          <p className="text-xs text-muted-foreground uppercase tracking-wide mb-2">Advisor</p>
          <div className="flex items-center gap-4 bg-primary/5 border border-primary/20 rounded-xl px-5 py-4">
            <img
              src={paulPhoto}
              alt="Paul Bozzo"
              className="w-12 h-12 rounded-full object-cover ring-2 ring-primary/30"
            />
            <div className="flex-1">
              <h4 className="font-semibold text-foreground text-sm">Paul Bozzo</h4>
              <p className="text-xs text-primary font-medium mt-0.5">25+ years in startup strategy and fundraising</p>
              <p className="text-xs text-muted-foreground mt-0.5">Supports fundraising narrative and go-to-market execution toward $20K MRR</p>
            </div>
          </div>
        </motion.div>

      </SlideContent>
    </SlideLayout>
  );
};
