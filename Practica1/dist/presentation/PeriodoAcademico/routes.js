"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PeriodoAcademicoRoutes = void 0;
const express_1 = require("express");
const controller_1 = require("./controller");
class PeriodoAcademicoRoutes {
    static get routes() {
        const router = (0, express_1.Router)();
        const periodoAcademicoController = new controller_1.PeriodoAcademicoController();
        router.get('/', periodoAcademicoController.getPeriodoAcademico);
        router.get('/:id', periodoAcademicoController.getPeriodoAcademicoById);
        router.post('/', periodoAcademicoController.createPeriodoAcademico);
        router.put('/:id', periodoAcademicoController.updatePeriodoAcademico);
        router.delete('/:id', periodoAcademicoController.deletePeriodoAcademico);
        return router;
    }
}
exports.PeriodoAcademicoRoutes = PeriodoAcademicoRoutes;
