const userPrefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
const userPrefersLight = window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches;
const link = document.querySelector("link[rel~='icon']");
const menu = document.querySelector('.menu');
const nav = document.querySelector('.extended');
const header = document.querySelector('header');

function openMenu() {
    menu.classList.toggle('opened');
    nav.classList.toggle('opened');
    header.classList.toggle('opened');
}

function closeMenu() {
    menu.classList.remove('opened');
    nav.classList.remove('opened');
    header.classList.remove('opened');
}

function download(id) {
    let url;
    if (id == 1) {
        alert("This version of polarOS is currently in development, if you are a beta tester than please login to polariD and download it from there. The release(date) will also be announced on our social media.");
        url = "#";
    }
    if (id == 2) {
        alert("This is an old and early version of polarOS any harmful actions to your systems are not our responsibilities. Please press ok to download.");
        url = "https://dl.dropbox.com/s/7o8oi7glmts03dh/polarOS1011.iso?dl=0";
    }
    document.location.assign(url);
}

document.querySelector('.adsbygoogle').innerHTML = '';

document.addEventListener('contextmenu', function (e) { e.preventDefault(); }); document.onkeydown = function (e) {
    if (event.keyCode == 123) { return false; }
    if (e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0)) { return false; }
    if (e.ctrlKey && e.shiftKey && e.keyCode == 'C'.charCodeAt(0)) { return false; }
    if (e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0)) { return false; }
    if (e.ctrlKey && e.keyCode == 'U'.charCodeAt(0)) { return false; }
}