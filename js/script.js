'use strict';

const box = document.querySelector('.box'),
      btn = document.querySelector('button');

const width = box.clientWidth;
const heigth = box.clientHeight;

const offsetWidth = box.offsetWidth;
const offsetHeigth = box.offsetHeight;

btn.addEventListener('click', () => {
    // box.style.height = box.scrollHeight + 'px';
    console.log(box.scrollTop / box.scrollHeight * 100);
});

console.log(box.getBoundingClientRect());

const style = window.getComputedStyle(box);
