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
exports.TipoInstrumentoController = void 0;
const postgres_1 = require("../../data/postgres");
const dtos_1 = require("../../domain/dtos");
class TipoInstrumentoController {
    //* DI
    constructor() {
        this.getTipoInstrumento = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const TiposInstrumentos = yield postgres_1.prisma.tipo_instrumento.findMany();
            return res.json(TiposInstrumentos);
        });
        this.getTipoInstrumentoById = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const id = +req.params.id;
            if (isNaN(id))
                return res.status(400).json({ error: 'id argument is not a number' });
            const tipo_instrumento = yield postgres_1.prisma.tipo_instrumento.findFirst({
                where: { id }
            });
            (tipo_instrumento)
                ? res.json()
                : res.status(404).json({ error: `Tipo de Instrumento with id ${id} not found` });
        });
        this.createTipoInstrumento = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const [error, createtipoinstrumentoDto] = dtos_1.CreatetipoinstrumentoDto.create(req.body);
            if (error)
                return res.status(400).json({ error });
            const TiposInstrumentos = yield postgres_1.prisma.tipo_instrumento.create({
                data: createtipoinstrumentoDto
            });
            res.json(TiposInstrumentos);
        });
        this.updatetipoinstrumento = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const id = +req.params.id;
            const [error, updatetipoinstrumentoDto] = dtos_1.UpdatetipoinstrumentoDto.create(Object.assign(Object.assign({}, req.body), { id }));
            if (error)
                return res.status(400).json({ error });
            const TiposInstrumentos = yield postgres_1.prisma.tipo_instrumento.findFirst({
                where: { id }
            });
            if (!TiposInstrumentos)
                return res.status(404).json({ error: `Tipo de Instrumento with id ${id} not found` });
            const updatetipoinstrumento = yield postgres_1.prisma.tipo_instrumento.update({
                where: { id },
                data: updatetipoinstrumentoDto.values
            });
            res.json(updatetipoinstrumento);
        });
        this.deletetipoinstrumento = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const id = +req.params.id;
            const TiposInstrumentos = yield postgres_1.prisma.tipo_instrumento.findFirst({
                where: { id }
            });
            if (!TiposInstrumentos)
                return res.status(404).json({ error: `Tipo de Instrumento with id${id} not found` });
            const deleted = yield postgres_1.prisma.tipo_instrumento.delete({
                where: { id }
            });
            (deleted)
                ? res.json(deleted)
                : res.status(400).json({ error: `Tipo de Instrumento with id ${id} not found` });
        });
    }
}
exports.TipoInstrumentoController = TipoInstrumentoController;
