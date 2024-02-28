const http = require('http');

// Create a simple HTTP server
const server = http.createServer();//(req, res) => {
  // Emit the 'request' event when a request is received
  //server.emit('requestReceived', req);

  server.on('request',(req, res)=> {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end("Hello");
  })

  
  //res.end('Hello, World!\n');
//});

// Attach an event handler to the 'requestReceived' event
//server.on('requestReceived', (req) => {
  //console.log(`Request received for URL: ${req.url}`);
//});

// Start the server on port 3000
server.listen(3000, () => {
  console.log('Server listening on port 3000');
});
