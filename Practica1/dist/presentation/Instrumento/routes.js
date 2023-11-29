"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InstrumentoRoutes = void 0;
const express_1 = require("express");
const controller_1 = require("./controller");
class InstrumentoRoutes {
    static get routes() {
        const router = (0, express_1.Router)();
        const instrumentoController = new controller_1.InstrumentoController();
        router.get('/', instrumentoController.getInstrumento);
        router.get('/:id', instrumentoController.getInstrumentoById);
        router.post('/', instrumentoController.createInstrumento);
        router.put('/:id', instrumentoController.updateinstrumento);
        router.delete('/:id', instrumentoController.deleteinstrumento);
        return router;
    }
}
exports.InstrumentoRoutes = InstrumentoRoutes;
