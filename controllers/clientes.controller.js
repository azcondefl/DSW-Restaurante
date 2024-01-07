const Clientes = require('../models/clientes.model');


//Lista de todos los clientes disponibles.
exports.getClientes = async (req, res) => {
    try {
        const clientes = await Clientes.find();
        return res.status(200).json(
            {
                message: 'Clientes obtenidos con éxito',
                data: clientes
            }
        );
    } catch (error) {
        return res.status(500).json(
            {
                message: 'Error al consultar clientes',
                data: error
            }
        );
    }
};

exports.newClientes = async (req, res) => {
    try {
        const {nombres, aPaterno, aMaterno, fecNac } = req.body;
        const newClientes = new Clientes({nombres, aPaterno, aMaterno, fecNac});
        await newClientes.save();
        return res.status(200).json({
            message: "Cliente agregado",
            data: newClientes
        });
    } catch (error) {
        return res.status(500).json({
            message: "Error al registrar cliente",
            data: error
        });
    }
};

// Detalles de un cliente específico por su ID.
exports.getClientesById = async (req, res) => {
    const clientesId = req.params.clientesId;
    try {
        const clientes = await Clientes.findById(clientesId);
        return res.status(200).json(
            {
                message: 'Cliente obtenido con éxito',
                data: clientes
            }
        );
    } catch (error) {
        return res.status(500).json(
            {
                message: 'Error al consultar cliente con ID',
                data: error
            }
        );
    }
};

exports.updateClientes = async (req,res) => {
    const clientesId = req.params.clientesId;
    const newData = req.body;
    try{
        const updateClientes = await Clientes.findByIdAndUpdate(clientesId, newData, {new: true});
        return res.status(201).json(
            {
                message: "Actualizar cliente por ID: ",
                data: updateClientes 
            }
        );
    }catch (error){
        return res.status(500).json(
            {
                message: "Error al actualizar",
                data: error
            }
        );
    }
}


exports.deleteClientes = async (req,res) => {
    const clientesId = req.params.clientesId;
    try{
        await Clientes.findByIdAndDelete(clientesId);
        return res.status(200).json(
            {
                message: "Cliente eliminado con ID: "+clientesId
            }
        );
    }catch (error){
        return res.status(500).json(
            {
                message: "Error al eliminar cliente",
                data: error
            }
        );
    }
}