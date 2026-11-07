import type { CardState } from "../types/card";
import { ShareCard } from "./ShareCard";

type PreviewPanelProps = {
  card: CardState;
  previewRef: React.RefObject<HTMLDivElement>;
  message: string;
  onDownload: () => void;
  onCopyMetaTags: () => void;
};

export function PreviewPanel({ card, previewRef, message, onDownload, onCopyMetaTags }: PreviewPanelProps) {
  return (
    <section className="min-w-0 rounded-2xl border border-white/10 bg-zinc-900/70 p-4 shadow-xl sm:p-5">
      <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
        <div>
          <h2 className="font-semibold">Live preview</h2>
          <p className="mt-1 text-xs text-zinc-500">1200 × 630 · OpenGraph / Twitter</p>
        </div>
        <div className="flex flex-wrap gap-2">
          <button type="button" onClick={onCopyMetaTags} className="rounded-lg border border-white/10 px-3 py-2 text-sm text-zinc-200 transition hover:bg-white/5 focus:outline-none focus:ring-2 focus:ring-violet-400">Copy meta tags</button>
          <button type="button" onClick={onDownload} className="rounded-lg bg-violet-500 px-3 py-2 text-sm font-semibold text-white transition hover:bg-violet-400 focus:outline-none focus:ring-2 focus:ring-violet-300">Download PNG</button>
        </div>
      </div>

      <div className="rounded-xl border border-white/10 bg-zinc-950 p-2 sm:p-4">
        <ShareCard ref={previewRef} card={card} />
      </div>
      <p role="status" aria-live="polite" className="min-h-5 pt-2 text-xs text-zinc-400">{message}</p>
    </section>
  );
}
