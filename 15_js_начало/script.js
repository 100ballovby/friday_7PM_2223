let question = prompt("Введите что-то: ", "");
// окошко с вопросом, можно что-то вписать
document.write(question);  // пишет на HTML-странице, к которой подключен файл
let msg = alert("Я вывожу сообщения!");
// вывод сообщения на страницу HTML

let array = ["Погулять собаку", "Покормить кота", "Поиграть в плойку",
    "Покушать чепсы с кепчуком", "Написать Наташе, что она молодец"];  // массив
let spisok = document.querySelector('.list');  // найти на странице элемент с классом list
// функция length измеряет длину (количество элементов массива)
for (let i = 0; i < array.length; i++) {  // повторить <длина_массива> раз
    let li = document.createElement('li');  // создать элемент li
    li.innerHTML = array[i];  // записать элемент массива в li
    spisok.appendChild(li);  // li добавить в списокq
}

let body = document.querySelector('body');  // находим элемент body
for (let i = 0; i < 10; i++) {
    let div = document.createElement('div');
    let p = document.createElement('p');
    p.innerHTML = "Я параграф " + (i + 1);
    div.appendChild(p);
    body.appendChild(div);
}

