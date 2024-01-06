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

exports.newMenu = async (req, res) => {
    try {
        const { name, categoria, ingredientes, descripcion, precio, img } = req.body;
        const newMenu = new Menu({ name, categoria, ingredientes, descripcion, precio, img });
        await newMenu.save();
        return res.status(200).json({
            message: "Platillo creado",
            data: newMenu
        });
    } catch (error) {
        return res.status(500).json({
            message: "Error al agregar platillo",
            data: error
        });
    }
};

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

exports.updateMenu = async (req,res) => {
    const menuId = req.params.menuId;
    const newData = req.body;
    try{
        const updateMenu = await Menu.findByIdAndUpdate(menuId, newData, {new: true});
        return res.status(201).json(
            {
                message: "Actualizar platillo por ID: ",
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


exports.deleteMenu = async (req,res) => {
    const menuId = req.params.menuId;
    try{
        await Menu.findByIdAndDelete(menuId);
        return res.status(200).json(
            {
                message: "Platillo eliminado con ID: "+bookId
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