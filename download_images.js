const fs = require('fs');
const path = require('path');
const https = require('https');

const viewsDir = path.join(__dirname, 'src', 'views');
const publicImagesDir = path.join(__dirname, 'public', 'images');

if (!fs.existsSync(publicImagesDir)) {
  fs.mkdirSync(publicImagesDir, { recursive: true });
}

// Helper to download a file with redirects and User-Agent
function downloadFile(url, dest) {
  return new Promise((resolve, reject) => {
    const options = {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko)'
      }
    };
    
    https.get(url, options, (res) => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        // Handle redirect
        resolve(downloadFile(res.headers.location, dest));
        return;
      }
      
      if (res.statusCode !== 200) {
        reject(new Error(`Failed to get '${url}' (${res.statusCode})`));
        return;
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

function processDirectory(dir) {
  const files = fs.readdirSync(dir);
  let totalReplaced = 0;
  
  return Promise.all(files.map(async file => {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      return processDirectory(fullPath);
    } else if (fullPath.endsWith('.tsx') || fullPath.endsWith('.ts')) {
      let content = fs.readFileSync(fullPath, 'utf8');
      const regex = /https:\/\/upload\.wikimedia\.org\/[^\s"'`]+(?:jpg|jpeg|png)/gi;
      let matches = [...content.matchAll(regex)];
      
      if (matches.length > 0) {
        for (const match of matches) {
          const url = match[0];
          // extract decoded filename, preserving safe characters
          let originalFilename = url.split('/').pop();
          let filename = decodeURIComponent(originalFilename).replace(/[^a-zA-Z0-9.\-_]/g, '_');
          
          const destPath = path.join(publicImagesDir, filename);
          
          if (!fs.existsSync(destPath)) {
            console.log(`Downloading: ${filename}`);
            try {
              await downloadFile(url, destPath);
              console.log(`Saved: ${filename}`);
            } catch (e) {
              console.error(`Error downloading ${url}:`, e.message);
              continue;
            }
          }
          
          const localPath = `/images/${filename}`;
          // Use split/join to replace all instances in case of multiple same URL on one line
          content = content.split(url).join(localPath);
          totalReplaced++;
        }
        
        fs.writeFileSync(fullPath, content, 'utf8');
        console.log(`Updated file: ${file}`);
      }
    }
  })).then(() => totalReplaced);
}

processDirectory(viewsDir)
  .then(total => console.log(`Finished processing. Replaced ${total} URLs in codebase.`))
  .catch(console.error);
