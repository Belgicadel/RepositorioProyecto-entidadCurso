"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DatosPersonalesProfeController = void 0;
const postgres_1 = require("../../data/postgres");
const dtos_1 = require("../../domain/dtos");
class DatosPersonalesProfeController {
    //* DI
    constructor() {
        this.getDatosPersonalesProfe = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const datosPersonalesProfesores = yield postgres_1.prisma.datos_personal_prof.findMany();
            return res.json(datosPersonalesProfesores);
        });
        this.getDatosPersonalesProfeById = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const id = +req.params.id;
            if (isNaN(id))
                return res.status(400).json({ error: 'id argument is not a number' });
            const datosPersonalesProfe = yield postgres_1.prisma.datos_personal_prof.findFirst({
                where: { id }
            });
            (datosPersonalesProfe)
                ? res.json()
                : res.status(404).json({ error: `datosPersonalesProfe with id ${id} not found` });
        });
        this.createDatosPersonalesProfe = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const [error, createDatosPersonalesProfeDto] = dtos_1.CreateDatosPersonalesProfeDto.create(req.body);
            if (error)
                return res.status(400).json({ error });
            const datosPersonalesProfesores = yield postgres_1.prisma.datos_personal_prof.create({
                data: createDatosPersonalesProfeDto
            });
            res.json(datosPersonalesProfesores);
        });
        this.updateDatosPersonalesProfe = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const id = +req.params.id;
            const [error, updateDatosPersonalesProfeDto] = dtos_1.UpdateDatosPersonalesProfeDto.create(Object.assign(Object.assign({}, req.body), { id }));
            if (error)
                return res.status(400).json({ error });
            const datosPersonalesProfesores = yield postgres_1.prisma.datos_personal_prof.findFirst({
                where: { id }
            });
            if (!datosPersonalesProfesores)
                return res.status(404).json({ error: `datosPersonalesProfe with id ${id} not found` });
            const updateprofesor = yield postgres_1.prisma.datos_personal_prof.update({
                where: { id },
                data: updateDatosPersonalesProfeDto.values
            });
            res.json(updateprofesor);
        });
        this.deleteDatosPersonalesProfe = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const id = +req.params.id;
            const datosPersonalesProfesores = yield postgres_1.prisma.datos_personal_prof.findFirst({
                where: { id }
            });
            if (!datosPersonalesProfesores)
                return res.status(404).json({ error: `datosPersonalesProfe with id${id} not found` });
            const deleted = yield postgres_1.prisma.datos_personal_prof.delete({
                where: { id }
            });
            (deleted)
                ? res.json(deleted)
                : res.status(400).json({ error: `datosPersonalesProfe with id ${id} not found` });
        });
    }
}
exports.DatosPersonalesProfeController = DatosPersonalesProfeController;
