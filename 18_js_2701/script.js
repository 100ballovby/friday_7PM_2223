let array = [];

for (let i = 0; i < 10; i++) {
	array[i] = Math.floor(Math.random() * 100);
	document.write(array[i] + ' ');
}  // наполнение массива числами


let sum;

for (let i = 0; i < array.length; i++) {
	sum += array[i];
}

let mult = 1;

for (let i = 0; i < array.length; i++) {
	mult *= array[i];
}

let temp;  // временная переменная для обмена элементов массива 
// сортировка пузырьком 
for (let i = 0; i < array.length - 1; i++) {  // -1 потому что последнее число в массиве всегда отсортировано правильно
	for (let j = 0; j < array.length - i - 1; j++) {
		if (array[j] > array[j + 1]) {  // если текущий элемент больше следующего элемента 
			temp = array[j];  // временноо сохраняю текущий элемент 
			array[j] = array[j + 1];  // на место текущего элемента ставим следующий 
			array[j + 1] = temp;  // на место следующего ставим тот, что стоял перед ним 
		}
	}

}

let h1 = document.createElement('h1');  // создадим заголовок на странице 
h1.innerText = "Отсортированный массив: " + array;  

let p1 = document.createElement('p');
let p2 = document.createElement('p');
let p3 = document.createElement('p');
p1.innerText = "Сумма чисел: " + sum;
p2.innerText = "Произведение чисел: " + mult;
p3.innerText = "Среднее арифметическое: " + sum / array.length;

let body = document.querySelector('body');
body.appendChild(p1);
body.appendChild(p2);
body.appendChild(p3);

body.appendChild(h1);


