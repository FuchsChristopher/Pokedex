function renderSinglePokemon(Pokemon) {
    return `
    <div id="pokemonPopUp" class="pokemonPopUp">
    <div id="pokedex" class="pokemonPopUp2">
        <h1 id="pokemonName">${Pokemon['name'].charAt(0).toUpperCase() + Pokemon['name'].slice(1)}</h1>
        <div class="currentId">#${('000' + Pokemon['id']).slice(1)}</div>
    </div>
        <div class="typePokemon"><p class="textType">${Pokemon['types'][0]['type']['name'].charAt(0).toUpperCase() + Pokemon['types'][0]['type']['name'].slice(1)}</p></div>
            <div class="singleImgPokemon">
                <img src="${Pokemon['sprites']['other']['official-artwork']['front_default']}" id="pokemonImage" class="pokemonImage">
                <nav class="stats">
                    <div class="hover"><a onclick="showAbout()" href="#">About</a></div>
                    <div class="hover"><a onclick="showBaseStats()" href="#">Base Stats</a></div>
                    <div class="hover"><a onclick="showEvolution()" href="#">Evolution</a></div>
                    <div class="hover"><a onclick="showMoves()" href="#">Moves</a></div>
                </nav>
                <div class="border"></div>
                <div id="aboutField1" class="aboutField1"></div>
        </div>
</div>

    
    `;
}