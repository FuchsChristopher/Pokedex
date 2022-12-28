function renderSinglePokemon(Pokemon) {
    return `
    <div id="pokemonPopUp" class="pokemonPopUp">
    <div id="pokedex" class="pokemonPopUp2">
        <h1 id="pokemonName">${Pokemon['name'].charAt(0).toUpperCase() + Pokemon['name'].slice(1)}</h1>
        <div class="currentId">#${('000' + Pokemon['id']).slice(1)}</div>
    </div>
        <div class="typePokemon">
        <p class="textType">${Pokemon['types'][0]['type']['name'].charAt(0).toUpperCase() + Pokemon['types'][0]['type']['name'].slice(1)}</p>
        <div id="secondType">
        </div>
        </div>
            <div class="singleImgPokemon">
                <img src="${Pokemon['sprites']['other']['official-artwork']['front_default']}" id="pokemonImage" class="pokemonImage">
                <nav class="stats">
                    <a id="linkAbout" onclick="showAbout()" href="#">About</a>
                    <a id="linkBaseStats"onclick="showBaseStats()" href="#">Base Stats</a>
                    <a id="linkEvolution"onclick="showEvolution()" href="#">Evolution</a>
                    <a id="linkMoves"onclick="showMoves()" href="#">Moves</a>
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


function showAbout2() {
    return `
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
}


function baseStatsAndProgressbar() {
    return `
    <div class="baseStatsField2">
    <p>${Pokemon['stats'][0]['stat']['name'].charAt(0).toUpperCase() + Pokemon['stats'][0]['stat']['name'].slice(1)}</p>
    <p>${Pokemon['stats'][1]['stat']['name'].charAt(0).toUpperCase() + Pokemon['stats'][1]['stat']['name'].slice(1)}</p>
    <p>${Pokemon['stats'][2]['stat']['name'].charAt(0).toUpperCase() + Pokemon['stats'][2]['stat']['name'].slice(1)}</p>
    <p>${Pokemon['stats'][3]['stat']['name'].charAt(0).toUpperCase() + Pokemon['stats'][3]['stat']['name'].slice(7)}</p>
    <p>${Pokemon['stats'][4]['stat']['name'].charAt(0).toUpperCase() + Pokemon['stats'][4]['stat']['name'].slice(7)}</p>
    <p>${Pokemon['stats'][5]['stat']['name'].charAt(0).toUpperCase() + Pokemon['stats'][5]['stat']['name'].slice(1)}</p>
    <p>Total</p>
    </div>
    <div>
    <p>${Pokemon['stats'][0]['base_stat']}</p>
    <p>${Pokemon['stats'][1]['base_stat']}</p>
    <p>${Pokemon['stats'][2]['base_stat']}</p>
    <p>${Pokemon['stats'][3]['base_stat']}</p> 
    <p>${Pokemon['stats'][4]['base_stat']}</p>
    <p>${Pokemon['stats'][5]['base_stat']}</p>
    <p>${Pokemon['stats'][0]['base_stat']
        + Pokemon['stats'][1]['base_stat']
        + Pokemon['stats'][2]['base_stat']
        + Pokemon['stats'][3]['base_stat']
        + Pokemon['stats'][4]['base_stat']
        + Pokemon['stats'][5]['base_stat']
        }</p>
    </div>
    <div>
        <p><progress value="${Pokemon['stats'][0]['base_stat']}" max="100"></progress></p>
        <p><progress value="${Pokemon['stats'][1]['base_stat']}" max="100"></progress></p>
        <p><progress value="${Pokemon['stats'][2]['base_stat']}" max="100"></progress></p>
        <p><progress value="${Pokemon['stats'][3]['base_stat']}" max="100"></progress></p>
        <p><progress value="${Pokemon['stats'][4]['base_stat']}" max="100"></progress></p>
        <p><progress value="${Pokemon['stats'][5]['base_stat']}" max="100"></progress></p> 
        <p><progress value="${Pokemon['stats'][0]['base_stat']
        + Pokemon['stats'][1]['base_stat']
        + Pokemon['stats'][2]['base_stat']
        + Pokemon['stats'][3]['base_stat']
        + Pokemon['stats'][4]['base_stat']
        + Pokemon['stats'][5]['base_stat']
        }" max="100"></progress></p>                    
    </div>
    `;
}


function evolutionExample() {
    return `
    <div class="aboutField2"><p>Base Experience</p>
    </div>
    <div><p>${Pokemon['base_experience']}
    `;
}