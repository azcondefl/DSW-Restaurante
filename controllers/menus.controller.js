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

// Lista de categorías de platos (sushi, sashimi, ramen, etc.).
exports.getCategorias = async (req, res) => {
    try {
        const categorias = await Categoria.find();
        return res.status(200).json(
            {
                message: 'Categorias obtenidas con éxito',
                data: categorias
            }
        );
    } catch (error) {
        return res.status(500).json(
            {
                message: 'Error al consultar categorias',
                data: error
            }
        );
    }
};

// Platos filtrados por una categoría específica.
exports.getMenuByCat = async (req, res) => {
    const menuCat = req.params.menuCat;
    try {
        const menu = await Menu.find({ categoria: menuCat });
        return res.status(200).json({
            message: 'Menú por categoría obtenido con éxito',
            data: menu
        });
    } catch (error) {
        return res.status(500).json({
            message: 'Error al consultar menú por categoría',
            data: error
        });
    }
};


