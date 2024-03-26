var http = require('http');
var HOST = "localhost";
var PORT = 3000
const server = http.createServer((req, res) => {
    if (req.method === 'GET') res.end("Hello, Galvanize!")
})
server.listen(PORT, HOST, () => console.log(`Server is running on ${HOST}:${PORT}`))