"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProfesorRoutes = void 0;
const express_1 = require("express");
const controller_1 = require("./controller");
class ProfesorRoutes {
    static get routes() {
        const router = (0, express_1.Router)();
        const profesorController = new controller_1.ProfesorController();
        router.get('/', profesorController.getProfesor);
        router.get('/:id', profesorController.getProfesorById);
        router.post('/', profesorController.createProfesor);
        router.put('/:id', profesorController.updateprofesor);
        router.delete('/:id', profesorController.deleteprofesor);
        return router;
    }
}
exports.ProfesorRoutes = ProfesorRoutes;
