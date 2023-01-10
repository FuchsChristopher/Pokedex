# Pokedex
let isLoading = false;
window.onscroll = async function () {
    if (window.scrollY = document.body.scrollHeight && !isLoading) {
        isLoading = true;
        offset += 20;
        await loadPokemon();
        isLoading = false;
    }
}