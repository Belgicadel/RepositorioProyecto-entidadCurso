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
exports.FormaPagoController = void 0;
const postgres_1 = require("../../data/postgres");
const dtos_1 = require("../../domain/dtos");
class FormaPagoController {
    //* DI
    constructor() {
        this.getFormaPago = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const formapagos = yield postgres_1.prisma.forma_Pago.findMany();
            return res.json(formapagos);
        });
        this.getFormaPagoById = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const id = +req.params.id;
            if (isNaN(id))
                return res.status(400).json({ error: 'id argument is not a number' });
            const formapago = yield postgres_1.prisma.forma_Pago.findFirst({
                where: { id }
            });
            (formapago)
                ? res.json()
                : res.status(404).json({ error: `Forma Pago with id ${id} not found` });
        });
        this.createFormaPago = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const [error, createFormaPagoDto] = dtos_1.CreateFormaPagoDto.create(req.body);
            if (error)
                return res.status(400).json({ error });
            const formapagos = yield postgres_1.prisma.forma_Pago.create({
                data: createFormaPagoDto
            });
            res.json(formapagos);
        });
        this.updateFormaPago = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const id = +req.params.id;
            const [error, updateFormaPagoDto] = dtos_1.UpdateFormaPagoDto.create(Object.assign(Object.assign({}, req.body), { id }));
            if (error)
                return res.status(400).json({ error });
            const formapagos = yield postgres_1.prisma.forma_Pago.findFirst({
                where: { id }
            });
            if (!formapagos)
                return res.status(404).json({ error: `Forma Pago with id ${id} not found` });
            const updateformapago = yield postgres_1.prisma.forma_Pago.update({
                where: { id },
                data: updateFormaPagoDto.values
            });
            res.json(updateformapago);
        });
        this.deleteFormaPago = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const id = +req.params.id;
            const formapagos = yield postgres_1.prisma.forma_Pago.findFirst({
                where: { id }
            });
            if (!formapagos)
                return res.status(404).json({ error: `Forma Pago with id${id} not found` });
            const deleted = yield postgres_1.prisma.forma_Pago.delete({
                where: { id }
            });
            (deleted)
                ? res.json(deleted)
                : res.status(400).json({ error: `Forma Pago with id ${id} not found` });
        });
    }
}
exports.FormaPagoController = FormaPagoController;
