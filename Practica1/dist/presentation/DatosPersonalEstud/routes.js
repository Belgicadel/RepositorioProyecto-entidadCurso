"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DatosPersonalesEstudRoutes = void 0;
const express_1 = require("express");
const controller_1 = require("./controller");
class DatosPersonalesEstudRoutes {
    static get routes() {
        const router = (0, express_1.Router)();
        const datosPersonalesEstudController = new controller_1.DatosPersonalesEstudController();
        router.get('/', datosPersonalesEstudController.getDatosPersonalesEstud);
        router.get('/:id', datosPersonalesEstudController.getDatosPersonalesEstudById);
        router.post('/', datosPersonalesEstudController.createDatosPersonalesEstud);
        router.put('/:id', datosPersonalesEstudController.updateDatosPersonalesEstud);
        router.delete('/:id', datosPersonalesEstudController.deleteDatosPersonalesEstud);
        return router;
    }
}
exports.DatosPersonalesEstudRoutes = DatosPersonalesEstudRoutes;
