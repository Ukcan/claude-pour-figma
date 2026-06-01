# 🎨 Flowdee Component Architecture

## 📐 Nomenclature Figma

Ce projet suit une **nomenclature stricte** basée sur les conventions Figma pour une cohérence maximale entre design et code.

---

## 🏗️ Structure des Composants

```
/components/
├── Button/           # Buttons (CTA, Icon, TextLink)
│   ├── CTA.tsx
│   └── index.ts
├── Card/             # Cards (CaseStudy, Pricing, Feature, etc.)
│   ├── CaseStudy.tsx
│   └── index.ts
├── Section/          # Page Sections
│   ├── Hero.tsx
│   ├── Services.tsx
│   └── index.ts
├── Nav/              # Navigation (Header, Footer, etc.)
├── Layout/           # Layout components (Container, Grid, Stack)
├── Form/             # Form components
├── Badge/            # Tags and badges
└── ui/               # Base UI library (shadcn/ui)
```

---

## 🎯 Convention de Nommage

### Format
```
Type/Name (TitleCase, singulier)
```

### Variants
Les variants sont passés via **props**, pas via le nom du fichier :
- `intent`: Primary, Secondary, Tertiary
- `style`: Solid, Outline, Glass
- `state`: Default, Hover, Active, Focus, Disabled, Loading
- `size`: S, M, L
- `theme`: Light, Dark
- `type`: SaaS-B2B, SaaS-B2C, Ecommerce
- `plan`: Audit, Sprint, Partner

### Exemples
```tsx
// ✅ Correct
<CTAButton intent="primary" style="glass" size="l" />

// ❌ Incorrect (ne pas créer de fichiers séparés)
<CTAButtonPrimaryGlass />
```

---

## 📦 Utilisation

### Import des composants

#### Option 1 : Import direct (recommandé)
```tsx
import { HeroSection } from './components/Section/Hero';
import { CTAButton } from './components/Button/CTA';
import { CaseStudyCard } from './components/Card/CaseStudy';
```

#### Option 2 : Import depuis les barrel exports
```tsx
import { HeroSection, ServicesSection } from './components/Section';
import { CTAButton } from './components/Button';
import { CaseStudyCard } from './components/Card';
```

#### Option 3 : Import depuis l'index global
```tsx
import { HeroSection, CTAButton, CaseStudyCard } from './components';
```

---

## 🎨 Exemples de Composants

### Button/CTA
```tsx
<CTAButton 
  intent="primary"    // primary | secondary | tertiary
  style="glass"       // solid | outline | glass
  size="l"            // s | m | l
  state="default"     // default | hover | active | focus | disabled | loading
  theme="dark"        // light | dark
  isLoading={false}
>
  Book a Call
</CTAButton>
```

### Card/CaseStudy
```tsx
<CaseStudyCard
  title="SaaS Platform Redesign"
  description="Improved user onboarding flow by 40%"
  image="https://..."
  color="from-[#7d5fff] to-[#cc336f]"
  tags={["UX Research", "UI Design", "Prototyping"]}
  type="saas-b2b"     // saas-b2b | saas-b2c | ecommerce
  size="m"            // s | m | l
  theme="light"       // light | dark
  onViewDetails={() => {}}
/>
```

### Section/Hero
```tsx
<HeroSection imageUrl="https://..." />
```

---

## 🔄 Backwards Compatibility

Tous les anciens composants restent disponibles via des **alias** :

```tsx
// Ancien (toujours fonctionnel)
import { HeroFlowdee } from './components/HeroFlowdee';
import { Services } from './components/Services';
import { ProjectCard } from './components/ProjectCard';

// Nouveau (recommandé)
import { HeroSection } from './components/Section/Hero';
import { ServicesSection } from './components/Section/Services';
import { CaseStudyCard } from './components/Card/CaseStudy';
```

---

## 📊 Data Attributes

Tous les composants de la nouvelle nomenclature incluent des **data attributes** pour le debugging et les tests :

```tsx
<CTAButton data-component="cta-button" data-intent="primary" data-style="glass" />
<CaseStudyCard data-component="card-case-study" data-type="saas-b2b" />
<HeroSection data-component="section-hero" />
```

---

## 🚀 Prochaines Étapes

1. **Phase 1** : Cards supplémentaires (Feature, Pricing, Friction)
2. **Phase 2** : Migration complète des Sections
3. **Phase 3** : Navigation & Layout components
4. **Phase 4** : Nettoyage et consolidation

---

## 📚 Références

- [Nomenclature Figma complète](../guidelines/Guidelines.md)
- [Migration Map](../NOMENCLATURE_MIGRATION.md)
- [Attributions](../Attributions.md)
