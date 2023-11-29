"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UbicacionRoutes = void 0;
const express_1 = require("express");
const controller_1 = require("./controller");
class UbicacionRoutes {
    static get routes() {
        const router = (0, express_1.Router)();
        const ubicacionController = new controller_1.UbicacionController();
        router.get('/', ubicacionController.getUbicacion);
        router.get('/:id', ubicacionController.getUbicacionById);
        router.post('/', ubicacionController.createUbicacion);
        router.put('/:id', ubicacionController.updateUbicacion);
        router.delete('/:id', ubicacionController.deleteUbicacion);
        return router;
    }
}
exports.UbicacionRoutes = UbicacionRoutes;
