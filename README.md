# UNI RESIDENTIA

**Built for the Driven.**

A premium student accommodation brand website. Fully responsive, brand-focused front-end built with pure HTML, CSS, and vanilla JavaScript.

---

## Table of Contents

- [Overview](#overview)
- [Brand Identity](#brand-identity)
- [Project Structure](#project-structure)
- [Pages](#pages)
- [Tech Stack](#tech-stack)
- [Setup & Usage](#setup--usage)
- [Colour Palette](#colour-palette)
- [Typography](#typography)
- [Browser Support](#browser-support)
- [License](#license)

---

## Overview

UNI RESIDENTIA exists to provide ambitious students with a residence environment that supports academic success, personal growth, and future leadership.

This repository contains the complete front-end for the UNI RESIDENTIA website. It is a **static site** requiring no build tools, no frameworks, and no server-side processing. Open `index.html` in any browser to view.

---

## Brand Identity

| Element | Value |
|---|---|
| **Positioning** | Premium student accommodation |
| **Tagline** | Built for the Driven |
| **Internal Mantra** | Excellence Begins at Home |
| **Tone** | Sophisticated, Ambitious, Trustworthy |
| **Core Symbols** | Crown, Open Book, Torch, Key, Laurel Wreath |

---

## Project Structure


```
uni-residentia/
│
├── index.html                  # Homepage
├── about.html                  # Brand story & values
├── residences.html             # All residences listing
├── residence-detail.html       # Single residence detail
├── rooms.html                  # Room type overview
├── room-detail.html            # Single room detail
├── experience.html             # Amenities & community
├── investment.html             # Pricing & what's included
├── apply.html                  # Multi-step application form
├── contact.html                # Contact form & information
├── faq.html                    # Accordion FAQ
├── blog.html                   # Blog listing
├── blog-post.html              # Single blog post
├── student-portal.html         # Student login & dashboard
│
├── css/
│   └── style.css               # Complete brand design system
│
├── js/
│   └── main.js                 # All interactive functionality
│
├── images/
│   ├── logos/
│   │   ├── crest.svg           # Full crest mark
│   │   ├── shield.svg          # Shield logo
│   │   └── monogram.svg        # UR monogram
│   │
│   ├── icons/                  # UI icons (SVG)
│   └── photos/                 # Site photography
│
├── README.md                   # This file
└── favicon.ico                 # Browser favicon
```

---

## Pages

| Page | Path | Description |
|---|---|---|
| Home | `/index.html` | Full brand experience. Hero, features, residences preview, rooms, testimonials, application CTA |
| About | `/about.html` | Brand story, mission, values, team |
| Residences | `/residences.html` | All three residences with detailed cards |
| Residence Detail | `/residence-detail.html` | Individual residence with gallery, amenities, available rooms |
| Rooms | `/rooms.html` | Room type overview |
| Room Detail | `/room-detail.html` | Individual room details |
| Experience | `/experience.html` | Amenities grid and community features |
| Investment | `/investment.html` | Pricing cards and what's-included grid |
| Apply | `/apply.html` | Multi-field application form with process steps |
| Contact | `/contact.html` | Contact details and enquiry form |
| FAQ | `/faq.html` | Accordion-style FAQ |
| Blog | `/blog.html` | Blog post cards |
| Blog Post | `/blog-post.html` | Single article |
| Student Portal | `/student-portal.html` | Login form and dashboard UI |

---

## Tech Stack

| Technology | Purpose |
|---|---|
| **HTML5** | Semantic page structure |
| **CSS3** | Complete design system (custom properties, grid, flexbox, animations) |
| **Vanilla JavaScript** | Navigation, forms, FAQ accordion, mobile menu, scroll animations, portal simulation |
| **Google Fonts** | Cormorant Garamond (serif headings) + Montserrat (sans body) |

**Zero dependencies.** No npm, no frameworks, no build step.

---

## Setup & Usage

### Option 1: Direct Open
1. Clone or download this repository
2. Open `index.html` in any modern browser
3. Navigate the site

### Option 2: Local Server (Recommended)
Use any static file server:

```bash
# Python 3
python -m http.server 8000

# Node.js (with npx)
npx serve .

# VS Code Live Server extension
# Right-click index.html → "Open with Live Server"
```

Then visit `http://localhost:8000`

### Image Placeholders
The `images/photos/` and `images/icons/` directories require actual image assets. Replace the placeholder paths with:
- Residence photography
- Room photography
- Amenity photography
- Student testimonial portraits
- SVG icons for features

---

## Colour Palette

| Colour | Hex | CSS Variable | Usage |
|---|---|---|---|
| Primary Burgundy | `#7B0F10` | `--color-burgundy` | Buttons, accents, section backgrounds |
| Deep Wine | `#5B0809` | `--color-burgundy-dark` | Gradients, hover states |
| Heritage Gold | `#B38A3A` | `--color-gold` | Headlines, highlights, featured elements |
| Light Gold | `#D6B36B` | `--color-gold-light` | Secondary accents, labels |
| Ivory | `#F6F2E8` | `--color-ivory` | Light section backgrounds |
| Charcoal | `#2D2D2D` | `--color-charcoal` | Body text, footer |

---

## Typography

| Role | Font | Weight | Usage |
|---|---|---|---|
| **Headings** | Cormorant Garamond | 400, 600, 700 | All h1–h6, brand name, decorative |
| **Body** | Montserrat | 300, 400, 500, 600 | Paragraphs, navigation, forms, buttons |

---

## Browser Support

- Chrome (latest 2 versions)
- Firefox (latest 2 versions)
- Safari (latest 2 versions)
- Edge (latest 2 versions)

Requires support for:
- CSS Grid
- CSS Custom Properties
- Intersection Observer
- ES6+ JavaScript

---

## Customisation

### Changing Colours
Edit the CSS custom properties in `:root` at the top of `css/style.css`:

```css
:root {
    --color-burgundy: #7B0F10;
    --color-gold: #B38A3A;
    /* ... */
}
```

### Changing Fonts
Update the Google Fonts import in each HTML file and modify:

```css
:root {
    --font-serif: 'Your Serif Font', Georgia, serif;
    --font-sans: 'Your Sans Font', Helvetica, sans-serif;
}
```

---

## Key Features

- **Fully responsive** — mobile, tablet, and desktop
- **Accessible** — semantic HTML, ARIA labels, keyboard-navigable
- **Brand-consistent** — every component uses the design system
- **No dependencies** — works offline after initial font load
- **Smooth scroll** — anchor links animate
- **FAQ accordion** — pure CSS/JS toggle
- **Form validation** — client-side with user feedback
- **Mobile menu** — slide-in with overlay
- **Scroll animations** — Intersection Observer fade-in
- **Sticky navbar** — transparent to solid on scroll

---

## Future Enhancements

- [ ] Replace placeholder images with actual photography
- [ ] Add actual SVG icon files for feature cards
- [ ] Connect forms to a backend or form service (e.g., Formspree, Supabase)
- [ ] Implement real student portal authentication
- [ ] Add Google Maps embed for residence locations
- [ ] Implement a booking/payment flow
- [ ] Add meta tags for SEO and social sharing (Open Graph)
- [ ] Create remaining pages (`rooms.html`, `room-detail.html`, `blog-post.html`)

---

## Brand Note

This website implements the full UNI RESIDENTIA brand system:

- **Visual Identity:** Crest, shield, and monogram marks
- **Colour System:** Burgundy, gold, ivory, charcoal
- **Typography:** Heritage serif + modern sans pairing
- **Voice:** Ambitious, premium, academic — never cheap, casual, or party-focused
- **Tagline Architecture:**
  - External: *Built for the Driven*
  - Internal: *Excellence Begins at Home*
  - Social: *#WhereAmbitionLives*
  - Parent/Investor: *The Residence of Future Leaders*

---

## License

This project is proprietary. All brand assets, including the UNI RESIDENTIA name, crest, shield, monogram, and taglines, are protected brand property.

Code may be used as reference for similar projects with permission.

---

**EST. MMXXV**

*Excellence Begins at Home.*
```
