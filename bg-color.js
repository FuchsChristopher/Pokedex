function bgColorGreen(i) {
    let bgColors = i;
    if (bgColors.length == 0) {
        let bgColor = document.getElementById(`allPokemonShow${i}`);
        bgColor.classList.add('bgGrass');
    }
}