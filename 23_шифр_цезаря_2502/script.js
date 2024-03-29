let ru = "абвгдеёжзийклмнопрстуфхцчшщъыьэюя";
let eng = "abcdefghijklmnopqrstuvwxyz";

function caesar_cipher() {
    // значения достанем из полей формы
    let form = document.getElementById('');
    let formData = new FormData(form);
    let phrase = formData.get('phrase');
    let shift = formData.get('shift');

    let res = "";
    for (let i = 0; i < phrase.length; i++) {
        let place = ru.indexOf(phrase[i]);  // определяем место буквы в алфавит
        let new_place = place + shift;

        if (new_place > ru.length) {  // если вышли за пределы алфавита
            new_place -= ru.length;  // отнять длину алфавита от нового индекса буквы
        }

        if (ru.includes(phrase[i])) {  // если символ есть в алфавите
            res += ru[new_place];
        } else {
            res += phrase[i];
        }
    }
    let p = document.getElementById('res');
    p.innerText = res;
}

