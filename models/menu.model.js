const mongoose = require('mongoose');

let menuSchema = new mongoose.Schema({
    name: {type: String},
    categoria: {type: String},
    ingredientes: {type: String},
    descripcion: {type: String},
    precio: {type: Number},
    img: {type: String},
});

module.exports = mongoose.model('Menu', menuSchema, 'menu'); 