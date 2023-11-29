"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateEstudianteDto = void 0;
class CreateEstudianteDto {
    constructor(nombre_es, apellido_es, cedula_es, edad_es, correo_es, idDatos_personal) {
        this.nombre_es = nombre_es;
        this.apellido_es = apellido_es;
        this.cedula_es = cedula_es;
        this.edad_es = edad_es;
        this.correo_es = correo_es;
        this.idDatos_personal = idDatos_personal;
    }
    static create(props) {
        const { nombre_es, apellido_es, cedula_es, edad_es, correo_es, idDatos_personal, } = props;
        if (!nombre_es)
            return ['nombre  property is required', undefined];
        if (!apellido_es)
            return ['apellido  property is required', undefined];
        if (!cedula_es)
            return ['cedula  property is required', undefined];
        if (!edad_es)
            return ['edad  property is required', undefined];
        if (!correo_es)
            return ['correo  property is required', undefined];
        if (!idDatos_personal)
            return ['idDatos_personal  property is required', undefined];
        return [undefined, new CreateEstudianteDto(nombre_es, apellido_es, cedula_es, edad_es, correo_es, idDatos_personal)];
    }
}
exports.CreateEstudianteDto = CreateEstudianteDto;
