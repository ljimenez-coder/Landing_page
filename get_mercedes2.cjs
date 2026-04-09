const fs = require('fs');
const path = require('path');
const https = require('https');

const publicImagesDir = path.join(__dirname, 'public', 'cars');

// Exact Commons filenames found via the search API
const mercedesImages = [
  ["Mercedes-AMG-ONE-IAA-2021.jpg",         "Mercedes-AMG One IAA 2021 1X7A0112.jpg"],
  ["Mercedes-AMG-Project-One-Frankfurt.jpg","Mercedes-AMG Project One, Frankfurt (1Y7A3473).jpg"],
  ["Mercedes-300SL-W198-Coupe.jpg",         "Mercedes-Benz 300 SL Coupé (W 198, 1955) (52571561177).jpg"],
  ["Mercedes-300SL-W198-Front.jpg",         "Mercedes-Benz SLS AMG (C 197) & Mercedes-Benz 300 SL (W 198) – Frontansicht, 10. August 2011, Düsseldorf.jpg"],
];

function delay(ms) { return new Promise(r => setTimeout(r, ms)); }

function getBytes(url) {
  return new Promise((resolve, reject) => {
    const opts = { headers: { 'User-Agent': 'Mercedes Image Bot/1.0' } };
    https.get(url, opts, (res) => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        return resolve(getBytes(res.headers.location));
      }
      if (res.statusCode !== 200) return reject(new Error(`HTTP ${res.statusCode}`));
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
