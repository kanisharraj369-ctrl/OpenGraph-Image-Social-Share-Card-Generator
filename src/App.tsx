import { useRef, useState } from "react";
import { EditorPanel } from "./components/EditorPanel";
import { PreviewPanel } from "./components/PreviewPanel";
import { buildMetaTags } from "./lib/buildMetaTags";
import { exportCardAsPng } from "./lib/exportPng";
import type { CardState } from "./types/card";

const initialCard: CardState = {
  title: "A great idea deserves to be shared.",
  authorName: "Alex Morgan",
  handle: "@alexmorgan",
  category: "DESIGN & CREATIVE",
  theme: "dark",
  accentColor: "#8b5cf6",
  imageUrl: "",
};

export default function App() {
  const [card, setCard] = useState<CardState>(initialCard);
  const [message, setMessage] = useState("");
  const previewRef = useRef<HTMLDivElement>(null);

  function updateCard<K extends keyof CardState>(key: K, value: CardState[K]) {
    setCard((current) => ({ ...current, [key]: value }));
  }

  async function handleDownload() {
    if (!previewRef.current) return;
    try {
      await exportCardAsPng(previewRef.current, "social-share-card.png");
      setMessage("PNG downloaded.");
    } catch (error) {
      console.error("Unable to export card", error);
      setMessage("Could not export the image. Please try again.");
    }
  }

  async function handleCopyMetaTags() {
    const markup = buildMetaTags({
      title: card.title,
      description: `${card.authorName} · ${card.category}`,
      imageUrl: card.imageUrl,
      siteName: "Social Card Studio",
      twitterHandle: card.handle,
    });
    try {
      await navigator.clipboard.writeText(markup);
      setMessage("Meta tags copied to clipboard.");
    } catch (error) {
      console.error("Unable to copy meta tags", error);
      setMessage("Clipboard access failed. Check your browser permissions.");
    }
  }

  return (
    <main className="min-h-screen bg-zinc-950 px-4 py-8 text-zinc-100 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-[1440px]">
        <header className="mb-8 flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.24em] text-violet-300">Social Card Studio</p>
            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">Make your link stand out.</h1>
            <p className="mt-2 text-sm text-zinc-400">Design a share card, preview it live, and export a 1200 × 630 image.</p>
          </div>
          <span className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-xs text-zinc-400">Client-side · No upload required</span>
        </header>

        <div className="grid items-start gap-6 xl:grid-cols-[360px_minmax(0,1fr)]">
          <EditorPanel card={card} updateCard={updateCard} />
          <PreviewPanel
            card={card}
            previewRef={previewRef}
            message={message}
            onDownload={handleDownload}
            onCopyMetaTags={handleCopyMetaTags}
          />
        </div>
      </div>
    </main>
  );
}
