let ru = "абвгдеёжзийклмнопрстуфхцчшщъыьэюя";
let eng = "abcdefghijklmnopqrstuvwxyz";

function caesar_cipher(phrase, shift) {
    let res = "";
    for (let i = 0; i < phrase.length; i++) {
        let place = ru.indexOf(phrase[i]);  // определяем место буквы в алфавите
        let new_place = place + shift;  // вычисляю новую позицию буквы

        if (ru.includes(phrase[i])) {  // если символ есть в алфавите
            res += ru[new_place];
        } else {
            res += phrase[i];
        }
    }
    return res;
}
