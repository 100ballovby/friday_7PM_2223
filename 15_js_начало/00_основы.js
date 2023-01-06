console.log("Hello, world!");  // вывести что-то в консоль

let r_int = Math.floor(Math.random() * 100);
// Math.floor() - округление в меньшую сторону
// Math.random() * max - сгенерировать число в диапазоне от 0 до max
console.log(r_int);

// условие
if (r_int % 2 == 0) {  // если остаток от деления числа на 2 равен 0
    console.log(r_int, "Четное!");
} else {
    console.log(r_int, "Нечетное!");
}

// математические операторы
console.log(2 + 3);
console.log(2 * 3);
console.log(12 / 4);
console.log(5 - 9);
console.log(2 ** 3);  // возведение в степень
console.log(4 % 3);  // остаток от деления

// циклы
for (let i = 0; i < 10; i++) {
    // i последовательно принимает значения от 0 до 9 включительно
    console.log("i = ", i);  // вывести значение i
}



