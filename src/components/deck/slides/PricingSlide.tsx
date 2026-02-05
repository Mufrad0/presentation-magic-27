import { SlideLayout, SlideTitle, SlideTakeaway, SlideContent } from "../SlideLayout";
import { pricingTiers } from "@/data/deckData";
import { motion } from "framer-motion";
import { Check, Star } from "lucide-react";

export const PricingSlide = () => {
  return (
    <SlideLayout>
      <SlideTitle>Pricing</SlideTitle>
      <SlideTakeaway>
        Per-report pricing plus subscriptions for teams, plus enterprise volume.
      </SlideTakeaway>

      <SlideContent>
        <p className="text-lg text-foreground mb-6">Per report + subscriptions for teams</p>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
          {pricingTiers.map((tier, index) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + index * 0.1 }}
              className={`relative bg-card border rounded-xl p-6 ${
                tier.popular 
                  ? "border-primary ring-2 ring-primary/20" 
                  : "border-border"
              }`}
            >
              {tier.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="flex items-center gap-1 px-3 py-1 bg-primary text-primary-foreground text-xs font-medium rounded-full">
                    <Star className="w-3 h-3" /> Popular
                  </span>
                </div>
              )}
              <h3 className="text-lg font-semibold text-foreground mb-1">{tier.name}</h3>
              <p className="text-3xl font-bold text-primary mb-1">
                {tier.price}
                {tier.price !== "Custom" && <span className="text-sm font-normal text-muted-foreground">/site</span>}
              </p>
              <p className="text-sm text-muted-foreground">{tier.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="flex items-center gap-2 text-sm text-muted-foreground bg-muted/50 rounded-lg px-4 py-3"
        >
          <Check className="w-4 h-4 text-primary" />
          <span><strong>Teams:</strong> Subscription bundles available for repeat workflows and portfolio monitoring</span>
        </motion.div>
      </SlideContent>
    </SlideLayout>
  );
};
