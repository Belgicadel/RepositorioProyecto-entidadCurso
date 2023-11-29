"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EstudianteRoutes = void 0;
const express_1 = require("express");
const controller_1 = require("./controller");
class EstudianteRoutes {
    static get routes() {
        const router = (0, express_1.Router)();
        const estudianteController = new controller_1.EstudianteController();
        router.get('/', estudianteController.getEstudiante);
        router.get('/:id', estudianteController.getEstudianteById);
        router.post('/', estudianteController.createEstudiante);
        router.put('/:id', estudianteController.updateestudiante);
        router.delete('/:id', estudianteController.deleteestudiante);
        return router;
    }
}
exports.EstudianteRoutes = EstudianteRoutes;
