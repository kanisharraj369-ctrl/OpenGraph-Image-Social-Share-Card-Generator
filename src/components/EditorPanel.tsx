import type { CardState, CardTheme } from "../types/card";

type EditorPanelProps = {
  card: CardState;
  updateCard: <K extends keyof CardState>(key: K, value: CardState[K]) => void;
};

const themes: Array<{ value: CardTheme; label: string; description: string }> = [
  { value: "dark", label: "Dark", description: "Deep and polished" },
  { value: "modern-gradient", label: "Gradient", description: "Colorful and bold" },
  { value: "minimalist-terminal", label: "Terminal", description: "Monospace and minimal" },
];

const inputClass = "mt-1.5 w-full rounded-xl border border-white/10 bg-zinc-950 px-3.5 py-2.5 text-sm text-white placeholder:text-zinc-600 outline-none transition focus:border-violet-400 focus:ring-2 focus:ring-violet-400/20";

export function EditorPanel({ card, updateCard }: EditorPanelProps) {
  return (
    <aside className="rounded-2xl border border-white/10 bg-zinc-900/70 p-5 shadow-xl">
      <div className="mb-5">
        <h2 className="font-semibold">Card content</h2>
        <p className="mt-1 text-xs text-zinc-500">Changes show up in the preview instantly.</p>
      </div>

      <div className="space-y-4">
        <label className="block text-sm font-medium text-zinc-300">
          Headline
          <textarea rows={3} maxLength={120} value={card.title} onChange={(event) => updateCard("title", event.target.value)} placeholder="Your share card headline" className={`${inputClass} resize-y`} />
          <span className="mt-1 block text-right text-xs font-normal text-zinc-600">{card.title.length}/120</span>
        </label>
        <label className="block text-sm font-medium text-zinc-300">
          Author name
          <input value={card.authorName} onChange={(event) => updateCard("authorName", event.target.value)} placeholder="Your name" className={inputClass} />
        </label>
        <label className="block text-sm font-medium text-zinc-300">
          Handle
          <input value={card.handle} onChange={(event) => updateCard("handle", event.target.value)} placeholder="@username" className={inputClass} />
        </label>
        <label className="block text-sm font-medium text-zinc-300">
          Tag / category
          <input value={card.category} onChange={(event) => updateCard("category", event.target.value)} placeholder="DESIGN & CREATIVE" className={inputClass} />
        </label>

        <fieldset>
          <legend className="mb-2 text-sm font-medium text-zinc-300">Visual theme</legend>
          <div className="space-y-2">
            {themes.map((theme) => (
              <button
                key={theme.value}
                type="button"
                aria-pressed={card.theme === theme.value}
                onClick={() => updateCard("theme", theme.value)}
                className={`flex w-full items-center justify-between rounded-xl border px-3 py-2.5 text-left transition ${card.theme === theme.value ? "border-violet-400/60 bg-violet-400/10" : "border-white/10 bg-zinc-950/60 hover:border-white/20"}`}
              >
                <span className="text-sm font-medium text-zinc-200">{theme.label}</span>
                <span className="text-xs text-zinc-500">{theme.description}</span>
              </button>
            ))}
          </div>
        </fieldset>

        <label className="block text-sm font-medium text-zinc-300">
          Accent color
          <span className="mt-1.5 flex items-center gap-3 rounded-xl border border-white/10 bg-zinc-950 px-3 py-2">
            <input aria-label="Choose accent color" type="color" value={card.accentColor} onChange={(event) => updateCard("accentColor", event.target.value)} className="h-8 w-10 cursor-pointer rounded border-0 bg-transparent p-0" />
            <span className="font-mono text-xs text-zinc-400">{card.accentColor.toUpperCase()}</span>
          </span>
        </label>

        <div className="border-t border-white/10 pt-4">
          <label className="block text-sm font-medium text-zinc-300">
            Public image URL <span className="font-normal text-zinc-500">(for meta tags)</span>
            <input type="url" value={card.imageUrl} onChange={(event) => updateCard("imageUrl", event.target.value)} placeholder="https://example.com/og-image.png" className={inputClass} />
          </label>
          <p className="mt-2 text-xs leading-relaxed text-zinc-500">Meta tags need a publicly accessible image URL. Download the PNG, host it, then paste its URL here.</p>
        </div>
      </div>
    </aside>
  );
}
