let array = [];

for (let i = 0; i < 10; i++) {
    array[i] = Math.floor(Math.random() * 100);
    document.write(array[i] + ' ');
}  // наполнение массива числами

let x = prompt("Введите число: ", "");
let index;
for (let i = 0; i < array.length; i++) {
    if (x == array[i]) {
        index = i;
    }
}

let p = document.querySelector('.answer');
p.innerText = index;


