const fs = require('fs');
const path = require('path');

// Map of remaining broken Wikimedia upload URLs -> stable Special:FilePath thumbnail URLs
const replacements = {
  // Mercedes AMG ONE hero and table
  "https://upload.wikimedia.org/wikipedia/commons/0/07/Mercedes-AMG_Project_One%2C_IAA_2017.jpg":
    "https://commons.wikimedia.org/wiki/Special:FilePath/Mercedes-AMG_Project_One,_IAA_2017.jpg?width=1200",
  "https://upload.wikimedia.org/wikipedia/commons/2/25/Mercedes-AMG_One_IAA_2021_1X7A0065.jpg":
    "https://commons.wikimedia.org/wiki/Special:FilePath/Mercedes-AMG_One_IAA_2021_1X7A0065.jpg?width=800",
  "https://upload.wikimedia.org/wikipedia/commons/2/2c/Mercedes-Benz_300_SL_Gullwing_Coupe_W_198.jpg":
    "https://commons.wikimedia.org/wiki/Special:FilePath/Mercedes-Benz_300_SL_Gullwing_Coupe_(W_198).jpg?width=800",
  "https://upload.wikimedia.org/wikipedia/commons/8/82/Mercedes-AMG_ONE_%28C_298%29_IMG_6881.jpg":
    "https://commons.wikimedia.org/wiki/Special:FilePath/Mercedes-AMG_ONE_(C_298)_IMG_6881.jpg?width=1200",
  "https://upload.wikimedia.org/wikipedia/commons/f/fe/Mercedes-Benz_300_SL_Coupe_%28W_198%29_%E2%80%93_Frontansicht%2C_20._April_2014%2C_D%C3%BCsseldorf.jpg":
    "https://commons.wikimedia.org/wiki/Special:FilePath/Mercedes-Benz_300_SL_Coupe_(W_198)_%E2%80%93_Frontansicht,_20._April_2014,_D%C3%BCsseldorf.jpg?width=800",

  // Mercedes 300 SL (the one that 404'd on direct upload)
  "https://upload.wikimedia.org/wikipedia/commons/e/e0/Mercedes-Benz_300_SL_Gullwing_1955.jpg":
    "/cars/Mercedes-Benz_300_SL_Gullwing_1955.jpg",

  // Countach remaining
  "https://upload.wikimedia.org/wikipedia/commons/a/ac/Lamborghini_Countach_LPI_800-4_IMG_8034.jpg":
    "/cars/Lamborghini_Countach_LPI_800-4_IMG_8034.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/2/28/1988_Lamborghini_Countach_25th_Anniversary_Silver.jpg":
    "https://commons.wikimedia.org/wiki/Special:FilePath/1988_Lamborghini_Countach_25th_Anniversary_Silver.jpg?width=800",
  "https://upload.wikimedia.org/wikipedia/commons/6/65/Lamborghini_Countach_LPI_800-4_IMG_8009.jpg":
    "https://commons.wikimedia.org/wiki/Special:FilePath/Lamborghini_Countach_LPI_800-4_IMG_8009.jpg?width=800",
  "https://upload.wikimedia.org/wikipedia/commons/0/09/White_1990_Lamborghini_Countach_25th_Anniversary_SCD_24.jpg":
    "https://commons.wikimedia.org/wiki/Special:FilePath/White_1990_Lamborghini_Countach_25th_Anniversary_SCD_24.jpg?width=1200",
  "https://upload.wikimedia.org/wikipedia/commons/0/0e/1989_Lamborghini_Countach_25th_Anniversary_SCD_24.jpg":
    "/cars/1989_Lamborghini_Countach_25th_Anniversary_SCD_24.jpg",

  // Countach LPI 800-4 hero
  "https://upload.wikimedia.org/wikipedia/commons/2/2e/Lamborghini_Countach_LPI_800-4_IMG_8019.jpg":
    "/cars/Lamborghini_Countach_LPI_800-4_IMG_8019.jpg",

  // Ford GT
  "https://upload.wikimedia.org/wikipedia/commons/2/21/2017_Ford_GT_%2834386926365%29.jpg":
    "/cars/2017_Ford_GT__94302_.jpg",  // use the one that downloaded
  "https://upload.wikimedia.org/wikipedia/commons/6/65/1966_Ford_GT40_MK_II.jpg":
    "https://commons.wikimedia.org/wiki/Special:FilePath/1966_Ford_GT40_MK_II.jpg?width=800",
  "https://upload.wikimedia.org/wikipedia/commons/4/40/2017_Ford_GT_%2894302%29.jpg":
    "/cars/2017_Ford_GT__94302_.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/1/17/Ford_GT40_Mk_II_Le_Mans_1966_Tech_Info_noBG.jpg":
    "https://commons.wikimedia.org/wiki/Special:FilePath/Ford_GT40_Mk_II_Le_Mans_1966_Tech_Info_noBG.jpg?width=800",
  "https://upload.wikimedia.org/wikipedia/commons/1/1e/2017_Ford_GT_in_Liquid_Blue.jpg":
    "https://commons.wikimedia.org/wiki/Special:FilePath/2017_Ford_GT_rear.JPG?width=800",

  // Events (EventsView) - already updated but may still have old URLs
  "https://upload.wikimedia.org/wikipedia/commons/4/41/Goodwood_Festival_of_Speed_2010_%284803920677%29.jpg":
    "https://commons.wikimedia.org/wiki/Special:FilePath/Goodwood_Festival_of_Speed_2010_(4803920677).jpg?width=1200",
  "https://upload.wikimedia.org/wikipedia/commons/7/77/Concourse_d%27Elegance_%40_Heveningham_Hall_-_geograph.org.uk_-_5484556.jpg":
    "https://commons.wikimedia.org/wiki/Special:FilePath/Concourse_d'Elegance_@_Heveningham_Hall_-_geograph.org.uk_-_5484556.jpg?width=1200",
  "https://upload.wikimedia.org/wikipedia/commons/4/46/Le_Mans_-_The_Dunlop_Bridge_-_geograph.org.uk_-_1025066.jpg":
    "https://commons.wikimedia.org/wiki/Special:FilePath/Le_Mans_-_The_Dunlop_Bridge_-_geograph.org.uk_-_1025066.jpg?width=1200",
  "https://upload.wikimedia.org/wikipedia/commons/4/43/Pebble_Beach_Golf_Links_Hole_18.jpg":
    "https://commons.wikimedia.org/wiki/Special:FilePath/Pebble_Beach_Golf_Links_Hole_18.jpg?width=1200",
};

const viewsDir = path.join(__dirname, 'src', 'views');
const files = fs.readdirSync(viewsDir).filter(f => f.endsWith('.tsx'));

let totalReplaced = 0;
for (const file of files) {
  const fullPath = path.join(viewsDir, file);
  let content = fs.readFileSync(fullPath, 'utf8');
  let changed = false;

  for (const [oldUrl, newUrl] of Object.entries(replacements)) {
    if (content.includes(oldUrl)) {
      content = content.split(oldUrl).join(newUrl);
      console.log(`[${file}] Replaced: ...${oldUrl.slice(-40)} -> ${newUrl}`);
      totalReplaced++;
      changed = true;
    }
  }

  if (changed) {
    fs.writeFileSync(fullPath, content, 'utf8');
  }
}

console.log(`\nDone. Updated ${totalReplaced} URLs across ${files.length} files.`);
