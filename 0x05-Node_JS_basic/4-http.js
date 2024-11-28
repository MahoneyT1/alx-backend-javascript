/**
 * In a file named 4-http.js, create a small HTTP server using the http module:
 * It should be assigned to the variable app and this one must be exported
 * HTTP server should listen on port 1245
 * Displays Hello Holberton School! in the page body for any endpoint as plain text
 */

const { createServer } = require('http');

const HOST = 'localhost';

const PORT = 1245;

const app = createServer((req, res) => {
  // check if the url is the root of the endpoint
  if (req.url === '/') {
    res.statusCode = 200;
    res.setHeader('Application-Type', 'text/plain');
    res.end('Hello Holberton School!');
  }

  if (req.url === '/test') {
    res.statusCode = 200;
    res.setHeader('Application-Type', 'text/plain');
    res.end('Hello Holberton School!');
  }
});

app.listen(PORT, HOST, () => {
  console.log('Server is serving');
});
