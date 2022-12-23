function renderSinglePokemon() {
    return `
    <div id="pokemonPopUp" class="pokemonPopUp">
    <div id="pokedex" class="pokedex">
        <h1 id="pokemonName">${namePokemon}Name</h1>
    </div>
    <div class="infoPokemon">
        <img ${PokemonImg} id="pokemonImage" class="pokemonImage">
    </div>
</div>
    
    `;
}