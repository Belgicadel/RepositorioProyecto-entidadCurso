"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoriaRoutes = void 0;
const express_1 = require("express");
const controller_1 = require("./controller");
class CategoriaRoutes {
    static get routes() {
        const router = (0, express_1.Router)();
        const categoriaController = new controller_1.CategoriaController();
        router.get('/', categoriaController.getCategoria);
        router.get('/:id', categoriaController.getCategoriaById);
        router.post('/', categoriaController.createCategoria);
        router.put('/:id', categoriaController.updatecategoria);
        router.delete('/:id', categoriaController.deletecategoria);
        return router;
    }
}
exports.CategoriaRoutes = CategoriaRoutes;
