# 🎬 ZVV Lottie Files

Professioneller Animation Player für ZVV Header-Animationen

[![Vercel](https://img.shields.io/badge/Vercel-Deploy-black?logo=vercel)](https://lottie.zvv.dev)
[![Lottie](https://img.shields.io/badge/Lottie-5.9.0-00DDB3?logo=airbnb)](https://airbnb.io/lottie/)

## 📋 Übersicht

Diese Repository enthält 14 professionelle Lottie-Animationen für ZVV Header-Elemente mit einem modernen, interaktiven Animation Player.

### ✨ Features

- 🎨 **Moderner Player** - Professionelle UI mit Dark Mode
- 🖼️ **Live-Vorschauen** - Alle Animationen auf einen Blick
- 🎮 **Volle Kontrolle** - Play/Pause, Speed, Loop, Navigation
- ⌨️ **Keyboard Shortcuts** - Effiziente Bedienung
- 📱 **Responsive** - Funktioniert auf allen Geräten
- 🔍 **Suchfunktion** - Schnelles Finden von Animationen

## 🚀 Live Demo

Besuche: **[lottie.zvv.dev](https://lottie.zvv.dev)**

## 📁 Struktur

```
zvv-lottiefiles/
├── README.md                          # Dieses Dokument
└── public/                            # Website Root (Vercel)
    ├── index.html                     # Animation Player
    ├── zvv_header_element01.json      # Animation 1
    ├── zvv_header_element02.json      # Animation 2
    ├── ...                            # Weitere Animationen
    └── zvv_header_element14.json      # Animation 14
```

## 🎯 Animationen

| Element | Beschreibung | Dimensionen | Frames |
|---------|-------------|-------------|--------|
| 01 | Konzentrische Kreise mit Pfeilen | 1952×3100 | 300 |
| 02 | Horizontale Pfeile | 650×1440 | 150 |
| 03 | Komplexe Pfeilbahnen | variabel | variabel |
| 04 | Pfeilbahnen mit Kurven | 1917×693 | 300 |
| 05-14 | Verschiedene Header-Animationen | variabel | variabel |

## 🛠️ Technologie

- **Lottie.js** v5.9.0 - Animation Engine
- **Vanilla JavaScript** - Keine Dependencies
- **Modern CSS** - Custom Properties, Grid, Flexbox
- **SVG Rendering** - Hochqualitative Darstellung

## 🎮 Steuerung

### Maus/Touch
- **Klick** auf Thumbnail → Animation auswählen
- **Progress Bar** → Zu Position springen
- **Buttons** → Play/Pause, Navigation, Restart

### Tastatur-Shortcuts
- `Space` → Play/Pause
- `←` / `→` → Vorherige/Nächste Animation
- `R` → Animation neu starten

### Controls
- **Geschwindigkeit**: 0.25x - 2x
- **Loop**: Ein/Aus
- **Hintergrund**: Transparent/Weiß

## 📦 Deployment (Vercel)

### Automatisches Deployment

1. Verbinde GitHub Repository mit Vercel
2. Setze Root Directory auf `public`
3. Deploy! 🚀

Repository: https://github.com/zvvch/zvv-lottie

### Manuelle Konfiguration

```json
{
  "buildCommand": null,
  "outputDirectory": "public",
  "framework": null
}
```

### Vercel CLI

```bash
# Installation
npm i -g vercel

# Deployment
vercel --prod

# Root Directory setzen
vercel --prod --cwd public
```

## 🎨 Farb-Schema (ZVV Branding)

| Farbe | Hex | Verwendung |
|-------|-----|------------|
| Primary | `#0E377D` | Hauptfarbe ZVV |
| Primary Light | `#72C6E7` | Akzente, Highlights |
| Success | `#69C34D` | Positive Aktionen |
| Danger | `#FA3920` | Warnungen |
| Warning | `#FFBA25` | Hinweise |

## 💻 Lokale Entwicklung

```bash
# Repository klonen
git clone https://github.com/zvvch/zvv-lottie.git

# In Verzeichnis wechseln
cd zvv-lottie/public

# Mit lokalem Server öffnen (z.B. Python)
python -m http.server 8000

# Oder mit Node.js
npx serve .
```

Öffne: `http://localhost:8000`

## 🔧 Anpassungen

### Neue Animation hinzufügen

1. JSON-Datei in `public/` ablegen
2. In `index.html` zum Array `animationPaths` hinzufügen:

```javascript
const animationPaths = [
    // ...
    'deine_neue_animation.json'
];
```

### Styling anpassen

CSS Custom Properties in `index.html` unter `:root` anpassen:

```css
:root {
    --primary: #0E377D;      /* Deine Farbe */
    --primary-light: #72C6E7;
    /* ... */
}
```

## 📊 Performance

- ✅ Optimierte SVG-Rendering
- ✅ Lazy Loading für Vorschauen
- ✅ Effiziente Event-Listener
- ✅ Minimale Dependencies
- ✅ ~50KB Gesamtgröße (ohne Animationen)

## 🤝 Beitragen

Contributions sind willkommen! Bitte:

1. Fork das Repository
2. Erstelle einen Feature-Branch
3. Commit deine Änderungen
4. Push zum Branch
5. Erstelle einen Pull Request

## 📝 Lizenz

© 2024 Zürcher Verkehrsverbund (ZVV)

## 👨‍💻 Autor

Erstellt mit ❤️ für ZVV

## 📞 Support

Bei Fragen oder Problemen:
- 📧 Email: [support@zvv.ch](mailto:support@zvv.ch)
- 🐛 Issues: [GitHub Issues](https://github.com/zvvch/zvv-lottie/issues)

---

**Made with 🚊 ZVV & ❤️**

