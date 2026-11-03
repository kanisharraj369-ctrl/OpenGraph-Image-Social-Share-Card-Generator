# Social Card Studio

A client-side OpenGraph and social share card generator built with React, TypeScript, Tailwind CSS, and Vite. Edit a card, preview it live in a 1200 × 630 layout, download a PNG, and copy OpenGraph/Twitter meta tags.

## Run locally

```bash
npm install
npm run dev
```

Create a production build with:

```bash
npm run build
```

## Features

- Editable headline, author, handle, category, theme, and accent color
- Dark, Modern Gradient, and Minimalist Terminal themes
- Responsive live preview with a standard 1200:630 aspect ratio
- PNG export using `html-to-image`
- Copyable OpenGraph and Twitter card meta tags

For social platforms to display the image, the `og:image` and `twitter:image` values need to be publicly accessible URLs. Download the PNG, host it, then enter its URL in the Public image URL field before copying the meta tags.
