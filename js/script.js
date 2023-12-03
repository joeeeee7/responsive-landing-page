'use strict';

//variables

let menuEl = document.querySelector('#menu-icon');
let navListEl = document.querySelector('.nav-list-top');

menuEl.addEventListener('click', ()=> {
    menuEl.classList.toggle('bx-x');
    navListEl.classList.toggle('open')
});

const sr = ScrollReveal({
    distance: '40px',
    duration: 2500,
    reset: true
})

sr.reveal('.container h6', {delay: 150, origin: 'left'})

sr.reveal('.container h3', {delay: 250, origin: 'right'})

sr.reveal('.container h1', {delay: 400, origin: 'top'})

sr.reveal('.container p', {delay: 550, origin: 'left'})

sr.reveal('.main-btn', {delay: 700, origin: 'bottom'})

sr.reveal('.social', {delay: 850, origin: 'right'})