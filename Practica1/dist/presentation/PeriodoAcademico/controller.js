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
exports.PeriodoAcademicoController = void 0;
const postgres_1 = require("../../data/postgres");
const dtos_1 = require("../../domain/dtos");
class PeriodoAcademicoController {
    //* DI
    constructor() {
        this.getPeriodoAcademico = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const periodoacademicos = yield postgres_1.prisma.periodo_Academico.findMany();
            return res.json(periodoacademicos);
        });
        this.getPeriodoAcademicoById = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const id = +req.params.id;
            if (isNaN(id))
                return res.status(400).json({ error: 'id argument is not a number' });
            const periodoacademico = yield postgres_1.prisma.periodo_Academico.findFirst({
                where: { id }
            });
            (periodoacademico)
                ? res.json()
                : res.status(404).json({ error: `Periodo Academicos with id ${id} not found` });
        });
        this.createPeriodoAcademico = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const [error, createPeriodoAcademicoDto] = dtos_1.CreatePeriodoAcademicoDto.create(req.body);
            if (error)
                return res.status(400).json({ error });
            const periodoacademicos = yield postgres_1.prisma.periodo_Academico.create({
                data: createPeriodoAcademicoDto
            });
            res.json(periodoacademicos);
        });
        this.updatePeriodoAcademico = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const id = +req.params.id;
            const [error, updatePeriodoAcademicoDto] = dtos_1.UpdatePeriodoAcademicoDto.create(Object.assign(Object.assign({}, req.body), { id }));
            if (error)
                return res.status(400).json({ error });
            const periodoacademicos = yield postgres_1.prisma.periodo_Academico.findFirst({
                where: { id }
            });
            if (!periodoacademicos)
                return res.status(404).json({ error: `Periodo Academico with id ${id} not found` });
            const updateperiodoacademico = yield postgres_1.prisma.periodo_Academico.update({
                where: { id },
                data: updatePeriodoAcademicoDto.values
            });
            res.json(updateperiodoacademico);
        });
        this.deletePeriodoAcademico = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const id = +req.params.id;
            const periodoacademicos = yield postgres_1.prisma.periodo_Academico.findFirst({
                where: { id }
            });
            if (!periodoacademicos)
                return res.status(404).json({ error: `Periodo Academico with id${id} not found` });
            const deleted = yield postgres_1.prisma.periodo_Academico.delete({
                where: { id }
            });
            (deleted)
                ? res.json(deleted)
                : res.status(400).json({ error: `Periodo Academico with id ${id} not found` });
        });
    }
}
exports.PeriodoAcademicoController = PeriodoAcademicoController;
