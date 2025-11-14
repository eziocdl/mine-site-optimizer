# Mining Cooperative Institutional Website - Design Guidelines

## Design Approach
**Reference-Based Approach**: Drawing inspiration from professional corporate institutional websites in the mining/industrial sector, combining credibility-focused design with investor appeal. Think Rio Tinto, Vale, BHP institutional sites with modern web standards.

## Core Design Principles
- **Professional credibility** for international investors
- **Environmental consciousness** balanced with industrial strength
- **Global accessibility** and multilingual clarity
- **Conversion-focused** with strategic CTAs

## Color Palette
**Primary Colors:**
- Earth tones: Clay (#A67C52), Sand (#D4B896), Ochre (#CC7722)
- Dark greens: Pine (#2C5F2D), Moss (#4A7C59)
- Deep blues: Slate (#4A5568), Navy (#1E3A8A)
- Metallic accents: Gold (#D4AF37), Copper (#B87333), Silver (#C0C0C0)

**Application:**
- Primary backgrounds: Sand/light earth tones with white
- Headers/footers: Navy or dark green
- CTAs: Metallic gold with navy text
- Accents: Pine green for sustainability sections

## Typography
**Font System:**
- Primary: Inter or Roboto (professional, highly legible)
- Headings: 700 weight, minimum 32px (desktop), 24px (mobile)
- Body: 400 weight, 16px minimum for accessibility
- Navigation: 500 weight, 14-16px
- Strong hierarchy with consistent scale

**Spacing Units:**
Tailwind units: 2, 4, 8, 12, 16, 20 (p-2, h-8, m-12, etc.)

## Layout System

**Page Structure (All 7 Pages):**

1. **Fixed Header** (sticky top navigation)
   - Logo placeholder area (left) + Cooperative name
   - Horizontal navigation menu (center/right)
   - Language switcher (flags: PT/EN/ES)
   - Internal search icon (expandable)
   - Mobile: Hamburger menu

2. **Hero/Banner Section** (rotating carousel)
   - Full-width, 60vh height
   - 3-5 institutional highlight slides
   - Overlay with cooperative tagline
   - Blurred background buttons for primary CTAs
   - Navigation dots/arrows

3. **Main Content Area**
   - Max-width container: 1200px
   - Responsive grid: 3 columns (desktop), 2 (tablet), 1 (mobile)
   - Generous whitespace between sections (py-16 to py-20)

4. **Footer** (comprehensive)
   - 4-column grid: About/Quick Links/Reports/Contact
   - Newsletter subscription form
   - Social media icons
   - Copyright and compliance links
   - Metallic accent line separator at top

## Component Library

**Navigation:**
- Sticky header with logo, nav links, search, language selector
- Dropdown mega-menu for Products/Reports
- Breadcrumbs on internal pages

**Carousel/Banner:**
- Auto-rotating slides (5-second intervals)
- Manual navigation arrows and dots
- Pause on hover
- Overlay gradient for text readability

**Photo Gallery:**
- Masonry grid layout (2-4 columns)
- Lightbox modal on click
- Category filtering tabs
- Lazy loading for performance

**Video Section:**
- Embedded player (YouTube/Vimeo)
- Multiple video thumbnails in grid
- Play icon overlay on thumbnails

**Reports Download:**
- Card-based layout grouped by category
- PDF icon + title + file size + download button
- Categories: Social, Environmental, Financial
- Search/filter functionality

**Contact Form:**
- 2-column layout: Form (left) + Map/Info (right)
- Fields: Name, Email, Subject, Message
- Client-side validation with error states
- Submit button with loading state

**Testimonials:**
- 3-column card grid
- Quote marks, text, author name/role/photo
- Subtle shadow and rounded corners

**CTAs:**
- Primary: Gold/metallic background, navy text, blurred background when on images
- Secondary: Outline style with earth-tone borders
- Strategically placed: After hero, between sections, before footer

## Page-Specific Design

**Home:**
- Hero carousel with institutional highlights
- About summary (2-column: text + image)
- Featured products (3-card grid)
- Investor highlight section with stats
- Latest news (3-article preview)
- Testimonials slider

**Investors:**
- Financial data visualization section
- Downloadable reports prominently featured
- Investor relations contact
- Stock/performance charts (placeholders)

**Sustainability:**
- Green color scheme emphasis
- Environmental initiatives grid
- Impact statistics (large numbers)
- Photo gallery of projects

## Images Strategy

**Required Images:**
- **Hero carousel**: 5 high-quality images (mining operations, cooperative facilities, team meetings, sustainability projects, product showcases) - 1920x1080px minimum
- **About Us**: Team photo, facility aerial view, historical milestones
- **Products**: Product photography on white/neutral backgrounds
- **Gallery**: 20+ operational photos (equipment, minerals, workers, facilities)
- **Testimonials**: Stakeholder/client headshots (circular crop)
- **News**: Article featured images (16:9 ratio)
- **Sustainability**: Environmental project imagery

**Placeholder System:**
- Logo: SVG placeholder with cooperative initials if image fails
- Photos: Neutral earth-tone gradient with icon/text overlay

## Accessibility & Performance
- WCAG AA contrast ratios (minimum 4.5:1)
- Keyboard navigation support throughout
- ARIA labels for all interactive elements
- Alt text for all images
- Mobile-first responsive breakpoints: 640px, 768px, 1024px, 1280px
- Lazy loading for images and videos
- Optimized asset delivery

## Animations
Minimal, purposeful animations only:
- Smooth scroll to anchor links
- Fade-in on scroll for sections (subtle)
- Carousel slide transitions
- Hover state for cards (slight lift/shadow)
- Form field focus states