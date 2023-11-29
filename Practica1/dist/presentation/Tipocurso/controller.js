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
exports.TipocursoController = void 0;
const postgres_1 = require("../../data/postgres");
const dtos_1 = require("../../domain/dtos");
class TipocursoController {
    //* DI
    constructor() {
        this.getTipoCurso = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const tipocurso = yield postgres_1.prisma.tipo_curso.findMany();
            return res.json(tipocurso);
        });
        this.gettipocursoById = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const id = +req.params.id;
            //    localhost:3000
            if (isNaN(id))
                return res.status(404).json({ error: 'id argument is not a number' });
            const tipocurso = yield postgres_1.prisma.tipo_curso.findFirst({
                where: { id }
            });
            (tipocurso)
                ? res.json(tipocurso)
                : res.status(404).json({ error: `TipoCurso with id ${id} not found` });
        });
        this.createTipocur = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const [error, createtipocursoDto] = dtos_1.CreatetipocursoDto.create(req.body);
            if (error)
                return res.status(400).json({ error });
            const tipocurso = yield postgres_1.prisma.tipo_curso.create({
                data: createtipocursoDto
            });
            res.json(tipocurso);
        });
        this.updatetipocurso = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const id = +req.params.id;
            const [error, updatetipocursoDto] = dtos_1.UpdatetipocursoDto.create(Object.assign(Object.assign({}, req.body), { id }));
            if (error)
                return res.status(400).json({ error });
            const tipocurso = yield postgres_1.prisma.tipo_curso.findFirst({
                where: { id }
            });
            if (!tipocurso)
                return res.status(404).json({ error: `TipoCurso with id ${id} not found` });
            const updatetipocurso = yield postgres_1.prisma.tipo_curso.update({
                where: { id },
                data: updatetipocursoDto.values
            });
            res.json(updatetipocurso);
        });
        this.deletetipocur = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const id = +req.params.id;
            const tipocurso = yield postgres_1.prisma.tipo_curso.findFirst({
                where: { id }
            });
            if (!tipocurso)
                return res.status(404).json({ error: `TipoCurso with id${id} not found` });
            const deleted = yield postgres_1.prisma.tipo_curso.delete({
                where: { id }
            });
            (deleted)
                ? res.json(deleted)
                : res.status(400).json({ error: `TipoCurso with id ${id} not found` });
        });
    }
}
exports.TipocursoController = TipocursoController;
