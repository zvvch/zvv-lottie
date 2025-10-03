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
      description: 'Konzentrische Kreise mit pulsierenden Effekten und geschwungenen Pfeilen',
      tags: ['kreise', 'pfeile', 'blau', 'grün'],
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
      description: 'Horizontale Pfeile nach rechts',
      tags: ['pfeile', 'horizontal', 'rot', 'orange'],
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
      description: 'Komplexe Pfeilbahnen',
      tags: ['pfeile', 'komplex'],
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
      description: 'Pfeilbahnen mit Kurven und Rotationen',
      tags: ['pfeile', 'kurven', 'rotation'],
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
      description: 'Header-Animation 5',
      tags: ['header'],
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
      description: 'Header-Animation 6',
      tags: ['header'],
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
      description: 'Gebogene und gerade Pfeil-Kombinationen',
      tags: ['pfeile', 'gebogen', 'gerade'],
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
      description: 'Header-Animation 8',
      tags: ['header'],
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
      description: 'Header-Animation 9',
      tags: ['header'],
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
      description: 'Rotierende Kreissegmente mit Animation',
      tags: ['kreise', 'rotation', 'segmente'],
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
      description: 'Header-Animation 11',
      tags: ['header'],
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
      description: 'Header-Animation 12',
      tags: ['header'],
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
      description: 'Header-Animation 13',
      tags: ['header'],
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
      description: 'Kreis mit horizontalen Pfeilen',
      tags: ['kreis', 'pfeile', 'horizontal'],
      dimensions: { width: 415, height: 166 },
      fps: 25,
      frames: 150,
      duration: 6.0,
      colors: ['#E20613', '#EE7D00', '#FFBA3B', '#AEC848']
    }
  ];

  res.status(200).json({
    success: true,
    count: animations.length,
    animations: animations
  });
}

