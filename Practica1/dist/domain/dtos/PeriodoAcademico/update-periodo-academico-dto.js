"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdatePeriodoAcademicoDto = void 0;
class UpdatePeriodoAcademicoDto {
    constructor(id, nombre_p_academico) {
        this.id = id;
        this.nombre_p_academico = nombre_p_academico;
    }
    get values() {
        const returnObj = {};
        if (this.id)
            returnObj.id = this.id;
        if (this.nombre_p_academico)
            returnObj.nombre_p_academico = this.nombre_p_academico;
        return returnObj;
    }
    static create(props) {
        const { id, nombre_p_academico } = props;
        if (!id || isNaN(Number(id))) {
            return ['id must be a valid number'];
        }
        if (!id && !nombre_p_academico) {
            return ['At least one property must be provided'];
        }
        return [undefined, new UpdatePeriodoAcademicoDto(id, nombre_p_academico)];
    }
}
exports.UpdatePeriodoAcademicoDto = UpdatePeriodoAcademicoDto;
