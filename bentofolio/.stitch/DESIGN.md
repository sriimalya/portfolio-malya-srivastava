# Design System: Bentofolio — Storytelling Bento Portfolio

## 1. Visual Theme & Atmosphere

A narrative-driven, developer-centric portfolio with a **"Storytelling Bento"** aesthetic — asymmetric grid cards of varying sizes that reveal a professional journey in fragments, like reading a well-organized engineer's notebook. The atmosphere is **precision-engineered** yet approachable: think a senior engineer's terminal paired with a design-forward editorial layout.

- **Density:** 6/10 — Balanced. Cards breathe with generous padding, but the grid itself is tightly orchestrated with purposeful negative space between bento cells.
- **Variance:** 7/10 — Asymmetric bento grids with cards spanning 1x1, 2x1, 1x2, and 2x2 configurations. No two adjacent cards share the same proportion.
- **Motion:** 6/10 — Fluid spring-physics entry animations with staggered cascade reveals. Subtle perpetual micro-interactions on interactive elements. Console-style typewriter effects on the hero.

## 2. Color Palette & Roles

### Dark Mode (Primary)
- **Deep Terminal** (#0A0A0B) — Primary background canvas. Near-black with warmth, avoids the harshness of pure black
- **Elevated Surface** (#141416) — Bento card backgrounds, elevated containers
- **Glass Panel** (rgba(255, 255, 255, 0.03)) — Glassmorphism card fill, layered with backdrop-blur
- **Glass Border** (rgba(255, 255, 255, 0.08)) — Card borders, structural lines at rest
- **Glass Border Hover** (rgba(225, 255, 74, 0.25)) — Card borders on hover, accent glow
- **Primary Text** (#E8E8ED) — Headlines, primary content. Warm off-white
- **Secondary Text** (#71717A) — Descriptions, metadata, timestamps. Zinc-500
- **Muted Text** (#52525B) — Tertiary info, disabled states. Zinc-600
- **Electric Lime** (#E1FF4A) — Singular accent. CTAs, active nav items, highlighted names, terminal cursor blink. Saturation calibrated at 78%
- **Lime Wash** (rgba(225, 255, 74, 0.08)) — Subtle accent tint for hover backgrounds
- **Lime Shadow** (rgba(225, 255, 74, 0.10)) — Card hover shadow glow, diffused

### Light Mode
- **Clean Canvas** (#F4F4F5) — Primary background. Zinc-100 warmth
- **White Surface** (#FFFFFF) — Bento card backgrounds
- **Light Glass** (rgba(0, 0, 0, 0.02)) — Glassmorphism card fill for light mode
- **Light Border** (rgba(0, 0, 0, 0.06)) — Card borders at rest
- **Light Border Hover** (rgba(30, 30, 30, 0.15)) — Card borders on hover
- **Dark Ink** (#18181B) — Primary text. Zinc-900
- **Medium Ink** (#52525B) — Secondary text. Zinc-600
- **Faded Ink** (#A1A1AA) — Tertiary text. Zinc-400
- **Deep Lime** (#3D5200) — Accent in light mode. Darkened lime for contrast on white backgrounds
- **Lime Tint** (rgba(61, 82, 0, 0.06)) — Hover background tint in light mode

### Banned Colors
- Pure black (#000000) — Never
- Purple/violet accents of any kind — Never
- Neon blue/cyan glows — Never  
- Saturated reds, oranges for decorative use — Never

## 3. Typography Rules

- **Display / Headlines:** `JetBrains Mono` — Track-tight (-0.02em), weight 700 for section headers, weight 500 for card titles. The monospace rhythm reinforces the developer identity. Headlines scale via `clamp(1.5rem, 4vw, 3rem)`
- **Body / Descriptions:** `Outfit` — Clean geometric sans-serif. Weight 400 for body, weight 500 for emphasized text. Leading 1.6, max-width 65ch. Provides contrast against the monospace headlines
- **Mono / Code / Metadata:** `JetBrains Mono` — Weight 400, slightly smaller (0.875rem). Used for tech tags, timestamps, terminal output, and skill badges
- **Hierarchy:** Weight and color drive hierarchy, not excessive size jumps. H1 at clamp(2rem, 5vw, 3.5rem), H2 at clamp(1.5rem, 3vw, 2rem), body at 1rem/16px minimum

### Banned Fonts
- Inter — generic, overused
- Montserrat — being replaced (current font, too rounded for developer aesthetic)
- Times New Roman, Georgia, Garamond — generic serifs
- System default sans-serif stacks

## 4. Component Stylings

### Bento Cards
- **Shape:** Rounded corners at 1rem (16px). Consistent across all card sizes
- **Background:** Glass Panel fill with `backdrop-filter: blur(12px)` in dark mode. White Surface in light mode
- **Border:** 1px Glass Border at rest. Transitions to Glass Border Hover on hover (300ms ease)
- **Shadow at rest:** None — flat by default for the grid to breathe
- **Shadow on hover:** `0 8px 32px Lime Shadow` — diffused accent glow, subtle
- **Padding:** 1.5rem (24px) internal padding. Consistent
- **Gradient overlay:** `linear-gradient(135deg, rgba(255,255,255,0.02), transparent)` — micro-glass sheen

### Buttons
- **Primary CTA:** Electric Lime fill, Dark Ink text. Rounded-full (pill). No outer glow. Active state: `translateY(1px)` tactile push. Hover: slight brightness increase (filter: brightness(1.05))
- **Secondary/Ghost:** Transparent fill, Glass Border stroke, Primary Text. Hover: Lime Wash background, Glass Border Hover stroke
- **Icon Buttons:** 40px square, rounded-full. Glass Panel fill. Hover: Lime Wash background

### Skill Tags / Badges
- **Shape:** Rounded-full (pill), mono font
- **Style:** 1px Glass Border, transparent fill. Hover: Lime Wash background, Electric Lime text and border
- **Size:** `text-xs` (0.75rem), padding 0.375rem 0.75rem

### Navigation
- **Desktop:** Horizontal, right-aligned. Mono font, lowercase labels. Active: Electric Lime text. Inactive: Secondary Text. Hover: Primary Text with 200ms transition
- **Mobile:** Full-screen overlay or slide-in panel with Glass Panel background and backdrop-blur
- **Logo:** Electric Lime circle (48px), black monospace "M" centered. Hover: scale(1.05) spring transition

### Experience Cards
- **Variant:** Electric Lime fill cards with Dark Ink text (inverted). Large decorative ordinal number at 120px, 10% opacity
- **Detail Modal:** Backdrop-blur overlay. Lime-filled panel with scrollable content

### Terminal / Code Block
- **Background:** Deep Terminal or slightly lighter (#111113)
- **Border:** 1px Glass Border
- **Font:** JetBrains Mono, 0.875rem
- **Cursor:** Electric Lime blinking block cursor (1s infinite animation)
- **Prompt prefix:** `>` in Electric Lime

## 5. Layout Principles

### Bento Grid System
- **Grid engine:** CSS Grid with `grid-template-columns` and `grid-template-rows`. Named grid areas for semantic placement
- **Card sizes:** 1×1 (base), 2×1 (wide), 1×2 (tall), 2×2 (featured). The hero and flagship project cards get 2×2 or full-width treatment
- **Gap:** 1rem (16px) between all grid cells
- **Container:** max-width 1400px, centered, with 2rem horizontal padding

### Section Spacing
- Vertical gaps between major sections: `clamp(3rem, 8vw, 6rem)`
- Internal card padding: 1.5rem consistent
- Never use flexbox calc() percentage hacks — pure CSS Grid

### Responsive Strategy
- **Desktop (>1024px):** 4-column bento grid with varied spans
- **Tablet (768–1024px):** 2-column grid, cards collapse to max 2×1
- **Mobile (<768px):** Single column stack. All cards become full-width. Touch targets minimum 44px
- Full-height sections use `min-h-[100dvh]` — never `h-screen`

## 6. Motion & Interaction

### Entry Animations (Framer Motion)
- **Bento cards:** Staggered fade-in + translateY(20px→0). Spring physics: `stiffness: 100, damping: 20`. Stagger delay: 0.08s per card
- **Section headers:** Fade-in from left, 0.4s duration
- **Skill tags:** Cascade waterfall reveal, 0.03s stagger

### Perpetual Micro-Interactions
- **Terminal cursor:** Infinite blink (Electric Lime block cursor, 1s ease-in-out)
- **Terminal typewriter:** Sequential character reveal of status text, 50ms per character, infinite loop with 3s pause between lines
- **Nav logo:** Subtle pulse on idle (scale 1→1.02→1, 4s infinite)
- **Card borders:** Smooth gradient rotation on hover using conic-gradient animation (optional, performance permitting)

### Theme Toggle
- **Icon:** Sun/Moon with morphing SVG path animation (300ms spring)
- **Transition:** `transition: background-color 400ms ease, color 400ms ease` on body/root. Cards transition independently with 50ms stagger for a ripple effect

### Performance Rules
- Animate exclusively via `transform` and `opacity`
- Never animate `top`, `left`, `width`, `height`
- Use `will-change: transform` only on actively animating elements
- Framer Motion `layout` animations for grid re-arrangement on filter

## 7. Anti-Patterns (Banned)

- No emojis anywhere in the UI
- No Inter font
- No Montserrat font (replace with Outfit)
- No generic serif fonts
- No pure black (#000000) backgrounds
- No neon/outer glow box-shadows
- No oversaturated accents beyond the calibrated Electric Lime
- No purple/violet accents of any kind
- No 3-column equal card layouts — always use asymmetric bento proportions
- No overlapping elements — every element occupies its own spatial zone
- No AI copywriting clichés ("Elevate", "Seamless", "Unleash", "Next-Gen")
- No filler text: "Scroll to explore", scroll arrows, bouncing chevrons
- No broken Unsplash links — use `picsum.photos` or local assets
- No centered Hero sections — force left-aligned or asymmetric split
- No fabricated metrics or statistics
- No `LABEL // YEAR` formatting
- No custom mouse cursors
- No generic placeholder names
- No UI/UX or design-related content — this is a Full Stack Engineering portfolio
