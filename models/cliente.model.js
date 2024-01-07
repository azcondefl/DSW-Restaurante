const mongoose = require('mongoose');

let menuSchema = new mongoose.Schema({
    nombres: {type: String},
    aPaterno: {type: String},
    aMaterno: {type: String},
    fecNac: {type: Date},
});

module.exports = mongoose.model('Clientes', clientesSchema, 'clientes'); 