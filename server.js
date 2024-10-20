const express = require("express");
const app = express();
const path = require('path');
app.use(express.static('public'));

app.get("/", async (req, res) => {
    res.sendFile(path.resolve('./views/index.html'));
});

app.get("/about", async (req, res) => {
    res.sendFile(path.resolve('./views/about.html'));
});

app.get("/gallery", async (req, res) => {
    res.sendFile(path.resolve('./views/gallery.html'));
});

app.get("/video", async (req, res) => {
    res.sendFile(path.resolve('./views/video.html'));
});


app.listen('4000');