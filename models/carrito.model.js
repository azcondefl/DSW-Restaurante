const mongoose = require('mongoose');

const carritoSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'Usuario' }, // Referencia al usuario dueño del carrito
    items: [
        {
            item: { type: mongoose.Schema.Types.ObjectId, ref: 'Menu' }, // Referencia al artículo
            cantidad: { type: Number, default: 1 } // Cantidad del artículo en el carrito
        }
    ],
    fechaCreacion: { type: Date, default: Date.now } // Fecha de creación del carrito
});

module.exports = mongoose.model('Carrito', carritoSchema, 'carrito');
