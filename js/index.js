// Your code goes here
const logo = document.querySelector('.logo-heading');
const copyright = document.querySelector('.footer p');
const h2 = document.querySelectorAll('h2');
const headerText = document.querySelector('.intro p');
const body = document.querySelector('body');
const a = document.querySelectorAll('.nav-link');

const imgAll = document.querySelectorAll('img');
const introImg = document.querySelector('.intro img');
const letsGoImg = document.querySelector('.content-section .img-content img');
const aaImg = document.querySelector('.img-fluid.rounded');
const pydImg = document.querySelector('.content-destination img');

body.addEventListener('wheel', () => {
    TweenLite.to(imgAll, 1, {rotation:360});
});

window.addEventListener('load', () => {
    TweenLite.to(logo, 0, {y:-100});
    TweenLite.to(logo, 1, {ease:Bounce.easeOut, y:0});
});

window.addEventListener('keydown', (e) => {
    var p = document.createElement('p'),
        a = document.createElement('a');
    p.textContent = `${e.key}`;
    a.textContent = 'This isnt Microsoft Word. Go back to the page';
    a.href = 'http://127.0.0.1:5500/index.html';

    while (body.firstChild) {
        body.removeChild(body.firstChild);
    }
    body.appendChild(p);
    p.style.margin = "50vh 35vw 0";
    body.appendChild(a);
    a.style.margin = "50vh 35vw";
})