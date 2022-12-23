let Pokemon = [];

async function loadPokemon() {
    let url = 'https://pokeapi.co/api/v2/pokemon/charmander';
    let response = await fetch(url);
    Pokemon = await response.json();
    console.log('Loaded Pokemon', Pokemon);

    renderPokemon();
}


function renderPokemon() {
    document.getElementById('pokemonName').innerHTML = Pokemon['name'];
    document.getElementById('pokemonImage').src = Pokemon['sprites']['other']['official-artwork']['front_default'];
    
}