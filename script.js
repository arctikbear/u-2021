const btn = document.querySelector('.btn');
let timerId,
    i = 0;

// btn.addEventListener('click', () => {
//     // const timerId = setTimeout(logger, 2000);
//     timerId = setInterval(logger, 500);
// });

// const timerId = setTimeout(function(text) {
//     console.log(text);
// }, 2000, 'Hello');

// function logger() {
//     if (i === 3) {
//         clearInterval(timerId);
//     }
//     console.log('text');
//     i++;
// }

// рекурсия для того, чтобы setTimeout ждал указанное время
// после выполнения всех операций внутри

// let id = setTimeout(function log(){
//     console.log('Hello');
//     id = setTimeout(log, 500);
// }, 500);

function myAnimation() {
    const element = document.querySelector('.box');
    let pos = 0;
    
    const id = setInterval(frame, 10);

    function frame() {
        if (pos == 300) {
            clearInterval(id);
        } else {
            pos++;
            element.style.top = pos + "px";
            element.style.left = pos + "px";
        }
    }
}

btn.addEventListener('click', myAnimation);
