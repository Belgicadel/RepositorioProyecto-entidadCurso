"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateFormaPagoDto = void 0;
class UpdateFormaPagoDto {
    constructor(id, nombre_pago) {
        this.id = id;
        this.nombre_pago = nombre_pago;
    }
    get values() {
        const returnObj = {};
        if (this.id)
            returnObj.id = this.id;
        if (this.nombre_pago)
            returnObj.nombre_pago = this.nombre_pago;
        return returnObj;
    }
    static create(props) {
        const { id, nombre_pago } = props;
        if (!id || isNaN(Number(id))) {
            return ['id must be a valid number'];
        }
        if (!id && !nombre_pago) {
            return ['At least one property must be provided'];
        }
        return [undefined, new UpdateFormaPagoDto(id, nombre_pago)];
    }
}
exports.UpdateFormaPagoDto = UpdateFormaPagoDto;
