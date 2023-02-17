function btnPress() {
    let txt1, txt2;
    // чтобы обратиться к форме, пишем document, а затем ИМЯ формы
    txt1 = document.Test.btn1.value;  // записываю в переменную текст с КНОПКИ btn1
    txt2 = document.Test.btn1.name; // записываю в переменную NAME кнопки
    let div = document.querySelector('.ex1');
    div.innerHTML = "<hr>" + "Вы нажали кнопку " + txt1 + " с именем: " + txt2 + "<hr>";
}

function info() {
    let sI = document.Test.list1.selectedIndex;  // сохраняю индекс выбранного элемента в селекте
    let txt;
    txt = "Предложено " + document.Test.list1.length + " напитков." +
        "\nВыбран " + document.Test.list1.options[sI].text +
        " индекс элемента: " + document.Test.list1.options[sI].defaultSelected;

    alert(txt);
}
