const path = require('path');

const express = require('express');
const app = express();

const hostname = '127.0.0.1';
const port = 3000;

app.use("/", express.static(path.join(__dirname, '/react/build')));

app.get('/fight', (req, res) => {
    res.redirect(301, '/index.html');
})

app.get('/', (req, res) => {
    res.redirect(301, '/build/index.html');
})

app.use(function (req, res) {
    console.log(`et c'est le 404 : " ${req.url}`);

    res.statusCode = 404;
    res.setHeader('Content-Type', 'text/html');

    res.end("<html lang='fr'><head><title>404</title></head><body><h1>Et c'est le 404.</h1><p>Ressource non trouvée</p></body></html>");
});

app.listen(port, hostname);
console.log(`Server running at http://${hostname}:${port}/`);
