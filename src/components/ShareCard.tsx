import { forwardRef } from "react";
import type { CSSProperties } from "react";
import type { CardState } from "../types/card";

type ShareCardProps = { card: CardState };

const themeClass = {
  dark: "theme-dark",
  "modern-gradient": "theme-gradient",
  "minimalist-terminal": "theme-terminal",
  light: "theme-light",
  glassmorphism: "theme-glass",
} as const;

const fontClass = {
  sans: "font-sans",
  serif: "font-serif",
  mono: "font-mono",
} as const;

export const ShareCard = forwardRef<HTMLDivElement, ShareCardProps>(function ShareCard({ card }, ref) {
  const style = { "--accent": card.accentColor } as CSSProperties;
  const initial = card.authorName.trim().charAt(0).toUpperCase() || "A";

  const isLight = card.theme === "light";

  return (
    <div ref={ref} className={`card-canvas ${themeClass[card.theme]} ${fontClass[card.font]}`} style={style}>
      {card.theme === "dark" && <div className="pointer-events-none absolute inset-0 opacity-[0.08]" style={{ backgroundImage: "radial-gradient(#fff 0.6px, transparent 0.6px)", backgroundSize: "12px 12px" }} />}
      {card.theme === "light" && <div className="pointer-events-none absolute inset-0 opacity-[0.05]" style={{ backgroundImage: "radial-gradient(#000 0.6px, transparent 0.6px)", backgroundSize: "12px 12px" }} />}

      <div className="card-content">
        <header className="flex items-start justify-between gap-4">
          <span className={`card-category rounded-full border ${isLight ? 'border-black/10 bg-black/5 text-black/70' : 'border-white/15 bg-black/20 text-white/85'} px-[1.4cqw] py-[0.8cqw] font-semibold uppercase`}>
            {card.category || "YOUR CATEGORY"}
          </span>
          <span className={`card-handle max-w-[36%] truncate text-right font-medium ${isLight ? 'text-black/50' : 'text-white/70'}`}>
            {card.handle || "@yourhandle"}
          </span>
        </header>

        <div className="relative">
          <div className="mb-[2.4cqw] h-[0.55cqw] w-[7cqw] rounded-full" style={{ backgroundColor: card.accentColor }} />
          <h2 className={`card-title ${isLight ? 'text-black' : ''}`}>{card.title || "Your headline goes here."}</h2>
        </div>

        <footer className="flex items-end justify-between gap-4">
          <div className="flex min-w-0 items-center gap-[1.5cqw]">
            {card.avatarUrl ? (
              <img src={card.avatarUrl} alt="" className="h-[5.5cqw] w-[5.5cqw] shrink-0 rounded-full object-cover shadow-sm" style={{ border: `0.2cqw solid ${card.accentColor}` }} />
            ) : (
              <span className="flex h-[5.5cqw] w-[5.5cqw] shrink-0 items-center justify-center rounded-full text-[2cqw] font-bold text-zinc-950" style={{ backgroundColor: card.accentColor }}>{initial}</span>
            )}
            <div className="min-w-0">
              <p className={`card-byline truncate font-semibold ${isLight ? 'text-black/80' : ''}`}>{card.authorName || "Your name"}</p>
              <p className={`card-handle mt-[0.4cqw] truncate ${isLight ? 'text-black/50' : 'text-white/55'}`}>{card.handle || "@yourhandle"}</p>
            </div>
          </div>
          <span className={`select-none text-[5cqw] font-black tracking-tighter ${isLight ? 'text-black/5' : 'text-white/10'}`}>OG</span>
        </footer>
      </div>
    </div>
  );
});
