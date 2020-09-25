const express = require('express');
const getSecureRandomsAwait = require('./01_test');

const app = express();
const port = process.env.port || 4000;

app.listen(port);
app.get('/api/securerandom', async (req, res) => {
  res.send(await getSecureRandomsAwait());
});

console.log('Server running on ' + port);
