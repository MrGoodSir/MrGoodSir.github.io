const BASIC_URL = `https://pokeapi.co/api/v2/pokemon/`
let pokemonData;

const $name = $('#name');
const $moves = $('#moves');
const $height = $('#height');
const $weight = $('#weight');
const $form = $('form');
const $input = $('input[type="text"]');

$form.on('submit', getPokemon)




function getPokemon(event) {
    event.preventDefault();

    const pokemonName = $input.val();
    $input.val("");

    $.ajax(`${BASIC_URL}${pokemonName}`).then(function (data) {
        $('#img').remove();
        pokemonData = data;
        pokemon = pokemonData.id
        pullData();
        $('#picture').append(`<img id="img" draggable="true" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/${pokemon}.png" />`)
        console.log(data);
    }, function (error) {
        alert("I don't think thats a Pokemon...")
    });
}

function pullData() {
    $name.text(pokemonData.name);
    $moves.text(pokemonData.moves.length)
    $height.text(pokemonData.height + "' Tall")
    $weight.text(pokemonData.weight + "lbs")
};
