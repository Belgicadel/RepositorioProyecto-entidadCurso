"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DatosPersonalesProfeRoutes = void 0;
const express_1 = require("express");
const controller_1 = require("./controller");
class DatosPersonalesProfeRoutes {
    static get routes() {
        const router = (0, express_1.Router)();
        const datosPersonalesProfeController = new controller_1.DatosPersonalesProfeController();
        router.get('/', datosPersonalesProfeController.getDatosPersonalesProfe);
        router.get('/:id', datosPersonalesProfeController.getDatosPersonalesProfeById);
        router.post('/', datosPersonalesProfeController.createDatosPersonalesProfe);
        router.put('/:id', datosPersonalesProfeController.updateDatosPersonalesProfe);
        router.delete('/:id', datosPersonalesProfeController.deleteDatosPersonalesProfe);
        return router;
    }
}
exports.DatosPersonalesProfeRoutes = DatosPersonalesProfeRoutes;
