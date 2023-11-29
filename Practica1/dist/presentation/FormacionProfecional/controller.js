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
exports.FormacionProfecionalController = void 0;
const postgres_1 = require("../../data/postgres");
const dtos_1 = require("../../domain/dtos");
class FormacionProfecionalController {
    //* DI
    constructor() {
        this.getFormacionProfecional = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const formacionProfecionales = yield postgres_1.prisma.formacion_profecional.findMany();
            return res.json(formacionProfecionales);
        });
        this.getFormacionProfecionalById = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const id = +req.params.id;
            if (isNaN(id))
                return res.status(400).json({ error: 'id argument is not a number' });
            const formacionProfecional = yield postgres_1.prisma.formacion_profecional.findFirst({
                where: { id }
            });
            (formacionProfecional)
                ? res.json()
                : res.status(404).json({ error: `formacionProfecional with id ${id} not found` });
        });
        this.createFormacionProfecional = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const [error, createFormacionProfecionalProfeDto] = dtos_1.CreateFormacionProfecionalProfeDto.create(req.body);
            if (error)
                return res.status(400).json({ error });
            const formacionProfecionales = yield postgres_1.prisma.formacion_profecional.create({
                data: createFormacionProfecionalProfeDto
            });
            res.json(formacionProfecionales);
        });
        this.updateFormacionProfecional = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const id = +req.params.id;
            const [error, updateFormacionProfecionalProfeDto] = dtos_1.UpdateFormacionProfecionalProfeDto.create(Object.assign(Object.assign({}, req.body), { id }));
            if (error)
                return res.status(400).json({ error });
            const formacionProfecionales = yield postgres_1.prisma.formacion_profecional.findFirst({
                where: { id }
            });
            if (!formacionProfecionales)
                return res.status(404).json({ error: `formacionProfecional with id ${id} not found` });
            const updateformacionProfecional = yield postgres_1.prisma.formacion_profecional.update({
                where: { id },
                data: updateFormacionProfecionalProfeDto.values
            });
            res.json(updateformacionProfecional);
        });
        this.deleteFormacionProfecional = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const id = +req.params.id;
            const formacionProfecionales = yield postgres_1.prisma.formacion_profecional.findFirst({
                where: { id }
            });
            if (!formacionProfecionales)
                return res.status(404).json({ error: `formacionProfecional with id${id} not found` });
            const deleted = yield postgres_1.prisma.formacion_profecional.delete({
                where: { id }
            });
            (deleted)
                ? res.json(deleted)
                : res.status(400).json({ error: `formacionProfecional with id ${id} not found` });
        });
    }
}
exports.FormacionProfecionalController = FormacionProfecionalController;
