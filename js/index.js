// Your code goes here
const logo = document.querySelector('.logo-heading');
const copyright = document.querySelector('.footer p');
const h2 = document.querySelectorAll('h2');
const headerp = document.querySelector('.intro p');
const body = document.querySelector('body');
const a = document.querySelectorAll('.nav-link');
const destination = document.querySelector('.destination');
const destinationBtn = document.querySelector('.destination .btn');

const imgAll = document.querySelectorAll('img');
const introImg = document.querySelector('.intro img');
const lgImg = document.querySelector('.content-section .img-content img');
const aaImg = document.querySelector('.img-fluid.rounded');
const pydImg = document.querySelector('.content-destination img');

body.addEventListener('wheel', () => {
    TweenLite.to(imgAll, 1, {rotation:360, ease:Power2.easeOut});
});

body.addEventListener('wheel', () => {
    TweenLite.to(logo, 1, {rotation: 360, ease:Power2.easeOut});
})

window.addEventListener('load', () => {
    TweenLite.to(logo, 0, {y:-100});
    TweenLite.to(logo, 1, {ease:Bounce.easeOut, y:0});
    a.forEach((e) => e.style = 'border-bottom: 2px solid transparent;')
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



introImg.addEventListener('dblclick', (e) => {
    TweenLite.to(e.target, 2, {rotationY: 360, ease:Power2.easeOut});
})

lgImg.addEventListener('dblclick', (e) => {
    TweenLite.to(e.target, 2, {rotationY: 360, ease:Power2.easeOut});
})

aaImg.addEventListener('dblclick', (e) => {
    TweenLite.to(e.target, 2, {rotationY: 360, ease:Power2.easeOut});
})

pydImg.addEventListener('dblclick', (e) => {
    TweenLite.to(e.target, 2, {rotationY: 360, ease:Power2.easeOut});
})

window.addEventListener('resize', () => {
    h2.forEach((element) => element.style.color = 'red');
})

introImg.addEventListener('mousedown', () => {
    introImg.setAttribute('style', 'opacity: 0.8;');
    introImg.style.filter = 'grayscale(100%)'
});

introImg.addEventListener('mouseup', () => {
    introImg.setAttribute('style', 'opacity: none;');
});

lgImg.addEventListener('mousedown', () => {
    lgImg.setAttribute('style', 'opacity: 0.8;');
    lgImg.style.filter = 'grayscale(100%)'
});

lgImg.addEventListener('mouseup', () => {
    lgImg.setAttribute('style', 'opacity: none;');
});

aaImg.addEventListener('mousedown', () => {
    aaImg.setAttribute('style', 'opacity: 0.8;');
    aaImg.style.filter = 'grayscale(100%)'
});

aaImg.addEventListener('mouseup', () => {
    aaImg.setAttribute('style', 'opacity: none;');
});

pydImg.addEventListener('mousedown', () => {
    pydImg.setAttribute('style', 'opacity: 0.8;');
    pydImg.style.filter = 'grayscale(100%)'
});

pydImg.addEventListener('mouseup', () => {
    pydImg.setAttribute('style', 'opacity: none;');
});

headerp.addEventListener('copy', () => {
    console.log('hello');
    headerp.style = 'font-weight: 800; color: purple';
})

a.forEach((element) => {
    element.addEventListener('mouseover', (e) => e.target.style = 'border-bottom: 2px solid black;');
    element.addEventListener('mouseleave', (e) => e.target.style = 'border-bottom: 2px solid transparent;');
})

a.forEach((element) => {
    element.addEventListener("click", (e) => e.preventDefault());
})

destination.addEventListener('mousedown', () => {
    console.log("Destination");
});

destinationBtn.addEventListener('mousedown', (e) => {
    e.stopPropagation();
    console.log("Button");
});
