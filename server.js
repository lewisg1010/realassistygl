const express = require('express');
const next = require('next');
const fetch = require('node-fetch');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

const server = express();

server.post('/api/search', async (req, res) => {
  try {
    const response = await fetch('https://www.yougotlistings.com/api/rentals/search.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: 'key=GdFSoyKUT52NLfvpw06ZIPlYbQqEzOga8i1h3mC9'
    });

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const result = await response.text();
    res.send(result);
  } catch (error) {
    console.error('Error:', error);
    res.status(500).send('Error fetching data');
  }
});

app.prepare().then(() => {
  server.all('*', (req, res) => handle(req, res));
  server.listen(3000, (err) => {
    if (err) throw err;
    console.log('> Ready on http://localhost:3000');
  });
});
