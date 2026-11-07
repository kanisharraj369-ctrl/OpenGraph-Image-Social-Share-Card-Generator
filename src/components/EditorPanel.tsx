import { initialCard } from "../App";
import type { CardState, CardTheme, CardFont } from "../types/card";

type EditorPanelProps = {
  card: CardState;
  updateCard: <K extends keyof CardState>(key: K, value: CardState[K]) => void;
  setCard: (card: CardState) => void;
};

const themes: Array<{ value: CardTheme; label: string; description: string }> = [
  { value: "dark", label: "Dark", description: "Deep and polished" },
  { value: "modern-gradient", label: "Gradient", description: "Colorful and bold" },
  { value: "minimalist-terminal", label: "Terminal", description: "Monospace and minimal" },
  { value: "light", label: "Light", description: "Clean and bright" },
  { value: "glassmorphism", label: "Glass", description: "Frosted glass effect" },
];

const fonts: Array<{ value: CardFont; label: string }> = [
  { value: "sans", label: "Sans-serif" },
  { value: "serif", label: "Serif" },
  { value: "mono", label: "Monospace" },
];

const inputClass = "mt-1.5 w-full rounded-xl border border-white/10 bg-zinc-950 px-3.5 py-2.5 text-sm text-white placeholder:text-zinc-600 outline-none transition focus:border-violet-400 focus:ring-2 focus:ring-violet-400/20";

export function EditorPanel({ card, updateCard, setCard }: EditorPanelProps) {
  const handleAvatarUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        if (typeof e.target?.result === 'string') {
          updateCard("avatarUrl", e.target.result);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleReset = () => {
    setCard(initialCard);
  };

  return (
    <aside className="rounded-2xl border border-white/10 bg-zinc-900/70 p-5 shadow-xl max-h-[85vh] overflow-y-auto">
      <div className="mb-5 flex justify-between items-start">
        <div>
          <h2 className="font-semibold">Card settings</h2>
          <p className="mt-1 text-xs text-zinc-500">Changes show up in the preview instantly.</p>
        </div>
        <button onClick={handleReset} className="text-xs text-violet-400 hover:text-violet-300 transition underline underline-offset-2">
          Reset
        </button>
      </div>

      <div className="space-y-6">
        <section className="space-y-4">
          <h3 className="text-xs font-semibold uppercase tracking-wider text-zinc-400">Content</h3>
          <label className="block text-sm font-medium text-zinc-300">
            Headline
            <textarea rows={3} maxLength={120} value={card.title} onChange={(event) => updateCard("title", event.target.value)} placeholder="Your share card headline" className={`${inputClass} resize-y`} />
            <span className="mt-1 block text-right text-xs font-normal text-zinc-600">{card.title.length}/120</span>
          </label>
          <label className="block text-sm font-medium text-zinc-300">
            Author name
            <input value={card.authorName} maxLength={50} onChange={(event) => updateCard("authorName", event.target.value)} placeholder="Your name" className={inputClass} />
          </label>
          <label className="block text-sm font-medium text-zinc-300">
            Handle
            <input value={card.handle} maxLength={30} onChange={(event) => updateCard("handle", event.target.value)} placeholder="@username" className={inputClass} />
          </label>
          <label className="block text-sm font-medium text-zinc-300">
            Tag / category
            <input value={card.category} maxLength={30} onChange={(event) => updateCard("category", event.target.value)} placeholder="DESIGN & CREATIVE" className={inputClass} />
          </label>
          <label className="block text-sm font-medium text-zinc-300">
            Avatar Image
            <input type="file" accept="image/*" onChange={handleAvatarUpload} className={`block w-full text-sm text-zinc-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-violet-400/10 file:text-violet-400 hover:file:bg-violet-400/20 mt-1.5 cursor-pointer`} />
          </label>
        </section>

        <section className="space-y-4 border-t border-white/10 pt-4">
          <h3 className="text-xs font-semibold uppercase tracking-wider text-zinc-400">Appearance</h3>
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

          <fieldset>
            <legend className="mb-2 text-sm font-medium text-zinc-300">Font Family</legend>
            <div className="flex gap-2 bg-zinc-950 p-1 rounded-xl border border-white/10">
              {fonts.map((font) => (
                <button
                  key={font.value}
                  type="button"
                  aria-pressed={card.font === font.value}
                  onClick={() => updateCard("font", font.value)}
                  className={`flex-1 rounded-lg py-1.5 text-sm font-medium transition ${card.font === font.value ? "bg-zinc-800 text-white" : "text-zinc-400 hover:text-zinc-200"}`}
                >
                  {font.label}
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
        </section>

        <section className="space-y-4 border-t border-white/10 pt-4">
          <h3 className="text-xs font-semibold uppercase tracking-wider text-zinc-400">Metadata</h3>
          <label className="block text-sm font-medium text-zinc-300">
            Public image URL <span className="font-normal text-zinc-500">(for meta tags)</span>
            <input type="url" value={card.imageUrl} onChange={(event) => updateCard("imageUrl", event.target.value)} placeholder="https://example.com/og-image.png" className={inputClass} />
          </label>
          <p className="mt-2 text-xs leading-relaxed text-zinc-500">Meta tags need a publicly accessible image URL. Download the PNG, host it, then paste its URL here.</p>
        </section>
      </div>
    </aside>
  );
}
