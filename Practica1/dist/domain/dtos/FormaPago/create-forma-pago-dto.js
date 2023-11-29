"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateFormaPagoDto = void 0;
class CreateFormaPagoDto {
    constructor(nombre_pago) {
        this.nombre_pago = nombre_pago;
    }
    static create(props) {
        const { nombre_pago } = props;
        if (!nombre_pago)
            return ['nombre_pago  property is required', undefined];
        return [undefined, new CreateFormaPagoDto(nombre_pago)];
    }
}
exports.CreateFormaPagoDto = CreateFormaPagoDto;
