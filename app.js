const http = require('http')

/*const server = http.createServer((req,res) => {
  console.log("Server is started")
  res.end("Hello")
})*/

const server = http.createServer();

server.on('request',(req,res) => {
  res.end("hello world")
})

server.listen(5000);