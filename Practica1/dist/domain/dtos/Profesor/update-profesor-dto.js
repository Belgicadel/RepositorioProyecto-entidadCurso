"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateProfesorDto = void 0;
class UpdateProfesorDto {
    constructor(id, nombre, apellido, cedula, edad, correo, idFormacionprofecional, idDatos_personal_prof) {
        this.id = id;
        this.nombre = nombre;
        this.apellido = apellido;
        this.cedula = cedula;
        this.edad = edad;
        this.correo = correo;
        this.idFormacionprofecional = idFormacionprofecional;
        this.idDatos_personal_prof = idDatos_personal_prof;
    }
    get values() {
        const returnObj = {};
        if (this.id)
            returnObj.id = this.id;
        if (this.nombre)
            returnObj.nombre = this.nombre;
        if (this.apellido)
            returnObj.apellido = this.apellido;
        if (this.cedula)
            returnObj.cedula = this.cedula;
        if (this.edad)
            returnObj.edad = this.edad;
        if (this.correo)
            returnObj.correo = this.correo;
        if (this.idFormacionprofecional)
            returnObj.idFormacionprofecional = this.idFormacionprofecional;
        if (this.idDatos_personal_prof)
            returnObj.idDatos_personal_prof = this.idDatos_personal_prof;
        return returnObj;
    }
    static create(props) {
        const { id, nombre, apellido, cedula, edad, correo, idFormacionprofecional, idDatos_personal_prof } = props;
        if (!id || isNaN(Number(id))) {
            return ['id must be a valid number'];
        }
        if (!id && !nombre && !apellido && !cedula && !edad && !correo && !idFormacionprofecional && !idDatos_personal_prof) {
            return ['At least one property must be provided'];
        }
        return [undefined, new UpdateProfesorDto(id, nombre, apellido, cedula, edad, correo, idFormacionprofecional, idDatos_personal_prof)];
    }
}
exports.UpdateProfesorDto = UpdateProfesorDto;
