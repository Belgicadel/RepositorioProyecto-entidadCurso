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
exports.DatosPersonalesEstudController = void 0;
const postgres_1 = require("../../data/postgres");
const dtos_1 = require("../../domain/dtos");
class DatosPersonalesEstudController {
    //* DI
    constructor() {
        this.getDatosPersonalesEstud = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const datosPersonalesEstudiantes = yield postgres_1.prisma.datos_personales_es.findMany();
            return res.json(datosPersonalesEstudiantes);
        });
        this.getDatosPersonalesEstudById = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const id = +req.params.id;
            if (isNaN(id))
                return res.status(400).json({ error: 'id argument is not a number' });
            const datosPersonalesEstud = yield postgres_1.prisma.datos_personales_es.findFirst({
                where: { id }
            });
            (datosPersonalesEstud)
                ? res.json()
                : res.status(404).json({ error: `datosPersonalesEstud with id ${id} not found` });
        });
        this.createDatosPersonalesEstud = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const [error, createDatosPersonalesEstudDto] = dtos_1.CreateDatosPersonalesEstudDto.create(req.body);
            if (error)
                return res.status(400).json({ error });
            const datosPersonalesEstudiantes = yield postgres_1.prisma.datos_personales_es.create({
                data: createDatosPersonalesEstudDto
            });
            res.json(datosPersonalesEstudiantes);
        });
        this.updateDatosPersonalesEstud = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const id = +req.params.id;
            const [error, updateDatosPersonalesEstudDto] = dtos_1.UpdateDatosPersonalesEstudDto.create(Object.assign(Object.assign({}, req.body), { id }));
            if (error)
                return res.status(400).json({ error });
            const datosPersonalesEstudiantes = yield postgres_1.prisma.datos_personales_es.findFirst({
                where: { id }
            });
            if (!datosPersonalesEstudiantes)
                return res.status(404).json({ error: `datosPersonalesEstud with id ${id} not found` });
            const updateestudiante = yield postgres_1.prisma.datos_personales_es.update({
                where: { id },
                data: updateDatosPersonalesEstudDto.values
            });
            res.json(updateestudiante);
        });
        this.deleteDatosPersonalesEstud = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const id = +req.params.id;
            const datosPersonalesEstudiantes = yield postgres_1.prisma.datos_personales_es.findFirst({
                where: { id }
            });
            if (!datosPersonalesEstudiantes)
                return res.status(404).json({ error: `datosPersonalesEstud with id${id} not found` });
            const deleted = yield postgres_1.prisma.datos_personales_es.delete({
                where: { id }
            });
            (deleted)
                ? res.json(deleted)
                : res.status(400).json({ error: `datosPersonalesEstud with id ${id} not found` });
        });
    }
}
exports.DatosPersonalesEstudController = DatosPersonalesEstudController;
