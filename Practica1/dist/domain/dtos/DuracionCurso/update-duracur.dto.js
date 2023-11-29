"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateduracurDto = void 0;
class UpdateduracurDto {
    constructor(id, cursoDuracion) {
        this.id = id;
        this.cursoDuracion = cursoDuracion;
    }
    get values() {
        const returnObj = {};
        if (this.cursoDuracion)
            returnObj.cursoDuracion = this.cursoDuracion;
        return returnObj;
    }
    static create(props) {
        const { id, cursoDuracion } = props;
        if (!id || isNaN(Number(id))) {
            return ['id must be a valid number'];
        }
        if (!id && !cursoDuracion) {
            return ['At least one property must be provided'];
        }
        return [undefined, new UpdateduracurDto(id, cursoDuracion)];
    }
}
exports.UpdateduracurDto = UpdateduracurDto;
