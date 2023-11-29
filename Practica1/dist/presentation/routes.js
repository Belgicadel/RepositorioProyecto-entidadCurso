"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppRoutes = void 0;
const express_1 = require("express");
const routes_1 = require("./Categoria/routes");
const routes_2 = require("./Curso/routes");
const routes_3 = require("./DatosPersonalEstud/routes");
const routes_4 = require("./DatosPersonalProfe/routes");
const routes_5 = require("./DuraCurso/routes");
const routes_6 = require("./Estudiante/routes");
const routes_7 = require("./FormacionProfecional/routes");
const routes_8 = require("./FormaPago/routes");
const routes_9 = require("./Instrumento/routes");
const routes_10 = require("./Matricula/routes");
const routes_11 = require("./PeriodoAcademico/routes");
const routes_12 = require("./Profesor/routes");
const routes_13 = require("./Tipocurso/routes");
const routes_14 = require("./TipoInstrumento/routes");
const routes_15 = require("./Ubicacion/routes");
class AppRoutes {
    static get routes() {
        const router = (0, express_1.Router)();
        router.use('/api/categorias', routes_1.CategoriaRoutes.routes);
        router.use('/api/cursos', routes_2.CursoRoutes.routes);
        router.use('/api/datosPersonalesEstudiantes', routes_3.DatosPersonalesEstudRoutes.routes);
        router.use('/api/datosPersonalesProfesores', routes_4.DatosPersonalesProfeRoutes.routes);
        router.use('/api/duracursos', routes_5.DuracurRoutes.routes);
        router.use('/api/estudiantes', routes_6.EstudianteRoutes.routes);
        router.use('/api/formacionProfecionales', routes_7.FormacionProfecionalRoutes.routes);
        router.use('/api/formaPagos', routes_8.FormaPagoRoutes.routes);
        router.use('/api/instrumentos', routes_9.InstrumentoRoutes.routes);
        router.use('/api/matriculas', routes_10.MatriculaRoutes.routes);
        router.use('/api/periodoAcademicos', routes_11.PeriodoAcademicoRoutes.routes);
        router.use('/api/profesores', routes_12.ProfesorRoutes.routes);
        router.use('/api/tipoCursos', routes_13.TipocursoRoutes.routes);
        router.use('/api/tipoInstrumentos', routes_14.TipoInstrumentoRoutes.routes);
        router.use('/api/ubicaciones', routes_15.UbicacionRoutes.routes);
        return router;
    }
}
exports.AppRoutes = AppRoutes;
