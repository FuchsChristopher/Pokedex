let Pokemon;

async function loadPokemon() {
    let url = 'https://pokeapi.co/api/v2/pokemon/charmander';
    let response = await fetch(url);
    Pokemon = await response.json();
    console.log('Loaded Pokemon', Pokemon);

    singlePokemon(Pokemon);
}


function singlePokemon(Pokemon) {
    let SinglePokemon = document.getElementById('mainSinglePokemon');
    SinglePokemon.innerHTML = '';
    
    SinglePokemon.innerHTML = renderSinglePokemon(Pokemon);
    //document.getElementById('pokemonName').innerHTML = Pokemon['name'];
    //document.getElementById('pokemonImage').src = Pokemon['sprites']['other']['official-artwork']['front_default'];

    }