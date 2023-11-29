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
exports.CursoController = void 0;
const postgres_1 = require("../../data/postgres");
const dtos_1 = require("../../domain/dtos");
class CursoController {
    //* DI
    constructor() {
        this.getCurso = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const cursos = yield postgres_1.prisma.curso.findMany();
            return res.json(cursos);
        });
        this.getCursoById = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const id = +req.params.id;
            if (isNaN(id))
                return res.status(400).json({ error: 'id argument is not a number' });
            const curso = yield postgres_1.prisma.curso.findFirst({
                where: { id }
            });
            (curso)
                ? res.json()
                : res.status(404).json({ error: `Curso with id ${id} not found` });
        });
        this.createCurso = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const [error, createcursoDto] = dtos_1.CreatecursoDto.create(req.body);
            if (error)
                return res.status(400).json({ error });
            const cursos = yield postgres_1.prisma.curso.create({
                data: createcursoDto
            });
            res.json(cursos);
        });
        this.updatecurso = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const id = +req.params.id;
            const [error, updatecursoDto] = dtos_1.UpdatecursoDto.create(Object.assign(Object.assign({}, req.body), { id }));
            if (error)
                return res.status(400).json({ error });
            const cursos = yield postgres_1.prisma.curso.findFirst({
                where: { id }
            });
            if (!cursos)
                return res.status(404).json({ error: `Curso with id ${id} not found` });
            const updatecurso = yield postgres_1.prisma.curso.update({
                where: { id },
                data: updatecursoDto.values
            });
            res.json(updatecurso);
        });
        this.deletecurso = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const id = +req.params.id;
            const cursos = yield postgres_1.prisma.curso.findFirst({
                where: { id }
            });
            if (!cursos)
                return res.status(404).json({ error: `Curso with id${id} not found` });
            const deleted = yield postgres_1.prisma.curso.delete({
                where: { id }
            });
            (deleted)
                ? res.json(deleted)
                : res.status(400).json({ error: `Curso with id ${id} not found` });
        });
    }
}
exports.CursoController = CursoController;
