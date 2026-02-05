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
    
    try {
      const pdf = new jsPDF({
        orientation: "landscape",
        unit: "px",
        format: [1920, 1080]
      });

      for (let i = 0; i < totalSlides; i++) {
        await onSlideChange(i);
        // Wait for animation to complete
        await new Promise(resolve => setTimeout(resolve, 600));

        const canvas = await html2canvas(slidesRef.current, {
          scale: 2,
          useCORS: true,
          backgroundColor: "#ffffff",
          width: slidesRef.current.offsetWidth,
          height: slidesRef.current.offsetHeight
        });

        const imgData = canvas.toDataURL("image/png");
        
        if (i > 0) {
          pdf.addPage();
        }
        
        pdf.addImage(imgData, "PNG", 0, 0, 1920, 1080);
      }

      pdf.save("TerraFox-Pitch-Deck.pdf");
    } catch (error) {
      console.error("Error exporting PDF:", error);
    } finally {
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
