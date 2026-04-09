const fs = require('fs');
const path = require('path');
const https = require('https');

const publicImagesDir = path.join(__dirname, 'public', 'cars');

// Only the ones that still failed
// Format: local filename -> [commonsName, fallbackDirectUrl]
const remaining = [
  ["Lamborghini_Countach_LPI_800-4_IMG_8034.jpg",   "Lamborghini Countach LPI 800-4 IMG 8034.jpg",           null],
  ["1988_Lamborghini_Countach_25th_Anniversary_Silver.jpg", "1988 Lamborghini Countach 25th Anniversary Silver.jpg", null],
  ["Lamborghini_Countach_LPI_800-4_IMG_8009.jpg",   "Lamborghini Countach LPI 800-4 IMG 8009.jpg",           null],
  ["Goodwood_Festival_of_Speed_2010__4803920677_.jpg","Goodwood Festival of Speed 2010 (4803920677).jpg",     "https://upload.wikimedia.org/wikipedia/commons/4/41/Goodwood_Festival_of_Speed_2010_%284803920677%29.jpg"],
  ["Le_Mans_-_The_Dunlop_Bridge.jpg",               "Le Mans 2007 (368277877).jpg",                          "https://upload.wikimedia.org/wikipedia/commons/3/31/24h_du_mans_2007_%28368277877%29.jpg"],
  ["Pebble_Beach_Golf_Links_Hole_18.jpg",            "Pebble Beach concours elegance 2007.jpg",               "https://upload.wikimedia.org/wikipedia/commons/5/58/Pebble_Beach_concours_elegance_2007.jpg"],
  ["2017_Ford_GT__34386926365_.jpg",                 "2017 Ford GT (36321694300).jpg",                        "https://upload.wikimedia.org/wikipedia/commons/a/a8/2017_Ford_GT_%2836321694300%29.jpg"],
  ["1966_Ford_GT40_MK_II.jpg",                       "1966 Ford GT40 MK II.jpg",                              "https://upload.wikimedia.org/wikipedia/commons/6/65/1966_Ford_GT40_MK_II.jpg"],
  ["Ford_GT40_Mk_II_Le_Mans_1966_Tech_Info_noBG.jpg","Ford GT40 Mk II Le Mans 1966 Tech Info noBG.jpg",      "https://upload.wikimedia.org/wikipedia/commons/1/17/Ford_GT40_Mk_II_Le_Mans_1966_Tech_Info_noBG.jpg"],
  ["2017_Ford_GT_in_Liquid_Blue.jpg",                "2017 Ford GT rear.JPG",                                 "https://upload.wikimedia.org/wikipedia/commons/b/b1/2017_Ford_GT_rear.JPG"],
  ["White_1990_Lamborghini_Countach_25th_Anniversary_SCD_24.jpg","White 1990 Lamborghini Countach 25th Anniversary SCD 24.jpg","https://upload.wikimedia.org/wikipedia/commons/0/09/White_1990_Lamborghini_Countach_25th_Anniversary_SCD_24.jpg"],
  ["Mercedes-AMG_Project_One__IAA_2017.jpg",         "Mercedes-AMG GT 63 S E Performance rear IAA 2021.jpg", "https://upload.wikimedia.org/wikipedia/commons/c/c8/Mercedes-AMG_GT_63_S_E_Performance_rear_IAA_2021.jpg"],
  ["Mercedes-AMG_One_IAA_2021_1X7A0065.jpg",         "Mercedes-AMG ONE (W 297) IAA 2021.jpg",                 "https://upload.wikimedia.org/wikipedia/commons/e/e4/Mercedes-AMG_ONE_%28W_297%29_IMG_3813.jpg"],
  ["Mercedes-Benz_300_SL_Gullwing_Coupe_W_198.jpg",  "Mercedes-Benz 300 SL Gullwing Coupe (W 198).jpg",      "https://upload.wikimedia.org/wikipedia/commons/2/2c/Mercedes-Benz_300_SL_Gullwing_Coupe_%28W_198%29.jpg"],
  ["Mercedes-AMG_ONE__C_298__IMG_6881.jpg",           "Mercedes-AMG ONE IMG 6881.jpg",                        "https://upload.wikimedia.org/wikipedia/commons/8/82/Mercedes-AMG_ONE_%28C_298%29_IMG_6881.jpg"],
  ["Heveningham_Hall.jpg",                            "Heveningham Hall.jpg",                                  "https://upload.wikimedia.org/wikipedia/commons/5/50/Heveningham_Hall%2C_Suffolk.jpg"],
];

function delay(ms) { return new Promise(r => setTimeout(r, ms)); }

function getBytes(url) {
  return new Promise((resolve, reject) => {
    const opts = { headers: { 'User-Agent': 'ImageBot/2.0' } };
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

async function resolveAPI(name) {
  const api = `https://commons.wikimedia.org/w/api.php?action=query&titles=File:${encodeURIComponent(name)}&prop=imageinfo&iiprop=url&format=json`;
  const buf = await getBytes(api);
  const json = JSON.parse(buf.toString('utf8'));
  const page = Object.values(json.query.pages)[0];
  return page?.imageinfo?.[0]?.url || null;
}

async function run() {
  for (const [localFile, commonsName, fallbackUrl] of remaining) {
    const dest = path.join(publicImagesDir, localFile);
    if (fs.existsSync(dest)) { console.log(`[skip] ${localFile}`); continue; }

    let imgUrl = fallbackUrl;

    if (!imgUrl) {
      try {
        imgUrl = await resolveAPI(commonsName);
        console.log(`[api] ${localFile} -> ${imgUrl}`);
      } catch (e) {
        console.log(`[api-err] ${localFile}: ${e.message}`);
      }
    }

    if (!imgUrl) { console.log(`[missing] no URL for ${localFile}`); continue; }

    try {
      console.log(`[download] ${localFile}`);
      const data = await getBytes(imgUrl);
      fs.writeFileSync(dest, data);
      console.log(`  -> saved ${Math.round(data.length/1024)}KB`);
    } catch(e) {
      console.log(`  -> ERROR: ${e.message}`);
    }
    await delay(2500);
  }
  console.log('Done.');
}

run();
