# Design System - Habit Haunt

## 🎨 Visual Identity

### Theme
**Dark Fantasy Horror meets Modern UI**

A unique blend of gothic horror aesthetics with contemporary glassmorphism and neon accents. The design creates an immersive Halloween atmosphere while maintaining usability and clarity.

### Core Principles
1. **Atmospheric Immersion** - Every element contributes to the haunted world
2. **Functional Beauty** - Aesthetics serve the user experience
3. **Consistent Horror** - Unified spooky theme across all pages
4. **Modern Polish** - Clean, professional execution despite dark theme

---

## 🎨 Color Palette

### Primary Colors
```css
/* Purple Spectrum - Main Brand Colors */
--primary-purple: #8a2be2;      /* Neon purple - primary accent */
--dark-purple: #4b0082;          /* Deep indigo - shadows */
--light-purple: #b19cd9;         /* Lavender - text highlights */

/* Red Spectrum - Danger & Blood */
--blood-red: #ff0000;            /* Bright red - alerts */
--dark-red: #8b0000;             /* Dark crimson - backgrounds */
--red-accent: #ff4444;           /* Light red - borders */

/* Backgrounds */
--bg-darkest: #0a0a0f;           /* Almost black */
--bg-dark: #1a0a1f;              /* Dark purple tint */
--bg-mid: #2a0a2f;               /* Medium purple tint */

/* Neutrals */
--text-primary: #e0e0e0;         /* Light gray text */
--text-secondary: #888;          /* Dim gray */
--text-white: #fff;              /* Pure white highlights */
```

### Usage Guidelines

**Purple** - Interactive elements, glows, primary actions
**Red** - Danger, monster elements, blood effects
**Dark** - Backgrounds, shadows, depth
**White** - Text, highlights, important info

---

## 📐 Typography

### Font Stack
```css
font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
```

### Type Scale
```css
--text-xs: 0.9rem;    /* Small labels */
--text-sm: 1rem;      /* Body text */
--text-md: 1.1rem;    /* Emphasized text */
--text-lg: 1.3rem;    /* Subheadings */
--text-xl: 2rem;      /* Section titles */
--text-2xl: 2.5rem;   /* Page titles */
--text-3xl: 3rem;     /* Hero text (mobile) */
--text-4xl: 5rem;     /* Hero text (desktop) */
```

### Text Styling
- **Headings**: Bold (900), with text-shadow glow
- **Body**: Normal weight, high contrast
- **Labels**: Bold, purple accent color
- **Interactive**: Hover effects with color shift


---

## 📏 Spacing System

### Scale
```css
--space-xs: 10px;
--space-sm: 15px;
--space-md: 20px;
--space-lg: 30px;
--space-xl: 40px;
--space-2xl: 50px;
```

### Application
- **Padding**: 20-40px for panels
- **Margins**: 15-30px between sections
- **Gaps**: 15-30px in grids/flexbox

---

## 🎭 Component Styles

### Glassmorphism Panels
```css
.glass-panel {
    background: rgba(20, 10, 30, 0.7);
    backdrop-filter: blur(10px);
    border: 1px solid rgba(138, 43, 226, 0.3);
    border-radius: 20px;
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.5);
}
```

### Buttons
**Primary (Neon Purple)**
- Background: Linear gradient purple
- Border: 2px solid light purple
- Glow: Box-shadow with purple
- Hover: Scale 1.05 + increased glow

**Danger (Blood Red)**
- Background: Linear gradient red
- Border: 2px solid light red
- Glow: Box-shadow with red
- Hover: Scale 1.02 + increased glow

### Input Fields
- Background: rgba(0, 0, 0, 0.5)
- Border: 2px solid purple (40% opacity)
- Focus: Full opacity border + glow
- Padding: 15px
- Border-radius: 10px

---

## ✨ Animation System

### Timing Functions
```css
--ease-smooth: ease;
--ease-bounce: cubic-bezier(0.68, -0.55, 0.265, 1.55);
--ease-in-out: ease-in-out;
```

### Duration Standards
- **Fast**: 0.3s (interactions)
- **Medium**: 1s (stat bars)
- **Slow**: 2s (ambient effects)
- **Very Slow**: 20-35s (environmental)

### Animation Categories

**Environmental** (continuous):
- Fog movement: 25-35s
- Bat flying: 15s
- Particle floating: 20s
- Candle flicker: 1.5-2s

**Interactive** (on action):
- Button hover: 0.3s
- Input focus: 0.3s
- Page transition: 0.5s
- Stat bar fill: 1s

**Atmospheric** (looping):
- Glow pulse: 2s
- Flame flicker: 1.5s
- Lantern glow: 2s
- Blood shimmer: 2s

---

## 📱 Responsive Breakpoints

```css
/* Mobile First Approach */
--mobile: 320px;
--tablet: 768px;
--desktop: 1024px;
--wide: 1440px;
```

### Layout Adjustments

**Mobile (< 768px)**:
- Single column layouts
- Stacked navigation
- Reduced font sizes
- Simplified animations
- Touch-friendly buttons (min 44px)

**Tablet (768px - 1024px)**:
- Two column grids
- Adjusted spacing
- Medium font sizes
- Full animations

**Desktop (> 1024px)**:
- Multi-column layouts
- Maximum spacing
- Large font sizes
- All effects enabled

---

## 🎬 Visual Effects

### Glow Effects
```css
/* Purple Glow */
text-shadow: 0 0 20px #8a2be2;
box-shadow: 0 0 20px rgba(138, 43, 226, 0.6);

/* Red Glow */
text-shadow: 0 0 20px rgba(255, 0, 0, 0.8);
box-shadow: 0 0 20px rgba(255, 0, 0, 0.4);
```

### Depth Layers
1. **Background** (z-index: 0) - Castle, fog
2. **Content** (z-index: 10) - Panels, text
3. **Interactive** (z-index: 20) - Buttons, inputs
4. **Overlay** (z-index: 30) - Modals, tooltips

---

## 🎨 Page-Specific Design

### Landing Page
- **Mood**: Mysterious, inviting
- **Colors**: Dark purple gradients
- **Effects**: Fog, bats, particles
- **Focus**: Large hero button

### Habit Input
- **Mood**: Ritualistic, serious
- **Colors**: Dark with candle warmth
- **Effects**: Flame flicker
- **Focus**: Form inputs

### Monster Profile
- **Mood**: Intimidating, informative
- **Colors**: Red accents, stone textures
- **Effects**: Pulse, blood drips
- **Focus**: Monster stats

### Battle Dashboard
- **Mood**: Action-oriented, engaging
- **Colors**: Purple vs Red (player vs monster)
- **Effects**: HP bars, spell glows
- **Focus**: Task completion

### Progress Map
- **Mood**: Reflective, journey-like
- **Colors**: Moonlight beams, lantern glow
- **Effects**: Floating particles
- **Focus**: Path visualization

### Analytics
- **Mood**: Analytical, rewarding
- **Colors**: Mixed (flame, blood, purple)
- **Effects**: Chart animations
- **Focus**: Statistics display

---

## ♿ Accessibility

### Contrast Ratios
- Body text: 4.5:1 minimum (WCAG AA)
- Large text: 3:1 minimum
- Interactive elements: 3:1 minimum

### Focus Indicators
- Visible outline on keyboard focus
- Color change on hover
- Scale animation for clarity

### Semantic HTML
- Proper heading hierarchy
- ARIA labels where needed
- Alt text for visual elements
- Keyboard navigation support

---

## 🎯 Design Decisions

### Why Glassmorphism?
- Modern aesthetic
- Creates depth without clutter
- Maintains dark theme
- Allows background visibility

### Why Neon Purple?
- High visibility on dark backgrounds
- Mystical, magical association
- Stands out without being harsh
- Complements horror theme

### Why Emoji Icons?
- Universal recognition
- No image loading required
- Scalable and crisp
- Adds personality

### Why Minimal Dependencies?
- Fast loading times
- Full control over styling
- No framework bloat
- Easy maintenance

---

**Design System Version**: 1.0  
**Last Updated**: December 2025  
**Created for**: Kiroween 2025
