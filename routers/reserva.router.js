const express = require('express');
const router = express.Router();
const reservaController = require('../controllers/reserva.controller');
const authMiddleware = require('../utils/auth.middleware');

// /reservations: Crear una nueva reserva.
router.post('/reservations', reservaController.createReservation);

// /reservations/{reservation_id}: Detalles de una reserva por su ID.
router.get('/reservations/:reservation_id', reservaController.getReservationById);

// /reservations/user/{user_id}: Lista de reservas de un usuario específico.
router.get('/reservations/user/:user_id', reservaController.getReservationsByUser);

// /reservations/cancel/{reservation_id}: Cancelar una reserva.
router.put('/reservations/cancel/:reservation_id', reservaController.cancelReservation);

module.exports = router;
