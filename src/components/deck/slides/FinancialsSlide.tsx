import { SlideLayout, SlideTitle, SlideTakeaway, SlideContent } from "../SlideLayout";
import { financials2026, financials2027 } from "@/data/deckData";
import { motion } from "framer-motion";
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, Cell, LabelList } from "recharts";

const chartData = [
  {
    year: "2026E",
    total: 252500
  },
  {
    year: "2027E",
    total: 1514000
  }
];

export const FinancialsSlide = () => {
  return (
    <SlideLayout>
      <SlideTitle>Financials</SlideTitle>
      <SlideTakeaway>
        Bottom-up revenue projections with 70–80% gross margin.
      </SlideTakeaway>

      <SlideContent>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Chart */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="h-64"
          >
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={chartData} layout="vertical">
                <XAxis type="number" hide />
                <YAxis type="category" dataKey="year" width={60} tick={{ fontSize: 14 }} />
                <Bar dataKey="total" radius={[0, 8, 8, 0]}>
                  {chartData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill="hsl(var(--primary))" />
                  ))}
                  <LabelList 
                    dataKey="total" 
                    position="right" 
                    formatter={(value: number) => value >= 1000000 ? `$${(value / 1000000).toFixed(2)}M` : `$${(value / 1000).toFixed(0)}K`}
                    style={{ fontSize: 14, fill: 'hsl(var(--foreground))', fontWeight: 600 }}
                  />
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </motion.div>

          {/* Breakdown */}
          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-card border border-border rounded-xl p-5"
            >
              <h3 className="font-semibold text-foreground mb-3">2026E Breakdown</h3>
              <div className="space-y-2">
                {financials2026.map((item) => (
                  <div key={item.label} className="flex justify-between text-sm">
                    <span className="text-muted-foreground">{item.label}</span>
                    <span className="font-medium text-foreground">${(item.value / 1000).toFixed(0)}K</span>
                  </div>
                ))}
                <div className="border-t border-border pt-2 flex justify-between text-sm font-semibold">
                  <span className="text-foreground">Total</span>
                  <span className="text-primary">$252.5K</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="bg-card border border-border rounded-xl p-5"
            >
              <h3 className="font-semibold text-foreground mb-3">2027E Breakdown</h3>
              <div className="space-y-2">
                {financials2027.map((item) => (
                  <div key={item.label} className="flex justify-between text-sm">
                    <span className="text-muted-foreground">{item.label}</span>
                    <span className="font-medium text-foreground">${(item.value / 1000).toFixed(0)}K</span>
                  </div>
                ))}
                <div className="border-t border-border pt-2 flex justify-between text-sm font-semibold">
                  <span className="text-foreground">Total</span>
                  <span className="text-primary">$1.514M</span>
                </div>
              </div>
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-sm text-muted-foreground"
            >
              <strong>Gross Margin:</strong> 70–80%
            </motion.p>
          </div>
        </div>
      </SlideContent>
    </SlideLayout>
  );
};
