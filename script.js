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
}


function showAbout() {
    let aboutPokemon = document.getElementById('aboutField1');
    aboutPokemon.innerHTML = '';

    let linksabout = document.getElementById('linkAbout');
    linksabout.classList.add('hoverKeep');

    aboutPokemon.innerHTML = showAbout2();

    let baseStats = document.getElementById('baseStatsField1');
    baseStats.innerHTML = '';

    let linkBaseStats = document.getElementById('linkBaseStats');
    linkBaseStats.classList.remove('hoverKeep');
}


function showBaseStats() {
    let baseStats = document.getElementById('baseStatsField1');
    baseStats.innerHTML = '';

    let linkBaseStats = document.getElementById('linkBaseStats');
    linkBaseStats.classList.add('hoverKeep');

    baseStats.innerHTML = baseStatsAndProgressbar();

    let aboutPokemon = document.getElementById('aboutField1');
    aboutPokemon.innerHTML = '';

    let linksabout = document.getElementById('linkAbout');
    linksabout.classList.remove('hoverKeep');
}