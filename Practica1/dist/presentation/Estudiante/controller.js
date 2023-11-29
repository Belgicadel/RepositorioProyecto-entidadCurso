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
exports.EstudianteController = void 0;
const postgres_1 = require("../../data/postgres");
const dtos_1 = require("../../domain/dtos");
class EstudianteController {
    //* DI
    constructor() {
        this.getEstudiante = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const estudiantes = yield postgres_1.prisma.estudiante.findMany();
            return res.json(estudiantes);
        });
        this.getEstudianteById = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const id = +req.params.id;
            if (isNaN(id))
                return res.status(400).json({ error: 'id argument is not a number' });
            const estudiante = yield postgres_1.prisma.estudiante.findFirst({
                where: { id }
            });
            (estudiante)
                ? res.json()
                : res.status(404).json({ error: `estudiante with id ${id} not found` });
        });
        this.createEstudiante = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const [error, createEstudianteDto] = dtos_1.CreateEstudianteDto.create(req.body);
            if (error)
                return res.status(400).json({ error });
            const estudiantes = yield postgres_1.prisma.estudiante.create({
                data: createEstudianteDto
            });
            res.json(estudiantes);
        });
        this.updateestudiante = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const id = +req.params.id;
            const [error, updateEstudianteDto] = dtos_1.UpdateEstudianteDto.create(Object.assign(Object.assign({}, req.body), { id }));
            if (error)
                return res.status(400).json({ error });
            const estudiantes = yield postgres_1.prisma.estudiante.findFirst({
                where: { id }
            });
            if (!estudiantes)
                return res.status(404).json({ error: `estudiante with id ${id} not found` });
            const updateestudiante = yield postgres_1.prisma.estudiante.update({
                where: { id },
                data: updateEstudianteDto.values
            });
            res.json(updateestudiante);
        });
        this.deleteestudiante = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const id = +req.params.id;
            const estudiantes = yield postgres_1.prisma.estudiante.findFirst({
                where: { id }
            });
            if (!estudiantes)
                return res.status(404).json({ error: `estudiante with id${id} not found` });
            const deleted = yield postgres_1.prisma.estudiante.delete({
                where: { id }
            });
            (deleted)
                ? res.json(deleted)
                : res.status(400).json({ error: `estudiante with id ${id} not found` });
        });
    }
}
exports.EstudianteController = EstudianteController;
