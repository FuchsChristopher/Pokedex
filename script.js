let Pokemon = [];
let currentPokemon = [];

async function loadPokemon() {
    let url = `https://pokeapi.co/api/v2/pokemon/?offset=0&limit=20`;
    let response = await fetch(url);
    Pokemon = await response.json();
    for (let i = 0; i < Pokemon['results'].length; ++i) {
        let allPokemon = Pokemon['results'][i]['url'];
        let individualResponse = await fetch(allPokemon);
        let currentPokemon = await individualResponse.json();

        schowAllPokemon(currentPokemon);
        singlePokemon(currentPokemon);
        console.log('Loaded Pokemon', currentPokemon);
    }

}


function openPopUp(currentPokemon) {
    
    let openPopUp = document.getElementById('mainSinglePokemon');
    openPopUp.classList.remove('d-none');
    let closeAllPokemon = document.getElementById('allPokemon');
    closeAllPokemon.classList.add('d-none');
}


function closeImg() {
    let closePopUp = document.getElementById('mainSinglePokemon');
    closePopUp.classList.add('d-none');
    let openAllPokemon = document.getElementById('allPokemon');
    openAllPokemon.classList.remove('d-none');
}


function singlePokemon(currentPokemon) {
    let SinglePokemon = document.getElementById('mainSinglePokemon');
    SinglePokemon.innerHTML = '';

    SinglePokemon.innerHTML = renderSinglePokemon(currentPokemon);
    checkSecondType(currentPokemon);
}


function schowAllPokemon(currentPokemon) {
    let allPokemon = document.getElementById('allPokemon');
    allPokemon.innerHTML = '';

        allPokemon.innerHTML += renderAllPokemon(currentPokemon);
        checkSecondTypeforAll(currentPokemon);
}


function checkSecondType(currentPokemon) {
    let types = currentPokemon['types'];
    if (types.length == 2) {
        secondType.classList.add('typePokemon2');
        document.getElementById('secondType').innerHTML = `
        <p class="textType">${currentPokemon['types'][1]['type']['name'].charAt(0).toUpperCase() + currentPokemon['types'][1]['type']['name'].slice(1)}</p>
        `;
    }
}

function checkSecondTypeforAll(currentPokemon) {
    let types = currentPokemon['types'];
    if (types.length == 2) {
        secondTypeforAll.classList.add('typePokemonAll');
        document.getElementById('secondTypeforAll').innerHTML = `
        <p class="textType">${currentPokemon['types'][1]['type']['name'].charAt(0).toUpperCase() + currentPokemon['types'][1]['type']['name'].slice(1)}</p>
        `;
    }
}


function showAbout(currentPokemon) {
    let aboutPokemon = document.getElementById('aboutField1');
    aboutPokemon.innerHTML = '';
    aboutPokemon.innerHTML = showAbout2(currentPokemon);

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


function showBaseStats(currentPokemon) {
    let baseStats = document.getElementById('baseStatsField1');
    baseStats.innerHTML = '';
    baseStats.innerHTML = baseStatsAndProgressbar(currentPokemon);

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


function showEvolution(currentPokemon) {
    let evolutionField1 = document.getElementById('evolutionField1');
    evolutionField1.innerHTML = '';

    evolutionField1.innerHTML = evolutionExample(currentPokemon);

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


function showMoves(currentPokemon) {
    let movesField1 = document.getElementById('movesField1');
    movesField1.innerHTML = '';

    movesField1.innerHTML = showMoves(currentPokemon);
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