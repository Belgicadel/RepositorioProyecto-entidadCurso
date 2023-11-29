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
exports.UbicacionController = void 0;
const postgres_1 = require("../../data/postgres");
const dtos_1 = require("../../domain/dtos");
class UbicacionController {
    //* DI
    constructor() {
        this.getUbicacion = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const ubicacion = yield postgres_1.prisma.ubicacion.findMany();
            return res.json(ubicacion);
        });
        this.getUbicacionById = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const id = +req.params.id;
            if (isNaN(id))
                return res.status(400).json({ error: 'id argument is not a number' });
            const ubicacion = yield postgres_1.prisma.ubicacion.findFirst({
                where: { id }
            });
            (ubicacion)
                ? res.json()
                : res.status(404).json({ error: `ubicacion with id ${id} not found` });
        });
        this.createUbicacion = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const [error, createUbicacionEstudDto] = dtos_1.CreateUbicacionEstudDto.create(req.body);
            if (error)
                return res.status(400).json({ error });
            const ubicaciones = yield postgres_1.prisma.ubicacion.create({
                data: createUbicacionEstudDto
            });
            res.json(ubicaciones);
        });
        this.updateUbicacion = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const id = +req.params.id;
            const [error, updateUbicacionEstudDto] = dtos_1.UpdateUbicacionEstudDto.create(Object.assign(Object.assign({}, req.body), { id }));
            if (error)
                return res.status(400).json({ error });
            const ubicaciones = yield postgres_1.prisma.ubicacion.findFirst({
                where: { id }
            });
            if (!ubicaciones)
                return res.status(404).json({ error: `ubicacion with id ${id} not found` });
            const updateubicacion = yield postgres_1.prisma.ubicacion.update({
                where: { id },
                data: updateUbicacionEstudDto.values
            });
            res.json(updateubicacion);
        });
        this.deleteUbicacion = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const id = +req.params.id;
            const ubicaciones = yield postgres_1.prisma.ubicacion.findFirst({
                where: { id }
            });
            if (!ubicaciones)
                return res.status(404).json({ error: `ubicacion with id${id} not found` });
            const deleted = yield postgres_1.prisma.ubicacion.delete({
                where: { id }
            });
            (deleted)
                ? res.json(deleted)
                : res.status(400).json({ error: `ubicacion with id ${id} not found` });
        });
    }
}
exports.UbicacionController = UbicacionController;
