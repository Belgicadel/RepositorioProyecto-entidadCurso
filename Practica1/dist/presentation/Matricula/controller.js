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
exports.MatriculaController = void 0;
const postgres_1 = require("../../data/postgres");
const dtos_1 = require("../../domain/dtos");
class MatriculaController {
    //* DI
    constructor() {
        this.getMatricula = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const matriculas = yield postgres_1.prisma.matricula.findMany();
            return res.json(matriculas);
        });
        this.getMatriculaById = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const id = +req.params.id;
            if (isNaN(id))
                return res.status(400).json({ error: 'id argument is not a number' });
            const matricula = yield postgres_1.prisma.matricula.findFirst({
                where: { id }
            });
            (matricula)
                ? res.json()
                : res.status(404).json({ error: `Matricula with id ${id} not found` });
        });
        this.createMatricula = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const [error, creatematriculaDto] = dtos_1.CreateMatriculaDto.create(req.body);
            if (error)
                return res.status(400).json({ error });
            const matriculas = yield postgres_1.prisma.matricula.create({
                data: creatematriculaDto
            });
            res.json(matriculas);
        });
        this.updatematricula = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const id = +req.params.id;
            const [error, updatematriculaDto] = dtos_1.UpdateMatriculaDto.create(Object.assign(Object.assign({}, req.body), { id }));
            if (error)
                return res.status(400).json({ error });
            const matriculas = yield postgres_1.prisma.matricula.findFirst({
                where: { id }
            });
            if (!matriculas)
                return res.status(404).json({ error: `Matriculas with id ${id} not found` });
            const updatematricula = yield postgres_1.prisma.matricula.update({
                where: { id },
                data: updatematriculaDto.values
            });
            res.json(updatematricula);
        });
        this.deletematricula = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const id = +req.params.id;
            const matriculas = yield postgres_1.prisma.matricula.findFirst({
                where: { id }
            });
            if (!matriculas)
                return res.status(404).json({ error: `Matricula with id${id} not found` });
            const deleted = yield postgres_1.prisma.matricula.delete({
                where: { id }
            });
            (deleted)
                ? res.json(deleted)
                : res.status(400).json({ error: `Matricula with id ${id} not found` });
        });
    }
}
exports.MatriculaController = MatriculaController;
