const express = require('express');
const router = express.Router();
const menusController = require('../controllers/menus.controller');
const authMiddleware = require('../utils/auth.middleware');

// /menu: Lista de todos los platos disponibles.
router.get('/menu', menusController.getMenus);

// /menu/{id}: Detalles de un plato específico por su ID.
router.get('/menu/:Id', menusController.getMenuById);

// /menu/categorias: Lista de categorías de platos (sushi, sashimi, ramen, etc.).
router.get('/menu/:categorias', menusController.getCategorias);

// /menu/category/{category_name}: Platos filtrados por una categoría específica.
router.get('/menu/categoria/:category_name', menusController.getMenuByCat);

module.exports = router;