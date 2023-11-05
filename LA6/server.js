const http = require('http');

// Create an HTTP server
const server = http.createServer((req, res) => {
  // Set response headers
  res.setHeader('Content-Type', 'text/plain');
  res.setHeader('Access-Control-Allow-Origin', '*'); // Enable CORS for all origins

  if (req.method === 'GET' && req.url === '/hello') {
    // Handle a specific route
    res.statusCode = 200;
    res.end('Hello, World!This is a basic web service');
  } else {
    // Handle a default route
    res.statusCode = 404;
    res.end('Not Found');
  }
});

const port = 3000;

// Start the server on port 3000
server.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
