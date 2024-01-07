const express = require('express');
const router = express.Router();
const clientesController = require('../controllers/clientes.controller');
const authMiddleware = require('../utils/auth.middleware');

// /clientes: Lista de todos los clientes disponibles.
router.get('/clientes', clientesController.getClientes);

// /clientes/{id}: Detalles de un plato específico por su ID.
router.get('/clientes/:Id', clientesController.getClientesById);

router.post('/', clientesController.newClientes);

router.put('/:clientesId',clientesController.updateClientes);

router.delete('/:clientesId', clientesController.deleteClientes);


module.exports = router;