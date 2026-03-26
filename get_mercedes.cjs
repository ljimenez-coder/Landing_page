const fs = require('fs');
const path = require('path');
const https = require('https');

const publicImagesDir = path.join(__dirname, 'public', 'cars');

// Mercedes images still broken - using direct Commons API resolution
const mercedesImages = [
  // local filename -> exact Commons file name
  ["Mercedes-AMG_One_IAA_2021.jpg",         "Mercedes-AMG One IAA 2021 1X7A0065.jpg"],
  ["Mercedes-300SL-Gullwing-W198.jpg",      "Mercedes-Benz 300 SL Gullwing Coupe (W 198).jpg"],
  ["Mercedes-AMG-ONE-IMG-6881.jpg",         "Mercedes-AMG ONE (C 298) IMG 6881.jpg"],
  ["Mercedes-300SL-Frontansicht.jpg",       "Mercedes-Benz 300 SL Coupe (W 198) – Frontansicht, 20. April 2014, Düsseldorf.jpg"],
  ["Mercedes-AMG-Project-One-IAA.jpg",      "Mercedes-AMG Project One, IAA 2017.jpg"],
  ["Mercedes-AMG-ONE-W297.jpg",             "Mercedes-AMG ONE (W 297) IMG 3813.jpg"],
];

function delay(ms) { return new Promise(r => setTimeout(r, ms)); }

function getBytes(url) {
  return new Promise((resolve, reject) => {
    const opts = { headers: { 'User-Agent': 'CarImageBot/1.0' } };
    https.get(url, opts, (res) => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        return resolve(getBytes(res.headers.location));
      }
      if (res.statusCode !== 200) return reject(new Error(`HTTP ${res.statusCode} for ${url}`));
      const chunks = [];
      res.on('data', c => chunks.push(c));
      res.on('end', () => resolve(Buffer.concat(chunks)));
    }).on('error', reject);
  });
}

async function resolveCommonsURL(name) {
  const api = `https://commons.wikimedia.org/w/api.php?action=query&titles=File:${encodeURIComponent(name)}&prop=imageinfo&iiprop=url&format=json`;
  const buf = await getBytes(api);
  const json = JSON.parse(buf.toString('utf8'));
  const page = Object.values(json.query.pages)[0];
  return page?.imageinfo?.[0]?.url || null;
}

async function run() {
  if (!fs.existsSync(publicImagesDir)) fs.mkdirSync(publicImagesDir, { recursive: true });

  for (const [localFile, commonsName] of mercedesImages) {
    const dest = path.join(publicImagesDir, localFile);
    if (fs.existsSync(dest)) { console.log(`[skip] ${localFile}`); continue; }

    try {
      console.log(`[resolve] ${commonsName}`);
      const imgUrl = await resolveCommonsURL(commonsName);
      if (!imgUrl) { console.log(`  -> not found`); continue; }
      console.log(`  -> ${imgUrl}`);
      const data = await getBytes(imgUrl);
      fs.writeFileSync(dest, data);
      console.log(`  -> saved ${Math.round(data.length/1024)}KB`);
    } catch(e) {
      console.log(`  -> ERROR: ${e.message}`);
    }
    await delay(2000);
  }
  console.log('Done.');
}

run();
