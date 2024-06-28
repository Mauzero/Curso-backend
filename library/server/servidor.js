const http = require('http');

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-type': 'text/plain' });
    res.end('Hello, this is the response from your server!');
});

const PORT = 3000;

server.listen(PORT, () => {
    console.log('Listening on port', PORT);
});
