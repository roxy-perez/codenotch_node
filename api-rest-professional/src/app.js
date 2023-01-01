const express = require('express');
const cors = require('cors');
const proRoutes = require('./routes/professional.router');
const errorHandling = require('./error/errorHandling');

const app = express();

app.set('port', process.env.PORT || 3000)
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(proRoutes);
app.use((req, res, next) => {
    res.status(404).json({
        error: true,
        code: 404,
        message: "Endpoint no encontrado."
    });
});
app.use(errorHandling);

module.exports = app;
