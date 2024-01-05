const Menu = require('../models/menu.model');
const Categoria = require('../models/categoria.model');

//Lista de todos los platos disponibles.
exports.getMenus = async (req, res) => {
    try {
        const menus = await Menu.find();
        return res.status(200).json(
            {
                message: 'Menú obtenido con éxito',
                data: menus
            }
        );
    } catch (error) {
        return res.status(500).json(
            {
                message: 'Error al consultar menú',
                data: error
            }
        );
    }
};

exports.newMenu = (req,res) => {
    try{
        const newMenu = req.body;
        return res.status(200).json(
            {
                message: "Platillo creado",
                data: newMenu
            }
        );
    }catch (error){
        return res.status(500).json(
            {
                message: "Error al crear el platillo",
                data: error
            }
        );
    }
}

// Detalles de un plato específico por su ID.
exports.getMenuById = async (req, res) => {
    const menuId = req.params.menuId;
    try {
        const menu = await Menu.findById(menuId);
        return res.status(200).json(
            {
                message: 'Platillo obtenido con éxito',
                data: menu
            }
        );
    } catch (error) {
        return res.status(500).json(
            {
                message: 'Error al consultar Platillo con ID',
                data: error
            }
        );
    }
};

exports.updateMenu = (req,res) => {
    try{
        const menuId = req.params.menuId;
        const newMenu = req.body;

        return res.status(201).json(
            {
                message: "Actualizar platillo por ID: "+menuId,
                data: updateMenu
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


exports.deleteMenu = (req,res) => {
    try{
        const menuId = req.params.menuId;
        return res.status(200).json(
            {
                message: "Platillo eliminado con ID: "+menuId
            }
        );
    }catch (error){
        return res.status(500).json(
            {
                message: "Error al eliminar platillo",
                data: error
            }
        );
    }
}