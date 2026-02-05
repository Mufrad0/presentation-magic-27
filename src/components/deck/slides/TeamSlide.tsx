import { SlideLayout, SlideTitle, SlideTakeaway, SlideContent } from "../SlideLayout";
import { proofChips } from "@/data/deckData";
import { motion } from "framer-motion";
import danielPhoto from "@/assets/team-daniel.png";
import marrissaPhoto from "@/assets/team-marrissa.png";
import mufradPhoto from "@/assets/team-mufrad.png";
import paulPhoto from "@/assets/team-paul.png";

const founders = [
  {
    name: "Daniel Guzman",
    role: "CEO",
    proof: "Sustainability researcher, geospatial and permitting workflows, product direction",
    photo: danielPhoto
  },
  {
    name: "Marissa Ponce",
    role: "COO",
    proof: "Environmental economics, operations and compliance execution, former Lawrence Berkeley National Laboratory",
    photo: marrissaPhoto
  },
  {
    name: "Mohammad Mufrad Chowdhury",
    role: "Co-founder",
    proof: "Finance, strategy, analytics at London School of Economics, pricing, go to market, fundraising",
    photo: mufradPhoto
  }
];

const advisor = {
  name: "Paul Bozzo",
  role: "Advisor",
  proof: "Startup strategy and fundraising, execution support",
  photo: paulPhoto
};

export const TeamSlide = () => {
  return (
    <SlideLayout>
      <SlideTitle>Team</SlideTitle>
      <SlideTakeaway>
        Domain, geospatial automation, and finance plus go-to-market execution in one founding team.
      </SlideTakeaway>

      <SlideContent>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          {founders.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + index * 0.1 }}
              className="bg-card border border-border rounded-xl p-5"
            >
              <img 
                src={member.photo} 
                alt={member.name}
                className="w-16 h-16 rounded-full object-cover mb-3"
              />
              <h3 className="text-lg font-semibold text-foreground">{member.name}</h3>
              <p className="text-primary font-medium text-sm mb-1">{member.role}</p>
              <p className="text-xs text-muted-foreground leading-relaxed">{member.proof}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mb-6"
        >
          <p className="text-xs text-muted-foreground uppercase tracking-wide mb-2">Advisor</p>
          <div className="flex items-center gap-3">
            <img 
              src={advisor.photo} 
              alt={advisor.name}
              className="w-12 h-12 rounded-full object-cover"
            />
            <div>
              <h4 className="font-semibold text-foreground text-sm">{advisor.name}</h4>
              <p className="text-xs text-muted-foreground">{advisor.proof}</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="flex flex-wrap gap-2"
        >
          {proofChips.map((chip, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full"
            >
              {chip}
            </span>
          ))}
        </motion.div>
      </SlideContent>
    </SlideLayout>
  );
};
