function btnPress() {
    let txt1, txt2;
    // чтобы обратиться к форме, пишем document, а затем ИМЯ формы
    txt1 = document.Test.btn1.value;  // записываю в переменную текст с КНОПКИ btn1
    txt2 = document.Test.btn1.name; // записываю в переменную NAME кнопки
    let div = document.querySelector('.ex1');
    div.innerHTML = "<hr>" + "Вы нажали кнопку " + txt1 + " с именем: " + txt2 + "<hr>";
}