const https = require('https');

function get(url) {
  return new Promise((resolve, reject) => {
    https.get(url, { headers: { 'User-Agent': 'SearchBot/1.0' } }, (res) => {
      const chunks = [];
      res.on('data', d => chunks.push(d));
      res.on('end', () => resolve(Buffer.concat(chunks).toString()));
    }).on('error', reject);
  });
}

async function search(q) {
  const url = `https://commons.wikimedia.org/w/api.php?action=query&list=search&srsearch=${encodeURIComponent(q)}&srnamespace=6&srlimit=5&format=json`;
  const r = await get(url);
  const json = JSON.parse(r);
  return json.query.search.map(s => s.title);
}

async function main() {
  const queries = [
    'Mercedes AMG ONE C 298 IMG 6881',
    'Mercedes AMG ONE IAA 2021',
    'Mercedes AMG Project One IAA 2017',
    'Mercedes 300 SL Gullwing Coupe W 198',
    'Mercedes 300 SL Coupe Frontansicht Dusseldorf',
  ];
  for (const q of queries) {
    try {
      const results = await search(q);
      console.log(`\nQuery: "${q}"`);
      results.forEach(r => console.log('  ->', r));
    } catch(e) {
      console.log(`Error: ${e.message}`);
    }
  }
}

main();
