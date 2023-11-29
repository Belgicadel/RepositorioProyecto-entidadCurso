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
exports.DuraCurController = void 0;
const postgres_1 = require("../../data/postgres");
const dtos_1 = require("../../domain/dtos");
class DuraCurController {
    //* DI
    constructor() {
        this.getDuracurso = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const duracur = yield postgres_1.prisma.duracion_curso.findMany();
            return res.json(duracur);
        });
        this.getDuracursobyId = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const id = +req.params.id;
            if (isNaN(id))
                return res.status(400).json({ error: 'id argument is not a number' });
            const duracur = yield postgres_1.prisma.duracion_curso.findFirst({
                where: { id }
            });
            (duracur)
                ? res.json(duracur)
                : res.status(404).json({ error: `Duracurso with id ${id} not found` });
        });
        this.createduracur = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const [error, createDuracurDto] = dtos_1.CreateDuracurDto.create(req.body);
            if (error)
                return res.status(400).json({ error });
            const duracur = yield postgres_1.prisma.duracion_curso.create({
                data: createDuracurDto
            });
            res.json(duracur);
        });
        this.updateduracur = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const id = +req.params.id;
            const [error, updateduracurDto] = dtos_1.UpdateduracurDto.create(Object.assign(Object.assign({}, req.body), { id }));
            if (error)
                return res.status(400).json({ error });
            const duracur = yield postgres_1.prisma.duracion_curso.findFirst({
                where: { id }
            });
            if (!duracur)
                return res.status(404).json({ error: `DuracionCurso with id${id} not found` });
            const updateduracur = yield postgres_1.prisma.duracion_curso.update({
                where: { id },
                data: updateduracurDto.values
            });
            res.json(updateduracur);
        });
        this.deleteduracur = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const id = +req.params.id;
            const duracur = yield postgres_1.prisma.duracion_curso.findFirst({
                where: { id }
            });
            if (!duracur)
                return res.status(404).json({ error: `DuracionCurso with id${id} not found` });
            const deleted = yield postgres_1.prisma.duracion_curso.delete({
                where: { id }
            });
            (deleted)
                ? res.json(deleted)
                : res.status(400).json({ error: `Movie with id ${id} not found` });
        });
    }
}
exports.DuraCurController = DuraCurController;
