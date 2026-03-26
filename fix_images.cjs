const fs = require('fs');
const path = require('path');
const https = require('https');

const publicImagesDir = path.join(__dirname, 'public', 'cars');

// Map: local filename -> Wikimedia Commons file name (exact)
const filesToDownload = {
  "Mercedes-Benz_300_SL_Gullwing_1955.jpg": "Mercedes Benz 300 SL Gullwing (8649257974).jpg",
  "Lamborghini_Countach_LPI_800-4_IMG_8019.jpg": "Lamborghini Countach LPI 800-4 IMG 8019.jpg",
  "Lamborghini_Countach_LPI_800-4_IMG_8034.jpg": "Lamborghini Countach LPI 800-4 IMG 8034.jpg",
  "1988_Lamborghini_Countach_25th_Anniversary_Silver.jpg": "1988 Lamborghini Countach 25th Anniversary Silver.jpg",
  "Lamborghini_Countach_LPI_800-4_IMG_8009.jpg": "Lamborghini Countach LPI 800-4 IMG 8009.jpg",
  "1989_Lamborghini_Countach_25th_Anniversary_SCD_24.jpg": "1989 Lamborghini Countach 25th Anniversary SCD 24.jpg",
  "Goodwood_Festival_of_Speed_2010__4803920677_.jpg": "Goodwood Festival of Speed 2010 (4803920677).jpg",
  "Concourse_d_Elegance___Heveningham_Hall_-_geograph.org.uk_-_5484556.jpg": "Concourse d'Elegance @ Heveningham Hall - geograph.org.uk - 5484556.jpg",
  "Le_Mans_-_The_Dunlop_Bridge_-_geograph.org.uk_-_1025066.jpg": "Le Mans - The Dunlop Bridge - geograph.org.uk - 1025066.jpg",
  "Pebble_Beach_Golf_Links_Hole_18.jpg": "Pebble Beach Golf Links Hole 18.jpg",
  "2017_Ford_GT__34386926365_.jpg": "2017 Ford GT (36321694300).jpg",
  "1966_Ford_GT40_MK_II.jpg": "1966 Ford GT40 MK II.jpg",
  "2017_Ford_GT__94302_.jpg": "2017 Ford GT (94302).jpg",
  "Ford_GT40_Mk_II_Le_Mans_1966_Tech_Info_noBG.jpg": "Ford GT40 Mk II Le Mans 1966 Tech Info noBG.jpg",
  "2017_Ford_GT_in_Liquid_Blue.jpg": "2017 Ford GT rear.JPG",
  "White_1990_Lamborghini_Countach_25th_Anniversary_SCD_24.jpg": "White 1990 Lamborghini Countach 25th Anniversary SCD 24.jpg",
  "Mercedes-AMG_Project_One__IAA_2017.jpg": "Mercedes-AMG Project One, IAA 2017.jpg",
  "Mercedes-AMG_One_IAA_2021_1X7A0065.jpg": "Mercedes-AMG One IAA 2021 1X7A0065.jpg",
  "Mercedes-Benz_300_SL_Gullwing_Coupe_W_198.jpg": "Mercedes-Benz 300 SL Gullwing Coupe W 198.jpg",
  "Mercedes-AMG_ONE__C_298__IMG_6881.jpg": "Mercedes-AMG ONE (C 298) IMG 6881.jpg",
};

function delay(ms) {
  return new Promise(r => setTimeout(r, ms));
}

function get(url) {
  return new Promise((resolve, reject) => {
    const opts = { headers: { 'User-Agent': 'ImageFetcher/1.0 (open-source; test)' } };
    https.get(url, opts, (res) => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        return resolve(get(res.headers.location));
      }
      if (res.statusCode !== 200) {
        return reject(new Error(`HTTP ${res.statusCode} for ${url}`));
      }
      const chunks = [];
      res.on('data', c => chunks.push(c));
      res.on('end', () => resolve(Buffer.concat(chunks)));
    }).on('error', reject);
  });
}

async function resolveCommonsUrl(filename) {
  const api = `https://commons.wikimedia.org/w/api.php?action=query&titles=File:${encodeURIComponent(filename)}&prop=imageinfo&iiprop=url&format=json`;
  const buf = await get(api);
  const json = JSON.parse(buf.toString('utf8'));
  const pages = json.query.pages;
  const page = Object.values(pages)[0];
  if (!page || !page.imageinfo || !page.imageinfo[0]) return null;
  return page.imageinfo[0].url;
}

async function run() {
  if (!fs.existsSync(publicImagesDir)) fs.mkdirSync(publicImagesDir, { recursive: true });

  for (const [localFile, commonsName] of Object.entries(filesToDownload)) {
    const dest = path.join(publicImagesDir, localFile);
    if (fs.existsSync(dest)) {
      console.log(`[skip] ${localFile}`);
      continue;
    }
    try {
      console.log(`[resolve] ${commonsName}`);
      const imgUrl = await resolveCommonsUrl(commonsName);
      if (!imgUrl) { console.log(`  -> not found in Commons`); continue; }
      console.log(`  -> ${imgUrl}`);
      const data = await get(imgUrl);
      fs.writeFileSync(dest, data);
      console.log(`  -> saved (${Math.round(data.length/1024)}KB)`);
    } catch(e) {
      console.log(`  -> ERROR: ${e.message}`);
    }
    await delay(1200);
  }
  console.log('All done.');
}

run();
