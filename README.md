# 🎬 ZVV Lottie Files

Professioneller Animation Player für ZVV Header-Animationen

[![Vercel](https://img.shields.io/badge/Vercel-Deploy-black?logo=vercel)](https://lottie.zvv.dev)
[![Lottie](https://img.shields.io/badge/Lottie-5.9.0-00DDB3?logo=airbnb)](https://airbnb.io/lottie/)

## 📋 Übersicht

Diese Repository enthält **34 professionelle Lottie-Animationen** für ZVV Header-Elemente mit einem modernen, interaktiven Animation Player.

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
zvv-lottie/
├── README.md                          # Dieses Dokument
├── CHANGELOG.md                       # Version History
├── CONTRIBUTING.md                    # Contribution Guidelines
├── SECURITY.md                        # Security Policy
├── LICENSE                            # Copyright
├── package.json                       # Projekt-Metadaten
├── vercel.json                        # Vercel Configuration
└── public/                            # Website Root (Vercel)
    ├── index.html                     # Animation Player
    ├── manifest.json                  # PWA Manifest
    ├── 404.html                       # Error Page
    ├── robots.txt                     # SEO
    ├── sitemap.xml                    # SEO
    ├── api/
    │   └── animations.js              # REST API
    ├── zvv_header_element01.json      # Animation 1
    ├── zvv_header_element02.json      # Animation 2
    ├── ...                            # Animationen 3-23
    └── zvv_header_element24.json      # Animation 24
```

## 🎯 Animationen

### 📐 Original Set (1-14)
**Von ZVV Design-Team erstellt**

| Element | Beschreibung | Dimensionen | FPS |
|---------|-------------|-------------|-----|
| 01 | Konzentrische Kreise mit Pfeilen | 1952×3100 | 25 |
| 02 | Horizontale Pfeile | 650×1440 | 25 |
| 03 | Komplexe Pfeilbahnen | variabel | 25 |
| 04 | Pfeilbahnen mit Kurven | 1917×693 | 25 |
| 05-14 | Verschiedene Header-Animationen | variabel | 25 |

---

### 🤖 AI-Generierte Animationen (15-24)
**Erstellt mit Claude AI - Experimentell**

> ⚠️ **Hinweis:** Diese Animationen wurden AI-generiert und dienen als Ergänzung zum Original-Set. Sie folgen den ZVV-Design-Richtlinien, sind aber nicht vom offiziellen Design-Team erstellt.

| Element | Typ | Beschreibung | Dimensionen |
|---------|-----|-------------|-------------|
| 15 | 🔵 Network Hub | Pulsierende Netzwerk-Knotenpunkte | 800×800 |
| 16 | 🚀 Route | Animierte Routenvisualisierung A→B | 1200×400 |
| 17 | 🌊 Wave Expansion | Wellenförmige Expansionen | 600×600 |
| 18 | ⏱️ Progress | Zirkulärer Fortschrittsindikator | 500×500 |
| 19 | 📈 Flow Lines | Mehrere fließende Wellenlinien | 1000×600 |
| 20 | 🔄 Geo Squares | Rotierende geometrische Quadrate | 700×700 |
| 21 | 📊 Bar Chart | Animierte Balkendiagramme | 900×500 |
| 22 | ☀️ Radial Burst | Radiale Strahlen vom Zentrum | 800×800 |
| 23 | ✨ Particles | Aufsteigende Partikel-Sammlung | 600×1000 |
| 24 | 🔗 Network Nodes | Verbindungslinien zwischen Knoten | 1000×400 |

### 🎨 AI-Generiert V2 (25-34) - Verbessert
**Mit dicken Pfeilen, großen Flächen & bunten Farben aus Element 09**

> 💪 **Optimiert:** Diese Animationen verwenden dickere Striche (80-350px), größere Flächen und die harmonische Farbpalette aus dem Original-Set.

| Element | Typ | Beschreibung | Besonderheit |
|---------|-----|-------------|-------------|
| 25 | 🎯 Bold Route | Dicker horizontaler Pfeil | 80px Stroke + 240px BG |
| 26 | 🌀 Curved Bold | Massiver geschwungener Pfeil | 100px Stroke + 300px BG |
| 27 | ⬆️ Multi-Arrow | Drei große vertikale Pfeile | 120px Strokes, parallele Formation |
| 28 | 🔄 Bidirectional | Dicke Hin- und Rückpfeile | 120px + rotierendes Zentrum |
| 29 | 🍰 Pie Segments | Rotierende Tortensegmente | Große 200px Flächen |
| 30 | 🎬 Arrow Sequence | Drei sequentielle Pfeile | 200px Trail-Linie |
| 31 | ⭕ Mega Circles | Pulsierende Riesenkreise | 600px, 450px, 300px Durchmesser |
| 32 | 📏 Vertical Bold | Massive vertikale Balken | 250px breite Rechtecke |
| 33 | ✖️ Diagonal Cross | Kreuzende diagonale Pfeile | 250px-350px breite Pfade |
| 34 | 💥 Ultra Arrow | Ultra-dicker horizontal | 150px Stroke + 350px BG |

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

**Made with 🎨 Lottie & ❤️**

