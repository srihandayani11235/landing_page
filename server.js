const express = require("express");
const app = express();


app.get("/", async (req, res) => {
    res.send('<h3>Hallo</h3>');
});

app.get("/about", async (req, res) => {
    res.send('<h3>About</h3>');
});

app.get("/home", async (req, res) => {
    res.send('<h3>Home</h3>');
});

app.get("/gallery", async (req, res) => {
    res.send('<h3>Gallery</h3>');
});


app.listen('4000');