function getHoroscope() {
    const sign = document.querySelector('#sign').value;
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'KEY',
            'X-RapidAPI-Host': 'horoscopes-ai.p.rapidapi.com'
        }
    };
    const url = `https://horoscopes-ai.p.rapidapi.com/get_horoscope_en/${sign}/tomorrow/general`
    fetch(url, options)
        .then(response => response.json())
        .then(data => {
            const horoscope = data.general;

            const result = document.querySelector('#result');
            result.innerHTML = `<h1>Horoscope for ${sign}</h1><p>${horoscope}</p>`;

        })

}

const form = document.querySelector('form');
form.addEventListener('submit', (event) => {
    event.preventDefault();
    getHoroscope();
})



