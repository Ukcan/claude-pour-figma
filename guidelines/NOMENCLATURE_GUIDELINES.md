# 📐 Flowdee Code-First Nomenclature Guidelines (vNext)

## 🎯 Objectif

Rendre les futures modifications "Figma-style" pilotables par prompts sans casser le site, via une couche de noms canoniques + mapping stable.

---

## 🚫 Hard Limits (Interdictions Absolues)

**Nomenclature pass only:**
- ✅ File structure + exports + aliases ONLY
- ❌ NO UI/UX markup changes
- ❌ NO spacing or layout changes
- ❌ NO copy text modifications
- ❌ NO style changes

**Zero Deletion Policy:**
- ✅ Keep ALL legacy imports working
- ✅ Keep ALL original component files
- ❌ NO file deletions
- ❌ NO breaking import renames without aliases

**Theming:**
- ✅ Keep `.dark` class approach
- ❌ DO NOT introduce new theming libraries (e.g., next-themes)
- ❌ DO NOT modify token system

**Variants:**
- ✅ Variants MUST be props (intent/style/size/state/theme/breakpoint/plan)
- ❌ Variants MUST NOT be in filename
- ❌ NO filename variants like `Button.Primary.tsx` or `Card.Large.tsx`

---

## 📁 Convention Canonique

### Structure de fichiers

```
src/components/<Type>/<Name>.tsx
```

**Exemples:**
```
components/Button/CTA.tsx          → export CTAButton
components/Nav/Header.tsx          → export HeaderNav
components/Section/Hero.tsx        → export HeroSection
components/Card/CaseStudy.tsx      → export CaseStudyCard
components/Modal/ProjectDetails.tsx → export ProjectDetailsModal
```

### Règles d'export

1. **Export nommé stable:** `<Type><Name>` ou `<Name>` si unique
2. **TypeScript types:** Export types with `export type { ... }`
3. **Re-exports:** Always provide legacy compatibility re-exports

**Exemple de wrapper canonique:**
```tsx
/**
 * Canonical Component: Nav/Header
 * Export: HeaderNav
 * 
 * Wrapper for Navigation component following Figma-style nomenclature.
 * Zero Deletion Policy: Original component preserved at ../Navigation.tsx
 */

import { Navigation } from '../Navigation';

export const HeaderNav = Navigation;
export type { NavigationProps as HeaderNavProps } from '../Navigation';

// Re-export for convenience
export { Navigation };
```

---

## 🗺️ Mapping Actuel (Ancien → Canonique)

### Navigation
- **Ancien:** `components/Navigation.tsx` → `Navigation`
- **Canon:** `components/Nav/Header.tsx` → `HeaderNav`
- **Props:** `darkMode`, `toggleDarkMode`

### Sections
- **Ancien:** `components/HeroFlowdee.tsx` → `HeroFlowdee`  
  **Canon:** `components/Section/Hero.tsx` → `HeroSection`

- **Ancien:** `components/TrustedClients.tsx` → `TrustedClients`  
  **Canon:** `components/Section/TrustedClients.tsx` → `TrustedClientsSection`

- **Ancien:** `components/Services.tsx` → `Services`  
  **Canon:** `components/Section/Services.tsx` → `ServicesSection`

- **Ancien:** `components/UseCases.tsx` → `UseCases`  
  **Canon:** `components/Section/CaseStudies.tsx` → `CaseStudiesSection`

- **Ancien:** `components/About.tsx` → `About`  
  **Canon:** `components/Section/About.tsx` → `AboutSection`

- **Ancien:** `components/ProblemCards.tsx` → `ProblemCards`  
  **Canon:** `components/Section/Problems.tsx` → `ProblemsSection`

- **Ancien:** `components/AIGuardrails.tsx` → `AIGuardrails`  
  **Canon:** `components/Section/AIGuardrails.tsx` → `AIGuardrailsSection`

- **Ancien:** `components/FAQ.tsx` → `FAQ`  
  **Canon:** `components/Section/FAQ.tsx` → `FAQSection`

- **Ancien:** `components/FinalCTA.tsx` → `FinalCTA`  
  **Canon:** `components/Section/FinalCTA.tsx` → `FinalCTASection`

- **Ancien:** `components/Footer.tsx` → `Footer`  
  **Canon:** `components/Section/Footer.tsx` → `FooterSection`

### Buttons
- **Ancien:** `components/ScrollToTop.tsx` → `ScrollToTop`  
  **Canon:** `components/Button/ScrollToTop.tsx` → `ScrollToTopButton`

### Cards
- **Existant:** `components/Card/CaseStudy.tsx` → `CaseStudyCard`
- **Existant:** `components/Card/Feature.tsx` → `FeatureCard`
- **Existant:** `components/Card/Pricing.tsx` → `PricingCard`
- **Existant:** `components/Card/Friction.tsx` → `FrictionCard`

---

## 🔄 Migration Safe (3-Pass Strategy)

### Pass 1: Créer la couche canonique (0 risque)
1. Créer les fichiers canoniques (wrappers)
2. Chaque wrapper fait re-export du composant existant
3. Créer/mettre à jour les barrels (`index.ts`)
4. **Ne rien casser, ne rien supprimer**

### Pass 2: Basculer App.tsx sur les canons (risque faible)
1. Modifier `App.tsx` pour utiliser les imports canoniques
2. Vérifier que navigation, thème dark, et CTAs fonctionnent
3. **Tester chaque section visuellement**

### Pass 3: Compat (Zero deletion)
1. Garder TOUS les fichiers historiques
2. Les fichiers historiques deviennent des re-exports si nécessaire
3. **Aucune suppression autorisée**

---

## 📝 Règles de Prompting pour l'Agent

### ✅ TOUJOURS:
- Utiliser les noms canoniques dans les nouveaux composants
- Créer des wrappers/re-exports pour la compatibilité
- Documenter le mapping dans les headers de fichiers
- Préserver les props existantes exactement
- Tester que le dark mode fonctionne
- Tester que la navigation fonctionne

### ❌ JAMAIS:
- Modifier le markup HTML/JSX sans demande explicite
- Changer les styles/classes sans demande explicite
- Supprimer des fichiers ou imports
- Introduire de nouvelles libs de thème
- Créer des variants dans les noms de fichiers
- Renommer des props sans alias de compatibilité

---

## 🧪 Checklist de Validation

Avant de déclarer une migration terminée :

- [ ] Tous les wrappers canoniques sont créés
- [ ] Les barrels (`index.ts`) exportent tous les canons
- [ ] `App.tsx` utilise les imports canoniques
- [ ] Les anciens imports fonctionnent toujours (compat)
- [ ] Le dark mode fonctionne (toggle + persistence)
- [ ] La navigation smooth scroll fonctionne
- [ ] Les CTAs fonctionnent
- [ ] Les animations glass/liquid sont intactes
- [ ] WCAG 2.2 AA compliance maintenue (contraste, focus, aria)
- [ ] Aucun fichier supprimé
- [ ] Documentation à jour

---

## 📚 Exemples de Prompts Valides

### ✅ Bon prompt (respecte les guidelines)
> "Crée un nouveau composant `Card/Testimonial.tsx` qui exporte `TestimonialCard` avec les variants `intent` (primary/secondary) et `size` (sm/md/lg) comme props. Utilise le glass-medium et les tokens pastel existants."

### ❌ Mauvais prompt (viole les guidelines)
> "Crée `TestimonialCardPrimary.tsx` et `TestimonialCardSecondary.tsx` avec un nouveau système de thème next-themes et supprime les anciens composants Card."

---

## 🎨 Design Tokens à Préserver

**Ne jamais modifier sans demande explicite:**

- Palette pastel : `#cc336f`, `#87c1ff`, `#3dd66d`, `#fff787`, `#5B5FEF`
- Classes glass : `glass-light`, `glass-medium`, `glass-strong`
- Classes liquid : `liquid-glass`, `liquid-metal-border`
- Tokens WCAG : contraste 4.5:1 minimum
- Fonts : Poppins (headings), Satoshi (body)
- Animations : hover `scale-[1.02]`, transitions 200-300ms

---

## 🔒 Contrats Techniques

### Entrypoint
- `index.html` → monte `#root`
- `/src/main.tsx` → rend `<App />`
- `./index.css` → **CRITIQUE** (ne pas toucher)

### Thème
- Mécanisme : classe `.dark` sur `<html>`
- Persistence : `localStorage.getItem('theme')`
- Toggle : prop `toggleDarkMode` dans `HeaderNav`

### Tokens CSS
- Fichiers : `styles/globals.css` + compilés dans `index.css`
- **Ne pas modifier sans demande explicite**

---

## 🚀 Extensions Futures

Quand de nouveaux Types/ sont nécessaires :

### 1. Créer le dossier Type
```bash
mkdir components/<Type>
```

### 2. Créer le barrel
```typescript
// components/<Type>/index.ts
export * from './<Name>';
```

### 3. Mettre à jour le barrel principal
```typescript
// components/index.ts
export * from './<Type>';
```

### 4. Documenter le mapping
Ajouter dans ce fichier + dans le header du composant.

---

## ✨ Conclusion

**Règle d'or :** Cette nomenclature est une **couche de mapping stable**, pas une refonte. Tout changement doit être **additif** et **compatible backward**.

Quand tu es en doute, demande-toi :
1. Est-ce que je casse un import existant ? → ❌ Ajoute un alias
2. Est-ce que je change l'UI sans qu'on me l'ait demandé ? → ❌ Stop
3. Est-ce que je supprime du code ? → ❌ Wrappe-le à la place

**Zero Deletion. Zero Breakage. Full Compat.**
