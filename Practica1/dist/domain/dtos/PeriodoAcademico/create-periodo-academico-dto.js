"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreatePeriodoAcademicoDto = void 0;
class CreatePeriodoAcademicoDto {
    constructor(nombre_p_academico) {
        this.nombre_p_academico = nombre_p_academico;
    }
    static create(props) {
        const { nombre_p_academico } = props;
        if (!nombre_p_academico)
            return ['nombre_p_academico  property is required', undefined];
        return [undefined, new CreatePeriodoAcademicoDto(nombre_p_academico)];
    }
}
exports.CreatePeriodoAcademicoDto = CreatePeriodoAcademicoDto;
