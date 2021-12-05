'use strict';

document.addEventListener('DOMContentLoaded', () => {
    const movieDB = {
        movies: [
            "Логан",
            "Лига справедливости",
            "Ла-ла лэнд",
            "Одержимость",
            "Скотт Пилигрим против..."
        ]
    };
    
    const adv = document.querySelectorAll('.promo__adv img'),
          poster = document.querySelector('.promo__bg'),
          genre = poster.querySelector('.promo__genre'),
          movieList = document.querySelector('.promo__interactive-list'),
          addForm = document.querySelector('form.add'),
          addInput = addForm.querySelector('.adding__input'),
          checkbox = addForm.querySelector('[type="checkbox"]'),
          button = document.querySelector('button');
        
    const createMovieList = (movies, parent) => {
        parent.innerHTML = '';
        sortArr(movies);
        
        movies.forEach( (movie, i) => {
            parent.innerHTML +=
            `<li class="promo__interactive-item">${i + 1} ${movie}
                <div class="delete"></div>
            </li>`;
        });

        document.querySelectorAll('.delete').forEach((btn, i) => {
            btn.addEventListener('click', () => {
                btn.parentElement.remove();
                movieDB.movies.splice(i, 1);
                createMovieList(movies, parent);
            });
        });
    };

    const deleteAdv = (arr) => {
        arr.forEach(img => {
            img.remove();
        });
    };

    const makeChanges = () => {
        genre.textContent = 'Драма';
        poster.style.backgroundImage = 'url("img/bg.jpg")';
    };

    const sortArr = (arr) => {
        arr.sort();
    };

    addForm.addEventListener('submit', (event) => {
        event.preventDefault();
        
        let newFilm = addInput.value;
        const favourite = checkbox.checked;

        if (newFilm) {
            if (newFilm.length > 21) {
                newFilm = newFilm.slice(0, 21) + '...';
            }

            if (favourite) {
                console.log('movie is favourite');
            }
            movieDB.movies.push(newFilm);
            sortArr(movieDB.movies);
            createMovieList(movieDB.movies, movieList);            
        }

        // addForm.reset(); есть более продвинутая запись:
        event.target.reset();
    });

    deleteAdv(adv);
    sortArr(movieDB.movies);
    makeChanges();
    createMovieList(movieDB.movies, movieList);

});
