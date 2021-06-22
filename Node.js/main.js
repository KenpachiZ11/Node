const http = require('http');
http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type' : 'text/plain'});
    res.end('Hello Node.js');
}).listen(5000, () => console.log('Server is run'))