const mongoose = require('mongoose');

const reservaSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'Usuario' }, // Referencia al usuario que hizo la reserva
    detalles: { type: String }, // Detalles o información adicional de la reserva
    fechaReserva: { type: Date, default: Date.now }, // Fecha de la reserva
    estado: { type: String, enum: ['pendiente', 'confirmada', 'cancelada'], default: 'pendiente' } // Estado de la reserva
});

module.exports = mongoose.model('Reserva', reservaSchema, 'reserva');
