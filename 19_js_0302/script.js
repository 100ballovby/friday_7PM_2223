// функция - это самостоятельный кусочек кода,
// который работает только в том случае, если его вызывают по имени

function change_background(color) {  // функция получает цвет в качестве параметра
    let body = document.querySelector('body');
    body.style.background = color;
}


