const express = require("express");
const app = express();
const path = require('path');
app.use(express.static('public'));

app.get("/", async (req, res) => {
    res.send('<h3>Menu : <a href="/about"> about </a> | <a href="/home"> home </a> | <a href="/gallery"> gallery </a> | <a href="/video"> video </a></h3>');
});

app.get("/about", async (req, res) => {
    res.sendFile(path.resolve('./views/about.html'));
});

app.get("/home", async (req, res) => {
    res.send('<h3>Home</h3>');
});

app.get("/gallery", async (req, res) => {
    res.send('<h3>Gallery</h3>');
});

app.get("/video", async (req, res) => {
    res.send('<h3>Video</h3>');
});


app.listen('4000');