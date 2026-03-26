const fs = require('fs');
const path = require('path');
const https = require('https');

const viewsDir = path.join(__dirname, 'src', 'views');
const publicImagesDir = path.join(__dirname, 'public', 'cars');

if (!fs.existsSync(publicImagesDir)) {
  fs.mkdirSync(publicImagesDir, { recursive: true });
}

function downloadFile(url, dest) {
  return new Promise((resolve, reject) => {
    const options = {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) width/1920'
      }
    };
    https.get(url, options, (res) => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        return resolve(downloadFile(res.headers.location, dest));
      }
      if (res.statusCode !== 200) {
        return reject(new Error(`Failed to get '${url}' (${res.statusCode})`));
      }
      const file = fs.createWriteStream(dest);
      res.pipe(file);
      file.on('finish', () => {
        file.close(resolve);
      });
      file.on('error', (err) => {
        fs.unlink(dest, () => reject(err));
      });
    }).on('error', (err) => {
      reject(err);
    });
  });
}

async function processDirectory(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      await processDirectory(fullPath);
    } else if (fullPath.endsWith('.tsx')) {
      let content = fs.readFileSync(fullPath, 'utf8');
      const regex = /https:\/\/upload\.wikimedia\.org\/wikipedia\/commons\/[^\s"'`]+(?:jpg|jpeg|png)/gi;
      const matches = content.match(regex);
      
      if (matches && matches.length > 0) {
        const uniqueUrls = [...new Set(matches)];
        let fileChanged = false;
        
        for (const url of uniqueUrls) {
          let originalFilename = url.split('/').pop();
          let filename = decodeURIComponent(originalFilename).replace(/[^a-zA-Z0-9.\-_]/g, '_');
          
          const destPath = path.join(publicImagesDir, filename);
          
          if (!fs.existsSync(destPath)) {
            console.log(`Downloading: ${filename}`);
            try {
              await downloadFile(url, destPath);
              console.log(`Saved: ${filename}`);
            } catch (e) {
              console.error(`Error downloading ${filename}:`, e.message);
              continue;
            }
          } else {
             console.log(`Already exists: ${filename}`);
          }
          
          const localUrl = `/cars/${filename}`;
          // escape string for regex
          const escapedUrl = url.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
          content = content.replace(new RegExp(escapedUrl, 'g'), localUrl);
          fileChanged = true;
        }
        
        if (fileChanged) {
          fs.writeFileSync(fullPath, content, 'utf8');
          console.log(`Updated file: ${file}`);
        }
      }
    }
  }
}

processDirectory(viewsDir)
  .then(() => console.log('Finished processing URLs.'))
  .catch(console.error);
