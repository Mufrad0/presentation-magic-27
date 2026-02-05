import { SlideLayout, SlideTitle, SlideTakeaway, SlideContent } from "../SlideLayout";
import { financials2026, financials2027 } from "@/data/deckData";
import { motion } from "framer-motion";
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, Cell, LabelList } from "recharts";

const chartData = [
  {
    year: "2026E",
    total: 455000
  },
  {
    year: "2027E",
    total: 2000000
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
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
          {/* Chart */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <div className="h-32">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={chartData} layout="vertical">
                  <XAxis type="number" hide />
                  <YAxis type="category" dataKey="year" width={50} tick={{ fontSize: 12 }} />
                  <Bar dataKey="total" radius={[0, 6, 6, 0]}>
                    {chartData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill="hsl(var(--primary))" />
                    ))}
                    <LabelList 
                      dataKey="total" 
                      position="right" 
                      formatter={(value: number) => value >= 1000000 ? `$${(value / 1000000).toFixed(2)}M` : `$${(value / 1000).toFixed(0)}K`}
                      style={{ fontSize: 12, fill: 'hsl(var(--foreground))', fontWeight: 600 }}
                    />
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
            <div className="bg-accent rounded-lg px-3 py-2 mt-3 inline-block">
              <p className="text-xs text-foreground">
                <strong>Gross Margin:</strong> 70–80%
              </p>
            </div>
          </motion.div>

          {/* 2026 Breakdown */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-card border border-border rounded-xl p-4"
          >
            <h3 className="font-semibold text-foreground mb-2 text-sm">2026E Breakdown</h3>
            <div className="space-y-1.5">
              {financials2026.map((item) => (
                <div key={item.label} className="flex justify-between text-xs">
                  <span className="text-muted-foreground">{item.label}</span>
                  <span className="font-medium text-foreground">${(item.value / 1000).toFixed(0)}K</span>
                </div>
              ))}
              <div className="border-t border-border pt-1.5 flex justify-between text-xs font-semibold">
                <span className="text-foreground">Total</span>
                <span className="text-primary">$455K</span>
              </div>
            </div>
          </motion.div>

          {/* 2027 Breakdown */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-card border border-border rounded-xl p-4"
          >
            <h3 className="font-semibold text-foreground mb-2 text-sm">2027E Breakdown</h3>
            <div className="space-y-1.5">
              {financials2027.map((item) => (
                <div key={item.label} className="flex justify-between text-xs">
                  <span className="text-muted-foreground">{item.label}</span>
                  <span className="font-medium text-foreground">${(item.value / 1000).toFixed(0)}K</span>
                </div>
              ))}
              <div className="border-t border-border pt-1.5 flex justify-between text-xs font-semibold">
                <span className="text-foreground">Total</span>
                <span className="text-primary">$2M</span>
              </div>
            </div>
          </motion.div>
        </div>
      </SlideContent>
    </SlideLayout>
  );
};
