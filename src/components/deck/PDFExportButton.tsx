import { useState } from "react";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import { Button } from "@/components/ui/button";
import { Download, Loader2 } from "lucide-react";

interface PDFExportButtonProps {
  slidesRef: React.RefObject<HTMLDivElement>;
  totalSlides: number;
  onSlideChange: (index: number) => Promise<void>;
}

export const PDFExportButton = ({ slidesRef, totalSlides, onSlideChange }: PDFExportButtonProps) => {
  const [isExporting, setIsExporting] = useState(false);

  const exportToPDF = async () => {
    if (!slidesRef.current) return;
    
    setIsExporting(true);
    
    // Add class to disable animations
    document.body.classList.add('pdf-exporting');
    
    try {
      const pdf = new jsPDF({
        orientation: "landscape",
        unit: "px",
        format: [1920, 1080]
      });

      const container = slidesRef.current;

      for (let i = 0; i < totalSlides; i++) {
        // Change to target slide
        await onSlideChange(i);
        
        // Wait for slide to render (reduced since no animations)
        await new Promise(resolve => setTimeout(resolve, 300));

        const canvas = await html2canvas(container, {
          scale: 2,
          useCORS: true,
          allowTaint: true,
          backgroundColor: "#ffffff",
          width: container.offsetWidth,
          height: container.offsetHeight,
          logging: false,
        });

        const imgData = canvas.toDataURL("image/png", 1.0);
        
        if (i > 0) {
          pdf.addPage();
        }
        
        pdf.addImage(imgData, "PNG", 0, 0, 1920, 1080);
      }

      // Return to first slide after export
      await onSlideChange(0);
      
      pdf.save("TerraFox-Pitch-Deck.pdf");
    } catch (error) {
      console.error("Error exporting PDF:", error);
    } finally {
      // Remove the export class
      document.body.classList.remove('pdf-exporting');
      setIsExporting(false);
    }
  };

  return (
    <Button
      variant="outline"
      size="sm"
      onClick={exportToPDF}
      disabled={isExporting}
      className="gap-2"
    >
      {isExporting ? (
        <>
          <Loader2 className="h-4 w-4 animate-spin" />
          Exporting...
        </>
      ) : (
        <>
          <Download className="h-4 w-4" />
          Export PDF
        </>
      )}
    </Button>
  );
};