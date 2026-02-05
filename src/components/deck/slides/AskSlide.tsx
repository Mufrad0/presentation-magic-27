import { SlideLayout, SlideTitle, SlideTakeaway, SlideContent } from "../SlideLayout";
import { financials2026, financials2027, tractionItems, useOfFunds } from "@/data/deckData";
import { motion } from "framer-motion";
import { CheckCircle2, Mail, Globe } from "lucide-react";
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, Cell, LabelList } from "recharts";

const chartData = [
  {
    year: "2026E",
    Reports: 125000,
    Subscriptions: 67500,
    Enterprise: 60000,
    total: 252500
  },
  {
    year: "2027E",
    Reports: 400000,
    Subscriptions: 714000,
    Enterprise: 400000,
    total: 1514000
  }
];

const colors = ["hsl(var(--primary))", "hsl(var(--primary) / 0.7)", "hsl(var(--primary) / 0.4)"];

export const AskSlide = () => {
  const total2026 = financials2026.reduce((acc, item) => acc + item.value, 0);
  
  return (
    <SlideLayout>
      <SlideTitle>Traction, Financials & The Ask</SlideTitle>
      <SlideTakeaway>
        Clear milestones, bottom-up revenue, and a clean $500K pre-seed ask.
      </SlideTakeaway>

      <SlideContent>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Traction */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-card border border-border rounded-xl p-5"
          >
            <h3 className="font-semibold text-foreground mb-4">Traction & Milestones</h3>
            <ul className="space-y-2">
              {tractionItems.map((item, index) => (
                <li key={index} className="flex items-start gap-2 text-sm">
                  <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Financials Chart */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-card border border-border rounded-xl p-5"
          >
            <h3 className="font-semibold text-foreground mb-2">Financials (Base Case)</h3>
            <div className="h-40 mb-4">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={chartData} layout="vertical">
                  <XAxis type="number" hide />
                  <YAxis type="category" dataKey="year" width={50} tick={{ fontSize: 12 }} />
                  <Bar dataKey="total" radius={[0, 4, 4, 0]}>
                    {chartData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill="hsl(var(--primary))" />
                    ))}
                    <LabelList 
                      dataKey="total" 
                      position="right" 
                      formatter={(value: number) => `$${(value / 1000).toFixed(0)}K`}
                      style={{ fontSize: 11, fill: 'hsl(var(--foreground))' }}
                    />
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
            <div className="text-xs text-muted-foreground space-y-1">
              <p><strong>2026E:</strong> $252.5K</p>
              <p><strong>2027E:</strong> $1.514M</p>
              <p><strong>Gross Margin:</strong> 70–80%</p>
            </div>
          </motion.div>

          {/* The Ask */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-primary/5 border border-primary rounded-xl p-5"
          >
            <h3 className="font-semibold text-primary mb-4">The Ask</h3>
            <div className="space-y-3 mb-4">
              <div>
                <p className="text-sm text-muted-foreground">Raising</p>
                <p className="text-2xl font-bold text-foreground">$500K</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Instrument</p>
                <p className="font-semibold text-foreground">Post-Money SAFE</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Valuation Cap</p>
                <p className="font-semibold text-foreground">$3.33M post-money</p>
              </div>
            </div>

            <div className="border-t border-primary/20 pt-4">
              <p className="text-xs text-muted-foreground uppercase tracking-wide mb-2">Use of Funds</p>
              <div className="space-y-1">
                {useOfFunds.map((item) => (
                  <div key={item.label} className="text-xs">
                    <span className="font-medium text-foreground">{item.label}:</span>{" "}
                    <span className="text-muted-foreground">{item.description}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="border-t border-primary/20 pt-4 mt-4">
              <div className="flex items-center gap-2 text-sm">
                <Mail className="w-4 h-4 text-primary" />
                <span className="text-foreground">daniel@terrafox.site</span>
              </div>
              <div className="flex items-center gap-2 text-sm mt-1">
                <Globe className="w-4 h-4 text-primary" />
                <span className="text-foreground">terrafox.site</span>
              </div>
            </div>
          </motion.div>
        </div>
      </SlideContent>
    </SlideLayout>
  );
};
