/**
 * Install Express and in a file named 6-http_express.js, create a small
 * HTTP server using Express module:
 * It should be assigned to the variable app and this one must be exported
 * HTTP server should listen on port 1245
 * Displays Hello Holberton School! in the page body for the endpoint /
 */

const express = require('express');

// express instance
const app = express();

const PORT = 1245;

app.listen(PORT, () => {
  console.log('serving at port 1245');
});

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

module.exports = app;
