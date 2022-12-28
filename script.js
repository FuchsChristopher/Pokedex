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
    checkSecondType(Pokemon);
}


function checkSecondType(Pokemon) {
    let types = Pokemon['types'];
    if (types.length == 2) {
        secondType.classList.add('typePokemon2');
        document.getElementById('secondType').innerHTML = `
        <p class="textType">${Pokemon['types'][1]['type']['name'].charAt(0).toUpperCase() + Pokemon['types'][1]['type']['name'].slice(1)}</p>
        `;
    }
}


function showAbout() {
    let aboutPokemon = document.getElementById('aboutField1');
    aboutPokemon.innerHTML = '';
    aboutPokemon.innerHTML = showAbout2();

    clearTheFields1();

    addAndRemoveHover1();
}


function addAndRemoveHover1() {
    let linksabout = document.getElementById('linkAbout');
    linksabout.classList.add('hoverKeep');
    let linkBaseStats = document.getElementById('linkBaseStats');
    linkBaseStats.classList.remove('hoverKeep');
    let evolutionField2 = document.getElementById('linkEvolution');
    evolutionField2.classList.remove('hoverKeep');
    let movesField2 = document.getElementById('linkMoves');
    movesField2.classList.remove('hoverKeep');
}


function clearTheFields1() {
    let baseStats = document.getElementById('baseStatsField1');
    baseStats.innerHTML = '';
    let evolutionField1 = document.getElementById('evolutionField1');
    evolutionField1.innerHTML = '';
    let movesField1 = document.getElementById('movesField1');
    movesField1.innerHTML = '';
}


function showBaseStats() {
    let baseStats = document.getElementById('baseStatsField1');
    baseStats.innerHTML = '';
    baseStats.innerHTML = baseStatsAndProgressbar();

    clearTheFields2();
    addAndRemoveHover2();
}


function addAndRemoveHover2() {
    let linkBaseStats = document.getElementById('linkBaseStats');
    linkBaseStats.classList.add('hoverKeep');
    let linksabout = document.getElementById('linkAbout');
    linksabout.classList.remove('hoverKeep');
    let evolutionField2 = document.getElementById('linkEvolution');
    evolutionField2.classList.remove('hoverKeep');
    let movesField2 = document.getElementById('linkMoves');
    movesField2.classList.remove('hoverKeep');
}

function clearTheFields2() {
    let aboutPokemon = document.getElementById('aboutField1');
    aboutPokemon.innerHTML = '';
    let evolutionField1 = document.getElementById('evolutionField1');
    evolutionField1.innerHTML = '';
    let movesField1 = document.getElementById('movesField1');
    movesField1.innerHTML = '';
}


function showEvolution() {
    let evolutionField1 = document.getElementById('evolutionField1');
    evolutionField1.innerHTML = '';

    evolutionField1.innerHTML = evolutionExample();

    clearTheFields3();
    addAndRemoveHover3();
}


function addAndRemoveHover3() {
    let linksabout = document.getElementById('linkAbout');
    linksabout.classList.remove('hoverKeep');
    let linkBaseStats = document.getElementById('linkBaseStats');
    linkBaseStats.classList.remove('hoverKeep');
    let evolutionField2 = document.getElementById('linkEvolution');
    evolutionField2.classList.add('hoverKeep');
    let movesField2 = document.getElementById('linkMoves');
    movesField2.classList.remove('hoverKeep');
}


function clearTheFields3() {
    let aboutPokemon = document.getElementById('aboutField1');
    aboutPokemon.innerHTML = '';
    let baseStats = document.getElementById('baseStatsField1');
    baseStats.innerHTML = '';
    let movesField1 = document.getElementById('movesField1');
    movesField1.innerHTML = '';
}


function showMoves() {
    let movesField1 = document.getElementById('movesField1');
    movesField1.innerHTML = '';

    movesField1.innerHTML = `
    <div class="aboutField2">
    <p>Species</p>
    <p>Height</p>
    <p>Weight</p>
    <p>Abilities</p>
    </div>
    <div><p>${Pokemon['types'][0]['type']['name'].charAt(0).toUpperCase() + Pokemon['types'][0]['type']['name'].slice(1)}</p>
    <p>${Pokemon['height']}</p>
    <p>${Pokemon['weight']}</p>
    <p>${Pokemon['abilities'][0]['ability']['name'].charAt(0).toUpperCase() + Pokemon['abilities'][0]['ability']['name'].slice(1)}, ${Pokemon['abilities'][1]['ability']['name'].charAt(0).toUpperCase() + Pokemon['abilities'][1]['ability']['name'].slice(1)}</p>
    </div>
    `;
    clearTheFields4();
    addAndRemoveHover4();
}


function addAndRemoveHover4() {
    let movesField2 = document.getElementById('linkMoves');
    movesField2.classList.add('hoverKeep');
    let linksabout = document.getElementById('linkAbout');
    linksabout.classList.remove('hoverKeep');
    let linkBaseStats = document.getElementById('linkBaseStats');
    linkBaseStats.classList.remove('hoverKeep');
    let evolutionField2 = document.getElementById('linkEvolution');
    evolutionField2.classList.remove('hoverKeep');
}


function clearTheFields4() {
    let aboutPokemon = document.getElementById('aboutField1');
    aboutPokemon.innerHTML = '';
    let baseStats = document.getElementById('baseStatsField1');
    baseStats.innerHTML = '';
    let evolutionField1 = document.getElementById('evolutionField1');
    evolutionField1.innerHTML = '';
}