"use strict";

const box = document.getElementById('box'),
      btns = document.getElementsByTagName('button'),
      circles = document.getElementsByClassName('circle'),
      hearts = document.querySelectorAll('.heart'),
      oneHeart = document.querySelector('heart'),
      wrapper = document.querySelector('.wrapper');

// box.style.backgroundColor = 'blue';
// box.style.width = '500px';

box.style.cssText = 'background-color: blue; width: 500px';

btns[1].style.borderRadius = '100%';
circles[0].style.backgroundColor = 'red';

// for (let i = 0; i < hearts.length; i++) {
//     hearts[i].style.backgroundColor = 'blue';    
// }

hearts.forEach(heart => {
    heart.style.backgroundColor = 'gray';
});

const div = document.createElement('div');
// const text = document.createTextNode('Text');

div.classList.add('black');

// document.body.append(div);
wrapper.append(div);
// wrapper.appendChild(div); //old style

// wrapper.prepend(div);

// circles[0].before(div);
// wrapper.insertBefore(div, circles[0]); //old style
// circles[0].after(div);

// hearts[0].remove();
// wrapper.removeChild(hearts[0]); //old style
// hearts[0].replaceWith(circles[0]);
// wrapper.replaceChild(circles[0], hearts[0]); //old style

// div.innerHTML = "<h1>Hello</h1>";
// div.textContent = 'Hello';
// div.insertAdjacentHTML('afterend', '<h2>Hello</h2>');
