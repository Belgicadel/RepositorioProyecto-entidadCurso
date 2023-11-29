"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateMatriculaDto = void 0;
class UpdateMatriculaDto {
    constructor(id, estado_matricula, IdEstudiante, IdCurso, IdPeriodoAc, IdFormaP) {
        this.id = id;
        this.estado_matricula = estado_matricula;
        this.IdEstudiante = IdEstudiante;
        this.IdCurso = IdCurso;
        this.IdPeriodoAc = IdPeriodoAc;
        this.IdFormaP = IdFormaP;
    }
    get values() {
        const returnObj = {};
        if (this.id)
            returnObj.id = this.id;
        if (this.estado_matricula)
            returnObj.estado_matricula = this.estado_matricula;
        if (this.IdEstudiante)
            returnObj.IdEstudiante = this.IdEstudiante;
        if (this.IdCurso)
            returnObj.IdCurso = this.IdCurso;
        if (this.IdPeriodoAc)
            returnObj.IdPeriodoAc = this.IdPeriodoAc;
        if (this.IdFormaP)
            returnObj.IdFormaP = this.IdFormaP;
        return returnObj;
    }
    static create(props) {
        const { id, estado_matricula, IdEstudiante, IdCurso, IdPeriodoAc, IdFormaP } = props;
        if (!id || isNaN(Number(id))) {
            return ['id must be a valid number'];
        }
        if (!id && !estado_matricula && !IdEstudiante && !IdCurso && !IdPeriodoAc && !IdFormaP) {
            return ['At least one property must be provided'];
        }
        return [undefined, new UpdateMatriculaDto(id, estado_matricula, IdEstudiante, IdCurso, IdPeriodoAc, IdFormaP)];
    }
}
exports.UpdateMatriculaDto = UpdateMatriculaDto;
