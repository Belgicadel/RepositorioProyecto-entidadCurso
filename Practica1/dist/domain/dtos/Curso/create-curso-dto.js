"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreatecursoDto = void 0;
class CreatecursoDto {
    constructor(nombre_curso, id_instrumento, id_Profesor, id_tipo_curso, id_duracur) {
        this.nombre_curso = nombre_curso;
        this.id_instrumento = id_instrumento;
        this.id_Profesor = id_Profesor;
        this.id_tipo_curso = id_tipo_curso;
        this.id_duracur = id_duracur;
    }
    static create(props) {
        const { nombre_curso, id_instrumento, id_Profesor, id_tipo_curso, id_duracur } = props;
        if (!nombre_curso)
            return ['nombre_curso  property is required', undefined];
        if (!id_instrumento)
            return ['id_instrumento  property is required', undefined];
        if (!id_Profesor)
            return ['id_Profesor  property is required', undefined];
        if (!id_tipo_curso)
            return ['id_tipo_curso  property is required', undefined];
        if (!id_duracur)
            return ['id_duracur  property is required', undefined];
        return [undefined, new CreatecursoDto(nombre_curso, id_instrumento, id_Profesor, id_tipo_curso, id_duracur)];
    }
}
exports.CreatecursoDto = CreatecursoDto;
