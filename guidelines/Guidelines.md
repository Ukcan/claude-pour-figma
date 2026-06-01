# 🎨 Flowdee Design System & Development Guidelines

**Project:** Flowdee Portfolio - UX/UI Designer Freelance  
**Tech Stack:** React + TypeScript + Tailwind CSS v4  
**Design System:** Glassmorphism + Liquid Glass  
**Target:** Startup Founders & Product Managers  
**Accessibility:** WCAG 2.2 AA Compliance

---

## 🚫 CRITICAL RULES (ALWAYS ENFORCE)

### Nomenclature (Code-First vNext)

**See:** `/guidelines/NOMENCLATURE_GUIDELINES.md` for full details.

1. **Nomenclature pass only:** Do NOT change UI/UX markup, spacing, copy, styles unless explicitly requested
2. **Zero Deletion Policy:** NO file deletions; keep legacy imports working via re-exports/aliases
3. **Do NOT introduce new theming libs:** Keep `.dark` class approach, DO NOT use next-themes
4. **Variants MUST be props** (intent/style/size/state/theme/breakpoint/plan), NOT filename variants
5. **When renaming/moving:** Always add a re-export/alias at old path for backward compatibility

### File Structure Convention

```
components/<Type>/<Name>.tsx → export <Type><Name>
```

**Examples:**
- `components/Button/CTA.tsx` → `CTAButton`
- `components/Nav/Header.tsx` → `HeaderNav`
- `components/Section/Hero.tsx` → `HeroSection`
- `components/Card/CaseStudy.tsx` → `CaseStudyCard`

---

## 🎨 Design System

### Color Palette (Pastel Colors)

**Primary Colors:**
- `--color-primary` → `#5B5FEF` (Indigo)
- `--color-accent-pink` → `#cc336f` (Rose)
- `--color-accent-blue` → `#87c1ff` (Bleu clair)
- `--color-accent-green` → `#3dd66d` (Vert)
- `--color-accent-yellow` → `#fff787` (Jaune)

**Usage Rules:**
- Primary CTA buttons → `bg-primary` with liquid-metal-border
- Accent highlights → Pastel colors for cards, badges, decorative elements
- Dark mode → All colors have dark variants with adjusted opacity

### Typography

- **Headings:** Poppins (via `font-heading` class or CSS variable)
- **Body:** Satoshi (via `font-body` class or CSS variable)
- **DO NOT use Tailwind font size/weight classes** (text-2xl, font-bold, leading-none) unless specifically requested
- Default typography is defined in `styles/globals.css`

### Glass Effects

**Available Classes:**
- `glass-light` → Subtle glassmorphism
- `glass-medium` → Standard glassmorphism
- `glass-strong` → Strong glassmorphism
- `liquid-glass` → Animated liquid glass effect
- `liquid-metal-border` → Animated metallic border (4s rotation)

**Usage:**
- Navigation, cards, modals → Use appropriate glass class
- Hover states → `hover:glass-medium` transitions
- DO NOT modify glass/liquid token values without explicit request

### Animations

**Standard Hover:**
- `hover:scale-[1.02]` → Subtle scale on interactive elements
- `transition-all duration-200` → Smooth transitions (200-300ms)

**Micro-interactions:**
- All interactive elements (buttons, cards, links) MUST have hover states
- Use Motion (motion/react) for complex animations
- Spring animations: `type: "spring", stiffness: 400, damping: 30`

**Liquid Metal Border Animation:**
```css
animation: liquidMetalRotate 4s linear infinite
```
DO NOT change duration without request.

---

## ♿ Accessibility (WCAG 2.2 AA)

### Contrast
- **Text on background:** Minimum 4.5:1 ratio
- **Large text (18px+):** Minimum 3:1 ratio
- **UI components:** Minimum 3:1 ratio
- Test with browser dev tools or use `color-contrast()` utilities

### Touch Targets
- **Minimum size:** 44px × 44px for all interactive elements
- Use `min-h-[44px] min-w-[44px]` on buttons/links
- Ensure adequate spacing between touch targets (8px minimum)

### Keyboard Navigation
- All interactive elements MUST be keyboard accessible
- Use `focus-ring` class for visible focus states
- Ensure logical tab order
- Support Escape key for modals/menus

### ARIA Labels
- Use `aria-label` for icon-only buttons
- Use `aria-expanded` for collapsible elements
- Use `aria-current="page"` for active nav items
- Use `role` attributes when appropriate (e.g., `role="group"`)

### Skip Links
```tsx
<a href="#main-content" className="sr-only focus:not-sr-only ...">
  Skip to main content
</a>
```
Always include for keyboard users.

---

## 🧩 Component Guidelines

### Button/CTA

**Variants (via props):**
- `intent`: "primary" | "secondary" | "tertiary" | "ghost"
- `size`: "sm" | "md" | "lg"
- `state`: "default" | "hover" | "active" | "disabled"

**Standard CTA:**
```tsx
<Button className="group relative overflow-hidden min-h-[44px] px-6 
  bg-primary/90 text-primary-foreground hover:text-white font-medium 
  backdrop-blur-md border border-white/10 shadow-lg hover:shadow-xl 
  hover:scale-[1.05] transition-all duration-200 focus-ring
  before:absolute before:inset-0 before:-z-10 before:bg-primary 
  before:translate-y-full hover:before:translate-y-0 
  before:transition-transform before:duration-300 before:ease-out
  hover:shadow-[0_0_30px_rgba(0,159,183,0.6)]">
  Book a Call
</Button>
```

**Rules:**
- Always include focus-ring for accessibility
- Min height 44px for touch targets
- Use primary color with glow effect on hover
- Animate with before/after pseudo-elements for liquid effects

### Card Components

**Standard Card Structure:**
```tsx
<div className="glass-medium rounded-xl p-6 hover:scale-[1.02] 
  transition-all duration-300 border border-white/10">
  {/* Content */}
</div>
```

**Friction Cards (Problem Cards):**
- Use `liquid-metal-border` for animated borders
- Include hover glow effect with `group-hover:` modifiers
- Minimum contrast 4.5:1 for text

### Section Components

**Standard Section:**
```tsx
<section className="py-16 md:py-20" aria-label="Section name">
  <div className="max-w-[1200px] mx-auto px-8 md:px-16">
    {/* Content */}
  </div>
</section>
```

**Rules:**
- Always include `aria-label` for screen readers
- Use consistent padding: `py-16 md:py-20`
- Max width: `max-w-[1200px]` for content
- Horizontal padding: `px-8 md:px-16`

### Navigation

**Current Implementation:** `HeaderNav` (canonical) / `Navigation` (legacy)

**Props:**
- `darkMode: boolean`
- `toggleDarkMode: () => void`

**Features:**
- Floating nav on scroll (top-3 with border-radius transition)
- Language selector (FR/EN)
- Dark mode toggle
- Mobile menu (slide-in from right)
- Smooth scroll to sections
- Active section highlighting

**Rules:**
- DO NOT modify without explicit request
- Preserve dark mode functionality
- Maintain accessibility (focus states, aria labels)
- Keep liquid-glass effect on floating state

---

## 🎯 Layout & Spacing

### Responsive Breakpoints

```
sm:  640px
md:  768px
lg:  1024px
xl:  1280px
2xl: 1536px
```

### Grid System

**Standard Grid:**
```tsx
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
```

**Use Cases:**
- Cards: 2-3 columns on desktop
- Trusted Clients: 2 cols mobile, 3 cols tablet, 6 cols desktop
- Features: 1-2 columns

### Spacing Scale

- Gap between cards: `gap-6 md:gap-8`
- Section padding: `py-16 md:py-20`
- Container padding: `px-8 md:px-16`
- Element margin: `mb-4`, `mt-8`, `mb-12` (use Tailwind scale)

---

## 🔧 Technical Guidelines

### React Best Practices

1. **Use functional components** with hooks
2. **TypeScript:** Always type props and state
3. **Avoid prop drilling:** Use Context API (e.g., `LanguageContext`)
4. **Memoization:** Use `React.memo` for expensive components
5. **Refs:** Use `useRef` for DOM access (not string refs)

### Motion/React (Framer Motion)

**Import:**
```typescript
import { motion } from 'motion/react';
```

**Standard Fade-In:**
```tsx
<motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.3 }}
>
```

**DO NOT:**
- Use old "framer-motion" package name
- Create janky animations (keep duration 0.2-0.5s)
- Animate too many elements simultaneously (performance)

### Tailwind CSS v4

**Rules:**
- Use `@theme` in `globals.css` for tokens (NOT tailwind.config.js)
- Inline classes for component-specific styles
- Global tokens for brand colors, spacing, fonts
- DO NOT create tailwind.config.js (we use v4 CSS-based config)

### File Organization

```
components/
  <Type>/
    <Name>.tsx        → Component
    index.ts          → Barrel export
  index.ts            → Main barrel
```

**When creating new components:**
1. Create `components/<Type>/<Name>.tsx`
2. Export as `<Type><Name>`
3. Add to `components/<Type>/index.ts`
4. Re-export in `components/index.ts`
5. Document in `/NOMENCLATURE_MAPPING.md`

---

## 🌐 Internationalization

**Context:** `LanguageContext` (FR/EN)

**Usage:**
```typescript
import { useTranslation } from '../contexts/LanguageContext';

const { t, language, setLanguage } = useTranslation();

// Access translations
{t.nav.services}
{t.hero.title}
```

**Rules:**
- All user-facing text MUST use translations
- DO NOT hardcode text in French or English
- Add new translations to `i18n/translations.ts`

---

## 🎯 Business Goals

**Primary Goal:** Convert visitors to book a 20-minute discovery call

**Target Audience:** Startup founders & product managers

**Key Conversion Points:**
1. Hero CTA → "Book a Call"
2. Navigation CTA → Persistent "Book a Call"
3. Final CTA Section → Last chance to convert
4. Contact form → Alternative to calendar

**Optimization Rules:**
- CTAs must be highly visible (primary color + glow)
- Smooth scroll to contact section on CTA click
- Mobile-first design (most traffic is mobile)
- Fast load times (optimize animations, images)

---

## 🚀 Performance

### Image Optimization

**Use ImageWithFallback:**
```tsx
import { ImageWithFallback } from './components/figma/ImageWithFallback';

<ImageWithFallback 
  src="https://..." 
  alt="Description" 
  className="..." 
/>
```

**DO NOT:**
- Use regular `<img>` for new images
- Hardcode image URLs without fallbacks
- Forget `alt` text (accessibility)

### Animation Performance

- Prefer `transform` and `opacity` (GPU-accelerated)
- Avoid animating `width`, `height`, `top`, `left` (layout thrashing)
- Use `will-change` sparingly (memory overhead)
- Limit concurrent animations (max 5-10 elements)

---

## 📝 Code Quality

### General

1. **Keep components small** (<300 lines, ideally <150)
2. **Extract helpers** to separate files
3. **Use meaningful names** (no `temp`, `data`, `thing`)
4. **Comment complex logic** but avoid obvious comments
5. **Remove console.logs** before commit

### TypeScript

```typescript
// ✅ Good
interface ButtonProps {
  intent?: 'primary' | 'secondary';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  onClick?: () => void;
}

// ❌ Bad
interface ButtonProps {
  type?: string;  // Too vague
  kids: any;      // Avoid 'any'
}
```

### CSS Classes

```tsx
// ✅ Good - Organized, readable
<div className="
  flex items-center justify-between
  px-8 py-4
  glass-medium rounded-xl
  hover:scale-[1.02] transition-all duration-200
">

// ❌ Bad - One long line
<div className="flex items-center justify-between px-8 py-4 glass-medium rounded-xl hover:scale-[1.02] transition-all duration-200">
```

---

## 🧪 Testing Checklist

Before declaring work complete:

- [ ] Dark mode works (toggle + persistence)
- [ ] Navigation smooth scroll works
- [ ] Mobile menu works (open/close)
- [ ] All CTAs scroll to contact section
- [ ] Keyboard navigation works (Tab, Enter, Esc)
- [ ] Focus states visible on all interactive elements
- [ ] Color contrast meets WCAG AA (4.5:1 minimum)
- [ ] Touch targets minimum 44px
- [ ] Animations smooth (no jank)
- [ ] Responsive on mobile, tablet, desktop
- [ ] Language switch works (FR/EN)
- [ ] No console errors
- [ ] Glass effects render correctly
- [ ] Liquid border animations loop smoothly

---

## 📚 Reference Files

- **Nomenclature:** `/guidelines/NOMENCLATURE_GUIDELINES.md`
- **Mapping:** `/NOMENCLATURE_MAPPING.md`
- **Figma Conventions:** `/FIGMA_NOMENCLATURE.md`
- **Translations:** `/i18n/translations.ts`
- **Styles:** `/styles/globals.css`

---

## 🔒 Protected Files

**DO NOT MODIFY:**
- `/components/figma/ImageWithFallback.tsx` (system component)
- `/styles/globals.css` (unless explicitly requested)
- `/index.css` (generated/critical)
- Token values (colors, spacing) without explicit request

---

## ✨ Final Notes

**When in doubt:**
1. Consult this file and `/guidelines/NOMENCLATURE_GUIDELINES.md`
2. Check existing components for patterns
3. Ask for clarification before making breaking changes
4. Preserve backward compatibility (Zero Deletion Policy)

**Philosophy:**
- **Additive, not destructive** - Wrap, don't replace
- **Accessible by default** - WCAG 2.2 AA non-negotiable
- **Performance matters** - Fast load, smooth animations
- **Business-focused** - Every change should support conversion goals

**Zero Deletion. Zero Breakage. Full Compat. Premium Quality.**
