let n = prompt('Введите n: ');
let m = prompt('Введите m: ');

let matrix = [];
let table = document.querySelector('.matrix');
for (let i = 0; i < n; i++) {
    let tr = document.createElement('tr');  // создает строки таблицы
    matrix[i] = new Array();  // создаю подмассив в матрице
    for (let j = 0; j < m; j++) {
        let td = document.createElement('td');  // создает ячейки таблицы
        let r_n = Math.floor(Math.random() * 100);  // генерирую случайное число
        matrix[i][j] = r_n;  // записываю число в матрицу
        td.innerText = matrix[i][j];  // этот элемент матрицы отображаю на странице
        tr.appendChild(td);  // добавляю ячейку в строку таблицы
    }
    table.appendChild(tr);
}

// найдем наибольший элемент матрицы и выведем на страницу его расположение
let p = document.querySelector('.ans');
let max = 0;  // наибольший элемент матрицы
let x, y;
for (let i = 0; i < n; i++) {  // этот цикл просматривает строки матрицы
    for (let j = 0; j < m; j++) {  // этот цикл просматривает элементы
        if (matrix[i][j] > max) {   // если какое-то число в матрице больше максимального
            max = matrix[i][j];  // сохраняю наибольшее число в max
            x = i;  // в x сохраняю строку марицы, в которой нашли самое большое
            y = j;  // в y индекс элемента
        }
    }
}
p.innerText = "Самое большое число - " + max + " Индексы: " + x + " " + y;


