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


function showAbout() {
    let aboutPokemon = document.getElementById('aboutField1');
    aboutPokemon.innerHTML = '';

    aboutPokemon.innerHTML = `
    <div class="aboutField2"><p>${Pokemon['name'].charAt(0).toUpperCase() + Pokemon['name'].slice(1)}</p>
    <p>${Pokemon['name'].charAt(0).toUpperCase() + Pokemon['name'].slice(1)}</p>
    <p>${Pokemon['name'].charAt(0).toUpperCase() + Pokemon['name'].slice(1)}</p>
    <p>${Pokemon['name'].charAt(0).toUpperCase() + Pokemon['name'].slice(1)}</p>
    </div>
    <div><p>${Pokemon['types'][0]['type']['name'].charAt(0).toUpperCase() + Pokemon['types'][0]['type']['name'].slice(1)}</p>
    <p>${Pokemon['types'][0]['type']['name'].charAt(0).toUpperCase() + Pokemon['types'][0]['type']['name'].slice(1)}</p>
    <p>${Pokemon['types'][0]['type']['name'].charAt(0).toUpperCase() + Pokemon['types'][0]['type']['name'].slice(1)}</p>
    <p>${Pokemon['types'][0]['type']['name'].charAt(0).toUpperCase() + Pokemon['types'][0]['type']['name'].slice(1)}</p>
    </div>
    `;
}