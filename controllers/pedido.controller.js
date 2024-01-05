const Pedido = require('../models/pedido.model');

// Crear un nuevo pedido.
exports.createOrder = async (req, res) => {
    try {
        const nuevoPedido = await Pedido.create(req.body);
        return res.status(201).json({
            message: 'Pedido creado con éxito',
            data: nuevoPedido
        });
    } catch (error) {
        return res.status(500).json({
            message: 'Error al crear el pedido',
            data: error
        });
    }
};

// Detalles de un pedido específico por su ID.
exports.getOrderById = async (req, res) => {
    const orderId = req.params.order_id;
    try {
        const pedido = await Pedido.findById(orderId);
        return res.status(200).json({
            message: 'Detalles del pedido obtenidos con éxito',
            data: pedido
        });
    } catch (error) {
        return res.status(500).json({
            message: 'Error al obtener los detalles del pedido por ID',
            data: error
        });
    }
};

// Lista de pedidos de un usuario específico.
exports.getOrdersByUser = async (req, res) => {
    const userId = req.params.user_id;
    try {
        const pedidos = await Pedido.find({ user: userId });
        return res.status(200).json({
            message: 'Lista de pedidos de usuario obtenida con éxito',
            data: pedidos
        });
    } catch (error) {
        return res.status(500).json({
            message: 'Error al obtener la lista de pedidos por usuario',
            data: error
        });
    }
};

// Lista de pedidos por estado (pendiente, en preparación, entregado, etc.).
exports.getOrdersByStatus = async (req, res) => {
    const status = req.params.status;
    try {
        const pedidos = await Pedido.find({ estado: status });
        return res.status(200).json({
            message: 'Lista de pedidos por estado obtenida con éxito',
            data: pedidos
        });
    } catch (error) {
        return res.status(500).json({
            message: 'Error al obtener la lista de pedidos por estado',
            data: error
        });
    }
};

// Actualizar el estado de un pedido.
exports.updateOrderStatus = async (req, res) => {
    const orderId = req.params.order_id;
    const nuevoEstado = req.body.estado;
    try {
        const pedidoActualizado = await Pedido.findByIdAndUpdate(orderId, { estado: nuevoEstado }, { new: true });
        return res.status(200).json({
            message: 'Estado del pedido actualizado con éxito',
            data: pedidoActualizado
        });
    } catch (error) {
        return res.status(500).json({
            message: 'Error al actualizar el estado del pedido',
            data: error
        });
    }
};
