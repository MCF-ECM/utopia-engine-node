const path = require('path');

const express = require('express');
const app = express();

const hostname = '127.0.0.1';
const port = 3000;

const urls = ['/', '/search', '/fight'];

const zones = require('./resources/zones.json');
const objects = require('./resources/objects.json');
const monsters = require('./resources/monsters.json');

app.use('/', express.static(path.join(__dirname, '/react/build/')));

urls.map(url => app.get(url,  (req, res) => res.redirect(301, '/index.html')));

app.get('/api/zones', (req, res) => {
    res.send(zones);
});

app.get('/api/zone', (req, res) => {
    const id = req.query.id;

    res.send(zones[id]);
});

app.get('/api/monster', (req, res) => {
    const id = req.query.id;
    const level = req.query.level - 1;

    res.send({"monster": monsters[id][level]});
});

app.get('/api/object', (req, res) => {
    const id = req.query.id;
    const type = req.query.type;

    res.send({"object": objects[id][type]});
});


app.get('/api/objects', (req, res) => {
    res.send(objects);
});

app.listen(port, hostname);
console.log(`Server running at http://${hostname}:${port}/`);
