import { useState } from "react";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import { Button } from "@/components/ui/button";
import { Download, Loader2 } from "lucide-react";

interface PDFExportButtonProps {
  slidesRef: React.RefObject<HTMLDivElement>;
  totalSlides: number;
  onSlideChange: (index: number) => Promise<void>;
  onExportStart?: () => void;
  onExportEnd?: () => void;
}

export const PDFExportButton = ({
  slidesRef,
  totalSlides,
  onSlideChange,
  onExportStart,
  onExportEnd,
}: PDFExportButtonProps) => {
  const [isExporting, setIsExporting] = useState(false);

  const exportToPDF = async () => {
    if (!slidesRef.current) return;

    const EXPORT_WIDTH = 1440;
    const EXPORT_HEIGHT = 810;
    const CAPTURE_SCALE = 2;

    setIsExporting(true);
    onExportStart?.();
    document.body.classList.add("pdf-exporting");

    try {
      await (document as any).fonts?.ready?.catch(() => undefined);

      const pdf = new jsPDF({
        orientation: "landscape",
        unit: "px",
        format: [EXPORT_WIDTH, EXPORT_HEIGHT],
        compress: true,
      });

      const offscreen = document.createElement("div");
      offscreen.style.cssText = `
        position: fixed;
        left: -9999px;
        top: 0;
        width: ${EXPORT_WIDTH}px;
        height: ${EXPORT_HEIGHT}px;
        overflow: hidden;
        z-index: -1;
        background: white;
      `;
      offscreen.classList.add("pdf-exporting");
      document.body.appendChild(offscreen);

      const container = slidesRef.current;

      // Force start from slide 0 and wait for it to render
      await onSlideChange(0);
      await new Promise((r) => setTimeout(r, 500));

      for (let i = 0; i < totalSlides; i++) {
        await onSlideChange(i);
        // Extra wait for slide to fully render
        await new Promise((r) => setTimeout(r, 400));

        const clone = container.cloneNode(true) as HTMLElement;
        clone.style.width = `${EXPORT_WIDTH}px`;
        clone.style.height = `${EXPORT_HEIGHT}px`;
        clone.style.overflow = "hidden";

        // Force ALL elements visible - framer-motion sets inline opacity/transform
        clone.querySelectorAll("*").forEach((el) => {
          const htmlEl = el as HTMLElement;
          htmlEl.style.opacity = "1";
          htmlEl.style.transform = "none";
          htmlEl.style.transition = "none";
          htmlEl.style.animation = "none";
          htmlEl.style.wordSpacing = "normal";
          htmlEl.style.letterSpacing = "normal";
        });

        offscreen.innerHTML = "";
        offscreen.appendChild(clone);

        const images = Array.from(clone.querySelectorAll("img"));
        await Promise.all(
          images.map(
            (img) =>
              new Promise<void>((resolve) => {
                if (img.complete && img.naturalWidth > 0) {
                  resolve();
                  return;
                }
                img.addEventListener("load", () => resolve(), { once: true });
                img.addEventListener("error", () => resolve(), { once: true });
              })
          )
        );

        await new Promise((r) =>
          requestAnimationFrame(() =>
            requestAnimationFrame(() => setTimeout(r, 150))
          )
        );

        const canvas = await html2canvas(offscreen, {
          width: EXPORT_WIDTH,
          height: EXPORT_HEIGHT,
          scale: CAPTURE_SCALE,
          useCORS: true,
          allowTaint: false,
          backgroundColor: "#ffffff",
          imageTimeout: 15000,
          logging: false,
        });

        const imgData = canvas.toDataURL("image/png", 1.0);
        if (i > 0) pdf.addPage();
        pdf.addImage(
          imgData,
          "PNG",
          0,
          0,
          EXPORT_WIDTH,
          EXPORT_HEIGHT,
          undefined,
          "FAST"
        );
      }

      document.body.removeChild(offscreen);
      await onSlideChange(0);
      pdf.save("TerraFox-Pitch-Deck.pdf");
    } catch (error) {
      console.error("Error exporting PDF:", error);
    } finally {
      document.body.classList.remove("pdf-exporting");
      onExportEnd?.();
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
