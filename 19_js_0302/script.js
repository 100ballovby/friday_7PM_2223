// функция - это самостоятельный кусочек кода,
// который работает только в том случае, если его вызывают по имени

function change_background(color) {  // функция получает цвет в качестве параметра
    let body = document.querySelector('body');
    let bg = window.getComputedStyle(body).backgroundColor;
    // в переменной сохраняю цвет, который применен к фону страницы
    if (bg == 'rgba(0, 0, 0, 0)') {  // если цвет фона страницы белый
        body.style.background = color;  // поменять его на тот цвет, который передали функции
    } else {  // иначе (если цвет фона НЕ белый)
        body.style.background = 'rgba(0, 0, 0, 0)';  // поменять его на белый
    }

}

function change_font(id) {  // функция получается id в качестве параметра
    let element = document.getElementById(id);
    element.classList.add('changed');
}


