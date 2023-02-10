function change_mode() {
    let bulb = document.querySelector('#bulb');
    let body = document.querySelector('body');
    if (bulb.src.match("bulbon")) {  // если в src вставлен bulbon
        bulb.src = "pic_bulboff.gif";  // заменить картинку на bulboff
        body.className = "night";
    } else {  // иначе
        bulb.src = "pic_bulbon.gif";  // заменить картинку на bulbon
        body.className = "";
    }
}






