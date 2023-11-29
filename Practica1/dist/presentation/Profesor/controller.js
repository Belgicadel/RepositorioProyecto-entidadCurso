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
exports.ProfesorController = void 0;
const postgres_1 = require("../../data/postgres");
const dtos_1 = require("../../domain/dtos");
class ProfesorController {
    //* DI
    constructor() {
        this.getProfesor = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const profesores = yield postgres_1.prisma.profesor.findMany();
            return res.json(profesores);
        });
        this.getProfesorById = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const id = +req.params.id;
            if (isNaN(id))
                return res.status(400).json({ error: 'id argument is not a number' });
            const profesor = yield postgres_1.prisma.profesor.findFirst({
                where: { id }
            });
            (profesor)
                ? res.json()
                : res.status(404).json({ error: `profesor with id ${id} not found` });
        });
        this.createProfesor = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const [error, createProfesorDto] = dtos_1.CreateProfesorDto.create(req.body);
            if (error)
                return res.status(400).json({ error });
            const profesores = yield postgres_1.prisma.profesor.create({
                data: createProfesorDto
            });
            res.json(profesores);
        });
        this.updateprofesor = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const id = +req.params.id;
            const [error, updateProfesorDto] = dtos_1.UpdateProfesorDto.create(Object.assign(Object.assign({}, req.body), { id }));
            if (error)
                return res.status(400).json({ error });
            const profesores = yield postgres_1.prisma.profesor.findFirst({
                where: { id }
            });
            if (!profesores)
                return res.status(404).json({ error: `profesor with id ${id} not found` });
            const updateprofesor = yield postgres_1.prisma.profesor.update({
                where: { id },
                data: updateProfesorDto.values
            });
            res.json(updateprofesor);
        });
        this.deleteprofesor = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const id = +req.params.id;
            const profesores = yield postgres_1.prisma.profesor.findFirst({
                where: { id }
            });
            if (!profesores)
                return res.status(404).json({ error: `profesor with id${id} not found` });
            const deleted = yield postgres_1.prisma.profesor.delete({
                where: { id }
            });
            (deleted)
                ? res.json(deleted)
                : res.status(400).json({ error: `profesor with id ${id} not found` });
        });
    }
}
exports.ProfesorController = ProfesorController;
