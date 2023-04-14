const options = {
    method: 'GET',  // GET - получение данных от сервера
    headers: {  // headers - дополнительные параметры, которые передаются с запросом
        'X-RapidAPI-Key': '4b3d784309msh1a54be2ab333712p1f580cjsn967b22d81802',
        'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
    }
};

fetch('https://coinranking1.p.rapidapi.com/coin/Qwsogvtv82FCd/exchanges?referenceCurrencyUuid=yhjMzLPhuIDl&limit=50&offset=0&orderBy=24hVolume&orderDirection=desc', options)
    .then(response => response.json())
    .then(data => {
        const table = document.querySelector('#table');
        data.data.exchanges.forEach(market => {
            let row = table.insertRow();  // вставляю в таблицу новую tr

            row.insertCell().textContent = market.name;  // в строку вставляется ячейка, в качестве текста ячейки беру данные из выгрузки
            row.insertCell().textContent = market.price;  // в строку вставляется ячейка, в качестве текста ячейки беру данные из выгрузки
            row.insertCell().textContent = market.rank;  // в строку вставляется ячейка, в качестве текста ячейки беру данные из выгрузки
        });
    })
    .catch(err => console.error(err));