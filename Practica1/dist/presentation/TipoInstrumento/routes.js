"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TipoInstrumentoRoutes = void 0;
const express_1 = require("express");
const controller_1 = require("./controller");
class TipoInstrumentoRoutes {
    static get routes() {
        const router = (0, express_1.Router)();
        const tipoinstrumentoController = new controller_1.TipoInstrumentoController();
        router.get('/', tipoinstrumentoController.getTipoInstrumento);
        router.get('/:id', tipoinstrumentoController.getTipoInstrumentoById);
        router.post('/', tipoinstrumentoController.createTipoInstrumento);
        router.put('/:id', tipoinstrumentoController.updatetipoinstrumento);
        router.delete('/:id', tipoinstrumentoController.deletetipoinstrumento);
        return router;
    }
}
exports.TipoInstrumentoRoutes = TipoInstrumentoRoutes;
