document.getElementById('ml-btn').addEventListener('click', function() {
    const query = document.getElementById('ml-query').value;
    fetch(`https://api.mercadolibre.com/sites/MLA/search?q=${query}`)
        .then(res => res.json())
        .then(data => {
            const results = document.getElementById('ml-results');
            results.innerHTML = '';
            data.results.forEach(item => {
                const card = document.createElement('div');
                card.className = 'col-md-4 result-card';
                card.innerHTML = `
                    <img src="${item.thumbnail}" alt="${item.title}">
                    <h3>${item.title}</h3>
                    <p>Precio: ${item.price}</p>
                `;
                results.appendChild(card);
            });
        })
        .catch(err => console.error(err));
});

document.getElementById('pokemon-btn').addEventListener('click', function() {
    const query = document.getElementById('pokemon-query').value;
    fetch(`https://pokeapi.co/api/v2/pokemon/${query}`)
        .then(res => res.json())
        .then(data => {
            const results = document.getElementById('pokemon-results');
            results.innerHTML = '';
            const card = document.createElement('div');
            card.className = 'col-md-4 result-card';
            card.innerHTML = `
                <img src="${data.sprites.front_default}" alt="${data.name}">
                <h3>${data.name}</h3>
                <p>Altura: ${data.height}</p>
                <p>Peso: ${data.weight}</p>
            `;
            results.appendChild(card);
        })
        .catch(err => console.error(err));
});
