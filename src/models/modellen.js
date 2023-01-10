const mongoose = require('mongoose');

const modelSchema = new mongoose.Schema({
    modelNaam: String,
    PI: Number,
    klasse: String,
    prijs: Number,
    bouwjaar: Number,
    handling: Number,
    merkId: String,
}, {
    collection: 'Modellen'
})


module.exports = mongoose.model('Modellen', modelSchema);