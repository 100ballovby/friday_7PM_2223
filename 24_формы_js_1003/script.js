function serialize_form(form) {
    console.log(form.elements);
}

function form_submit(event) {
    event.preventDefault();
    serialize_form(form);
}


const form = document.getElementById('mars-one');
form.addEventListener('submit', form_submit);



