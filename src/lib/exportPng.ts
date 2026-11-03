import { toPng } from "html-to-image";

export async function exportCardAsPng(element: HTMLElement, fileName = "social-share-card.png"): Promise<void> {
  const dataUrl = await toPng(element, {
    cacheBust: true,
    pixelRatio: 1,
    width: 1200,
    height: 630,
    style: {
      width: "1200px",
      height: "630px",
      maxWidth: "none",
      aspectRatio: "1200 / 630",
    },
  });

  const link = document.createElement("a");
  link.download = fileName;
  link.href = dataUrl;
  link.click();
}
