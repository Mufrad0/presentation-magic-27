import { SlideLayout, SlideTitle, SlideTakeaway, SlideContent } from "../SlideLayout";
import { Clock, FileCheck, Zap } from "lucide-react";

export const CompetitionSlide = () => {
  return (
    <SlideLayout>
      <SlideTitle>Competitive Landscape</SlideTitle>
      <SlideTakeaway>
        Incumbents have relationships. TerraFox wins on speed, repeatability, and audit trail.
      </SlideTakeaway>

      <SlideContent>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Traditional Consultants */}
          <div className="bg-card rounded-2xl p-6 border border-border">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-14 h-14 rounded-full bg-muted flex items-center justify-center">
                <Clock className="w-7 h-7 text-muted-foreground" />
              </div>
              <h4 className="text-xl font-semibold text-foreground">Traditional Consultants</h4>
            </div>
            <div className="space-y-3">
              <p className="text-base text-foreground flex items-center gap-2">
                <span className="text-primary">✓</span> Trusted and comprehensive
              </p>
              <p className="text-base text-destructive flex items-center gap-2">
                <span>✗</span> Slow (14-56 days)
              </p>
              <p className="text-base text-destructive flex items-center gap-2">
                <span>✗</span> Expensive ($15K-$75K)
              </p>
              <p className="text-base text-destructive flex items-center gap-2">
                <span>✗</span> Limited scale
              </p>
            </div>
          </div>

          {/* Point Solutions */}
          <div className="bg-card rounded-2xl p-6 border border-border">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-14 h-14 rounded-full bg-muted flex items-center justify-center">
                <Zap className="w-7 h-7 text-muted-foreground" />
              </div>
              <h4 className="text-xl font-semibold text-foreground">Point Solutions</h4>
            </div>
            <div className="space-y-3">
              <p className="text-base text-foreground flex items-center gap-2">
                <span className="text-primary">✓</span> Narrow automation
              </p>
              <p className="text-base text-destructive flex items-center gap-2">
                <span>✗</span> Not end-to-end
              </p>
              <p className="text-base text-destructive flex items-center gap-2">
                <span>✗</span> Weak audit trail
              </p>
              <p className="text-base text-destructive flex items-center gap-2">
                <span>✗</span> Limited jurisdictions
              </p>
            </div>
          </div>

          {/* TerraFox */}
          <div className="bg-primary/10 rounded-2xl p-6 border-2 border-primary">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-14 h-14 rounded-full bg-primary/20 flex items-center justify-center">
                <FileCheck className="w-7 h-7 text-primary" />
              </div>
              <h4 className="text-xl font-semibold text-primary">TerraFox</h4>
            </div>
            <div className="space-y-3">
              <p className="text-base text-foreground flex items-center gap-2">
                <span className="text-primary">✓</span> Instant (&lt;60 seconds)
              </p>
              <p className="text-base text-foreground flex items-center gap-2">
                <span className="text-primary">✓</span> Cited & audit-ready
              </p>
              <p className="text-base text-foreground flex items-center gap-2">
                <span className="text-primary">✓</span> Jurisdiction-aware
              </p>
              <p className="text-base text-foreground flex items-center gap-2">
                <span className="text-primary">✓</span> Repeatable outputs
              </p>
            </div>
          </div>
        </div>

        {/* Positioning statement */}
        <div className="mt-10 text-center">
          <div className="inline-flex items-center gap-3 bg-primary/10 rounded-full px-6 py-3 border border-primary/30">
            <span className="text-lg font-medium text-foreground">
              Speed + Audit Readiness = <span className="text-primary font-bold">TerraFox Advantage</span>
            </span>
          </div>
        </div>
      </SlideContent>
    </SlideLayout>
  );
};