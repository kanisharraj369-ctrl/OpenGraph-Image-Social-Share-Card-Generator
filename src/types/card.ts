export type CardTheme = "dark" | "modern-gradient" | "minimalist-terminal" | "light" | "glassmorphism";

export type CardFont = "sans" | "serif" | "mono";

export interface CardState {
  title: string;
  authorName: string;
  handle: string;
  category: string;
  theme: CardTheme;
  font: CardFont;
  accentColor: string;
  /** Publicly accessible image URL to include in the generated metadata. */
  imageUrl: string;
  /** Avatar image URL (data URL or object URL) */
  avatarUrl?: string;
}
