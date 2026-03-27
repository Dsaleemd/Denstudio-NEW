# Denstudio (denstudio.co.uk) — Design Analysis & Plan

> Based on analysis of 5 pages: Homepage, Porcelain Veneers, Fees, About, Composite Bonding.

---

## 1. SITE OVERVIEW

**Business type:** Premium cosmetic dental practice — single location (139 Harley Street, London)
**Brand tone:** Luxury, elite, minimalist — celebrity/high-end clientele positioning
**Lead clinician:** Dr Jana Denzel (GDC 285525) — "Best Young Dentist" 2021 & 2024, Oxford lecturer
**Platform:** Squarespace (CSS grid system, FlexEmbed layout engine)
**Maintained by:** Dentell Ltd

---

## 2. COLOUR PALETTE (Complete)

### Primary Brand Colours
| Role | Hex | RGB/RGBA | Usage |
|------|-----|----------|-------|
| **Brand Green (Primary)** | `#012406` | rgb(1, 36, 6) | Buttons, CTAs, mobile menu bg, nav hover, primary accents |
| **Brand Green (Hover)** | `#023a09` | rgb(2, 58, 9) | Button hover state |
| **Dark Green Background** | `#162B19` | rgb(22, 43, 25) | Dark section backgrounds (About page) |
| **Dark Slate (Active Tab)** | `#333D35` | rgb(51, 61, 53) | Active tab backgrounds on Fees page |
| **Gold/Tan Accent** | `#C4A57B` | rgb(196, 165, 123) | Luxury accent colour (About page) |
| **Teal** | `#1e5465` | rgb(30, 84, 101) | Finance calculator badge (Fees page) |
| **Teal (Reviews)** | `#20c997` | rgb(32, 201, 151) | Review author name text |

### Neutral Colours
| Role | Hex | Usage |
|------|-----|-------|
| **White** | `#FFFFFF` | Primary page background, card backgrounds |
| **Off-Black (Headings)** | `#222222` | H1, H2 headings |
| **Dark Grey (Nav)** | `#333333` | Navigation text, body text |
| **Medium Grey** | `#555555` | Secondary text, service tray links |
| **Light Grey (Borders)** | `#DDDDDD` | Dividers, borders |
| **Scrollbar Grey** | `#CCCCCC` | Custom scrollbar |
| **Near Black** | `#1A1A1A` | Review body text |
| **Pure Black** | `#000000` | Review headings, some text |
| **Dark Body** | `#111111` | Fee page text |

### Transparent / Overlay Colours
| Role | Value | Usage |
|------|-------|-------|
| **Header Glass** | `rgba(255,255,255,0.55)` | Frosted glass header background |
| **Header Border** | `rgba(255,255,255,0.45)` | Header bottom border |
| **Dark Overlay (Light)** | `rgba(0,0,0,0.3)` | Image overlays, backdrop |
| **Dark Overlay (Medium)** | `rgba(0,0,0,0.45)` | Stronger image overlays |
| **Shadow** | `rgba(0,0,0,0.10)` | Card/element drop shadows |
| **Border Subtle** | `rgba(0,0,0,0.14)` | Fee table borders |

### Functional Accent Colours
| Role | Hex | Usage |
|------|-----|-------|
| **Star Gold** | `#fbbc04` / `#f5b301` | Google review star ratings |

### Section Background Mapping
| Section | Background | Notes |
|---------|-----------|-------|
| Header | `rgba(255,255,255,0.55)` + `backdrop-filter: blur(20px)` | Frosted glassmorphism |
| Hero | White + full-bleed image | Image carries visual weight |
| Trust/Logo strip | White | Clean, logos only |
| Treatment cards | White | Cards have subtle shadows |
| About Dr Jana | White | Two-column image + text |
| Benefits | White | Numbered list + image |
| Gallery | White | Grid of clinical images |
| Reviews | White | Cards with slight elevation |
| Process steps | White | Three-column layout |
| Footer | White | Multi-column, clean |
| Dark sections (About pg) | `#162B19` | Deep green, light text |

**Key insight:** The site is overwhelmingly white/minimal. Colour is used extremely sparingly — almost exclusively through the dark green `#012406` on interactive elements and occasional dark green background sections. The gold `#C4A57B` appears as a luxury accent on the About page only.

---

## 3. HOMEPAGE STRUCTURE (Section-by-Section)

### Section 1 — Header (Fixed/Sticky)
- **Style:** Glassmorphism — frosted translucent white with 20px backdrop blur, 180% saturation
- **Layout:** Flexbox, `justify-content: space-between`
- **Left:** Logo (black dental aesthetic mark)
- **Centre:** Nav links (Treatments dropdown, Fees, Team) — `gap: 40px`
- **Right:** Phone icon button + "Book Now" pill button (`border-radius: 50px`, bg `#012406`)
- **Mobile:** Hamburger menu → full-screen overlay with large nav links (2.5rem, weight 700)
- **Padding:** 14px desktop, 10px tablet, 8px mobile

### Section 2 — Hero
- **Layout:** Full-width image background with centered text overlay
- **Heading:** "Redefining the future of aesthetic dentistry"
- **Subheading:** "Porcelain Veneers in Harley Street"
- **CTA:** "Book Now" button (dark green pill)
- **Overlay:** `rgba(0,0,0,0.3)` on image for text legibility

### Section 3 — Trust/Media Logo Strip
- **Layout:** Infinite auto-scrolling horizontal carousel (`requestAnimationFrame` at 0.35px/frame)
- **Logos:** DenStudio, Vogue, Oxford University, Grazia, Slow Dentistry, Rolling Stone, BBC, Teen Vogue
- **Style:** Likely greyscale/muted, seamless loop

### Section 4 — Treatment Cards
- **Heading:** "Explore our full range of Treatment options"
- **Layout:** Horizontal scroll carousel with `scroll-snap-type: x mandatory`
- **Cards:** 6 treatments — each with image, title, brief description
  - Porcelain Veneers, Invisalign, General Dentistry, Composite Bonding, Teeth Whitening, Airflow Polish
- **Card style:** White bg, subtle shadow, rounded corners, `flex: 0 0 auto`
- **Gap:** 28px between cards
- **Padding:** 1.25rem card content

### Section 5 — About Dr Jana
- **Layout:** Two-column — image left, text right
- **Image:** Professional portrait of Dr Jana Denzel
- **Heading:** "Transform your smile with Denstudio"
- **Content:** Credentials list:
  - Best Young Dentist 2021 & 2024
  - Named top 32 dentists in the world
  - Royal & celebrity clientele
  - Oxford University lecturer
- **CTA:** "Book Now"

### Section 6 — Benefits / Treatment Journey
- **Heading:** "Brighter and more confident smiles"
- **Layout:** Numbered list (01, 02, 03) with supporting image
- **Content:** Three treatment philosophy descriptions
- **Style:** Editorial, clean typography

### Section 7 — Before/After Gallery
- **Heading:** "Discover how your smile changes lives - Real smiles, real results"
- **Layout:** Image grid (likely 2-3 columns)
- **Content:** 6 clinical before/after photographs
- **CTA:** "Book Now"

### Section 8 — Google Reviews
- **Heading:** "Why our patients trust Denstudio"
- **Layout:** Horizontal scrolling card carousel
- **Cards:** 280px wide, 2rem gap, scroll-snap alignment
- **Content per card:**
  - 5-star rating (gold `#fbbc04`)
  - Patient name (teal `#20c997`)
  - Review text (`#1a1a1a`)
- **Featured reviewers:** Lula, Harish, James, Melissa, Sri

### Section 9 — Three-Step Process
- **Layout:** Three columns / stepped layout
- **Steps:**
  1. **Consultation** — initial assessment
  2. **Bespoke Treatment** — personalised plan
  3. **Smile** — final result
- **Each:** Image + step number + description
- **CTA:** "Book"

### Section 10 — Footer
- **Layout:** Multi-column (6 columns observed on Fees page)
- **Address:** 139 Harley Street, London, W1G 6BG
- **Phone:** 020 3883 0588
- **Email:** hello@denstudio.co.uk
- **Social:** Facebook (DoctorDenzel), Twitter (@drjanadenzel), Instagram (doctor.denzel), YouTube (doctordenzel)
- **Links:** Terms, Cookie Policy, Privacy Notice, Complaints Policy, Booking & Cancellation Policy, Regulatory Details
- **Copyright:** © 2025 – DENSTUDIO – All Rights Reserved | Website Maintained by Dentell Ltd

---

## 4. TYPOGRAPHY (Updated — YDS-inspired editorial style)

| Element | Font | Size (mobile → desktop) | Weight | Colour | Line-height |
|---------|------|------------------------|--------|--------|-------------|
| **Primary font** | `'Cabin', sans-serif` | — | — | — | — |
| **Overline** | Cabin | 0.75rem (12px) | 400 | `#555` | 1.4 |
| **H1** | Cabin | 3rem → 3.75rem → 4.5rem | 300 (light) | `#222` | 1.1 |
| **H2** | Cabin | 1.875rem → 2.25rem → 3rem | 300 (light) | `#222` | 1.15 |
| **H3** | Cabin | 1.5rem → 1.875rem | 400 | `#222` | 1.2 |
| **Body text** | Cabin | 1rem → 1.125rem | 400 | `#555` | 1.7 |
| **Desktop nav links** | Cabin | 16px | 400 | `#333` | — |
| **Mobile nav links** | Cabin | 2.5rem | 700 | — | — |
| **Treatment card text** | Cabin | 0.95-1.1rem | 500 | `#2C332C` | — |
| **Review body** | Cabin | 0.75rem | 400 | `#1a1a1a` | — |
| **Review author** | Cabin | — | — | `#20c997` | — |
| **Button text** | Cabin | 16px | 500 | `#FFFFFF` | — |

### Typography Patterns
```
Overline: text-xs uppercase tracking-[0.2em] text-[#555555] mb-3
H1:       text-5xl md:text-6xl lg:text-7xl font-light text-[#222222] leading-[1.1]
H2:       text-3xl md:text-4xl lg:text-5xl font-light text-[#222222] leading-[1.15]
H3:       text-2xl md:text-3xl font-normal text-[#222222]
Body:     text-base md:text-lg text-[#555555] leading-relaxed
Section:  py-24 md:py-32
```

**Style notes:** Single font family throughout. Light heading weight (300) gives an elegant, luxury feel inspired by Yorkshire Dental Suite. Bold weights reserved for mobile nav and emphasis only. Overlines (small caps, tracked) used above section headings for categorisation. Generous whitespace between sections (py-24/py-32).

---

## 5. UI COMPONENTS

### Buttons
```
Primary CTA:
  background: #012406
  color: #FFFFFF (white — MUST contrast against dark green)
  border-radius: 50px (pill shape)
  padding: 14px 32px
  font-size: 16px
  font-weight: 500
  hover-background: #023a09
  transition: all 0.3s ease

Outline/Secondary CTA:
  background: transparent
  color: #012406
  border: 1px solid #012406
  border-radius: 50px
  hover-background: #012406
  hover-color: #FFFFFF

Inverted CTA (on dark backgrounds):
  background: #FFFFFF
  color: #012406
  border-radius: 50px
  hover-background: rgba(255,255,255,0.9)
```

**Tailwind class pattern:**
```
Primary:  bg-[#012406] hover:bg-[#023a09] text-white px-8 py-3.5 rounded-full font-medium transition-all duration-300
Outline:  border border-[#012406] text-[#012406] hover:bg-[#012406] hover:text-white px-8 py-3.5 rounded-full font-medium transition-all duration-300
Inverted: bg-white text-[#012406] hover:bg-white/90 px-8 py-3.5 rounded-full font-medium transition-all duration-300
```

### Cards (Treatment)
- White background, subtle box-shadow `rgba(0,0,0,0.10)`
- Rounded corners
- Image + text content (1.25rem padding)
- `flex: 0 0 auto` in carousel context

### Review Cards
- 280px fixed width
- Scroll-snap alignment
- Star rating → author name (teal) → review text
- 2rem gap between cards

### Glassmorphism Header
```
background: rgba(255,255,255,0.55)
backdrop-filter: blur(20px) saturate(180%)
border-bottom: rgba(255,255,255,0.45)
position: fixed
```

### Tab System (Fees Page)
- Pill-shaped tabs (`border-radius: 999px`)
- Active state: `#333D35` background
- Inactive: outlined/transparent

### Finance Calculator (Fees Page)
- Interactive slider (`£500–£30,000` range, 1-12 month terms)
- Real-time monthly payment display
- Investment badge in teal `#1e5465`
- Tooltip fades after 900ms

### Accordion
- Used on treatment pages for FAQ content
- Clean expand/collapse with arrow rotation (180deg)

---

## 6. NAVIGATION STRUCTURE

### Main Nav
| Item | Type | URL/Content |
|------|------|-------------|
| Treatments | Dropdown | 8 sub-items |
| Fees | Direct link | `/fees` |
| Team | Direct link | `/about` or `/team` |
| Phone | Icon button | `02038830588` |
| Book Now | CTA button | Booking link |

### Treatment Submenu
- General
- Teeth Straightening
- Composite Bonding
- Porcelain Veneers
- Teeth Whitening
- Hygiene
- Gum Reshaping
- Retainers

### Footer Links
- **Treatments:** General, Invisalign, Composite Bonding, Porcelain Veneers, Teeth Whitening, Hygiene
- **About:** Team/About, Fees
- **Legal:** Terms, Cookie Policy, Privacy Notice, Complaints, Booking & Cancellation, Regulatory Details
- **Social:** Facebook, Twitter/X, Instagram, YouTube

---

## 7. PAGE TEMPLATES IDENTIFIED

| Template | Used On | Key Sections |
|----------|---------|--------------|
| **Homepage** | `/` | Hero → Logos → Treatments → Dr Jana → Benefits → Gallery → Reviews → Process → Footer |
| **Treatment page** | `/porcelain-veneers`, `/composite-bonding` | Hero (image+text) → Patient gallery → FAQ/educational content → Reviews → Footer |
| **Fees page** | `/fees` | Hero → Tabbed pricing → Makeover packages → Finance calculator → Finance FAQ → Footer |
| **About page** | `/about` | Hero → Philosophy → Team profiles → Awards → Why choose → Footer |

---

## 8. KEY DESIGN PATTERNS

### Visual Identity
- **Overwhelmingly white** — colour is intentionally restrained for luxury feel
- **Dark green `#012406`** is the single brand colour used on all interactive elements
- **Gold `#C4A57B`** used sparingly as a luxury accent
- **No section background colour changes on homepage** — relies on whitespace and typography hierarchy instead
- **Glassmorphism header** is the most distinctive UI element

### Imagery Strategy
- Clinical before/after photography is the primary conversion tool
- Dr Jana's portrait used repeatedly — personal brand is central
- Media logos (Vogue, BBC, Rolling Stone) establish luxury credibility
- Minimal use of stock/lifestyle imagery — authenticity over aspiration

### Conversion Strategy
- "Book Now" CTA is persistent but minimal (header + inline)
- Phone number always accessible
- Google reviews featured prominently
- Celebrity/royal client references for social proof
- Finance calculator reduces price objection on Fees page

### Responsive Approach
- **Breakpoints:** 480px (mobile), 768px (tablet), 768px+ (desktop)
- **Grid:** 8 columns mobile (6vw gutter) → 24 columns desktop (4vw gutter)
- **Header padding shrinks:** 14px → 10px → 8px
- **Carousels replace grids** on mobile
- **Mobile nav:** Full-screen overlay, large touch targets (2.5rem)

### Animations
- `transition: all 0.3s ease` — global standard
- Link colour transitions: `0.2s ease`
- Scroll-triggered fade animations: `0.90s` duration
- Infinite logo carousel via `requestAnimationFrame`
- Menu hamburger line transforms (rotate + opacity)

---

## 9. COMPARISON: DENSTUDIO vs YORKSHIRE DENTAL SUITE

| Aspect | Denstudio | Yorkshire Dental Suite |
|--------|-----------|----------------------|
| **Positioning** | Ultra-premium, celebrity, single location | Premium but accessible, 9 locations |
| **Colour palette** | Dark green `#012406` + white (minimal) | Sienna/warm brown + cream + white |
| **Section backgrounds** | Almost entirely white | Alternating white/cream/beige |
| **Typography** | Cabin sans-serif, light weight | Serif headings + sans body |
| **Hero style** | Image + overlay text | Full-width art-directed per device |
| **Key UI element** | Glassmorphism header | Scrolling stats marquee |
| **Social proof** | Celebrity refs + media logos | Volume (7,000+ reviews) + before/after |
| **Platform** | Squarespace | Next.js (custom) |
| **Complexity** | Simpler, fewer sections | More sections, more templates |
| **Brand voice** | Exclusive, refined | Transformative, emotionally warm |

---

## 10. RECOMMENDED APPROACH FOR RECREATION

Since the original Denstudio site is built on Squarespace, a custom recreation gives us the opportunity to:

1. **Keep the minimalist white + dark green identity** — it works beautifully for luxury positioning
2. **Enhance with subtle section backgrounds** — introduce very light warm tones (inspired by YDS) to add depth without losing elegance
3. **Upgrade the glassmorphism header** — retain this as the signature UI element
4. **Build reusable components:** Card, ReviewCarousel, LogoStrip, ProcessSteps, GalleryGrid, TabSystem, FinanceCalculator
5. **Improve performance** — move from Squarespace to Next.js for better SEO, image optimisation, and load speed
