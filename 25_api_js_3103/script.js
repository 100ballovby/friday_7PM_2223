let url = 'https://api.github.com/search/repositories?q=ml';

let resp = fetch(url).then(response => response.json())
    .then(response => parse(response.items));

function parse(array) {
    for (let obj in array) {
        console.log(obj);
    }
}

