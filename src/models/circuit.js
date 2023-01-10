const mongoose = require('mongoose')


const tracksSchema = new mongoose.Schema({
    id: Number,
    naam: String,
    land: String
}, {
    collection: 'Tracks',
})

module.exports = mongoose.model('Tracks', tracksSchema)