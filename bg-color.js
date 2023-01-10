function bgColorGrass(pokemons, i) {
    let bgColors = pokemons[i]['types'][0]['type']['name'];
    if (bgColors == 'grass') {
        let bgColor = document.getElementById(`allPokemonShow${i}`);
        bgColor.classList.add('bgGrass');
    }
}


function bgColorFire(pokemons, i) {
    let bgColors = pokemons[i]['types'][0]['type']['name'];
    if (bgColors == 'fire') {
        let bgColor = document.getElementById(`allPokemonShow${i}`);
        bgColor.classList.add('bgFire');
    }
}


function bgColorWater(pokemons, i) {
    let bgColors = pokemons[i]['types'][0]['type']['name'];
    if (bgColors == 'water') {
        let bgColor = document.getElementById(`allPokemonShow${i}`);
        bgColor.classList.add('bgWater');
    }
}


function bgColorBug(pokemons, i) {
    let bgColors = pokemons[i]['types'][0]['type']['name'];
    if (bgColors == 'bug') {
        let bgColor = document.getElementById(`allPokemonShow${i}`);
        bgColor.classList.add('bgBug');
    }
}


function bgColorNormal(pokemons, i) {
    let bgColors = pokemons[i]['types'][0]['type']['name'];
    if (bgColors == 'normal') {
        let bgColor = document.getElementById(`allPokemonShow${i}`);
        bgColor.classList.add('bgNormal');
    }
}


function bgColorPosion(pokemons, i) {
    let bgColors = pokemons[i]['types'][0]['type']['name'];
    if (bgColors == 'poison') {
        let bgColor = document.getElementById(`allPokemonShow${i}`);
        bgColor.classList.add('bgPoison');
    }
}


function bgColorElectric(pokemons, i) {
    let bgColors = pokemons[i]['types'][0]['type']['name'];
    if (bgColors == 'electric') {
        let bgColor = document.getElementById(`allPokemonShow${i}`);
        bgColor.classList.add('bgElectric');
    }
}


function bgColorGround(pokemons, i) {
    let bgColors = pokemons[i]['types'][0]['type']['name'];
    if (bgColors == 'ground') {
        let bgColor = document.getElementById(`allPokemonShow${i}`);
        bgColor.classList.add('bgGround');
    }
}


function bgColorFairy(pokemons, i) {
    let bgColors = pokemons[i]['types'][0]['type']['name'];
    if (bgColors == 'fairy') {
        let bgColor = document.getElementById(`allPokemonShow${i}`);
        bgColor.classList.add('bgFairy');
    }
}


function bgColorFighting(pokemons, i) {
    let bgColors = pokemons[i]['types'][0]['type']['name'];
    if (bgColors == 'fighting') {
        let bgColor = document.getElementById(`allPokemonShow${i}`);
        bgColor.classList.add('bgFighting');
    }
}