// API Endpoint: GET /api/animations
// Returns metadata for all animations

export default function handler(req, res) {
  // CORS Headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const animations = [
    {
      id: 1,
      name: 'ZVV Header Element 01',
      filename: 'zvv_header_element01.json',
      description: 'Dynamische konzentrische Kreise mit pulsierenden Effekten und eleganten geschwungenen Pfeilen. Perfekt für große vertikale Header-Bereiche.',
      tags: ['kreise', 'pfeile', 'pulsierend', 'blau', 'grün', 'dynamisch'],
      dimensions: { width: 1952, height: 3100 },
      fps: 25,
      frames: 300,
      duration: 12.0,
      colors: ['#0E377D', '#72C6E7', '#69C34D']
    },
    {
      id: 2,
      name: 'ZVV Header Element 02',
      filename: 'zvv_header_element02.json',
      description: 'Wellenartige horizontale Pfeile in verschiedenen Farbverläufen, die Bewegung und Fortschritt symbolisieren. Ideal für Richtungsanzeigen.',
      tags: ['pfeile', 'horizontal', 'wellen', 'rot', 'orange', 'bewegung'],
      dimensions: { width: 650, height: 1440 },
      fps: 25,
      frames: 150,
      duration: 6.0,
      colors: ['#FA3920', '#FF7D25', '#FF8160']
    },
    {
      id: 3,
      name: 'ZVV Header Element 03',
      filename: 'zvv_header_element03.json',
      description: 'Komplexe, ineinandergreifende Pfeilbahnen mit fließenden Übergängen. Visualisiert Vernetzung und Verbindungen im ÖV-Netz.',
      tags: ['pfeile', 'komplex', 'vernetzung', 'fließend'],
      dimensions: { width: 0, height: 0 },
      fps: 25,
      frames: 150,
      duration: 6.0,
      colors: []
    },
    {
      id: 4,
      name: 'ZVV Header Element 04',
      filename: 'zvv_header_element04.json',
      description: 'Organische Pfeilbahnen mit sanften Kurven und fließenden Rotationen. Repräsentiert die elegante Bewegung öffentlicher Verkehrsmittel.',
      tags: ['pfeile', 'kurven', 'rotation', 'organisch', 'pink', 'orange'],
      dimensions: { width: 1917, height: 693 },
      fps: 25,
      frames: 300,
      duration: 12.0,
      colors: ['#F3358D', '#FF7D25', '#FFBA25']
    },
    {
      id: 5,
      name: 'ZVV Header Element 05',
      filename: 'zvv_header_element05.json',
      description: 'Abstrakte geometrische Formen in harmonischer Bewegung. Moderne Interpretation des ZVV-Designs für vielseitige Header-Anwendungen.',
      tags: ['geometrisch', 'abstract', 'harmonisch', 'modern'],
      dimensions: { width: 0, height: 0 },
      fps: 25,
      frames: 150,
      duration: 6.0,
      colors: []
    },
    {
      id: 6,
      name: 'ZVV Header Element 06',
      filename: 'zvv_header_element06.json',
      description: 'Minimalistische Linienführung mit präzisen Animationen. Betont Klarheit und Effizienz des öffentlichen Verkehrs.',
      tags: ['minimalistisch', 'linien', 'präzise', 'effizient'],
      dimensions: { width: 0, height: 0 },
      fps: 25,
      frames: 150,
      duration: 6.0,
      colors: []
    },
    {
      id: 7,
      name: 'ZVV Header Element 07',
      filename: 'zvv_header_element07.json',
      description: 'Kombination aus gebogenen und geraden Pfeilbahnen in kräftigen Farben. Zeigt die Vielfalt der Verkehrslinien im ZVV-Netz.',
      tags: ['pfeile', 'gebogen', 'gerade', 'vielfalt', 'rot', 'lila'],
      dimensions: { width: 3000, height: 2500 },
      fps: 25,
      frames: 150,
      duration: 6.0,
      colors: ['#FA3920', '#AE0880']
    },
    {
      id: 8,
      name: 'ZVV Header Element 08',
      filename: 'zvv_header_element08.json',
      description: 'Rhythmische Sequenzen mit wiederkehrenden Mustern. Symbolisiert Zuverlässigkeit und Taktfrequenz im Fahrplan.',
      tags: ['rhythmisch', 'muster', 'zuverlässigkeit', 'takt'],
      dimensions: { width: 0, height: 0 },
      fps: 25,
      frames: 150,
      duration: 6.0,
      colors: []
    },
    {
      id: 9,
      name: 'ZVV Header Element 09',
      filename: 'zvv_header_element09.json',
      description: 'Fließende Übergänge zwischen verschiedenen Zuständen. Repräsentiert nahtlose Verbindungen zwischen Verkehrsmitteln.',
      tags: ['fließend', 'übergänge', 'nahtlos', 'verbindungen'],
      dimensions: { width: 0, height: 0 },
      fps: 25,
      frames: 150,
      duration: 6.0,
      colors: []
    },
    {
      id: 10,
      name: 'ZVV Header Element 10',
      filename: 'zvv_header_element10.json',
      description: 'Rotierende Kreissegmente in den ZVV-Markenfarben mit synchronisierten Bewegungen. Symbolisiert das zusammenwirkende Verkehrssystem.',
      tags: ['kreise', 'rotation', 'segmente', 'synchron', 'rot', 'grün', 'blau'],
      dimensions: { width: 1710, height: 857 },
      fps: 25,
      frames: 150,
      duration: 6.0,
      colors: ['#D70013', '#2D8E27', '#72C6E7']
    },
    {
      id: 11,
      name: 'ZVV Header Element 11',
      filename: 'zvv_header_element11.json',
      description: 'Wellenförmige Bewegungen mit sanften Amplituden. Visualisiert den fließenden Verkehr und die Mobilität im Großraum Zürich.',
      tags: ['wellen', 'sanft', 'fließend', 'mobilität'],
      dimensions: { width: 0, height: 0 },
      fps: 25,
      frames: 150,
      duration: 6.0,
      colors: []
    },
    {
      id: 12,
      name: 'ZVV Header Element 12',
      filename: 'zvv_header_element12.json',
      description: 'Radiale Expansionen mit kontrollierter Dynamik. Zeigt die Ausdehnung des ZVV-Netzes in alle Richtungen.',
      tags: ['radial', 'expansion', 'dynamik', 'netzwerk'],
      dimensions: { width: 0, height: 0 },
      fps: 25,
      frames: 150,
      duration: 6.0,
      colors: []
    },
    {
      id: 13,
      name: 'ZVV Header Element 13',
      filename: 'zvv_header_element13.json',
      description: 'Schichtwechsel mit transparenten Übergängen. Repräsentiert die verschiedenen Ebenen des Verkehrssystems.',
      tags: ['schichten', 'transparent', 'ebenen', 'system'],
      dimensions: { width: 0, height: 0 },
      fps: 25,
      frames: 150,
      duration: 6.0,
      colors: []
    },
    {
      id: 14,
      name: 'ZVV Header Element 14',
      filename: 'zvv_header_element14.json',
      description: 'Kompakter Kreis mit bidirektionalen horizontalen Pfeilen in warmen Farben. Optimal für schmale Header-Bereiche und Navigation.',
      tags: ['kreis', 'pfeile', 'horizontal', 'bidirektional', 'kompakt', 'navigation'],
      dimensions: { width: 415, height: 166 },
      fps: 25,
      frames: 150,
      duration: 6.0,
      colors: ['#E20613', '#EE7D00', '#FFBA3B', '#AEC848']
    },
    {
      id: 15,
      name: 'ZVV Header Element 15',
      filename: 'zvv_header_element15.json',
      description: 'Pulsierende Netzwerk-Knotenpunkte mit rotierenden Ringen. Visualisiert zentrale Verkehrsknotenpunkte und deren Verbindungen im ZVV-Netz.',
      tags: ['netzwerk', 'knotenpunkte', 'rotation', 'pulsierend', 'verbindungen', 'hub'],
      dimensions: { width: 800, height: 800 },
      fps: 30,
      frames: 180,
      duration: 6.0,
      colors: ['#0E377D', '#72C6E7', '#69C34D', '#FA3920', '#FFBA25', '#AE0880', '#F3358D']
    },
    {
      id: 16,
      name: 'ZVV Header Element 16',
      filename: 'zvv_header_element16.json',
      description: 'Animierte Routenvisualisierung von Start zu Ziel. Zeigt die Reise durch das ÖV-Netz mit expandierenden Wellen und bewegtem Pfeil.',
      tags: ['route', 'reise', 'start', 'ziel', 'pfeil', 'wellen', 'navigation'],
      dimensions: { width: 1200, height: 400 },
      fps: 30,
      frames: 120,
      duration: 4.0,
      colors: ['#0E377D', '#72C6E7', '#69C34D', '#FA3920']
    },
    {
      id: 17,
      name: 'ZVV Header Element 17',
      filename: 'zvv_header_element17.json',
      description: 'Wellenförmige Expansionen vom Zentrum ausgehend. Symbolisiert die Ausbreitung von Informationen und Mobilität im Verkehrsnetz.',
      tags: ['wellen', 'expansion', 'zentrum', 'ausbreitung', 'information', 'mobilität'],
      dimensions: { width: 600, height: 600 },
      fps: 30,
      frames: 150,
      duration: 5.0,
      colors: ['#0E377D', '#72C6E7', '#69C34D']
    },
    {
      id: 18,
      name: 'ZVV Header Element 18',
      filename: 'zvv_header_element18.json',
      description: 'Zirkulärer Fortschrittsindikator mit 100% Completion. Perfekt für Ladeanimationen, Status-Updates oder Erfolgsmeldungen.',
      tags: ['fortschritt', 'progress', 'zirkular', 'timer', 'status', 'completion'],
      dimensions: { width: 500, height: 500 },
      fps: 30,
      frames: 180,
      duration: 6.0,
      colors: ['#0E377D', '#72C6E7', '#69C34D']
    },
    {
      id: 19,
      name: 'ZVV Header Element 19',
      filename: 'zvv_header_element19.json',
      description: 'Mehrere fließende Wellenlinien in sanfter Bewegung. Repräsentiert den harmonischen Fluss verschiedener Verkehrslinien.',
      tags: ['wellen', 'linien', 'fließend', 'harmonisch', 'mehrfach', 'flow'],
      dimensions: { width: 1000, height: 600 },
      fps: 30,
      frames: 150,
      duration: 5.0,
      colors: ['#0E377D', '#72C6E7', '#69C4D']
    },
    {
      id: 20,
      name: 'ZVV Header Element 20',
      filename: 'zvv_header_element20.json',
      description: 'Rotierende geometrische Quadrate in verschachtelter Anordnung. Moderne, abstrakte Darstellung von Struktur und Organisation.',
      tags: ['quadrate', 'rotation', 'geometrisch', 'verschachtelt', 'struktur', 'modern'],
      dimensions: { width: 700, height: 700 },
      fps: 30,
      frames: 120,
      duration: 4.0,
      colors: ['#0E377D', '#72C6E7', '#69C34D']
    },
    {
      id: 21,
      name: 'ZVV Header Element 21',
      filename: 'zvv_header_element21.json',
      description: 'Animierte Balkendiagramme mit rhythmischem Wachstum. Visualisiert Statistiken, Auslastung oder Frequenzen im Verkehrsnetz.',
      tags: ['balken', 'diagramm', 'statistik', 'wachstum', 'daten', 'rhythmisch'],
      dimensions: { width: 900, height: 500 },
      fps: 30,
      frames: 150,
      duration: 5.0,
      colors: ['#0E377D', '#72C6E7', '#69C34D', '#FFBA25', '#FA3920']
    },
    {
      id: 22,
      name: 'ZVV Header Element 22',
      filename: 'zvv_header_element22.json',
      description: 'Radiale Strahlen die vom Zentrum ausstrahlen. Symbolisiert Energie, Aktivität und das pulsierende Leben einer Verkehrsdrehscheibe.',
      tags: ['radial', 'strahlen', 'energie', 'aktivität', 'zentrum', 'burst'],
      dimensions: { width: 800, height: 800 },
      fps: 30,
      frames: 180,
      duration: 6.0,
      colors: ['#0E377D', '#72C6E7', '#69C34D', '#FFBA25', '#AE0880']
    },
    {
      id: 23,
      name: 'ZVV Header Element 23',
      filename: 'zvv_header_element23.json',
      description: 'Aufsteigende Partikel die sich zu einem Ziel sammeln. Repräsentiert Passagierströme und die Konvergenz verschiedener Routen.',
      tags: ['partikel', 'aufsteigend', 'sammeln', 'passagiere', 'ströme', 'konvergenz'],
      dimensions: { width: 600, height: 1000 },
      fps: 30,
      frames: 120,
      duration: 4.0,
      colors: ['#0E377D', '#72C6E7', '#69C34D', '#FA3920', '#FFBA25']
    },
    {
      id: 24,
      name: 'ZVV Header Element 24',
      filename: 'zvv_header_element24.json',
      description: 'Verbindungslinien zwischen Netzwerkknoten. Zeigt die Kommunikation und Verbindungen zwischen verschiedenen Stationen.',
      tags: ['verbindung', 'netzwerk', 'knoten', 'kommunikation', 'stationen', 'transfer'],
      dimensions: { width: 1000, height: 400 },
      fps: 30,
      frames: 180,
      duration: 6.0,
      colors: ['#0E377D', '#72C6E7', '#69C34D', '#FA3920']
    }
  ];

  res.status(200).json({
    success: true,
    count: animations.length,
    animations: animations
  });
}

