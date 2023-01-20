let n = prompt('Введите n: ');
let m = prompt('Введите m: ');

let table = document.querySelector('.matrix');
for (let i = 0; i < n; i++) {
    let tr = document.createElement('tr');  // создает строки таблицы
    for (let j = 0; j < m; j++) {
        let td = document.createElement('td');  // создает ячейки таблицы
        tr.appendChild(td);  // добавляю ячейку в строку таблицы
    }
    table.appendChild(tr);
}


