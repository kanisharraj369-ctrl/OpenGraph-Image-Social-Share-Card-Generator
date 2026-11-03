# 🖼️ OG Canvas Studio — Dynamic OpenGraph Image & Social Banner Generator

> An open-source, client-side web application built with **React**, **TypeScript**, and **Tailwind CSS** that enables developers, bloggers, and content creators to instantly design, customize, and export high-resolution **OpenGraph (og:image)** social share banners and Twitter cards directly in the browser.

[![React](https://img.shields.io/badge/React-18.x-blue?style=flat-square&logo=react)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6?style=flat-square&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.x-38B2AC?style=flat-square&logo=tailwind-css)](https://tailwindcss.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=flat-square)](LICENSE)

---

## 📌 Overview

Visual meta tags are essential for search engine optimization (SEO) and click-through rates (CTR) across social networks like Twitter/X, LinkedIn, Facebook, and Discord. However, creating branded preview cards typically requires bulky design suites like Figma or resource-heavy headless browser pipelines (such as Puppeteer).

**OG Canvas Studio** bridges this gap by providing an instant, fully client-side canvas engine. It generates pixel-perfect $1200 \times 630\text{ px}$ OpenGraph assets with retina scaling (`2x` pixel ratio) and automatically formats ready-to-paste HTML `<meta>` tags—all without a server backend.

---

## 🚀 Key Features

* **⚡ Zero-Server Client-Side Rendering:** Uses `html-to-image` and DOM serialization to generate and download crisp PNG images directly on the client machine.
* **📐 Pixel-Perfect 1200×630 Resolution:** Guarantees native compliance with the recommended OpenGraph and Twitter Summary Large Image standards.
* **📱 Fluid Matrix Preview Scaling:** Dynamically computes CSS matrix transforms to fit full-resolution preview boards onto responsive mobile and desktop viewports without distortion.
* **🎨 Built-In Aesthetic Themes:** Switch seamlessly across curated presets including *Modern Dark*, *Glassmorphism Gradient*, and *Minimalist Developer Terminal*.
* **🏷️ Instant SEO Meta Tag Exporter:** One-click copy for production-ready `<meta property="og:...">` and `<meta name="twitter:...">` HTML tags.
* **🛠️ Custom Accent Color Palette:** Supports HEX input and preset swatches to match your project's brand guidelines.

---

## 🔍 SEO & Meta Tag Coverage

Every card generated aligns with Open Graph Protocol specifications:

| Social Platform / Crawler | Supported Tag | Resolution Target |
| :--- | :--- | :--- |
| **Open Graph (Facebook, LinkedIn, Discord)** | `og:image`, `og:title`, `og:description` | $1200 \times 630\text{ px}$ |
| **Twitter / X Cards** | `twitter:card` (`summary_large_image`), `twitter:image` | $1200 \times 630\text{ px}$ |
| **Slack / Telegram** | Rich link unfoldings derived from OpenGraph fallbacks | Automatic ratio scaling |

---

## 💻 Tech Stack & Architecture

* **Frontend Framework:** React (Vite template for ultra-fast HMR)
* **Language:** TypeScript (Strict typing for card states and theme variants)
* **Styling:** Tailwind CSS (Utility-first styling with dynamic CSS variables)
* **Rendering Engine:** `html-to-image` (Canvas-based SVG foreignObject serialization)
* **Icons:** `lucide-react`

---

## 🏷️ GitHub Repository Topics (Tags)

To maximize repository search visibility, add these keywords to your repo's **About / Topics** section on GitHub:

```text
opengraph, og-image, social-preview, twitter-card, meta-tags, react, typescript, tailwindcss, developer-tools, seo-tool, image-generator, client-side, frontend, vite
