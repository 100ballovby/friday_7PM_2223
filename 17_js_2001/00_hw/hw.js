let images = [
    "https://images.unsplash.com/photo-1661956601031-4cf09efadfce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2352&q=80",
    "https://images.unsplash.com/photo-1661956602944-249bcd04b63f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
    "https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE4fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=900&q=60",
    "https://images.unsplash.com/photo-1670969548019-18ec1aae8abe?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
    "https://images.unsplash.com/photo-1671296368370-a24a6f9148cf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2408&q=80",
    "https://images.unsplash.com/photo-1671371129996-a65e1f24267e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
    "https://images.unsplash.com/photo-1650807271957-dd08abe41dc9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
    "https://images.unsplash.com/photo-1670707669249-14105631c597?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2532&q=80",
    "https://images.unsplash.com/photo-1670787196366-11b4a82501e4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2478&q=80",
]


let gallery = document.querySelector('.images-gallery');  // нахожу на странице место, куда буду генерировать картинки
for (let i = 0; i < images.length; i++) {
    let li = document.createElement('li');
    let img = document.createElement('img');
    let div = document.createElement('div');
    let span = document.createElement('span');

    div.classList.add('overlay');  // добавляю для дива класс overlay
    span.innerHTML = "Image " + i + " title";

    img.src = images[i];  // в атрибут src для картинки мы вставляем ссылку с индексом i

    li.appendChild(img);  // добавляю картинку в li
    div.appendChild(span);
    li.appendChild(div);
    gallery.appendChild(li);
}


