"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TipocursoRoutes = void 0;
const express_1 = require("express");
const controller_1 = require("./controller");
class TipocursoRoutes {
    static get routes() {
        const router = (0, express_1.Router)();
        const tipocursoController = new controller_1.TipocursoController();
        router.get('/', tipocursoController.getTipoCurso);
        router.get('/:id', tipocursoController.gettipocursoById);
        router.post('/', tipocursoController.createTipocur);
        router.put('/:id', tipocursoController.updatetipocurso);
        router.delete('/:id', tipocursoController.deletetipocur);
        return router;
    }
}
exports.TipocursoRoutes = TipocursoRoutes;
