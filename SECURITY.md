# 🔒 Security Policy

## Supported Versions

| Version | Supported          |
| ------- | ------------------ |
| 1.x.x   | ✅ Yes             |
| < 1.0   | ❌ No              |

## Reporting a Vulnerability

Die Sicherheit dieses Projekts ist uns wichtig. Wenn du eine Sicherheitslücke entdeckst, melde sie bitte verantwortungsvoll.

### Meldeprozess

**BITTE ERSTELLE KEINE ÖFFENTLICHEN ISSUES FÜR SICHERHEITSPROBLEME**

Stattdessen:

1. **Email senden an:** security@zvv.ch
2. **Betreff:** "Security Vulnerability - ZVV Lottie Files"
3. **Inhalt:**
   - Beschreibung der Schwachstelle
   - Steps to Reproduce
   - Mögliche Auswirkungen
   - Vorgeschlagene Lösung (optional)

### Was du erwarten kannst

- ✅ **Bestätigung** innerhalb von 48 Stunden
- ✅ **Erste Einschätzung** innerhalb von 5 Werktagen
- ✅ **Regelmäßige Updates** zum Status
- ✅ **Credit** in den Release Notes (wenn gewünscht)

## Security Measures

### Implementierte Maßnahmen

- ✅ **Content Security Policy** - XSS-Schutz
- ✅ **X-Frame-Options** - Clickjacking-Schutz
- ✅ **X-Content-Type-Options** - MIME-Type-Sniffing-Schutz
- ✅ **Referrer Policy** - Datenschutz
- ✅ **HTTPS-Only** - Verschlüsselte Verbindung
- ✅ **Dependency Scanning** - Automatische Überprüfung

### Best Practices

#### Für Benutzer

- Verwende immer die neueste Version
- Überprüfe die Integrität der Animationen
- Melde verdächtige Aktivitäten

#### Für Contributors

- Keine hardcoded Secrets
- Input-Validierung bei User-Input
- Sanitize externe Daten
- Regelmäßige Dependency-Updates

## Known Security Considerations

### Lottie Animations

Lottie-Animationen können JavaScript-Expressions enthalten. Wir:
- ✅ Laden nur vertrauenswürdige Animationen
- ✅ Hosten Animationen auf eigener Domain
- ✅ Verwenden Content Security Policy

### External Dependencies

- **Lottie.js** (v5.9.0) - Regelmäßig aktualisiert
- CDN-Delivery mit Integrity-Checks

## Security Updates

Security Updates werden priorisiert behandelt:

- 🔴 **Critical** - Innerhalb 24h
- 🟠 **High** - Innerhalb 7 Tagen
- 🟡 **Medium** - Innerhalb 30 Tagen
- 🟢 **Low** - Nächstes Release

## Disclosure Policy

Bei kritischen Sicherheitslücken:

1. **Private Disclosure** - Koordinierte Offenlegung
2. **Fix Development** - Patch erstellen
3. **Testing** - Gründlich testen
4. **Deployment** - Auf Vercel deployen
5. **Public Disclosure** - Nach 90 Tagen oder nach Fix

## Security Checklist für Releases

- [ ] Dependencies gescanned
- [ ] Security Headers konfiguriert
- [ ] Keine hardcoded Secrets
- [ ] Input-Validierung implementiert
- [ ] Error-Handling vorhanden
- [ ] Logs enthalten keine sensiblen Daten
- [ ] HTTPS erzwungen
- [ ] CSP konfiguriert

## Contact

- 📧 **Email:** security@zvv.ch
- 🌐 **Website:** https://www.zvv.ch
- 💬 **GitHub:** Private Security Advisories

---

**Thank you for helping keep ZVV Lottie Files secure! 🔒**

