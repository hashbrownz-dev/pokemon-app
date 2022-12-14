const {Schema, model } = require('mongoose');

const pokemonSchema = new Schema({
    name: String,
    img: String
})

const Pokemon = model("Pokemon", pokemonSchema);

 module.exports = Pokemon