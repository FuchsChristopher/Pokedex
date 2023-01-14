function renderSinglePokemon(currentPokemon, i) {
    return `
    <div id="pokemonPopUp" class="pokemonPopUp" onclick="doNotClose(event)">
    <div id="pokedex" class="pokemonPopUp2">
    <img class="closeImg" src="./img/x-mark-64.png" onclick="closeImg()">
        <h1 id="pokemonName" class="pokemonName">${currentPokemon['name'].charAt(0).toUpperCase() + currentPokemon['name'].slice(1)}</h1>
        <div class="currentId">#${('000' + currentPokemon['id']).slice(-3)}</div>
    </div>
        <div class="typePokemon">
        <p class="textType">${currentPokemon['types'][0]['type']['name'].charAt(0).toUpperCase() + currentPokemon['types'][0]['type']['name'].slice(1)}</p>
        <div id="secondType">
        </div>
        </div>
            <div class="singleImgPokemon">
                <img src="${currentPokemon['sprites']['other']['official-artwork']['front_default']}" id="pokemonImage" class="pokemonImage">
                <nav class="stats">
                    <a id="linkAbout" onclick="showAbout(${i})" href="#">About</a>
                    <a id="linkBaseStats"onclick="showBaseStats(${i})" href="#">Base Stats</a>
                    <a id="linkEvolution"onclick="showEvolution(${i})" href="#">Evolution</a>
                    <a id="linkMoves"onclick="showMoves(${i})" href="#">Moves</a>
                </nav>
                <div class="border"></div>
                <div id="aboutField1" class="aboutField1"></div>
                <div id="baseStatsField1" class="baseStatsField1"></div>
                <div id="evolutionField1" class="evolutionField1"></div>
                <div id="movesField1" class="movesField1"></div>

        </div>
</div>

    
    `;
}


function renderAllPokemon(pokemons, i) {
    return `
    <div onclick="openPopUp(${i})" id="allPokemonShow${i}" class="allPokemonShow">
        <div id="pokemonPopUp" class="pokemonAll">
            <div class="pokemonAll2">
                <h1 id="pokemonName" class="pokemonName">${pokemons[i]['name'].charAt(0).toUpperCase() + pokemons[i]['name'].slice(1)}</h1>
                <div class="currentId">#${('000' + pokemons[i]['id']).slice(-3)}
                </div>
            </div>
            <div class="typeAllPokemon">
                <p class="textType">${pokemons[i]['types'][0]['type']['name'].charAt(0).toUpperCase() + pokemons[i]['types'][0]['type']['name'].slice(1)}</p>
                <div id="secondTypeforAll${i}" class="typeAllPokemon2"></div>
                </div>
                <img src="${pokemons[i]['sprites']['other']['official-artwork']['front_default']}" id="pokemonImage" class="pokemonAllImage">
        </div>
    </div>
    `;
}


function showAbout2(currentPokemon) {
    return `
    <div class="aboutField2">
    <p>Species</p>
    <p>Height</p>
    <p>Weight</p>
    <p>Ability</p>
    </div>
    <div><p>${currentPokemon['types'][0]['type']['name'].charAt(0).toUpperCase() + currentPokemon['types'][0]['type']['name'].slice(1)}</p>
    <p>${currentPokemon['height']}</p>
    <p>${currentPokemon['weight']}</p>
    <p>${currentPokemon['abilities'][0]['ability']['name'].charAt(0).toUpperCase() + currentPokemon['abilities'][0]['ability']['name'].slice(1)}</p>
    </div>
    `;
}


function baseStatsAndProgressbar(currentPokemon) {
    return `
    <div class="baseStatsField2">
    <p>${currentPokemon['stats'][0]['stat']['name'].charAt(0).toUpperCase() + currentPokemon['stats'][0]['stat']['name'].slice(1)}</p>
    <p>${currentPokemon['stats'][1]['stat']['name'].charAt(0).toUpperCase() + currentPokemon['stats'][1]['stat']['name'].slice(1)}</p>
    <p>${currentPokemon['stats'][2]['stat']['name'].charAt(0).toUpperCase() + currentPokemon['stats'][2]['stat']['name'].slice(1)}</p>
    <p>${currentPokemon['stats'][3]['stat']['name'].charAt(0).toUpperCase() + currentPokemon['stats'][3]['stat']['name'].slice(7)}</p>
    <p>${currentPokemon['stats'][4]['stat']['name'].charAt(0).toUpperCase() + currentPokemon['stats'][4]['stat']['name'].slice(7)}</p>
    <p>${currentPokemon['stats'][5]['stat']['name'].charAt(0).toUpperCase() + currentPokemon['stats'][5]['stat']['name'].slice(1)}</p>
    <p>Total</p>
    </div>
    <div>
    <p>${currentPokemon['stats'][0]['base_stat']}</p>
    <p>${currentPokemon['stats'][1]['base_stat']}</p>
    <p>${currentPokemon['stats'][2]['base_stat']}</p>
    <p>${currentPokemon['stats'][3]['base_stat']}</p> 
    <p>${currentPokemon['stats'][4]['base_stat']}</p>
    <p>${currentPokemon['stats'][5]['base_stat']}</p>
    <p>${currentPokemon['stats'][0]['base_stat']
        + currentPokemon['stats'][1]['base_stat']
        + currentPokemon['stats'][2]['base_stat']
        + currentPokemon['stats'][3]['base_stat']
        + currentPokemon['stats'][4]['base_stat']
        + currentPokemon['stats'][5]['base_stat']
        }</p>
    </div>
    <div>
        <p><progress value="${currentPokemon['stats'][0]['base_stat']}" max="100"></progress></p>
        <p><progress value="${currentPokemon['stats'][1]['base_stat']}" max="100"></progress></p>
        <p><progress value="${currentPokemon['stats'][2]['base_stat']}" max="100"></progress></p>
        <p><progress value="${currentPokemon['stats'][3]['base_stat']}" max="100"></progress></p>
        <p><progress value="${currentPokemon['stats'][4]['base_stat']}" max="100"></progress></p>
        <p><progress value="${currentPokemon['stats'][5]['base_stat']}" max="100"></progress></p> 
        <p><progress value="${currentPokemon['stats'][0]['base_stat']
        + currentPokemon['stats'][1]['base_stat']
        + currentPokemon['stats'][2]['base_stat']
        + currentPokemon['stats'][3]['base_stat']
        + currentPokemon['stats'][4]['base_stat']
        + currentPokemon['stats'][5]['base_stat']
        }" max="100"></progress></p>                    
    </div>
    `;
}


function evolutionExample(currentPokemon) {
    return `
    <div class="aboutField2"><p>Base Experience</p>
    </div>
    <div><p>${currentPokemon['base_experience']}
    `;
}


function showMoves2(currentPokemon) {
    return `
    <div class="aboutField2">
    <p>${currentPokemon['moves'][0]['move']['name']}</p>
    <p>${currentPokemon['moves'][1]['move']['name']}</p>
    <p>${currentPokemon['moves'][2]['move']['name']}</p>
    <p>${currentPokemon['moves'][3]['move']['name']}</p>
    </div>
    `;
}


function searchResult(pokemons, i) {
    return `
    <div onclick="openPopUp(${i})" id="allPokemonShow${i}" class="allPokemonShow ">
        <div id="pokemonPopUp" class="pokemonAll">
            <div class="pokemonAll2">
                <h1 id="pokemonName" class="pokemonName">${pokemons[i]['name'].charAt(0).toUpperCase() + pokemons[i]['name'].slice(1)}</h1>
                <div class="currentId">#${('000' + pokemons[i]['id']).slice(-3)}
                </div>
            </div>
            <div class="typeAllPokemon">
                <p class="textType">${pokemons[i]['types'][0]['type']['name'].charAt(0).toUpperCase() + pokemons[i]['types'][0]['type']['name'].slice(1)}</p>
                <img src="${pokemons[i]['sprites']['other']['official-artwork']['front_default']}" id="pokemonImage" class="pokemonAllImage">
                <div id="secondTypeforAll${i}" class="typeAllPokemon2"></div>
                </div>
        </div>
    </div>
    `;
}