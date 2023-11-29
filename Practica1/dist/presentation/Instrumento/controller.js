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
exports.InstrumentoController = void 0;
const postgres_1 = require("../../data/postgres");
const dtos_1 = require("../../domain/dtos");
class InstrumentoController {
    //* DI
    constructor() {
        this.getInstrumento = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const instrumentos = yield postgres_1.prisma.instrumento.findMany();
            return res.json(instrumentos);
        });
        this.getInstrumentoById = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const id = +req.params.id;
            if (isNaN(id))
                return res.status(400).json({ error: 'id argument is not a number' });
            const instrumento = yield postgres_1.prisma.instrumento.findFirst({
                where: { id }
            });
            (instrumento)
                ? res.json()
                : res.status(404).json({ error: `Instrumento with id ${id} not found` });
        });
        this.createInstrumento = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const [error, createinstrumentoDto] = dtos_1.CreateinstrumentoDto.create(req.body);
            if (error)
                return res.status(400).json({ error });
            const instrumentos = yield postgres_1.prisma.instrumento.create({
                data: createinstrumentoDto
            });
            res.json(instrumentos);
        });
        this.updateinstrumento = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const id = +req.params.id;
            const [error, updateinstrumentoDto] = dtos_1.UpdateinstrumentoDto.create(Object.assign(Object.assign({}, req.body), { id }));
            if (error)
                return res.status(400).json({ error });
            const instrumentos = yield postgres_1.prisma.instrumento.findFirst({
                where: { id }
            });
            if (!instrumentos)
                return res.status(404).json({ error: `Instrumento with id ${id} not found` });
            const updateinstrumento = yield postgres_1.prisma.instrumento.update({
                where: { id },
                data: updateinstrumentoDto.values
            });
            res.json(updateinstrumento);
        });
        this.deleteinstrumento = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const id = +req.params.id;
            const instrumentos = yield postgres_1.prisma.instrumento.findFirst({
                where: { id }
            });
            if (!instrumentos)
                return res.status(404).json({ error: `Instrumento with id${id} not found` });
            const deleted = yield postgres_1.prisma.instrumento.delete({
                where: { id }
            });
            (deleted)
                ? res.json(deleted)
                : res.status(400).json({ error: `Instrumento with id ${id} not found` });
        });
    }
}
exports.InstrumentoController = InstrumentoController;
