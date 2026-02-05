import { SlideLayout, SlideTitle, SlideTakeaway, SlideContent } from "../SlideLayout";
import { teamMembers, proofChips } from "@/data/deckData";
import { motion } from "framer-motion";
import { User } from "lucide-react";

export const TeamSlide = () => {
  const founders = teamMembers.filter(m => !m.isAdvisor);
  const advisors = teamMembers.filter(m => m.isAdvisor);

  return (
    <SlideLayout>
      <SlideTitle>Team</SlideTitle>
      <SlideTakeaway>
        Domain, geospatial automation, and finance plus go-to-market execution in one founding team.
      </SlideTakeaway>

      <SlideContent>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {founders.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + index * 0.1 }}
              className="bg-card border border-border rounded-xl p-6"
            >
              <div className="w-16 h-16 rounded-full bg-muted flex items-center justify-center mb-4">
                <User className="w-8 h-8 text-muted-foreground" />
              </div>
              <h3 className="text-xl font-semibold text-foreground">{member.name}</h3>
              <p className="text-primary font-medium mb-2">{member.role}</p>
              <p className="text-sm text-muted-foreground">{member.proof}</p>
            </motion.div>
          ))}
        </div>

        {advisors.length > 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mb-8"
          >
            <p className="text-sm text-muted-foreground uppercase tracking-wide mb-3">Advisor</p>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center">
                <User className="w-6 h-6 text-muted-foreground" />
              </div>
              <div>
                <h4 className="font-semibold text-foreground">{advisors[0].name}</h4>
                <p className="text-sm text-muted-foreground">{advisors[0].proof}</p>
              </div>
            </div>
          </motion.div>
        )}

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="flex flex-wrap gap-2"
        >
          {proofChips.map((chip, index) => (
            <span
              key={index}
              className="px-3 py-1.5 bg-primary/10 text-primary text-sm rounded-full"
            >
              {chip}
            </span>
          ))}
        </motion.div>
      </SlideContent>
    </SlideLayout>
  );
};
