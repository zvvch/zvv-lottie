# 🤝 Contributing to ZVV Lottie Files

Vielen Dank für dein Interesse, zu diesem Projekt beizutragen! 

## 📋 Code of Conduct

Sei respektvoll, konstruktiv und professionell in der Kommunikation.

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- Git
- Code Editor (VS Code empfohlen)

### Setup

```bash
# Repository klonen
git clone https://github.com/zvvch/zvv-lottie.git
cd zvv-lottie

# Dependencies installieren (optional)
npm install

# Development Server starten
npm run dev
```

## 🔧 Development Workflow

### 1. Branch erstellen

```bash
git checkout -b feature/deine-feature-beschreibung
```

Branch-Naming Convention:
- `feature/` - Neue Features
- `fix/` - Bugfixes
- `docs/` - Dokumentation
- `refactor/` - Code-Refactoring
- `style/` - Styling-Änderungen

### 2. Änderungen machen

- Schreibe sauberen, kommentierten Code
- Folge der bestehenden Code-Struktur
- Teste deine Änderungen lokal

### 3. Commit

```bash
git add .
git commit -m "feat: Beschreibung der Änderung"
```

Commit-Message Convention (Conventional Commits):
- `feat:` - Neues Feature
- `fix:` - Bugfix
- `docs:` - Dokumentation
- `style:` - Formatierung
- `refactor:` - Code-Refactoring
- `test:` - Tests hinzufügen/ändern
- `chore:` - Build-Tasks, Konfiguration

### 4. Pull Request erstellen

1. Push zu deinem Fork
2. Erstelle Pull Request auf GitHub
3. Beschreibe deine Änderungen detailliert
4. Warte auf Review

## 📝 Code Style Guidelines

### HTML
- Verwende semantisches HTML
- Accessibility beachten (ARIA-Labels)
- Meta-Tags vollständig ausfüllen

### CSS
- CSS Custom Properties nutzen
- Mobile-First Ansatz
- BEM-Naming optional
- Kommentiere komplexe Styles

### JavaScript
- Vanilla JavaScript (keine Frameworks)
- ES6+ Features nutzen
- Kommentiere komplexe Logik
- Verwende sprechende Variablennamen

### Beispiel:

```javascript
// ✅ Good
function loadAnimation(index) {
    const animationPath = animationPaths[index];
    // ... implementation
}

// ❌ Bad
function load(i) {
    const ap = aps[i];
    // ... implementation
}
```

## 🎨 Animation Guidelines

### Neue Animationen hinzufügen

1. Datei in `public/` ablegen
2. Naming: `zvv_header_element{XX}.json`
3. In `animationPaths` Array eintragen
4. Testen im Player

### Animation-Standards

- Format: Lottie JSON
- Optimiert für Web
- Sinnvolle Dimensions
- Loop-fähig wenn möglich
- < 500KB Dateigröße

## 🧪 Testing

### Manuelles Testing

Teste in verschiedenen Browsern:
- ✅ Chrome (Desktop & Mobile)
- ✅ Firefox
- ✅ Safari
- ✅ Edge

### Checkliste

- [ ] Animation lädt korrekt
- [ ] Alle Controls funktionieren
- [ ] Responsive auf Mobile
- [ ] Keine Console Errors
- [ ] Performance ist gut
- [ ] Keyboard Shortcuts funktionieren

## 📚 Dokumentation

- Dokumentiere neue Features im README
- Füge Kommentare zu komplexem Code hinzu
- Update CHANGELOG.md (wenn vorhanden)

## 🐛 Bug Reports

### Bug melden

Erstelle ein Issue mit:

```markdown
### Beschreibung
Was ist das Problem?

### Steps to Reproduce
1. Gehe zu...
2. Klicke auf...
3. Siehe Fehler...

### Expected Behavior
Was sollte passieren?

### Screenshots
Füge Screenshots hinzu

### Environment
- Browser: Chrome 120
- OS: Windows 11
- Device: Desktop
```

## 💡 Feature Requests

Erstelle ein Issue mit:

```markdown
### Feature Beschreibung
Was möchtest du hinzugefügt haben?

### Use Case
Warum ist dieses Feature nützlich?

### Mockups/Examples
Visuelle Beispiele (optional)
```

## 🔍 Code Review Process

1. **Automatische Checks** - GitHub Actions
2. **Code Review** - Mindestens 1 Reviewer
3. **Testing** - Funktionalität testen
4. **Merge** - Squash & Merge

## 📦 Release Process

1. Update Version in `package.json`
2. Update `CHANGELOG.md`
3. Create Release Tag
4. Deploy via GitHub Actions

## ❓ Fragen?

- 📧 Email: support@zvv.ch
- 💬 GitHub Discussions
- 🐛 GitHub Issues

## 🙏 Danke!

Jeder Beitrag hilft, dieses Projekt besser zu machen! 

---

**Happy Coding! 🎬**

