function serialize_form(form) {
    const { elements } = form;  // сохраняем элементы формы в виде объекта
    const data = Array.from(elements).filter((item) => !!item.name).map((element) => {
        const { name, value } = element;
        return { name, value };
    });

    console.log(data);
}

function serialize(form) {
    return new FormData(form);
}

async function form_submit(event) {
    event.preventDefault();
    const data = serialize(event.target);  // сохраним массив с данными из формы

    toggleLoader();

    const { status, error } = await sendData(data);

    toggleLoader();

    if (status === 200) {
        onSuccess(event.target);
    } else {
        onError(error);
    }
}

async function sendData(data) {
    return await fetch('/api/apply/', {
        'method': 'POST',
        'headers': {'Content-Type': 'multipart/form-data'},
        'body': data,
    })
}  // функция отправки данных на "сервер"


function toggleLoader() {
    const loader = document.getElementById('loader');
    loader.classList.toggle('hidden');
}


function onSuccess(form) {
    alert('Submitted Successfully');
    form.classList.toggle('hidden');
}


function onError(error) {
    alert(error.message);
}

const form = document.getElementById('mars-one');
form.addEventListener('submit', form_submit);



