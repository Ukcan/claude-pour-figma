# 🗺️ Nomenclature Mapping Reference

**Last Updated:** 2026-01-17  
**Migration Status:** ✅ Complete (vNext Pass 1-3)

---

## 📊 Quick Reference Table

| Ancien Path | Ancien Export | Canon Path | Canon Export | Status |
|-------------|---------------|------------|--------------|--------|
| `components/Navigation.tsx` | `Navigation` | `components/Nav/Header.tsx` | `HeaderNav` | ✅ Migré |
| `components/HeroFlowdee.tsx` | `HeroFlowdee` | `components/Section/Hero.tsx` | `HeroSection` | ✅ Migré |
| `components/TrustedClients.tsx` | `TrustedClients` | `components/Section/TrustedClients.tsx` | `TrustedClientsSection` | ✅ Migré |
| `components/Services.tsx` | `Services` | `components/Section/Services.tsx` | `ServicesSection` | ✅ Migré |
| `components/UseCases.tsx` | `UseCases` | `components/Section/CaseStudies.tsx` | `CaseStudiesSection` | ✅ Migré |
| `components/About.tsx` | `About` | `components/Section/About.tsx` | `AboutSection` | ✅ Migré |
| `components/ProblemCards.tsx` | `ProblemCards` | `components/Section/Problems.tsx` | `ProblemsSection` | ✅ Migré |
| `components/AIGuardrails.tsx` | `AIGuardrails` | `components/Section/AIGuardrails.tsx` | `AIGuardrailsSection` | ✅ Migré |
| `components/FAQ.tsx` | `FAQ` | `components/Section/FAQ.tsx` | `FAQSection` | ✅ Migré |
| `components/FinalCTA.tsx` | `FinalCTA` | `components/Section/FinalCTA.tsx` | `FinalCTASection` | ✅ Migré |
| `components/Footer.tsx` | `Footer` | `components/Section/Footer.tsx` | `FooterSection` | ✅ Migré |
| `components/ScrollToTop.tsx` | `ScrollToTop` | `components/Button/ScrollToTop.tsx` | `ScrollToTopButton` | ✅ Migré |

---

## 📁 Structure Canonique Actuelle

```
components/
├── Nav/
│   ├── Header.tsx              → HeaderNav
│   └── index.ts
│
├── Button/
│   ├── CTA.tsx                 → CTAButton
│   ├── ScrollToTop.tsx         → ScrollToTopButton
│   └── index.ts
│
├── Card/
│   ├── CaseStudy.tsx           → CaseStudyCard
│   ├── Feature.tsx             → FeatureCard
│   ├── Pricing.tsx             → PricingCard
│   ├── Friction.tsx            → FrictionCard
│   └── index.ts
│
├── Section/
│   ├── Hero.tsx                → HeroSection
│   ├── TrustedClients.tsx      → TrustedClientsSection
│   ├── Services.tsx            → ServicesSection
│   ├── CaseStudies.tsx         → CaseStudiesSection
│   ├── About.tsx               → AboutSection
│   ├── Problems.tsx            → ProblemsSection
│   ├── AIGuardrails.tsx        → AIGuardrailsSection
│   ├── FAQ.tsx                 → FAQSection
│   ├── FinalCTA.tsx            → FinalCTASection
│   ├── Footer.tsx              → FooterSection
│   └── index.ts
│
├── ui/                         → shadcn/ui components (unchanged)
├── figma/                      → Figma imports (protected)
│
└── index.ts                    → Main barrel
```

---

## 🔄 Import Strategies

### ✅ Préféré (Canonical)
```typescript
import { HeaderNav } from './components/Nav/Header';
import { HeroSection } from './components/Section/Hero';
import { CTAButton } from './components/Button/CTA';
```

### ✅ Via Barrel (Recommended)
```typescript
import { 
  HeaderNav,
  HeroSection,
  TrustedClientsSection,
  ServicesSection,
  CTAButton,
  ScrollToTopButton
} from './components';
```

### ✅ Legacy (Backward Compatible)
```typescript
import { Navigation } from './components/Navigation';
import { TrustedClients } from './components/TrustedClients';
import { ScrollToTop } from './components/ScrollToTop';
```

### ❌ À Éviter (Non-canonical)
```typescript
import Navigation from './components/Navigation'; // default import non supporté
import { HeroFlowdee } from './components/HeroFlowdee'; // utilise HeroSection
```

---

## 🎯 App.tsx (Current State)

**Migration Status:** ✅ **FULL CANONICAL**

```typescript
// All imports now use canonical nomenclature
import { HeaderNav } from './components/Nav/Header';
import { HeroSection } from './components/Section/Hero';
import { TrustedClientsSection } from './components/Section/TrustedClients';
import { ServicesSection } from './components/Section/Services';
import { CaseStudiesSection } from './components/Section/CaseStudies';
import { AboutSection } from './components/Section/About';
import { ProblemsSection } from './components/Section/Problems';
import { AIGuardrailsSection } from './components/Section/AIGuardrails';
import { FAQSection } from './components/Section/FAQ';
import { FinalCTASection } from './components/Section/FinalCTA';
import { FooterSection } from './components/Section/Footer';
import { ScrollToTopButton } from './components/Button/ScrollToTop';
```

---

## 🛡️ Compatibility Layer

Tous les anciens imports continuent de fonctionner via :

1. **Re-exports dans wrappers canoniques**
   ```typescript
   // components/Nav/Header.tsx
   export { Navigation };  // legacy compat
   ```

2. **Re-exports dans barrels**
   ```typescript
   // components/index.ts
   export { Navigation } from './Navigation'; // legacy
   ```

3. **Fichiers originaux intacts**
   - Tous les fichiers `components/*.tsx` originaux sont **préservés**
   - Zero Deletion Policy appliquée

---

## 📝 Conventions de Nommage

### Pattern: `<Type><Name>`

| Type | Suffix | Exemple |
|------|--------|---------|
| Nav | `Nav` | `HeaderNav` |
| Section | `Section` | `HeroSection` |
| Button | `Button` | `CTAButton`, `ScrollToTopButton` |
| Card | `Card` | `CaseStudyCard`, `FeatureCard` |
| Modal | `Modal` | `ProjectDetailsModal` |
| Form | `Form` | `ContactForm` |

### Exceptions
- Composants UI (shadcn): gardent leurs noms originaux (`Button`, `Card`, `Input`)
- Composants utilitaires: noms descriptifs (`CustomCursor`, `ImageWithFallback`)

---

## 🚀 Next Steps (Future Extensions)

### Types à créer si nécessaire

1. **Layout/**
   - `Layout/Container.tsx` → `ContainerLayout`
   - `Layout/Grid.tsx` → `GridLayout`
   - `Layout/Stack.tsx` → `StackLayout`

2. **Form/**
   - `Form/Contact.tsx` → `ContactForm`
   - `Form/Newsletter.tsx` → `NewsletterForm`

3. **Modal/**
   - `Modal/ProjectDetails.tsx` → `ProjectDetailsModal`
   - `Modal/Confirmation.tsx` → `ConfirmationModal`

4. **Badge/**
   - `Badge/Status.tsx` → `StatusBadge`
   - `Badge/Tag.tsx` → `TagBadge`

### Process pour nouveaux types
1. Créer `components/<Type>/`
2. Créer `components/<Type>/index.ts`
3. Ajouter export dans `components/index.ts`
4. Documenter dans ce fichier

---

## ✅ Migration Checklist

- [x] Nav/Header wrapper créé
- [x] Section/* wrappers créés (10 sections)
- [x] Button/ScrollToTop wrapper créé
- [x] Barrels mis à jour (Nav, Button, Section, components)
- [x] App.tsx migré vers imports canoniques
- [x] Tests visuels (dark mode, navigation, CTAs)
- [x] Documentation créée (Guidelines + Mapping)
- [x] Backward compatibility vérifiée
- [x] Zero Deletion Policy respectée

---

## 🎓 Pour l'Agent IA

**Règles d'or :**

1. **Toujours utiliser les noms canoniques** dans les nouveaux composants
2. **Toujours créer des re-exports** pour la compatibilité
3. **Ne jamais supprimer** de fichiers ou d'exports existants
4. **Documenter chaque mapping** dans les headers de fichiers
5. **Tester le dark mode** après chaque changement

**En cas de doute :**
- Consulte `/guidelines/NOMENCLATURE_GUIDELINES.md`
- Vérifie ce fichier pour les patterns existants
- Demande confirmation avant de modifier la structure

---

**Status:** ✅ Migration vNext Complete | **Policy:** Zero Deletion | **Compat:** 100%
