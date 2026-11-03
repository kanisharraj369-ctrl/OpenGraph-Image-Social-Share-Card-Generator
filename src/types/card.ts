export type CardTheme = "dark" | "modern-gradient" | "minimalist-terminal";

export interface CardState {
  title: string;
  authorName: string;
  handle: string;
  category: string;
  theme: CardTheme;
  accentColor: string;
  /** Publicly accessible image URL to include in the generated metadata. */
  imageUrl: string;
}
