# TooGreen 🌿

Plateforme web éco-responsable moderne, open source, hébergée en France.

## Structure

```
toogreen/
├── index.html    ← Application principale
├── style.css     ← Styles (glassmorphism + aurora gradients)
├── script.js     ← Interactions + Assistant IA (Anthropic API)
├── logo.png      ← Logo TooGreen
└── README.md
```

## Lancement immédiat

**Option 1 — Fichier local (sans assistant IA)**
```
Ouvrir index.html dans un navigateur
```

**Option 2 — Serveur local (avec assistant IA actif)**
```bash
# Python
python3 -m http.server 8080
# Ouvrir http://localhost:8080

# Node (npx)
npx serve .
```

**Option 3 — GitHub Pages (gratuit, Europe)**
```
1. Créer un repo GitHub
2. Push les fichiers
3. Settings → Pages → Deploy from branch main
4. URL: https://votre-nom.github.io/toogreen
```

**Option 4 — Vercel (région Europe)**
```bash
npx vercel --prod
# Configurer région: iad1 → cdg1 (Paris)
```

**Option 5 — OVHcloud / Scaleway**
Upload des fichiers via FTP ou déploiement depuis Git.

## Technologies

- HTML5 + CSS3 + JavaScript vanilla
- Fonts: Google Fonts (Poppins + Playfair Display)
- IA: Anthropic Claude API (claude-sonnet-4)
- Aucune dépendance npm requise

## Licence

MIT — Libre d'utilisation, modification et redistribution.
