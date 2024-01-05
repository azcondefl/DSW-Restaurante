const express = require('express');
const router = express.Router();
<<<<<<< Updated upstream
const pedidosController = require('../controllers/pedidos.controller');
=======
const pedidosController = require('../controllers/pedido.controller');
>>>>>>> Stashed changes
const authMiddleware = require('../utils/auth.middleware');

// /orders: Crear un nuevo pedido.
router.post('/orders', pedidosController.createOrder);

// /orders/{order_id}: Detalles de un pedido específico por su ID.
router.get('/orders/:order_id', pedidosController.getOrderById);

// /orders/user/{user_id}: Lista de pedidos de un usuario específico.
router.get('/orders/user/:user_id', pedidosController.getOrdersByUser);

// /orders/status/{status}: Lista de pedidos por estado (pendiente, en preparación, entregado, etc.).
router.get('/orders/status/:status', pedidosController.getOrdersByStatus);

// /orders/{order_id}/status: Actualizar el estado de un pedido.
router.put('/orders/:order_id/status', pedidosController.updateOrderStatus);

module.exports = router;
