let pokemons = [];
let offset = 0;

async function loadPokemon() {
    loadingNow();
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
    }
    renderAllPokemons(pokemons);
    load.classList.add('d-none');
    allPokemon3.classList.remove('d-none');
    document.getElementById('loadBtn').classList.remove('d-none');
}


function renderAllPokemons(pokemons) {
    for (let i = 0; i < pokemons.length; i++) {
        let allPokemon = document.getElementById('allPokemon2');
        allPokemon.innerHTML += renderAllPokemon(pokemons, i);
        checkSecondTypeforAll(pokemons, i);
        checkTypeColor(pokemons, i);
        checkButton(pokemons, i);
    }
}

function checkButton(pokemons, i) {
    let bgColors = pokemons[i]['types'][0]['type']['name'];
    if (bgColors == 'dragon') {
        let bgColor = document.getElementById(`loadDiv`);
        bgColor.classList.add('d-none');
    }
}


function loadMorePokemon(pokemons, i) {
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
    checkTypeColorForSinglePokemon(currentPokemon);
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
    clearTheFields();
    let activeLink = 'types'
    let aboutPokemon = document.getElementById('aboutField1');
    aboutPokemon.innerHTML = '';
    removeHover();
    let currentPokemon = pokemons[i];
    aboutPokemon.innerHTML = showAbout2(currentPokemon);
    addHoverEffect(activeLink);
}


function showBaseStats(i) {
    clearTheFields();
    let activeLink = 'stats'
    let baseStats = document.getElementById('baseStatsField1');
    baseStats.innerHTML = '';
    removeHover();
    let currentPokemon = pokemons[i];
    baseStats.innerHTML = baseStatsAndProgressbar(currentPokemon);
    addHoverEffect(activeLink);
}


function showEvolution(i) {
    clearTheFields();
    let activeLink = 'base_experience'
    let evolutionField1 = document.getElementById('evolutionField1');
    evolutionField1.innerHTML = '';
    removeHover();
    let currentPokemon = pokemons[i];
    evolutionField1.innerHTML = evolutionExample(currentPokemon);
    addHoverEffect(activeLink);
}


function showMoves(i) {
    clearTheFields();
    let activeLink = 'moves'
    let movesField1 = document.getElementById('movesField1');
    movesField1.innerHTML = '';
    removeHover();
    let currentPokemon = pokemons[i];
    movesField1.innerHTML = showMoves2(currentPokemon);
    addHoverEffect(activeLink);
}


function clearTheFields() {
    let baseStats = document.getElementById('baseStatsField1');
    baseStats.innerHTML = '';
    let evolutionField1 = document.getElementById('evolutionField1');
    evolutionField1.innerHTML = '';
    let movesField1 = document.getElementById('movesField1');
    movesField1.innerHTML = '';
    let aboutPokemon = document.getElementById('aboutField1');
    aboutPokemon.innerHTML = '';
}


function removeHover() {
    let linksabout = document.getElementById(`linkAbout`);
    linksabout.classList.remove('hoverKeep');
    let linkBaseStats = document.getElementById(`linkBaseStats`);
    linkBaseStats.classList.remove('hoverKeep');
    let evolutionField2 = document.getElementById(`linkEvolution`);
    evolutionField2.classList.remove('hoverKeep');
    let movesField2 = document.getElementById(`linkMoves`);
    movesField2.classList.remove('hoverKeep');
}


function filterNames() {
    let search = document.getElementById('search').value
    search = search.toLowerCase().trim();
    let container = document.getElementById('allPokemon2');
    container.innerHTML = '';
    for (let i = 0; i < pokemons.length; i++) {
        let name = pokemons[i]['name'];
        if (name.toLowerCase().includes(search)) {
            container.innerHTML += searchResult(pokemons, i)
            checkTypeColor(pokemons, i);
            checkSecondTypeforAll(pokemons, i);
        }
    }
}


function addHoverEffect(clickedMenu) {
    if (clickedMenu == 'types') {
        let linksabout = document.getElementById(`linkAbout`);
        linksabout.classList.add('hoverKeep');
    } if (clickedMenu == 'stats') {
        let linkBaseStats = document.getElementById(`linkBaseStats`);
        linkBaseStats.classList.add('hoverKeep');
    } if (clickedMenu == 'base_experience') {
        let evolutionField2 = document.getElementById(`linkEvolution`);
        evolutionField2.classList.add('hoverKeep');
    } if (clickedMenu == 'moves') {
        let movesField2 = document.getElementById(`linkMoves`);
        movesField2.classList.add('hoverKeep');
    }
}