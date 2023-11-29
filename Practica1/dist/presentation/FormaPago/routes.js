"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FormaPagoRoutes = void 0;
const express_1 = require("express");
const controller_1 = require("./controller");
class FormaPagoRoutes {
    static get routes() {
        const router = (0, express_1.Router)();
        const formaPagoController = new controller_1.FormaPagoController();
        router.get('/', formaPagoController.getFormaPago);
        router.get('/:id', formaPagoController.getFormaPagoById);
        router.post('/', formaPagoController.createFormaPago);
        router.put('/:id', formaPagoController.updateFormaPago);
        router.delete('/:id', formaPagoController.deleteFormaPago);
        return router;
    }
}
exports.FormaPagoRoutes = FormaPagoRoutes;
