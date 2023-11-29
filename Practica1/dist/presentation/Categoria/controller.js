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
exports.CategoriaController = void 0;
const postgres_1 = require("../../data/postgres");
const dtos_1 = require("../../domain/dtos");
class CategoriaController {
    //* DI
    constructor() {
        this.getCategoria = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const categorias = yield postgres_1.prisma.categoria.findMany();
            return res.json(categorias);
        });
        this.getCategoriaById = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const id = +req.params.id;
            if (isNaN(id))
                return res.status(400).json({ error: 'id argument is not a number' });
            const categoria = yield postgres_1.prisma.categoria.findFirst({
                where: { id }
            });
            (categoria)
                ? res.json()
                : res.status(404).json({ error: `Categoria with id ${id} not found` });
        });
        this.createCategoria = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const [error, createcategoriaDto] = dtos_1.CreatecategoriaDto.create(req.body);
            if (error)
                return res.status(400).json({ error });
            const categorias = yield postgres_1.prisma.categoria.create({
                data: createcategoriaDto
            });
            res.json(categorias);
        });
        this.updatecategoria = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const id = +req.params.id;
            const [error, updatecategoriaDto] = dtos_1.UpdatecategoriaDto.create(Object.assign(Object.assign({}, req.body), { id }));
            if (error)
                return res.status(400).json({ error });
            const categorias = yield postgres_1.prisma.categoria.findFirst({
                where: { id }
            });
            if (!categorias)
                return res.status(404).json({ error: `Categoria with id ${id} not found` });
            const updatecategoria = yield postgres_1.prisma.categoria.update({
                where: { id },
                data: updatecategoriaDto.values
            });
            res.json(updatecategoria);
        });
        this.deletecategoria = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const id = +req.params.id;
            const categorias = yield postgres_1.prisma.categoria.findFirst({
                where: { id }
            });
            if (!categorias)
                return res.status(404).json({ error: `Categoria with id${id} not found` });
            const deleted = yield postgres_1.prisma.categoria.delete({
                where: { id }
            });
            (deleted)
                ? res.json(deleted)
                : res.status(400).json({ error: `Categoria with id ${id} not found` });
        });
    }
}
exports.CategoriaController = CategoriaController;
