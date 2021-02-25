const mongoose = require('mongoose');
const { connect } = require('../src/db/index');
const character = require('../src/helpers/character');

const { defaultCharacters } = character;
const Character = mongoose.model('character')

console.log('defaultC=>', defaultCharacters)

connect()
    .then(async () => {
        await Character.insertMany(defaultCharacters);
    })