"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CursoRoutes = void 0;
const express_1 = require("express");
const controller_1 = require("./controller");
class CursoRoutes {
    static get routes() {
        const router = (0, express_1.Router)();
        const cursoController = new controller_1.CursoController();
        router.get('/', cursoController.getCurso);
        router.get('/:id', cursoController.getCursoById);
        router.post('/', cursoController.createCurso);
        router.put('/:id', cursoController.updatecurso);
        router.delete('/:id', cursoController.deletecurso);
        return router;
    }
}
exports.CursoRoutes = CursoRoutes;
