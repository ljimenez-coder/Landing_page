const fs = require('fs');
const path = require('path');
const https = require('https');

const publicImagesDir = path.join(__dirname, 'public', 'cars');

// Retry the 300 SL images + use alternative names for retrying
const remainingMercedes = [
  ["Mercedes-300SL-W198-Coupe.jpg",  "Mercedes-Benz 300 SL Coupé (W 198, 1955) (52572476495).jpg"],
  ["Mercedes-300SL-W198-Front.jpg",  "Mercedes-Benz 300 SL Coupé (W 198, 1955) (52572302449).jpg"],
];

function delay(ms) { return new Promise(r => setTimeout(r, ms)); }

function getBytes(url) {
  return new Promise((resolve, reject) => {
    const opts = { headers: { 'User-Agent': 'CarBot/2.0' } };
    https.get(url, opts, (res) => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) return resolve(getBytes(res.headers.location));
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
  return Object.values(JSON.parse(buf.toString()).query.pages)[0]?.imageinfo?.[0]?.url || null;
}

async function run() {
  // First wait 10 seconds for rate limit to cool down
  console.log('Waiting 10s before retry...');
  await delay(10000);
  
  for (const [localFile, commonsName] of remainingMercedes) {
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
    await delay(3000);
  }
  console.log('Done.');
}

run();
