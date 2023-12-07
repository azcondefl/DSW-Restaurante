const mongoose = require('mongoose');

let categoriaSchema = new mongoose.Schema({
    name: {type: String},
    descripcion: {type: String},
    img: {type: String},
});

module.exports = mongoose.model('Categoria', categoriaSchema, 'categoria');