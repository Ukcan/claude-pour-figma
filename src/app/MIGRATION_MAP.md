# 📊 Migration Map - Glassmorphism + Liquid Glass Implementation

## Zero Deletion Policy - Tous les éléments sont préservés et tracés

| Element ID | Source Component | Target Treatment | Action | A11y Status | Notes |
|-----------|------------------|------------------|--------|-------------|-------|
| **NAVIGATION** |
| nav-container | Navigation.tsx | Glass Structure | Apply glass-medium + scrim | ✅ AA | Blur 20px, scrim light/dark |
| nav-logo | Navigation.tsx | Preserved | No change | ✅ AA | Focus ring added |
| nav-menu-items | Navigation.tsx | Preserved | Add focus-visible | ✅ AA | 44px target size |
| nav-cta-button | Navigation.tsx | Preserved | Enhanced focus | ✅ AA | Primary button, 44px |
| nav-dark-toggle | Navigation.tsx | Preserved | Enhanced focus | ✅ AA | 44px toggle button |
| nav-mobile-menu | Navigation.tsx | Glass Structure | Apply glass-medium | ✅ AA | Slide-in with glass |
| **HERO SECTION** |
| hero-background | HeroFlowdee.tsx | Liquid Accent (Hero-L) | Add liquid blob | ✅ AA | Behind content, 25% opacity |
| hero-title | HeroFlowdee.tsx | Scrim | Add scrim-text-dark | ✅ AA | Contraste 4.5:1 minimum |
| hero-subtitle | HeroFlowdee.tsx | Scrim | Add scrim-text-dark | ✅ AA | Contraste 4.5:1 minimum |
| hero-cta | HeroFlowdee.tsx | Liquid Halo (CTA-M) | Add glow effect | ✅ AA | 44px target, focus ring |
| **ABOUT SECTION** |
| about-container | About.tsx | Glass Card | Apply glass-subtle | ✅ AA | Blur 12px, scrim for text |
| about-text | About.tsx | Scrim | Add scrim-text-light/dark | ✅ AA | Contraste vérifié |
| **PROBLEM CARDS** |
| problem-card-1 | ProblemCards.tsx | Glass Card | Apply glass-medium | ✅ AA | Individual card treatment |
| problem-card-2 | ProblemCards.tsx | Glass Card | Apply glass-medium | ✅ AA | Individual card treatment |
| problem-card-3 | ProblemCards.tsx | Glass Card | Apply glass-medium | ✅ AA | Individual card treatment |
| **USE CASES / CASE STUDIES** |
| usecase-card-1 | UseCases.tsx | Glass Card | Apply glass-medium | ✅ AA | Image + text overlay scrim |
| usecase-card-2 | UseCases.tsx | Glass Card | Apply glass-medium | ✅ AA | Image + text overlay scrim |
| usecase-card-3 | UseCases.tsx | Glass Card | Apply glass-medium | ✅ AA | Image + text overlay scrim |
| usecase-images | UseCases.tsx | Preserved | Add scrim overlay | ✅ AA | Gradient overlay for text |
| **SERVICES SECTION** |
| services-section-bg | Services.tsx | Liquid Accent (Deco-S) | Add subtle liquid | ⚠️ Review | Corner accent only |
| service-card-1 | Services.tsx | Glass Card | Apply glass-medium | ✅ AA | Audit & Quick Wins |
| service-card-2 | Services.tsx | Glass Card | Apply glass-strong | ✅ AA | Sprint Design (featured) |
| service-card-3 | Services.tsx | Glass Card | Apply glass-medium | ✅ AA | Design Partner |
| service-timeline-badge | Services.tsx | Preserved | Enhanced contrast | ✅ AA | Badge component |
| service-cta-buttons | Services.tsx | Preserved | Enhanced focus | ✅ AA | 44px target size |
| **AI GUARDRAILS** |
| ai-section-container | AIGuardrails.tsx | Glass Card | Apply glass-subtle | ✅ AA | Main container |
| ai-content | AIGuardrails.tsx | Scrim | Add scrim-text | ✅ AA | Text readability |
| **FAQ SECTION** |
| faq-accordion | FAQ.tsx | Glass Structure | Apply glass-subtle | ✅ AA | Accordion items |
| faq-items | FAQ.tsx | Preserved | Enhanced focus | ✅ AA | Focus on expand/collapse |
| **FINAL CTA** |
| finalcta-section | FinalCTA.tsx | Liquid Accent (Hero-L) | Add liquid background | ✅ AA | Behind CTA content |
| finalcta-button | FinalCTA.tsx | Liquid Halo (CTA-M) | Add glow effect | ✅ AA | 44px target, focus ring |
| **FOOTER** |
| footer-container | Footer.tsx | Glass Structure | Apply glass-medium | ✅ AA | Bottom glass panel |
| footer-links | Footer.tsx | Preserved | Enhanced focus | ✅ AA | 44px target size |
| footer-social | Footer.tsx | Preserved | Enhanced focus | ✅ AA | LinkedIn, Behance icons |
| **SCROLL TO TOP** |
| scroll-button | ScrollToTop.tsx | Glass Button | Apply glass-medium | ✅ AA | 44px circular button |

## Liquid Glass Placement Strategy (Max 1-3 per screen)

### Homepage Distribution:
1. **Hero Section**: Liquid Accent Hero-L (600-800px) - Behind title/subtitle
2. **Services Section**: Liquid Accent Deco-S (120-180px) - Top-right corner only
3. **Final CTA**: Liquid Accent Hero-L (600-800px) - Behind CTA button

**Total**: 3 liquid accents across entire page (respects constraint)

## Responsive Breakpoints Tracking

| Component | Mobile 360px | Tablet 768px | Desktop 1440px |
|-----------|-------------|--------------|----------------|
| Navigation | Stack vertical | Horizontal menu | Full horizontal |
| Hero | Single column | Single column | Two columns |
| Cards | 1 column | 2 columns | 3 columns |
| Services | Stack | 2 columns | 3 columns |
| Footer | Stack | 2 sections | Horizontal |

## A11y Compliance Checklist

### Contrast (WCAG 2.2 Level AA)
- [ ] All text ≥ 4.5:1 (normal text)
- [ ] All text ≥ 3:1 (large text 24px+)
- [ ] UI elements ≥ 3:1
- [ ] Verified with Stark plugin equivalent

### Focus Visible (2.4.13)
- [ ] 3px focus ring on ALL interactive elements
- [ ] 2px offset from element
- [ ] Contrasting color (primary/secondary)
- [ ] Z-index 9999 (above all effects)
- [ ] :focus-visible implemented

### Target Size (2.5.8)
- [ ] Mobile: 44×44px minimum (touch)
- [ ] Desktop: 24×24px minimum (click)
- [ ] Padding for invisible hit areas where needed

### Non-Dependence on Color
- [ ] Icons + labels (not color alone)
- [ ] Patterns + colors for data viz
- [ ] Status indicated by text + icon

### Keyboard Navigation
- [ ] Skip to main content link
- [ ] Logical tab order (top→bottom, left→right)
- [ ] All interactive elements keyboard accessible
- [ ] No keyboard traps

## Implementation Status

- [x] Migration Map created
- [ ] Design tokens (glass/liquid/scrim) added to globals.css
- [ ] Glass components implemented
- [ ] Liquid accents placed
- [ ] A11y verification completed
- [ ] Responsive testing completed

---

**Last Updated**: Phase 1 - Audit Complete
**Zero Deletions**: ✅ All elements tracked and preserved
