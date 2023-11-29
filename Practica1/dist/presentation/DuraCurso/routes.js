"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DuracurRoutes = void 0;
const express_1 = require("express");
const controller_1 = require("./controller");
class DuracurRoutes {
    static get routes() {
        const router = (0, express_1.Router)();
        const DuraCurControllers = new controller_1.DuraCurController();
        router.get('/', DuraCurControllers.getDuracurso);
        router.get('/:id', DuraCurControllers.getDuracursobyId);
        router.post('/id', DuraCurControllers.createduracur);
        router.put('/:id', DuraCurControllers.updateduracur);
        router.delete('/:id', DuraCurControllers.deleteduracur);
        return router;
    }
}
exports.DuracurRoutes = DuracurRoutes;
