function getHoroscope() {
    const sign = document.querySelector('#sign').value;
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '4b3d784309msh1a54be2ab333712p1f580cjsn967b22d81802',
            'X-RapidAPI-Host': 'horoscopes-ai.p.rapidapi.com'
        }
    };
    const url = `https://horoscopes-ai.p.rapidapi.com/get_horoscope_en/${sign}/tomorrow/general`
    fetch(url, options)
        .then(response => response.json())
        .then(data => {
            const horoscope = data.general;

            const header = document.querySelector('#horo-header');
            header.innerHTML = `<h1>Horoscope for ${sign}</h1>`;
            const text = document.querySelector('#horo-text');
            text.innerHTML = `<p>${horoscope}</p>`;

        })

}

const form = document.querySelector('form');
form.addEventListener('submit', (event) => {
    event.preventDefault();
    getHoroscope();
})



