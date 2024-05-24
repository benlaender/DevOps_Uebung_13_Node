'use strict';

const express = require('express');

// Constants
const PORT = process.env.PORT || 8080;
const HOST = '0.0.0.0';

// App
const app = express();
app.get('/', (req, res) => {
  res.send('At least the docker deployment works. Azure does not like me, but Docker and Github like me ;D By Bodtlben\n I did it!');
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
