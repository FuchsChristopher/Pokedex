let currentPokemon;

async function loadPokemon() {
    let url = `https://pokeapi.co/api/v2/pokemon/?offset=0&limit=20`;
    let response = await fetch(url);
    pokemon = await response.json();
    for (let i = 0; i < pokemon['results'].length; ++i) {
        let allPokemon = pokemon['results'][i]['url'];
        let individualResponse = await fetch(allPokemon);
        currentPokemon = await individualResponse.json();
        schowAllPokemon();
        console.log('Loaded Pokemon', currentPokemon);
    }
}


function openPopUp() {
    let openPopUp = document.getElementById('mainSinglePokemon');
    openPopUp.classList.remove('d-none');
    let closeAllPokemon = document.getElementById('allPokemon');
    closeAllPokemon.classList.add('d-none');
    
    let SinglePokemon = document.getElementById('mainSinglePokemon');
    SinglePokemon.innerHTML = '';
    
    SinglePokemon.innerHTML = renderSinglePokemon();
    checkSecondType();
}


function closeImg() {
    let closePopUp = document.getElementById('mainSinglePokemon');
    closePopUp.classList.add('d-none');
    let closeAllPokemon = document.getElementById('allPokemon');
    closeAllPokemon.classList.remove('d-none');
}


function schowAllPokemon() {
    let allPokemon = document.getElementById('allPokemon2');
    allPokemon.innerHTML =
    allPokemon.innerHTML += renderAllPokemon();
    //checkSecondTypeforAll();
}


function checkSecondType() {
    let types = currentPokemon['types'];
    if (types.length == 2) {
        secondType.classList.add('typePokemon2');
        document.getElementById('secondType').innerHTML = `
        <p class="textType">${currentPokemon['types'][1]['type']['name'].charAt(0).toUpperCase() + currentPokemon['types'][1]['type']['name'].slice(1)}</p>
        `;
    }
}

function checkSecondTypeforAll() {
    let types = currentPokemon['types'];
    if (types.length == 2) {
        secondTypeforAll.classList.add('typePokemonAll');
        document.getElementById('secondTypeforAll').innerHTML = `
        <p class="textType">${currentPokemon['types'][1]['type']['name'].charAt(0).toUpperCase() + currentPokemon['types'][1]['type']['name'].slice(1)}</p>
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

    movesField1.innerHTML = showMoves2();
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