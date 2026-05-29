# CLAUDE.md — Martin Dubois Cousiño

Règles et bonnes pratiques apprises ensemble. À réutiliser sur tous les projets perso.

---

## Git — Règle absolue

**Ne jamais commit et push directement sur `main`/`master`.**

- Toujours créer une branche feature : `feat/nom`, `fix/nom`, `chore/nom`
- Toujours proposer un commit message clair avant de committer
- Toujours attendre une confirmation explicite avant de push
- Ne jamais utiliser `--force` sans demander
- Ne jamais committer `.env`, `.env.local` ou tout fichier contenant des secrets
- Toujours vérifier que `.env*` est dans `.gitignore` avant le premier push

---

## Stack par défaut (projets perso front)

- **React 19** + **TypeScript** + **Vite 8**
- **Framer Motion** pour les animations
- **CSS Modules** pour le styling (pas de Tailwind sur les projets créatifs, pas de styled-components)
- **TanStack Query** si appels API
- **React Router v7** si multi-pages
- **Node 22** — toujours ajouter un `.nvmrc` avec `22`

---

## TypeScript

- `strict: true` dans `tsconfig.json`
- `noUncheckedIndexedAccess: true` — `ITEMS[i]?.foo ?? fallback` partout
- Jamais de `as any` — utiliser `as unknown as Type` si vraiment nécessaire
- Jamais d'assertion non-null `!` si évitable
- Jamais de `@ts-ignore` — corriger le type
- Toujours annoter le type de retour des fonctions exportées
- Pas d'abréviations : `amount` pas `amt`, `userId` pas `uid`

---

## Code quality

- **Zéro `console.log`** dans le code commité
- **Zéro style inline** `style={{}}` sauf si la valeur est vraiment dynamique (ex: `clip-path` calculé depuis une taille d'élément)
- **Composants max ~120 lignes** — splitter si plus grand
- **Données séparées des composants** — fichiers `src/data/*.ts` typés
- **Constantes nommées** — pas de magic numbers (timings, couleurs, z-index dans des fichiers `constants/`)
- **CSS custom properties dans `index.html`** `<style>` pour garantir le chargement avant les CSS Modules (leçon apprise : les CSS Modules peuvent s'injecter avant `global.css` avec Vite 8 + Rolldown)
- **Clés stables** dans les listes React — jamais `key` qui change à chaque render
- **`e.preventDefault()`** sur les touches fléchées dans les handlers clavier (sinon scroll involontaire)
- **`useEffect` deps complètes** — tous les états utilisés dans le handler doivent être dans le tableau

---

## Architecture

- `src/constants/` — tokens de design (couleurs, timings, easing, z-index) + routes
- `src/data/` — contenu statique typé (jamais hardcodé dans les composants)
- `src/types/` — interfaces TypeScript partagées
- `src/hooks/` — hooks réutilisables (`useKeyboardNav`, `useMountDelay`...)
- `src/components/` — composants partagés, un dossier par composant avec son `.module.css`
- `src/pages/` — une page = un dossier, sous-composants dedans

---

## CSS Modules — pièges connus

- **Les CSS custom properties doivent être dans `index.html`** en `<style>` inline — pas dans `global.css` importé via JS. Avec Vite 8 + Rolldown, l'ordre d'injection n'est pas garanti et les variables peuvent ne pas être définies quand les CSS Modules s'appliquent.
- `position: fixed; inset: 0` dans un CSS Module peut ne pas s'appliquer si le parent n'a pas de contexte de stacking — préférer les styles inline pour les wrappers critiques de layout.
- Jamais de `<style>` tags dans le JSX — tout dans les `.module.css`.

---

## Sécurité

- **Jamais de secrets dans le code** — toujours `.env.local` (non commité) + variables d'env Vercel
- **`vercel.json`** avec headers de sécurité sur tous les projets déployés :
  ```json
  { "key": "X-Content-Type-Options", "value": "nosniff" }
  { "key": "X-Frame-Options", "value": "DENY" }
  { "key": "Referrer-Policy", "value": "strict-origin-when-cross-origin" }
  ```
- **`window.open`** toujours avec `noopener,noreferrer` et dans un try/catch
- **`mailto:`** — utiliser `window.location.href` pas `window.open`

---

## Déploiement

- **Vercel** de préférence à GitHub Pages (gère le fallback SPA pour React Router automatiquement)
- Connecter le repo GitHub → Vercel détecte Vite automatiquement
- Les variables d'env du `.env.local` doivent être recopiées manuellement dans Vercel Settings

---

## APIs externes — leçons apprises

- **Spotify Client Credentials** ne peut pas accéder aux playlists même publiques (restriction 2024) — hardcoder les données ou faire un backend proxy
- **stats.fm** : l'endpoint `/users/:user/stats` n'existe pas, utiliser `/users/:user/streams/stats`. Le tri par `position` n'est pas fiable — toujours re-trier côté client par `streams` décroissant.
- **Google Fonts** : un seul `<link>` dans `index.html`, jamais de `@import` dans les CSS Modules (rechargé à chaque render)

---

## Accessibilité (minimum vital)

- `:focus-visible` dans le CSS global
- `aria-hidden="true"` sur les éléments purement décoratifs
- `alt` descriptif sur toutes les images (ou `aria-hidden` si décoratif)
- `role="button"` + `tabIndex={0}` + `onKeyDown` sur les divs cliquables
- `aria-label` sur les liens dont le texte seul n'est pas clair

---

## Responsive

- Desktop-first mais jamais cassé sur mobile
- Breakpoint principal : `@media (max-width: 768px)`
- `clamp()` pour les font-sizes : `clamp(min, vw, max)`
- Sur mobile, cacher les éléments purement décoratifs (nameTag, infoLine...)
- Tester dans les DevTools à 390px de large

---

## README — template minimal

Chaque projet doit avoir :
1. Lien live (Vercel)
2. Stack (3-4 lignes)
3. Comment lancer en local (`nvm use` + `npm install` + `npm run dev`)
4. Comment éditer le contenu si applicable

---

## Ce que Martin aime

- Directions artistiques fortes et cohérentes (Persona 3, lo-fi, early 2000s gaming)
- Séparation nette données / logique / présentation
- Pas de sur-ingénierie — si ça marche simplement, on garde simple
- Feedback visuel immédiat pendant le dev (tester dans le vrai browser, pas headless)
- Commits atomiques et bien nommés, push après validation visuelle
