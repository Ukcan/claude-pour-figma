# 📐 Nomenclature Figma - Système Complet

## 🎯 Vue d'ensemble

Ce document définit la **nomenclature complète** pour tous les composants du système de design Flowdee, basé sur les conventions Figma professionnelles pour garantir une cohérence parfaite entre design et développement.

---

## 🏗️ Structure de Base

### Format Général
```
Type/Name
```

- **Type** : Catégorie du composant (Button, Card, Section, etc.)
- **Name** : Nom spécifique du composant (CTA, Hero, Pricing, etc.)
- **Convention** : TitleCase, singulier, pas de préfixes/suffixes
- **Séparateur** : Slash `/` entre type et nom

### Exemples
```
✅ Button/CTA
✅ Card/CaseStudy
✅ Section/Hero
✅ Nav/Header
✅ Form/ContactForm

❌ ButtonCTA
❌ case-study-card
❌ SECTION_HERO
❌ nav_header
```

---

## 📦 Variants (Props)

Les variations sont **toujours passées via props**, jamais dans le nom du fichier.

### Liste des Variants Disponibles

#### 1. **Intent** (Intention/Hiérarchie)
Définit l'importance/priorité de l'action
- `primary` - Action principale
- `secondary` - Action secondaire
- `tertiary` - Action tertiaire
- `destructive` - Action destructive/dangereuse
- `success` - Action de confirmation/succès

#### 2. **Style** (Apparence visuelle)
Définit le style visuel du composant
- `solid` - Fond plein
- `outline` - Bordure uniquement
- `glass` - Effet glassmorphism
- `ghost` - Transparent avec hover
- `link` - Style texte avec soulignement

#### 3. **State** (État d'interaction)
États interactifs du composant
- `default` - État par défaut
- `hover` - Au survol
- `active` - Lors du clic
- `focus` - Lors du focus clavier
- `disabled` - Désactivé
- `loading` - Chargement en cours

#### 4. **Size** (Taille)
Dimensions du composant
- `s` (Small) - Petit
- `m` (Medium) - Moyen (défaut)
- `l` (Large) - Grand
- `xl` (Extra Large) - Très grand

#### 5. **Theme** (Thème colorimétrique)
Mode d'affichage
- `light` - Mode clair
- `dark` - Mode sombre
- `auto` - Adaptatif selon préférence système

#### 6. **Type** (Type de contenu)
Classification spécifique au contexte
- `saas-b2b` - SaaS B2B
- `saas-b2c` - SaaS B2C
- `ecommerce` - E-commerce
- `agency` - Agence
- `portfolio` - Portfolio

#### 7. **Plan** (Niveau de service)
Pour les composants de tarification
- `audit` - Audit UX
- `sprint` - Sprint Design
- `partner` - Design Partner

#### 8. **Breakpoint** (Point de rupture responsive)
Adaptations responsive
- `mobile` - < 768px
- `tablet` - 768px - 1024px
- `desktop` - > 1024px

#### 9. **Featured** (Mise en avant)
Indicateur de mise en avant
- `true` - Mis en avant
- `false` - Normal (défaut)

---

## 🧩 Composants par Catégorie

### 1️⃣ **BUTTON** - Boutons interactifs

#### Button/CTA
**Call-to-Action principal**

**Variants disponibles :**
- `intent`: primary | secondary | tertiary
- `style`: solid | outline | glass
- `size`: s | m | l
- `state`: default | hover | active | focus | disabled | loading
- `theme`: light | dark

**Exemples d'utilisation :**
```tsx
<CTAButton intent="primary" style="solid" size="l">
  Book a Call
</CTAButton>

<CTAButton intent="secondary" style="outline" size="m" isLoading>
  Loading...
</CTAButton>

<CTAButton intent="tertiary" style="glass" size="s" disabled>
  Disabled
</CTAButton>
```

#### Button/Icon
**Bouton icône uniquement**

**Variants :**
- `intent`: primary | secondary | tertiary
- `size`: s | m | l
- `theme`: light | dark

**Exemple :**
```tsx
<IconButton intent="primary" size="m">
  <MenuIcon />
</IconButton>
```

#### Button/TextLink
**Bouton style lien texte**

**Variants :**
- `size`: s | m | l
- `underline`: true | false

---

### 2️⃣ **CARD** - Cartes de contenu

#### Card/CaseStudy
**Carte de cas d'étude/projet**

**Variants :**
- `type`: saas-b2b | saas-b2c | ecommerce
- `size`: s | m | l
- `theme`: light | dark

**Props spécifiques :**
- `title`: string
- `description`: string
- `image`: string
- `tags`: string[]
- `color`: gradient string
- `onViewDetails`: () => void

**Exemple :**
```tsx
<CaseStudyCard
  type="saas-b2b"
  size="m"
  title="Platform Redesign"
  description="Improved conversion by 40%"
  image="https://..."
  tags={["UX Research", "UI Design"]}
  color="from-[#7d5fff] to-[#cc336f]"
/>
```

#### Card/Feature
**Carte de feature/démonstration**

**Variants :**
- `style`: default | interactive | compact
- `theme`: light | dark

**Props spécifiques :**
- `icon`: LucideIcon
- `title`: string
- `description`: string
- `children`: React.ReactNode

**Utilisation :**
Parfait pour CalendarCard, SlackCard, NewsfeedCard, etc.

**Exemple :**
```tsx
<FeatureCard
  style="interactive"
  icon={Calendar}
  title="Calendar Integration"
  description="Sync your schedule"
>
  {/* Custom calendar content */}
</FeatureCard>
```

#### Card/Friction
**Carte de problème/friction**

**Variants :**
- `theme`: light | dark

**Props spécifiques :**
- `icon`: LucideIcon
- `title`: string
- `description`: string
- `color`: gradient string

**Exemple :**
```tsx
<FrictionCard
  icon={AlertCircle}
  title="Complex Onboarding"
  description="Users struggle to understand the first steps"
  color="from-red-500 to-orange-500"
/>
```

#### Card/Pricing
**Carte de tarification**

**Variants :**
- `plan`: audit | sprint | partner
- `featured`: true | false
- `theme`: light | dark

**Props spécifiques :**
- `timeline`: string
- `title`: string
- `price`: string
- `deliverables`: string[]
- `ctaLabel`: string
- `onCTA`: () => void

**Exemple :**
```tsx
<PricingCard
  plan="sprint"
  featured={true}
  timeline="2-3 semaines"
  title="Design Sprint"
  price="À partir de 4 500€"
  deliverables={[
    "Discovery légère",
    "User flows + prototype",
    "Tests rapides",
    "UI handoff"
  ]}
  ctaLabel="Demander un devis"
/>
```

#### Card/Contact
**Carte de formulaire de contact**

**Variants :**
- `size`: s | m | l
- `theme`: light | dark

**Props spécifiques :**
- `onSubmit`: (data) => void
- `submitLabel`: string

---

### 3️⃣ **SECTION** - Sections de page

#### Section/Hero
**Section hero principale**

**Props spécifiques :**
- `imageUrl`: string (optionnel)
- `videoUrl`: string (optionnel)

**Exemple :**
```tsx
<HeroSection imageUrl="https://..." />
```

#### Section/Services
**Section de présentation des services**

**Exemple :**
```tsx
<ServicesSection />
```

#### Section/About
**Section à propos / approche**

**Alternative :** `Section/Approach`

#### Section/FAQ
**Section questions fréquentes**

#### Section/Footer
**Pied de page**

#### Section/Trust
**Section logos clients / partenaires**

**Alternative :** `Section/Clients`

**Renommage suggéré depuis :**
- `TrustedClients` → `Section/Trust`

#### Section/CaseStudies
**Section showcase de cas d'étude**

**Alternative :** `Section/Portfolio`

**Renommage suggéré depuis :**
- `UseCases` → `Section/CaseStudies`

#### Section/AI
**Section sur l'IA / guardrails**

**Alternative :** `Section/Technology`

**Renommage suggéré depuis :**
- `AIGuardrails` → `Section/AI`

#### Section/Frictions
**Section des problèmes résolus**

**Alternative :** `Section/Problems`

**Renommage suggéré depuis :**
- `ProblemCards` → `Section/Frictions`

#### Section/Contact
**Section CTA final / contact**

**Alternative :** `Section/CTA`

**Renommage suggéré depuis :**
- `FinalCTA` → `Section/Contact`

---

### 4️⃣ **NAV** - Navigation

#### Nav/Header
**Header principal avec navigation**

**Variants :**
- `style`: floating | sticky | static
- `theme`: light | dark | glass

**Props spécifiques :**
- `darkMode`: boolean
- `toggleDarkMode`: () => void
- `isScrolled`: boolean (auto-détecté)

**Renommage suggéré depuis :**
- `Navigation` → `Nav/Header`

**Exemple :**
```tsx
<Header 
  style="floating"
  theme="glass"
  darkMode={darkMode}
  toggleDarkMode={toggleDarkMode}
/>
```

#### Nav/Footer
**Navigation de pied de page**

Note: Peut être fusionné avec `Section/Footer`

#### Nav/ThemeToggle
**Toggle dark/light mode**

**Variants :**
- `style`: icon | switch | dropdown
- `size`: s | m | l

**Renommage suggéré depuis :**
- `DarkModeToggle` → `Nav/ThemeToggle`

**Exemple :**
```tsx
<ThemeToggle style="switch" size="m" />
```

#### Nav/LanguageSelector
**Sélecteur de langue**

**Variants :**
- `style`: dropdown | flags | text

---

### 5️⃣ **FORM** - Formulaires

#### Form/ContactForm
**Formulaire de contact complet**

**Props spécifiques :**
- `onSubmit`: (data) => void
- `fields`: array de champs configurables

#### Form/NewsletterForm
**Formulaire d'inscription newsletter**

**Variants :**
- `style`: inline | stacked
- `size`: s | m | l

#### Form/BookingForm
**Formulaire de réservation de call**

**Props spécifiques :**
- `calendarIntegration`: calendly | cal.com | custom

---

### 6️⃣ **BADGE** - Tags et badges

#### Badge/Tag
**Tag de catégorie**

**Variants :**
- `intent`: primary | secondary | success | warning | error
- `size`: s | m

**Exemple :**
```tsx
<Tag intent="primary" size="s">UX Research</Tag>
```

#### Badge/Status
**Badge de statut**

**Variants :**
- `status`: online | offline | busy | away

---

### 7️⃣ **LAYOUT** - Mise en page

#### Layout/Container
**Container principal avec max-width**

**Variants :**
- `size`: sm | md | lg | xl | full
- `padding`: none | s | m | l

**Exemple :**
```tsx
<Container size="lg" padding="m">
  {children}
</Container>
```

#### Layout/Grid
**Grille responsive**

**Variants :**
- `cols`: 1 | 2 | 3 | 4 | 6 | 12
- `gap`: s | m | l

#### Layout/Stack
**Stack vertical/horizontal**

**Variants :**
- `direction`: vertical | horizontal
- `gap`: s | m | l
- `align`: start | center | end

---

### 8️⃣ **MEDIA** - Médias

#### Media/ImageWithFallback
**Image avec fallback**

#### Media/VideoPlayer
**Lecteur vidéo custom**

#### Media/Avatar
**Avatar utilisateur**

**Variants :**
- `size`: s | m | l | xl
- `shape`: circle | square | rounded

---

### 9️⃣ **FEEDBACK** - Retours utilisateur

#### Feedback/Toast
**Notification toast**

#### Feedback/Modal
**Modal/Dialog**

#### Feedback/Tooltip
**Info-bulle**

---

### 🔟 **UTILITY** - Utilitaires

#### Utility/ScrollToTop
**Bouton retour en haut**

#### Utility/CustomCursor
**Curseur personnalisé**

#### Utility/LoadingSpinner
**Indicateur de chargement**

---

## 📊 Data Attributes

Tous les composants incluent des `data-*` attributes pour faciliter le debugging et les tests :

```tsx
<CTAButton 
  data-component="cta-button"
  data-intent="primary"
  data-style="glass"
  data-size="l"
  data-state="default"
  data-theme="light"
>
  Click me
</CTAButton>
```

### Format
```
data-component="[type]-[name]"     // Ex: "cta-button", "card-pricing"
data-[variant]="[value]"           // Ex: data-intent="primary"
```

---

## 🎨 Conventions Spécifiques

### Couleurs
Utiliser les tokens CSS du design system :
```tsx
// ✅ Bon
className="bg-primary text-primary-foreground"
style={{ color: 'var(--color-primary)' }}

// ❌ Mauvais
className="bg-[#7d5fff] text-white"
```

### Spacing
Utiliser les tokens Tailwind :
```tsx
// ✅ Bon
className="p-6 md:p-8 gap-4"

// ❌ Mauvais
className="p-[24px] md:p-[32px] gap-[16px]"
```

### Animations
Utiliser Motion pour toutes les animations :
```tsx
import { motion } from 'motion/react';

<motion.div
  whileHover={{ scale: 1.02 }}
  whileTap={{ scale: 0.98 }}
>
  {children}
</motion.div>
```

---

## 🔧 Règles d'Implémentation

### 1. Props vs Variants
```tsx
// ✅ Variants via props
<CTAButton intent="primary" style="glass" />

// ❌ Pas de composants séparés
<CTAButtonPrimaryGlass />
```

### 2. Composition over Configuration
```tsx
// ✅ Composition
<Card>
  <CardHeader>
    <CardTitle>Title</CardTitle>
  </CardHeader>
  <CardContent>Content</CardContent>
</Card>

// ❌ Configuration lourde
<Card 
  header="Title"
  content="Content"
  footer="Footer"
/>
```

### 3. Accessibilité WCAG 2.2 AA
```tsx
// ✅ Toujours inclure
- aria-label pour boutons icons
- role pour éléments sémantiques
- focus-visible pour navigation clavier
- min-w-[44px] min-h-[44px] pour cibles tactiles

<Button aria-label="Open menu" className="min-w-[44px] min-h-[44px]">
  <MenuIcon />
</Button>
```

### 4. Responsive First
```tsx
// ✅ Mobile-first
className="text-sm md:text-base lg:text-lg"

// ❌ Desktop-first
className="text-lg md:text-base sm:text-sm"
```

---

## 📁 Structure de Fichiers

```
/components/
├── Button/
│   ├── CTA.tsx
│   ├── Icon.tsx
│   ├── TextLink.tsx
│   └── index.ts
├── Card/
│   ├── CaseStudy.tsx
│   ├── Feature.tsx
│   ├── Friction.tsx
│   ├── Pricing.tsx
│   ├── Contact.tsx
│   └── index.ts
├── Section/
│   ├── Hero.tsx
│   ├── Services.tsx
│   ├── About.tsx
│   ├── FAQ.tsx
│   ├── Footer.tsx
│   ├── Trust.tsx
│   ├── CaseStudies.tsx
│   ├── AI.tsx
│   ├── Frictions.tsx
│   ├── Contact.tsx
│   └── index.ts
├── Nav/
│   ├── Header.tsx
│   ├── ThemeToggle.tsx
│   ├── LanguageSelector.tsx
│   └── index.ts
├── Form/
│   ├── ContactForm.tsx
│   ├── NewsletterForm.tsx
│   ├── BookingForm.tsx
│   └── index.ts
├── Badge/
│   ├── Tag.tsx
│   ├── Status.tsx
│   └── index.ts
├── Layout/
│   ├── Container.tsx
│   ├── Grid.tsx
│   ├── Stack.tsx
│   └── index.ts
├── Media/
│   ├── ImageWithFallback.tsx
│   ├── VideoPlayer.tsx
│   ├── Avatar.tsx
│   └── index.ts
├── Feedback/
│   ├── Toast.tsx
│   ├── Modal.tsx
│   ├── Tooltip.tsx
│   └── index.ts
├── Utility/
│   ├── ScrollToTop.tsx
│   ├── CustomCursor.tsx
│   ├── LoadingSpinner.tsx
│   └── index.ts
└── index.ts (barrel export global)
```

---

## 🚀 Exemples Concrets

### Page complète avec nomenclature
```tsx
import { 
  HeroSection,
  ServicesSection,
  AboutSection,
  FAQSection,
  FooterSection 
} from './components/Section';
import { Header } from './components/Nav';
import { CTAButton } from './components/Button';

function App() {
  return (
    <>
      <Header style="floating" theme="glass" />
      
      <main>
        <HeroSection />
        <ServicesSection />
        <AboutSection />
        <FAQSection />
      </main>
      
      <FooterSection />
    </>
  );
}
```

### Card avec tous les variants
```tsx
<PricingCard
  plan="sprint"
  featured={true}
  theme="light"
  timeline="2-3 semaines"
  title="Design Sprint"
  price="À partir de 4 500€"
  deliverables={[
    "Discovery légère",
    "User flows + prototype",
    "Tests rapides",
    "UI handoff"
  ]}
  ctaLabel="Demander un devis"
  onCTA={() => scrollToContact()}
/>
```

---

## 📋 Checklist de Conformité

Avant de créer un nouveau composant, vérifier :

- [ ] Nom au format `Type/Name` (TitleCase, singulier)
- [ ] Variants passés via props (pas dans le nom)
- [ ] Data attributes présents (`data-component`, etc.)
- [ ] Accessibilité WCAG 2.2 AA (aria-label, focus-visible, etc.)
- [ ] Responsive mobile-first
- [ ] Animations avec Motion
- [ ] Tokens CSS du design system
- [ ] Documentation JSDoc
- [ ] TypeScript avec interfaces exportées
- [ ] Backwards compatibility via alias si renommage

---

## 🔗 Ressources

- [Guidelines complets](./guidelines/Guidelines.md)
- [Migration Map](./NOMENCLATURE_MIGRATION.md)
- [README composants](./components/README.md)
- [Attributions](./Attributions.md)

---

**Dernière mise à jour** : Janvier 2026
**Version** : 1.0
**Statut** : En application active
