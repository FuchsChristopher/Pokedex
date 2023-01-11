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


function bgColorPsychic(pokemons, i) {
    let bgColors = pokemons[i]['types'][0]['type']['name'];
    if (bgColors == 'psychic') {
        let bgColor = document.getElementById(`allPokemonShow${i}`);
        bgColor.classList.add('bgPsychic');
    }
}


function bgColorRock(pokemons, i) {
    let bgColors = pokemons[i]['types'][0]['type']['name'];
    if (bgColors == 'rock') {
        let bgColor = document.getElementById(`allPokemonShow${i}`);
        bgColor.classList.add('bgRock');
    }
}


function bgColorGhost(pokemons, i) {
    let bgColors = pokemons[i]['types'][0]['type']['name'];
    if (bgColors == 'ghost') {
        let bgColor = document.getElementById(`allPokemonShow${i}`);
        bgColor.classList.add('bgGhost');
    }
}


function bgColorIce(pokemons, i) {
    let bgColors = pokemons[i]['types'][0]['type']['name'];
    if (bgColors == 'ice') {
        let bgColor = document.getElementById(`allPokemonShow${i}`);
        bgColor.classList.add('bgIce');
    }
}


function bgColorDragon(pokemons, i) {
    let bgColors = pokemons[i]['types'][0]['type']['name'];
    if (bgColors == 'dragon') {
        let bgColor = document.getElementById(`allPokemonShow${i}`);
        bgColor.classList.add('bgDragon');
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
    bgColorPsychic(pokemons, i);
    bgColorRock(pokemons, i);
    bgColorGhost(pokemons, i);
    bgColorIce(pokemons, i);
    bgColorDragon(pokemons, i);
}


function checkTypeColorForSinglePokemon(currentPokemon) {
    bgColorGrassSingle(currentPokemon);
    bgColorFireSingle(currentPokemon);
    bgColorWaterSingle(currentPokemon);
    bgColorBugSingle(currentPokemon);
    bgColorNormalSingle(currentPokemon);
    bgColorPosionSingle(currentPokemon);
    bgColorElectricSingle(currentPokemon);
    bgColorGroundSingle(currentPokemon);
    bgColorFairySingle(currentPokemon);
    bgColorFightingSingle(currentPokemon);
    bgColorPsychicSingle(currentPokemon);
    bgColorRockSingle(currentPokemon);
    bgColorGhostSingle(currentPokemon);
    bgColorIceSingle(currentPokemon);
    bgColorDragonSingle(currentPokemon);
}


function bgColorGrassSingle(currentPokemon) {
    let bgColors = currentPokemon['types'][0]['type']['name'];
    if (bgColors == 'grass') {
        let bgColor = document.getElementById(`pokedex`);
        bgColor.classList.add('bgGrass');
    }
}


function bgColorFireSingle(currentPokemon) {
    let bgColors = currentPokemon['types'][0]['type']['name'];
    if (bgColors == 'fire') {
        let bgColor = document.getElementById(`pokedex`);
        bgColor.classList.add('bgFire');
    }
}


function bgColorWaterSingle(currentPokemon) {
    let bgColors = currentPokemon['types'][0]['type']['name'];
    if (bgColors == 'water') {
        let bgColor = document.getElementById(`pokedex`);
        bgColor.classList.add('bgWater');
    }
}


function bgColorBugSingle(currentPokemon) {
    let bgColors = currentPokemon['types'][0]['type']['name'];
    if (bgColors == 'bug') {
        let bgColor = document.getElementById(`pokedex`);
        bgColor.classList.add('bgBug');
    }
}


function bgColorNormalSingle(currentPokemon) {
    let bgColors = currentPokemon['types'][0]['type']['name'];
    if (bgColors == 'normal') {
        let bgColor = document.getElementById(`pokedex`);
        bgColor.classList.add('bgNormal');
    }
}


function bgColorPosionSingle(currentPokemon) {
    let bgColors = currentPokemon['types'][0]['type']['name'];
    if (bgColors == 'poison') {
        let bgColor = document.getElementById(`pokedex`);
        bgColor.classList.add('bgPoison');
    }
}


function bgColorElectricSingle(currentPokemon) {
    let bgColors = currentPokemon['types'][0]['type']['name'];
    if (bgColors == 'electric') {
        let bgColor = document.getElementById(`pokedex`);
        bgColor.classList.add('bgElectric');
    }
}


function bgColorGroundSingle(currentPokemon) {
    let bgColors = currentPokemon['types'][0]['type']['name'];
    if (bgColors == 'ground') {
        let bgColor = document.getElementById(`pokedex`);
        bgColor.classList.add('bgGround');
    }
}


function bgColorFairySingle(currentPokemon) {
    let bgColors = currentPokemon['types'][0]['type']['name'];
    if (bgColors == 'fairy') {
        let bgColor = document.getElementById(`pokedex`);
        bgColor.classList.add('bgFairy');
    }
}


function bgColorFightingSingle(currentPokemon) {
    let bgColors = currentPokemon['types'][0]['type']['name'];
    if (bgColors == 'fighting') {
        let bgColor = document.getElementById(`pokedex`);
        bgColor.classList.add('bgFighting');
    }
}


function bgColorPsychicSingle(currentPokemon) {
    let bgColors = currentPokemon['types'][0]['type']['name'];
    if (bgColors == 'psychic') {
        let bgColor = document.getElementById(`pokedex`);
        bgColor.classList.add('bgPsychic');
    }
}


function bgColorRockSingle(currentPokemon) {
    let bgColors = currentPokemon['types'][0]['type']['name'];
    if (bgColors == 'rock') {
        let bgColor = document.getElementById(`pokedex`);
        bgColor.classList.add('bgRock');
    }
}


function bgColorGhostSingle(currentPokemon) {
    let bgColors = currentPokemon['types'][0]['type']['name'];
    if (bgColors == 'ghost') {
        let bgColor = document.getElementById(`pokedex`);
        bgColor.classList.add('bgGhost');
    }
}


function bgColorIceSingle(currentPokemon) {
    let bgColors = currentPokemon['types'][0]['type']['name'];
    if (bgColors == 'ice') {
        let bgColor = document.getElementById(`pokedex`);
        bgColor.classList.add('bgIce');
    }
}


function bgColorDragonSingle(currentPokemon) {
    let bgColors = currentPokemon['types'][0]['type']['name'];
    if (bgColors == 'dragon') {
        let bgColor = document.getElementById(`pokedex`);
        bgColor.classList.add('bgDragon');
    }
}