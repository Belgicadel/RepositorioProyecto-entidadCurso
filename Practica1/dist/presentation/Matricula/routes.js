"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MatriculaRoutes = void 0;
const express_1 = require("express");
const controller_1 = require("./controller");
class MatriculaRoutes {
    static get routes() {
        const router = (0, express_1.Router)();
        const matriculaController = new controller_1.MatriculaController();
        router.get('/', matriculaController.getMatricula);
        router.get('/:id', matriculaController.getMatriculaById);
        router.post('/', matriculaController.createMatricula);
        router.put('/:id', matriculaController.updatematricula);
        router.delete('/:id', matriculaController.deletematricula);
        return router;
    }
}
exports.MatriculaRoutes = MatriculaRoutes;
