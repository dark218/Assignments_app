const mongoose = require('mongoose');

const matiereSchema = mongoose.Schema({
    nommat: { type: String, require: true },
    nomprof: { type: String, require: true },
    avatar1: { type: String, require: true },


})

module.exports = mongoose.model('Matiere', matiereSchema);