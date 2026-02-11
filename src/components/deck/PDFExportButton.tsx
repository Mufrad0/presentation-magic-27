import { useState } from "react";
import html2canvas from "html2canvas-pro";
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

/**
 * Walk a DOM node and replace every text node's words with
 * individual <span> elements so html2canvas positions each word
 * using the box model instead of broken character-level measurement.
 */
function wrapWordsInSpans(el: HTMLElement) {
  const walker = document.createTreeWalker(el, NodeFilter.SHOW_TEXT, null);
  const textNodes: Text[] = [];
  let node: Text | null;
  while ((node = walker.nextNode() as Text | null)) {
    if (node.textContent && node.textContent.trim().length > 0) {
      textNodes.push(node);
    }
  }
  for (const textNode of textNodes) {
    const text = textNode.textContent || "";
    const parts = text.split(/(\s+)/); // keep whitespace as separators
    if (parts.length <= 1) continue;

    const frag = document.createDocumentFragment();
    for (const part of parts) {
      if (/^\s+$/.test(part)) {
        const spacer = document.createElement("span");
        spacer.style.display = "inline";
        spacer.style.width = "0.3em";
        spacer.style.minWidth = "0.3em";
        spacer.innerHTML = "&nbsp;";
        frag.appendChild(spacer);
      } else if (part.length > 0) {
        const span = document.createElement("span");
        span.style.whiteSpace = "nowrap";
        span.style.display = "inline";
        span.textContent = part;
        frag.appendChild(span);
      }
    }
    textNode.parentNode?.replaceChild(frag, textNode);
  }
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
    const CAPTURE_SCALE = 1.5;

    setIsExporting(true);
    onExportStart?.();
    document.body.classList.add("pdf-exporting");

    try {
      await (document as any).fonts?.ready?.catch(() => undefined);
      await new Promise((r) => setTimeout(r, 300));

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

      await onSlideChange(0);
      await new Promise((r) => setTimeout(r, 500));

      for (let i = 0; i < totalSlides; i++) {
        await onSlideChange(i);
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
        });

        // Fix subtitle text: find SlideTakeaway elements by their unique class
        // combination and replace text nodes with span-wrapped words so
        // html2canvas uses box-model positioning instead of broken text measurement
        clone.querySelectorAll(".max-w-4xl.mb-10").forEach((el) => {
          wrapWordsInSpans(el as HTMLElement);
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

        const imgData = canvas.toDataURL("image/jpeg", 0.85);
        if (i > 0) pdf.addPage();
        pdf.addImage(
          imgData,
          "JPEG",
          0,
          0,
          EXPORT_WIDTH,
          EXPORT_HEIGHT,
          undefined,
          "MEDIUM"
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
