"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FormacionProfecionalRoutes = void 0;
const express_1 = require("express");
const controller_1 = require("./controller");
class FormacionProfecionalRoutes {
    static get routes() {
        const router = (0, express_1.Router)();
        const formacionProfecionalController = new controller_1.FormacionProfecionalController();
        router.get('/', formacionProfecionalController.getFormacionProfecional);
        router.get('/:id', formacionProfecionalController.getFormacionProfecionalById);
        router.post('/', formacionProfecionalController.createFormacionProfecional);
        router.put('/:id', formacionProfecionalController.updateFormacionProfecional);
        router.delete('/:id', formacionProfecionalController.deleteFormacionProfecional);
        return router;
    }
}
exports.FormacionProfecionalRoutes = FormacionProfecionalRoutes;
