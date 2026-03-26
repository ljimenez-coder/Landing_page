const fs = require('fs');
const path = require('path');
const https = require('https');

const publicImagesDir = path.join(__dirname, 'public', 'cars');

const extraMercedes = [
  ["Mercedes-AMG-ONE-IAA-2021-Side.jpg",   "Mercedes-AMG One IAA 2021 1X7A0108.jpg"],
  ["Mercedes-AMG-Project-One-Interior.jpg", "Mercedes-AMG Project One, Frankfurt (1Y7A3446).jpg"],
];

function delay(ms) { return new Promise(r => setTimeout(r, ms)); }

function getBytes(url) {
  return new Promise((resolve, reject) => {
    const opts = { headers: { 'User-Agent': 'CarBot/2.1' } };
    https.get(url, opts, (res) => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) return resolve(getBytes(res.headers.location));
      if (res.statusCode !== 200) return reject(new Error(`HTTP ${res.statusCode}`));
      const chunks = [];
      res.on('data', d => chunks.push(d));
      res.on('end', () => resolve(Buffer.concat(chunks)));
    }).on('error', reject);
  });
}

async function resolveCommonsURL(name) {
  const api = `https://commons.wikimedia.org/w/api.php?action=query&titles=File:${encodeURIComponent(name)}&prop=imageinfo&iiprop=url&format=json`;
  const buf = await getBytes(api);
  return Object.values(JSON.parse(buf.toString()).query.pages)[0]?.imageinfo?.[0]?.url || null;
}

async function run() {
  for (const [localFile, commonsName] of extraMercedes) {
    const dest = path.join(publicImagesDir, localFile);
    if (fs.existsSync(dest)) continue;
    try {
      const imgUrl = await resolveCommonsURL(commonsName);
      if (!imgUrl) continue;
      const data = await getBytes(imgUrl);
      fs.writeFileSync(dest, data);
      console.log(`Saved ${localFile}`);
    } catch(e) { console.error(e); }
    await delay(3000);
  }
}
run();
