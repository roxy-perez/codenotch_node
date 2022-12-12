/* Reto 2 - Node día 3
by Roxy Pérez */
const express = require('express');
const app = express();

app.get('/', (req, res) => {

    res.set('Content-Type', 'application/json');
    res.status(200).send({ ok: true, message: "Recibido!" });
    console.log('Petición recibida del cliente');
    console.log('URL pedida:', req.url);
    console.log('Método:', req.method);
    console.log('Header User-agent:', req.header("user-agent")); 
});

app.get("/bye", (req, res) => {
    res.set('Content-Type', 'application/json');
    res.status(200).send({ ok: true, message: "Adiós!" });
});

app.listen(3000);
