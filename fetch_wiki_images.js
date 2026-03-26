const fs = require('fs');
const path = require('path');
const https = require('https');

const publicImagesDir = path.join(__dirname, 'public', 'cars');

const failedFiles = {
  "Mercedes-Benz_300_SL_Gullwing_1955.jpg": "File:Mercedes_Benz_300_SL_Gullwing_(8649257974).jpg",
  "Lamborghini_Countach_LPI_800-4_IMG_8019.jpg": "File:Lamborghini_Countach_LPI_800-4_IMG_8019.jpg",
  "Lamborghini_Countach_LPI_800-4_IMG_8034.jpg": "File:Lamborghini_Countach_LPI_800-4_IMG_8034.jpg",
  "1988_Lamborghini_Countach_25th_Anniversary_Silver.jpg": "File:1988_Lamborghini_Countach_25th_Anniversary_Silver.jpg",
  "Lamborghini_Countach_LPI_800-4_IMG_8009.jpg": "File:Lamborghini_Countach_LPI_800-4_IMG_8009.jpg",
  "1989_Lamborghini_Countach_25th_Anniversary_SCD_24.jpg": "File:1989_Lamborghini_Countach_25th_Anniversary_SCD_24.jpg",
  "Goodwood_Festival_of_Speed_2010__4803920677_.jpg": "File:Goodwood_Festival_of_Speed_2010_(4803920677).jpg",
  "Concourse_d_Elegance___Heveningham_Hall_-_geograph.org.uk_-_5484556.jpg": "File:Concourse_d'Elegance_@_Heveningham_Hall_-_geograph.org.uk_-_5484556.jpg",
  "Le_Mans_-_The_Dunlop_Bridge_-_geograph.org.uk_-_1025066.jpg": "File:Le_Mans_-_The_Dunlop_Bridge_-_geograph.org.uk_-_1025066.jpg",
  "Pebble_Beach_Golf_Links_Hole_18.jpg": "File:Pebble_Beach_Golf_Links_Hole_18.jpg",
  "2017_Ford_GT__34386926365_.jpg": "File:2017_Ford_GT_(36321694300).jpg",
  "1966_Ford_GT40_MK_II.jpg": "File:1966_Ford_GT40_MK_II.jpg",
  "2017_Ford_GT__94302_.jpg": "File:2017_Ford_GT_(94302).jpg",
  "Ford_GT40_Mk_II_Le_Mans_1966_Tech_Info_noBG.jpg": "File:Ford_GT40_Mk_II_Le_Mans_1966_Tech_Info_noBG.jpg",
  "2017_Ford_GT_in_Liquid_Blue.jpg": "File:2017_Ford_GT_rear.JPG",
  "White_1990_Lamborghini_Countach_25th_Anniversary_SCD_24.jpg": "File:White_1990_Lamborghini_Countach_25th_Anniversary_SCD_24.jpg",
  "Mercedes-AMG_Project_One__IAA_2017.jpg": "File:Mercedes-AMG_Project_One,_IAA_2017.jpg",
  "Mercedes-AMG_One_IAA_2021_1X7A0065.jpg": "File:Mercedes-AMG_One_IAA_2021_1X7A0065.jpg",
  "Mercedes-Benz_300_SL_Gullwing_Coupe_W_198.jpg": "File:Mercedes-Benz_300_SL_Gullwing_Coupe_W_198.jpg",
  "Mercedes-AMG_ONE__C_298__IMG_6881.jpg": "File:Mercedes-AMG_ONE_(C_298)_IMG_6881.jpg",
  "Mercedes-Benz_300_SL_Coupe__W_198____Frontansicht__20._April_2014__D_sseldorf.jpg": "File:Mercedes-Benz_300_SL_Coupe_(W_198)_–_Frontansicht,_20._April_2014,_Düsseldorf.jpg"
};

if (!fs.existsSync(publicImagesDir)) {
  fs.mkdirSync(publicImagesDir, { recursive: true });
}

function getJson(url) {
  return new Promise((resolve, reject) => {
    https.get(url, { headers: { 'User-Agent': 'Bot-Downloader/1.0 (contact@example.com)' }}, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        try { resolve(JSON.parse(data)); } catch (e) { reject(e); }
      });
    }).on('error', reject);
  });
}

function downloadImage(url, dest) {
  return new Promise((resolve, reject) => {
    https.get(url, { headers: { 'User-Agent': 'Bot-Downloader/1.0 (contact@example.com)' }}, (res) => {
        if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
            return resolve(downloadImage(res.headers.location, dest));
        }
        if (res.statusCode !== 200) return reject(new Error(`Status ${res.statusCode}`));
        const file = fs.createWriteStream(dest);
        res.pipe(file);
        file.on('finish', () => file.close(resolve));
        file.on('error', err => fs.unlink(dest, () => reject(err)));
    }).on('error', reject);
  });
}

async function run() {
  for (const [filename, wikiFile] of Object.entries(failedFiles)) {
    const destPath = path.join(publicImagesDir, filename);
    if (!fs.existsSync(destPath)) {
      console.log(`Resolving: ${wikiFile}`);
      const apiURL = `https://en.wikipedia.org/w/api.php?action=query&titles=${encodeURIComponent(wikiFile)}&prop=imageinfo&iiprop=url&format=json`;
      
      try {
        const json = await getJson(apiURL);
        const pages = json.query.pages;
        const pageId = Object.keys(pages)[0];
        if (pageId === '-1' || !pages[pageId].imageinfo) {
           console.log(`-> Could not resolve ${wikiFile}`);
           continue;
        }
        const imgUrl = pages[pageId].imageinfo[0].url;
        console.log(`-> Downloading: ${imgUrl}`);
        
        await downloadImage(imgUrl, destPath);
        console.log(`-> Saved: ${filename}`);
      } catch (e) {
        console.log(`-> Error handling ${wikiFile}: ${e.message}`);
      }
      
      // sleep 1s
      await new Promise(r => setTimeout(r, 1000));
    } else {
      console.log(`Already exists: ${filename}`);
    }
  }
}

run().then(() => console.log('Done'));
