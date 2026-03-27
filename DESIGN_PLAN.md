# Denstudio Web Recreation — Design Plan

> Based on analysis of Yorkshire Dental Suite (yorkshiredentalsuite.co.uk) homepage + 7 additional pages.

---

## 1. SITE OVERVIEW

**Business type:** Multi-location premium dental practice (9 UK clinics)
**Brand tone:** Luxury-meets-approachable, transformation-focused, emotionally driven
**Tech stack observed:** Next.js (React), Tailwind CSS, Vimeo embeds, Cookiebot, GTM, CDN-optimized images (WebP)

---

## 2. HOMEPAGE STRUCTURE (Section-by-Section)

### Section 1 — Hero Banner
- **Layout:** Full-width background image with centered text overlay
- **Content:** Bold headline ("Let's make it extraordinary"), short tagline, primary CTA button ("Enquire now")
- **Images:** Separate desktop (`Home_hero.webp`) and mobile (`Home_mobile_hero.webp`) variants — responsive art direction via `<picture>` element
- **Design notes:** Clean, minimal text. Image carries the emotional weight. CTA triggers a modal form.

### Section 2 — Scrolling Stats Bar
- **Layout:** Horizontal auto-scrolling carousel, edge-to-edge
- **Content:** Three key stats separated by rose logo icons:
  - "10,000+ TRANSFORMATIONS"
  - "RATED 5 STARS FROM OVER 7,000 GOOGLE REVIEWS"
  - "9 CLINICS THROUGHOUT THE UK"
- **Design notes:** Infinite marquee animation. All-caps typography. Builds instant credibility.

### Section 3 — Treatment Grid ("How We Can Help")
- **Layout:** Responsive card grid (likely 3-4 columns desktop, 1-2 mobile)
- **Content:** 12 treatment cards, each with:
  - Thumbnail image (clinical/lifestyle)
  - Treatment name
  - Short description
  - Link to treatment page
- **Treatments listed:** Porcelain Veneers, Nanofill Composite Bonding, Clear Aligners, Composite Filling, Dental Crowns, Smile Makeover, General Dentistry, Teeth Whitening, Sedation, Wisdom Tooth Removal, Dental Implants, Teeth Straightening
- **Design notes:** Cards are clickable. Outcome-focused copy (not clinical jargon).

### Section 4 — Media Credibility Strip
- **Layout:** Logo carousel / horizontal strip
- **Content:** Media outlet logos — Channel 4, BBC, Daily Express, Mail on Sunday, Yorkshire Evening Post, Channel 5
- **Design notes:** Greyscale logos on neutral background. Subtle trust signal. Likely auto-scrolling.

### Section 5 — Brand Differentiator ("The YDS Difference")
- **Layout:** Two-column — image left, text right (or stacked on mobile)
- **Content:**
  - Heading: "Why choose Yorkshire Dental Suite?"
  - Subheading: "Only exceptional will do"
  - Body text about custom design, in-house lab, supportive culture
  - CTA link: "About us"
- **Images:** Single lifestyle/clinical environment photo
- **Design notes:** Warm, editorial feel. Generous whitespace.

### Section 6 — Pricing & Payment
- **Layout:** Centred text block with key stats
- **Content:**
  - Heading about transparent pricing & flexible finance
  - Three key callouts:
    - "Finance available from 0% APR representative"
    - "Membership plans from £34.99/month"
    - "Consultations just £95"
  - CTA: "Pricing & plans"
- **Design notes:** Clean, confidence-building. No pricing table on homepage — just hooks to the dedicated page.

### Section 7 — Three-Step Process ("How YDS Works")
- **Layout:** Three numbered blocks, each with image + text (stepped carousel on mobile)
- **Steps:**
  1. **Your smile design consultation** — personalised planning, 3D scans
  2. **Next-level treatment** — digital precision, in-house specialists
  3. **Smile for life** — ongoing support, membership benefits
- **Images:** One per step (consultation room, treatment, happy patient)
- **Design notes:** Visual storytelling. Reduces anxiety by showing the journey.

### Section 8 — Smile Stories (Testimonials)
- **Layout:** Horizontal card carousel (4 cards visible on desktop)
- **Content:** Patient case studies with:
  - Before/after images
  - Patient name + age
  - Treatment type
  - Link to full story
- **Featured patients:** Carlos (72), Charly (22), Katie (34), Tom (20)
- **CTA:** "More Smile Stories"
- **Design notes:** Age diversity is intentional — shows broad appeal.

### Section 9 — Google Reviews ("The Brand Patients Trust")
- **Layout:** Scrollable card carousel
- **Content:**
  - Section heading: "Rated 5 stars from 7,000+ Google reviews"
  - 12+ individual review cards, each with:
    - Customer photo/avatar
    - 5-star rating
    - Review text excerpt
- **Design notes:** Authentic social proof. Real photos and names. High volume reinforces trust.

### Section 10 — Clinic Finder
- **Layout:** Card grid (likely 3 columns desktop)
- **Content:** 9 location cards:
  - York, Wakefield, Manchester, London, Liverpool, Leeds, Hull, Guiseley, Birmingham
  - Each: location image, clinic name, full address, descriptive tagline
- **CTA:** "Enquire Now" at section top
- **Design notes:** Location images are architectural/interior photography. Taglines are unique per clinic.

### Section 11 — Final CTA
- **Layout:** Centred text block, full-width background
- **Content:**
  - Heading: "Ready to smile?"
  - Body: "Every smile tells a story. Let's make yours one to remember..."
  - CTA button: "Book your consultation"
- **Design notes:** Emotional close. Single prominent button. Rose logo may appear.

---

## 3. GLOBAL NAVIGATION

### Main Nav (sticky header)
| Item | Type | Notes |
|------|------|-------|
| Treatments | Mega dropdown | 12 treatment sub-links |
| Pricing | Direct link | `/plans-fees/` |
| Find a Clinic | Dropdown | 9 locations |
| Dentist Referrals | Direct link | |
| About | Direct link | `/about-us/` |
| Contact | Direct link | `/contact-us/` |
| Phone CTA | Click-to-call | `+441138879594` |
| Enquire Now | Button (modal) | Primary conversion CTA |

### Footer
- **Column 1:** General links (Sale, Smile Stories, Jobs, Clinicians, Lab, Ambassador Programme, Blog, Returns, Complaints)
- **Column 2:** Implant treatments (7 links)
- **Column 3:** Additional services (7 links)
- **Bottom bar:** Legal links (Terms, Privacy, Cookies), Social icons (Instagram, Facebook, YouTube)
- **Company info:** Full registered address, company number, FCA number, ICO registration, subsidiary companies list, finance disclaimer

---

## 4. DESIGN SYSTEM

### Colour Palette
| Role | Colour | Notes |
|------|--------|-------|
| Background (primary) | White `#FFFFFF` | Clean, clinical |
| Background (alternate) | Warm beige/cream | Used on alternating sections |
| Accent | Sienna / warm rose-brown | CTAs, highlights, brand elements |
| Text (primary) | Near-black | Headings and body |
| Text (secondary) | Dark grey | Supporting copy |

### Typography
- **Headings:** Serif or modern sans-serif, large weight — editorial luxury feel
- **Body:** Sans-serif, optimised for readability
- **Overlines:** Small caps, used above section headings for categorisation
- **Hierarchy:** Overline → H2 heading → Body text (consistent pattern across all sections)

### Imagery Strategy
| Type | Usage | Style |
|------|-------|-------|
| Hero banners | Full-width, art-directed per device | Lifestyle/aspirational, warm tones |
| Treatment cards | Thumbnail per service | Mix of clinical + outcome shots |
| Patient photos | Testimonials + case studies | Real people, before/after pairs |
| Clinic photos | Location cards | Architectural/interior, professional |
| Media logos | Credibility strip | Greyscale on neutral bg |
| Process illustrations | How-it-works steps | Clinical environment, warm lighting |

### UI Components (Reusable)
1. **Card** — Image + heading + body + optional CTA (treatments, clinics, reviews)
2. **Scrolling marquee** — Stats bar with infinite horizontal scroll
3. **Stepped carousel** — Numbered process steps with images
4. **Testimonial carousel** — Horizontal scroll of review/case-study cards
5. **Accordion** — Expandable FAQ items (used on treatment + pricing pages)
6. **Modal form** — Enquiry form triggered by CTA buttons
7. **Hero variants** — StandardHero (homepage), LuxHero (treatment pages), PillHero (implants)
8. **Pricing table** — Tiered cards with feature lists (Gold/Platinum/Diamond on implants)
9. **Comparison table** — Feature matrix with check/cross marks
10. **Logo strip** — Horizontal carousel of brand/media logos

---

## 5. PAGE TEMPLATES IDENTIFIED

| Template | Used On | Key Sections |
|----------|---------|--------------|
| **Homepage** | `/` | Hero → Stats → Grid → Media → Differentiator → Pricing → Process → Stories → Reviews → Clinics → CTA |
| **Treatment page** | `/treatments/*` | LuxHero → Intro → Features (3 cards) → Why YDS → Candidacy → Specialist quote → Reviews → Process → Stories → Pricing table → FAQs → CTA |
| **About page** | `/about-us/` | Video hero → Philosophy (3 cards) → Stats → Team grid → Clinics → Blog → CTA |
| **Pricing page** | `/plans-fees/` | Hero → Fee accordion → Membership → Finance → Finance FAQs → Promise → CTA |
| **Contact page** | `/contact-us/` | Hero → Form → Contact accordion → Clinics → Footer |

---

## 6. KEY PATTERNS FOR RECREATION

### Conversion Strategy
- "Enquire Now" modal appears on nearly every section — persistent but not intrusive
- Phone number always visible in header
- No hard pricing on homepage — teasers drive clicks to pricing page
- Before/after imagery is the primary conversion driver

### Content Strategy
- Outcome-focused language ("Transform", "Redefine", "Extraordinary")
- Social proof layered throughout (stats → media → reviews → case studies)
- Age-diverse patient stories to broaden appeal
- Clinical credibility balanced with emotional warmth

### Responsive Approach
- Art-directed hero images (separate mobile/desktop assets)
- Card grids collapse from multi-column to single column
- Carousels replace grids on mobile
- Reduced animation option observed (accessibility)

### SEO/Technical
- Schema markup: FAQPage, BreadcrumbList structured data
- Semantic HTML with proper heading hierarchy
- WebP images with CDN optimisation and multiple size variants
- Cookie consent management (Cookiebot)
- GTM integration for conversion tracking

---

## 7. RECOMMENDED TECH STACK FOR RECREATION

| Layer | Recommendation | Reason |
|-------|---------------|--------|
| Framework | Next.js 14+ (App Router) | Matches original, great for SEO |
| Styling | Tailwind CSS | Matches original, rapid development |
| CMS | Headless (Sanity or Contentful) | Treatment pages follow consistent templates |
| Forms | React Hook Form + server action | Modal enquiry forms |
| Animation | Framer Motion | Scroll animations, carousels, marquee |
| Images | Next/Image with CDN | Responsive, optimised WebP delivery |
| Deployment | Vercel | Native Next.js hosting |

---

## 8. IMPLEMENTATION PRIORITY

1. **Phase 1 — Foundation:** Global layout (header, footer, nav), design tokens (colours, typography), base components (Card, Button, Modal)
2. **Phase 2 — Homepage:** All 11 sections in order, responsive breakpoints, scroll animations
3. **Phase 3 — Treatment template:** Single reusable template powering all treatment pages
4. **Phase 4 — Supporting pages:** About, Pricing, Contact
5. **Phase 5 — Polish:** SEO metadata, schema markup, analytics, cookie consent, performance optimisation
