function fetch_repos(url) {
    let list = document.getElementById('repos-list');

    fetch(url).then(response => response.json())
        .then(data => {
            data.forEach(repo => {
                let li = document.createElement('li');
                let a = document.createElement('a');
                a.href = repo.svn_url;
                a.innerText = repo.name;
                li.appendChild(a);
                list.appendChild(li);
            });
        })
}

function get_img(url) {
    let container = document.getElementById('dog-img-container');

    let response = fetch(url).then(response => response.json())
        .then(data => {
            let img = document.createElement('img');
            img.src = data.url;
            img.width = 600;
            img.alt = 'Случайная фотка собаки';
            container.appendChild(img);
        })
}


