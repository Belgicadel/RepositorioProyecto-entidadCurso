"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateProfesorDto = void 0;
class CreateProfesorDto {
    constructor(nombre, apellido, cedula, edad, correo, idFormacionprofecional, idDatos_personal_prof) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.cedula = cedula;
        this.edad = edad;
        this.correo = correo;
        this.idFormacionprofecional = idFormacionprofecional;
        this.idDatos_personal_prof = idDatos_personal_prof;
    }
    static create(props) {
        const { nombre, apellido, cedula, edad, correo, idFormacionprofecional, idDatos_personal_prof } = props;
        if (!nombre)
            return ['nombre  property is required', undefined];
        if (!apellido)
            return ['apellido  property is required', undefined];
        if (!cedula)
            return ['cedula  property is required', undefined];
        if (!edad)
            return ['edad  property is required', undefined];
        if (!correo)
            return ['correo  property is required', undefined];
        if (!idFormacionprofecional)
            return ['idFormacionprofecional  property is required', undefined];
        if (!idDatos_personal_prof)
            return ['idDatos_personal_prof  property is required', undefined];
        return [undefined, new CreateProfesorDto(nombre, apellido, cedula, edad, correo, idFormacionprofecional, idDatos_personal_prof)];
    }
}
exports.CreateProfesorDto = CreateProfesorDto;
