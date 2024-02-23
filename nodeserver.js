const http = require('http')

const server = http.createServer(function(req,res){
    if (req.url === "/"){
        res.end("Welcome to my first node server");
    }

    if (req.url === "/name"){
        res.end("Hi there this is my another page");
    }

    res.end(`
        <h1>Oh no</h1>
        <a href="/">My home</a>`
    )
})
server.listen(5100)