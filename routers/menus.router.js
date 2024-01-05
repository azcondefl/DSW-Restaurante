const express = require('express');
const router = express.Router();
const menusController = require('../controllers/menus.controller');
const authMiddleware = require('../utils/auth.middleware');

// /menu: Lista de todos los platos disponibles.
router.get('/menu', menusController.getMenus);

// /menu/{id}: Detalles de un plato específico por su ID.
router.get('/menu/:Id', menusController.getMenuById);

router.post('/', menusController.newMenu);

router.put('/:menuId',menusController.updateMenu);

router.delete('/:menuId', menusController.deleteMenu);


module.exports = router;