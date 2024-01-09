const mongoose = require('mongoose');

let clientesSchema = new mongoose.Schema({
    nombres: {type: String},
    aPaterno: {type: String},
    aMaterno: {type: String},
    fecNac: {type: Date},
    telefono: {type: String},
    direccion: {type: String},
});

module.exports = mongoose.model('Clientes', clientesSchema, 'clientes'); 