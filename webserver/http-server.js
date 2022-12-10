/* Reto 1 - Node día 3
by Roxy Pérez */
const http = require('http');

const server = http.createServer(function (req, res) {
    console.log('Petición recibida del cliente');
    console.log('Url petición:', req.url);
    console.log('Método:', req.method);

    console.log('Content-type:', req.headers['content-type']);
    console.log('Content-length:', req.headers['content-length']);
    console.log('User-agent:', req.headers['user-agent']);

    if (req.url == '/bye') {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ "ok": true, "message": "Adiós!" }));
    } else {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ "ok": true, "message": "Recibido!" }));
    }
});

server.listen(8081);
