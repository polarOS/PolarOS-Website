const express = require('express');
const app = express();
require('dotenv').config();

app.set('view engine', 'ejs');
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.render('index');
});

app.get('/versions', (req, res) => {
    res.render('versions');
});

app.get('/about', (req, res) => {
    res.render('about');
});

app.get('/docs', (req, res) => {
    res.render('documentation');
});

app.get('/documentation', (req, res) => {
    res.render('documentation');
});

app.get('/beta', (req, res) => {
    res.render('beta');
});

app.get('/ad-detect', (req, res) => {
    res.render('ad-detect');
});

app.get('/wallpapers', (req, res) => {
    res.render('wallpapers');
});

app.get('/system-requirements', (req, res) => {
    res.render('sys-requirements');
});

app.get('/googlefb07f7f700560473', () => {
    res.send('google-site-verification: googlefb07f7f700560473');
});

app.get('/github', (req, res) => {
    res.redirect('https://github.com/polarOS');
});

app.get('/discord', (req, res) => {
    res.redirect('https://discord.gg/SjCH9rYQWV');
});

app.get('/telegram', (req, res) => {
    res.redirect('https://t.me/getpolaros');
});

app.get('/twitter', (req, res) => {
    res.redirect('https://twitter.com/getpolaros');
});

app.get('*', (req, res) => {
    res.render('404');
});

app.listen(process.env.PORT, () => console.log(`Listening on http://localhost:${process.env.PORT}`));