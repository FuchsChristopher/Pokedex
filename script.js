let pokemons = [];
let offset = 0;

async function loadPokemon() {
    let allPokemon3 = document.getElementById('allPokemon');
    let load = document.getElementById('isLoading');
    let url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=20`;
    let response = await fetch(url);
    pokemon = await response.json();
    for (let i = 0; i < pokemon['results'].length; ++i) {
        let allPokemon = pokemon['results'][i]['url'];
        let individualResponse = await fetch(allPokemon);
        currentPokemon = await individualResponse.json();
        pokemons.push(currentPokemon);
        loadingNow();
    }
    renderAllPokemon1(pokemons);
    load.classList.add('d-none');
    allPokemon3.classList.remove('d-none');
    document.getElementById('loadBtn').classList.remove('d-none');
}


function renderAllPokemon1(pokemons) {
    for (let i = 0; i < pokemons.length; i++) {
        let allPokemon = document.getElementById('allPokemon2');
        allPokemon.innerHTML += renderAllPokemon(pokemons, i);
        checkSecondTypeforAll(pokemons, i);
        checkTypeColor(pokemons, i);
    }
}


function checkTypeColor(pokemons, i) {
    bgColorGrass(pokemons, i);
    bgColorFire(pokemons, i);
    bgColorWater(pokemons, i);
    bgColorBug(pokemons, i);
    bgColorNormal(pokemons, i);
    bgColorPosion(pokemons, i);
    bgColorElectric(pokemons, i);
    bgColorGround(pokemons, i);
    bgColorFairy(pokemons, i);
    bgColorFighting(pokemons, i);
}


function loadMorePokemon() {
    let container = document.getElementById('allPokemon2');
    container.innerHTML = '';
    offset += 20;
    loadPokemon();
}

function loadingNow() {
    let allPokemon3 = document.getElementById('allPokemon');
    allPokemon3.classList.add('d-none');
    document.getElementById('loadBtn').classList.add('d-none');

    let load = document.getElementById('isLoading');
    load.classList.remove('d-none');
}


function openPopUp(i) {
    let SinglePokemon = document.getElementById('mainSinglePokemon');
    SinglePokemon.innerHTML = '';
    let currentPokemon = pokemons[i];
    SinglePokemon.innerHTML = renderSinglePokemon(currentPokemon, i);
    let openPopUp = document.getElementById('mainSinglePokemon');
    openPopUp.classList.remove('d-none');
    let closeAllPokemon = document.getElementById('allPokemon');
    closeAllPokemon.classList.add('d-none');
    let closeHeader = document.getElementById('header');
    closeHeader.classList.add('d-none');
    let closeFooter = document.getElementById('footer');
    closeFooter.classList.add('d-none');
    document.getElementById('loadBtn').classList.add('d-none');
    checkSecondType(currentPokemon);
}


function closeImg() {
    let closePopUp = document.getElementById('mainSinglePokemon');
    closePopUp.classList.add('d-none');
    let closeAllPokemon = document.getElementById('allPokemon');
    closeAllPokemon.classList.remove('d-none');
    let closeHeader = document.getElementById('header');
    closeHeader.classList.remove('d-none');
    let closeFooter = document.getElementById('footer');
    closeFooter.classList.remove('d-none');
    document.getElementById('loadBtn').classList.remove('d-none');
}


function closeSinglePokemon() {
    let closeHeader = document.getElementById('header');
    closeHeader.classList.remove('d-none');
    let closeFooter = document.getElementById('footer');
    closeFooter.classList.remove('d-none');
    document.getElementById('loadBtn').classList.remove('d-none');
    let closePopUp = document.getElementById('mainSinglePokemon');
    closePopUp.classList.add('d-none');
    let closeAllPokemon = document.getElementById('allPokemon');
    closeAllPokemon.classList.remove('d-none');
}


function doNotClose(event) {
    event.stopPropagation();
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


function checkSecondTypeforAll(pokemons, i) {
    let types = pokemons[i]['types'];
    if (types.length == 2) {
        document.getElementById(`secondTypeforAll${i}`).innerHTML = `
        <p class="textType">${pokemons[i]['types'][1]['type']['name'].charAt(0).toUpperCase() + pokemons[i]['types'][1]['type']['name'].slice(1)}</p>
        `;
    }
}


function showAbout(i) {
    let aboutPokemon = document.getElementById('aboutField1');
    aboutPokemon.innerHTML = '';
    let currentPokemon = pokemons[i];
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


function showBaseStats(i) {
    let baseStats = document.getElementById('baseStatsField1');
    baseStats.innerHTML = '';
    let currentPokemon = pokemons[i];
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


function showEvolution(i) {
    let evolutionField1 = document.getElementById('evolutionField1');
    evolutionField1.innerHTML = '';
    let currentPokemon = pokemons[i];
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


function showMoves(i) {
    let movesField1 = document.getElementById('movesField1');
    movesField1.innerHTML = '';
    let currentPokemon = pokemons[i];

    movesField1.innerHTML = showMoves2(currentPokemon);

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


function filterNames() {
    let search = document.getElementById('search').value
    search = search.toLowerCase();
    let container = document.getElementById('allPokemon2');
    container.innerHTML = '';
    for (let i = 0; i < pokemons.length; i++) {
        let name = pokemons[i]['name'];
        if (name.toLowerCase().includes(search)) {
            container.innerHTML += searchResult(pokemons, i)
            checkTypeColor(pokemons, i);
        }
    }
    
}