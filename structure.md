# 🚀 Next.js & Tailwind Conversion Prompt: Full E-commerce Homepage (Complete)

**Target Environment:** Next.js (App Router, TypeScript preferred) and Tailwind CSS.
**Goal:** Convert the full-page design images (Hero, Categories, Carousel, Testimonials, Navbar, and Footer) into a complete, modular, and responsive homepage, using reusable React components styled exclusively with Tailwind CSS. Maintain pixel-perfect fidelity, minimalist aesthetic, and clean component architecture.

## ⚙️ Global Configuration & Design System

| Element | Specification | Tailwind Classes / Notes |
| :--- | :--- | :--- |
| **Primary Font** | Clean, minimalist, highly legible Sans-serif (like Inter or system-ui) | `font-sans`. Headline text uses a unique, bold, tight-spaced geometric style. |
| **Base Background**| Very light off-white/bone color (used in Footer and sections) | `bg-gray-50` or `bg-neutral-50` |
| **Base Text Color** | Dark Charcoal/Near Black | `text-gray-900` |
| **Secondary Text Color**| Light Gray/Muted (used for footer links) | `text-gray-600` or `text-gray-500` |
| **Accent Colors** | 1. Sale/Heart Icon: Red/Pink. 2. Hero Gradient: Soft Nude/Pink. | `text-red-500` / `bg-pink-300` (product images) / `from-pink-50` |
| **Layout Grid** | Standard 12-column Grid for main content sections. | `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8` for content container. |

---

## 🧱 Page Structure (Modular Component Breakdown)

### 1. ANNOUNCEMENT BAR (`Navbar.png`)

* **Component:** `<AnnouncementBar />`
* **Position:** Fixed/Sticky at the very top.
* **Layout:** Full-width, centered text, thin height.
* **Content:** Text: "Get early access on launches and offers. **Sign Up For Terts** →" (Note: Appears to be 'Terts' in the image, likely a typo for 'Texts' or 'Tools').
* **Styling:** `bg-black`, `text-white`, `text-xs`, CTA link is underlined and bold.

---

### 2. HEADER & NAVIGATION (`Navbar.png`)

* **Component:** `<HeaderNav />`
* **Position:** Below Announcement Bar. Sticky is recommended.
* **Structure:** **Three distinct rows/sections:**
    * **Row A (Primary Links):** Left-aligned: `Women`, `Men`, `children`, `About`, **`Home`**.
    * **Row B (Logo):** Center-aligned, bold, large, uppercase text: **`EVERLANE`**.
    * **Row C (Utility Icons):** Right-aligned: Search icon (`Magnifying Glass`), Account icon (`User`), Cart icon (`Shopping Bag`).
    * **Secondary Nav Row:** Below the main section, centered. Links: `New Arrivals`, `Best-Sellers`, `Clothing`, etc.
* **Styling:** `bg-white`, separation via a thin line (`border-b border-gray-100`). **`Home`** link is active with a thin black underline. The **`Sale`** link uses `text-red-500` (accent color). Ample vertical padding for a spacious feel.

---

### 3. HERO SECTION (Based on previous analysis)

* **Component:** `<HeroBanner />`
* **Layout:** Full viewport height, image right-aligned, text left-aligned.
* **Visuals:** Large image with a soft, nude-pink gradient overlay (`from-pink-50` to transparent). Abstract, curved white lines overlaid on the scene.
* **Content:** Headline: "Define Your Style. Elevate Your Look".
* **Styling:** Extremely large, bold, geometric font style (`text-6xl+`), dark charcoal color.

---

### 4. SHOP BY CATEGORY (Based on previous analysis)

* **Component:** `<CategoryGrid />`
* **Layout:** Two rows of product links/banners. Top row is a 6-column grid of small images. Bottom row is a 3-column grid of large, image-based banners with white outlined CTAs.
* **Styling:** Muted/Grayscale filters on the large banner cards. White, prominent text on banners.

---

### 5. PRODUCT CAROUSEL & TESTIMONIALS (Based on previous analysis)

* **Component:** `<ProductCarousel />`, `<TestimonialCarousel />`, `<UtilitySection />`
* **Layout:** Features a product carousel (pink background on images) followed by a testimonial carousel (split content, quote left, image right), and finally a 3-column utility section with icons and text.
* **Styling:** Uses the **`bg-gray-50`** base color for the section background. Carousel elements must be horizontally scrollable/navigable with arrows.

---

### 6. FOOTER (`Footer.png`)

* **Component:** `<PageFooter />`
* **Position:** Bottom of the page.
* **Layout:** A primary section and a secondary legal section.
    * **Primary Layout:** A 4-column grid (Account, Company, Get Help, Connect) of link lists, followed by a separate **Email Signup** form on the right.
    * **Email Signup:** An inline form field (`Email Address`) and a dark, filled arrow button.
* **Content:**
    * **Link Groups:** Account (Log In, Sign Up), Company (About, Initiatives, Careers), Get Help (Help Center, Shipping Info), Connect (Social links, Affiliates).
    * **Legal Section:** Single row of links (Privacy Policy, Terms of Service, etc.) followed by the copyright text "© 2023 All Rights Reserved".
* **Styling:** **`bg-gray-50`** base color. Column headers are bold. Links use a muted color (`text-gray-600`) and the smallest readable font size. The Email Signup button is `bg-gray-800` or `bg-black`.