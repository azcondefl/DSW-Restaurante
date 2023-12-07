const mongoose = require('mongoose');

const pedidoSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'Usuario' }, // Referencia al usuario que hizo el pedido
    items: [
        {
            menu: { type: mongoose.Schema.Types.ObjectId, ref: 'Menu' }, // Referencia al ítem del menú
            cantidad: { type: Number, default: 1 }, // Cantidad del ítem en el pedido
            observaciones: { type: String } // Observaciones o notas específicas para el ítem
        }
    ],
    estado: { type: String, enum: ['pendiente', 'en preparación', 'entregado', 'cancelado'], default: 'pendiente' }, // Estado del pedido
    fechaPedido: { type: Date, default: Date.now } // Fecha y hora del pedido
});

module.exports = mongoose.model('Pedido', pedidoSchema, 'pedido');
