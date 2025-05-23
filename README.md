
# 📸 ShootMe

**ShootMe** est une application web minimaliste permettant aux utilisateurs de trouver facilement des photographes professionnels selon leur style, localisation et disponibilités. Le projet met l'accent sur la performance, l'accessibilité (conformité WCAG 2.1 AA/AAA), et la simplicité d’utilisation.

🔗 [Site en production](https://lucassrblt.github.io/ShootMe/)  
🔗 [Version de développement](https://lucassrblt.github.io/ShootMe/dev/index.html)

---

## ✨ Fonctionnalités clés

- 💡 Interface responsive
- ♿ Navigation accessible au clavier
- 🎨 Contrastes conformes WCAG AA/AAA
- 🧱 Structure HTML sémantique (`<main>`, `<section>`, `<article>`, etc.)
- 🚀 Déploiement automatisé via GitHub Actions
- 🌐 Hébergement statique sur GitHub Pages

---

## 🛠️ Stack technique

- HTML
- CSS
- JavaScript

> Une stack volontairement minimaliste pour une expérience ultra-rapide, légère et accessible à tous.

---

## 📁 Structure du projet

```
ShootMe/
├── index.html                # Page principale
├── assets/
│   ├── css/                  # Feuilles de style CSS
│   └── js/                   # Scripts JavaScript
└── .github/
    └── workflows/
        └── deploy.yml       # Pipeline CI/CD
```

---

## 🚀 Déploiement CI/CD

Le projet est automatiquement déployé grâce à **GitHub Actions** à chaque push sur la branche `prod`.

- Fichier de config : `.github/workflows/deploy.yml`
- Hébergement via GitHub Pages

---

## 🧑‍💻 Contribuer au projet

### 1. Cloner le dépôt

```bash
git clone https://github.com/lucassrblt/ShootMe.git
cd ShootMe
```

### 2. Modifier le projet

Le site est statique, aucune installation n’est requise. Il suffit de modifier les fichiers HTML/CSS/JS directement.

---

## ✅ Normes d’accessibilité

- Contrastes forts (ratio 11.22:1 pour #5B1384 sur fond blanc)
- Navigation clavier avec focus visibles
- Utilisation correcte des balises HTML sémantiques
- Attributs ARIA si nécessaires

---

## 🎨 Design & Accessibilité

- **Palette de couleurs** :
  - Fond : `#FFFFFF`
  - Couleur principale (CTA) : `#5B1384`
- **Typographie** : *Inter*, idéale pour une lecture numérique accessible

---

## 🧪 Tests recommandés

- [PageSpeed Insights](https://pagespeed.web.dev/)
- [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/)
- Tests manuels :
  - Navigation clavier (`Tab`, `Shift+Tab`)
  - Lecteurs d’écran (VoiceOver, NVDA…)

---

## Equipes
- Mohamed Salamatao
- Lucas Rimbault 
- Yassine Hamil
- Imene Toudeft
- Lucas Yalman 
- Alexandre Vital

