  const packageName = 'bynixscript';
  fetch(`https://api.npmjs.org/downloads/point/last-month/${packageName}`)
    .then(response => response.json())
    .then(data => {
      const downloadCount = data.downloads;
      document.getElementById('downloads').innerHTML = `<p id="text">download</p> <p id="count">${downloadCount}</p>`;
    })
    .catch(error => {
      console.error('Error fetching download data:', error);
      document.getElementById('downloads').textContent = 'Failed to fetch download data';
    });
    