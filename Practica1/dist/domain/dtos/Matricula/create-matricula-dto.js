"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateMatriculaDto = void 0;
class CreateMatriculaDto {
    constructor(estado_matricula, IdEstudiante, IdCurso, IdPeriodoAc, IdFormaP) {
        this.estado_matricula = estado_matricula;
        this.IdEstudiante = IdEstudiante;
        this.IdCurso = IdCurso;
        this.IdPeriodoAc = IdPeriodoAc;
        this.IdFormaP = IdFormaP;
    }
    static create(props) {
        const { estado_matricula, IdEstudiante, IdCurso, IdPeriodoAc, IdFormaP } = props;
        if (!estado_matricula)
            return ['estado_matricula  property is required', undefined];
        if (!IdEstudiante)
            return ['IdEstudiante  property is required', undefined];
        if (!IdCurso)
            return ['IdCurso  property is required', undefined];
        if (!IdPeriodoAc)
            return ['IdPeriodoAc  property is required', undefined];
        if (!IdFormaP)
            return ['IdFormaP  property is required', undefined];
        return [undefined, new CreateMatriculaDto(estado_matricula, IdEstudiante, IdCurso, IdPeriodoAc, IdFormaP)];
    }
}
exports.CreateMatriculaDto = CreateMatriculaDto;
