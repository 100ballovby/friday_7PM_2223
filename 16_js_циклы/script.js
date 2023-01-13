let arr = new Array();  // создание массива
let arr1 = [];  // создание массива

let flag = 1;
while (flag != 0) {  // пока не ввели 0, делать:
    flag = prompt('Введите число: ');  // запрашивать число
    arr.push(flag);  // записывать число в массив
}

let body = document.querySelector('body');  // находим на странице body
for (let i = 0; i < arr.length; i += 1) {  // повторить <длина массива> раз
    // перебор массива (перебор элементов массива)
    let div = document.createElement('div');  // создать див
    div.innerHTML = 'div №' + i;  // пишем текст внутри дива
    // div.style.color = '#d5a3ee';  <- задать каждому диву розовый цвет текста
    div.classList.add('colored');  // добавить к списку классов дива новый класс colored
    body.appendChild(div);  // добавить div в body

    if (i % 2 == 0) {
        div.classList.add('even');
    }
}

let link = prompt("Введи ссылку: ");
let a = document.createElement("a");
a.href = link;  // добавить в href для ссылки значение переменной link
a.innerHTML = "Я ссылка";  // текст ссылки
a.target = "_blank";  // установить для тега a значение атрибута target = _blank
body.appendChild(a);

let img_link = prompt("Ссылка на картинку: ");
let img = document.createElement("img");  // создать тег изображения
img.src = img_link;  // в атрибут src поставить ссылку на картинку
body.appendChild(img);  // картинку добавить в body



