import { useState, useEffect, useCallback, useRef } from "react";
import { AnimatePresence } from "framer-motion";
import { ProgressBar, SlideIndicator } from "./ProgressBar";
import { PDFExportButton } from "./PDFExportButton";
import { TitleSlide } from "./slides/TitleSlide";
import { TeamSlide } from "./slides/TeamSlide";

import { ProblemSlide } from "./slides/ProblemSlide";
import { SolutionSlide } from "./slides/SolutionSlide";
import { ProductSlide } from "./slides/ProductSlide";
import { WhyTerraFoxSlide } from "./slides/WhyTerraFoxSlide";
import { PricingSlide } from "./slides/PricingSlide";
import { MarketSlide } from "./slides/MarketSlide";
import { CompetitionSlide } from "./slides/CompetitionSlide";
import { MoatSlide } from "./slides/MoatSlide";
import { ValidationGTMSlide } from "./slides/ValidationGTMSlide";
import { TractionSlide } from "./slides/TractionSlide";
import { FinancialsSlide } from "./slides/FinancialsSlide";
import { AskSlide } from "./slides/AskSlide";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const slides = [
  TitleSlide,
  TeamSlide,
  ProblemSlide,
  SolutionSlide,
  ProductSlide,
  WhyTerraFoxSlide,
  PricingSlide,
  MarketSlide,
  CompetitionSlide,
  MoatSlide,
  ValidationGTMSlide,
  TractionSlide,
  FinancialsSlide,
  AskSlide,
];

export const PitchDeck = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isExporting, setIsExporting] = useState(false);
  const slidesRef = useRef<HTMLDivElement>(null);

  const handleExportStart = useCallback(() => setIsExporting(true), []);
  const handleExportEnd = useCallback(() => setIsExporting(false), []);

  const goToSlide = useCallback((index: number) => {
    if (index >= 0 && index < slides.length) {
      setCurrentSlide(index);
    }
  }, []);

  const goToSlideAsync = useCallback(async (index: number) => {
    if (index >= 0 && index < slides.length) {
      setCurrentSlide(index);
      await new Promise((resolve) => {
        requestAnimationFrame(() => requestAnimationFrame(() => {
          setTimeout(resolve, 300);
        }));
      });
    }
  }, []);

  const nextSlide = useCallback(() => {
    goToSlide(currentSlide + 1);
  }, [currentSlide, goToSlide]);

  const prevSlide = useCallback(() => {
    goToSlide(currentSlide - 1);
  }, [currentSlide, goToSlide]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === " " || e.key === "Enter") {
        e.preventDefault();
        nextSlide();
      } else if (e.key === "ArrowLeft") {
        e.preventDefault();
        prevSlide();
      } else if (e.key === "Home") {
        e.preventDefault();
        goToSlide(0);
      } else if (e.key === "End") {
        e.preventDefault();
        goToSlide(slides.length - 1);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [nextSlide, prevSlide, goToSlide]);

  const CurrentSlideComponent = slides[currentSlide];

  return (
    <div className="relative w-full h-screen bg-background overflow-hidden">
      {/* Slide content */}
      <div ref={slidesRef} data-pdf-slide-root="true" className="w-full h-full">
        {isExporting ? (
          <CurrentSlideComponent key={currentSlide} />
        ) : (
          <AnimatePresence mode="wait">
            <CurrentSlideComponent key={currentSlide} />
          </AnimatePresence>
        )}
      </div>

      {/* Navigation arrows */}
      <div className="fixed bottom-6 left-6 flex gap-2 z-50">
        <Button
          variant="outline"
          size="icon"
          onClick={prevSlide}
          disabled={currentSlide === 0}
          className="h-10 w-10"
        >
          <ChevronLeft className="h-4 w-4" />
        </Button>
        <Button
          variant="outline"
          size="icon"
          onClick={nextSlide}
          disabled={currentSlide === slides.length - 1}
          className="h-10 w-10"
        >
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>

      {/* PDF Export */}
      <div className="fixed top-6 right-6 z-50">
        <PDFExportButton
          slidesRef={slidesRef}
          totalSlides={slides.length}
          onSlideChange={goToSlideAsync}
          onExportStart={handleExportStart}
          onExportEnd={handleExportEnd}
        />
      </div>

      {/* Progress indicators */}
      <ProgressBar currentSlide={currentSlide} totalSlides={slides.length} />
      <SlideIndicator currentSlide={currentSlide} totalSlides={slides.length} />

      {/* Keyboard hints */}
      <div className="fixed bottom-6 left-1/2 -translate-x-1/2 text-xs text-muted-foreground z-50">
        Use ← → arrows or Space to navigate
      </div>
    </div>
  );
};
