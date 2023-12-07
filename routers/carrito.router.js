const express = require('express');
const router = express.Router();
const carritoController = require('../controllers/carrito.controller');
const authMiddleware = require('../utils/auth.middleware');

// /cart/add: Agregar un artículo al carrito.
router.post('/cart/add', carritoController.addToCart);

// /cart/remove/{item_id}: Eliminar un artículo del carrito.
router.delete('/cart/remove/:item_id', carritoController.removeFromCart);

// /cart/clear: Vaciar completamente el carrito.
router.delete('/cart/clear', carritoController.clearCart);

// /cart/view: Ver el contenido actual del carrito.
router.get('/cart/view', carritoController.viewCart);

module.exports = router;
