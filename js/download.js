const https = require('https');

function getDownloads(packageName, time) {
  const url = `https://api.npmjs.org/downloads/point/last-${time}/${packageName}`;
  
  https.get(url, (res) => {
    let data = '';
    
    res.on('data', (chunk) => {
      data += chunk;
    });
    
    res.on('end', () => {
      const jsonData = JSON.parse(data);
      console.log(`Package ${packageName} downloaded ${jsonData.downloads} times.`);
    });
  }).on('error', (e) => {
    console.error(`Error: ${e.message}`);
  });
}

module.exports = { https, getDownloads };
