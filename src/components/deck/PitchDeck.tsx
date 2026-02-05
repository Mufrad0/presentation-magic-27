import { useState, useEffect, useCallback } from "react";
import { AnimatePresence } from "framer-motion";
import { ProgressBar, SlideIndicator } from "./ProgressBar";
import { TitleSlide } from "./slides/TitleSlide";
import { TeamSlide } from "./slides/TeamSlide";
import { WhyNowSlide } from "./slides/WhyNowSlide";
import { ProblemSlide } from "./slides/ProblemSlide";
import { SolutionSlide } from "./slides/SolutionSlide";
import { ProductSlide } from "./slides/ProductSlide";
import { WhyTerraFoxSlide } from "./slides/WhyTerraFoxSlide";
import { PricingSlide } from "./slides/PricingSlide";
import { MarketSlide } from "./slides/MarketSlide";
import { CompetitionSlide } from "./slides/CompetitionSlide";
import { MoatSlide } from "./slides/MoatSlide";
import { ValidationGTMSlide } from "./slides/ValidationGTMSlide";
import { AskSlide } from "./slides/AskSlide";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const slides = [
  TitleSlide,
  TeamSlide,
  WhyNowSlide,
  ProblemSlide,
  SolutionSlide,
  ProductSlide,
  WhyTerraFoxSlide,
  PricingSlide,
  MarketSlide,
  CompetitionSlide,
  MoatSlide,
  ValidationGTMSlide,
  AskSlide,
];

export const PitchDeck = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const goToSlide = useCallback((index: number) => {
    if (index >= 0 && index < slides.length) {
      setCurrentSlide(index);
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
      <div className="w-full h-full">
        <AnimatePresence mode="wait">
          <CurrentSlideComponent key={currentSlide} />
        </AnimatePresence>
      </div>

      {/* Navigation arrows */}
      <div className="fixed bottom-4 left-4 flex gap-2 z-50">
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

      {/* Progress indicators */}
      <ProgressBar currentSlide={currentSlide} totalSlides={slides.length} />
      <SlideIndicator currentSlide={currentSlide} totalSlides={slides.length} />

      {/* Keyboard hints */}
      <div className="fixed bottom-4 left-1/2 -translate-x-1/2 text-xs text-muted-foreground z-50">
        Use ← → arrows or Space to navigate
      </div>
    </div>
  );
};
