"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdatecursoDto = void 0;
class UpdatecursoDto {
    constructor(id, nombre_curso, id_instrumento, id_Profesor, id_tipo_curso, id_duracur) {
        this.id = id;
        this.nombre_curso = nombre_curso;
        this.id_instrumento = id_instrumento;
        this.id_Profesor = id_Profesor;
        this.id_tipo_curso = id_tipo_curso;
        this.id_duracur = id_duracur;
    }
    get values() {
        const returnObj = {};
        if (this.id)
            returnObj.id = this.id;
        if (this.nombre_curso)
            returnObj.nombre_curso = this.nombre_curso;
        if (this.id_instrumento)
            returnObj.id_instrumento = this.id_instrumento;
        if (this.id_Profesor)
            returnObj.id_Profesor = this.id_Profesor;
        if (this.id_tipo_curso)
            returnObj.id_tipo_curso = this.id_tipo_curso;
        if (this.id_duracur)
            returnObj.id_duracur = this.id_duracur;
        return returnObj;
    }
    static create(props) {
        const { id, nombre_curso, id_instrumento, id_Profesor, id_tipo_curso, id_duracur } = props;
        if (!id || isNaN(Number(id))) {
            return ['id must be a valid number'];
        }
        if (!id && !nombre_curso && !id_instrumento && !id_Profesor && !id_tipo_curso && !id_duracur) {
            return ['At least one property must be provided'];
        }
        return [undefined, new UpdatecursoDto(id, nombre_curso, id_instrumento, id_Profesor, id_tipo_curso, id_duracur)];
    }
}
exports.UpdatecursoDto = UpdatecursoDto;
