# EduMapper

**EduMapper** est une application web qui aide les lycéens à évaluer leur compatibilité avec les établissements scolaires en fonction de leur profil académique.

## Fonctionnalités

- **Sélection d'établissement** : Choisissez parmi une base de données de lycées parisiens
- **Profil académique** : Définissez votre classe (Seconde, Première, Terminale) et type de bac (Général, Technologique, Professionnel)
- **Estimation de compatibilité** : Obtenez un score de compatibilité avec l'établissement sélectionné
- **Interface responsive** : Optimisée pour mobile, tablette et ordinateur
- **Design moderne** : Interface utilisateur intuitive avec animations fluides

## Technologies

- **Framework** : Nuxt 3 (Vue.js)
- **Styling** : Tailwind CSS
- **Icons** : Lucide Vue
- **Routing** : File-based routing (Nuxt)

### Installation

Make sure to install dependencies:

```bash
# npm
npm install

# pnpm
pnpm install

# yarn
yarn install

# bun
bun install
```

### Lancement en développement

Démarrez le serveur de développement sur `http://localhost:3000` :

```bash
# npm
npm run dev

# pnpm
pnpm dev

# yarn
yarn dev

# bun
bun run dev
```

## Structure du projet

```
app/
├── components/          # Composants Vue réutilisables
│   ├── SchoolCard.vue   # Carte d'affichage d'école
│   ├── SchoolSelector.vue # Modal de sélection d'école
│   └── SelectionCard.vue # Carte de sélection avec options
├── data/               # Données statiques
│   └── schools.js      # Base de données des écoles et classes
├── pages/              # Pages de l'application (routing automatique)
│   ├── index.vue       # Page principale
│   └── estimation.vue  # Page d'estimation
├── assets/             # Assets statiques
│   ├── css/           # Styles CSS
│   └── img/           # Images
└── app.vue            # Layout principal
```

## Développement

Ce projet utilise la méthodologie **mobile-first** avec des breakpoints responsive pour tablettes et ordinateurs.
