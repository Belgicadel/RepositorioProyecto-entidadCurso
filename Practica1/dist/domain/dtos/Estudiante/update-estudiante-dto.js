"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateEstudianteDto = void 0;
class UpdateEstudianteDto {
    constructor(id, nombre_es, apellido_es, cedula_es, edad_es, correo_es, idDatos_personal) {
        this.id = id;
        this.nombre_es = nombre_es;
        this.apellido_es = apellido_es;
        this.cedula_es = cedula_es;
        this.edad_es = edad_es;
        this.correo_es = correo_es;
        this.idDatos_personal = idDatos_personal;
    }
    get values() {
        const returnObj = {};
        if (this.id)
            returnObj.id = this.id;
        if (this.nombre_es)
            returnObj.nombre_es = this.nombre_es;
        if (this.apellido_es)
            returnObj.apellido_es = this.apellido_es;
        if (this.cedula_es)
            returnObj.cedula_es = this.cedula_es;
        if (this.edad_es)
            returnObj.edad_es = this.edad_es;
        if (this.correo_es)
            returnObj.correo_es = this.correo_es;
        if (this.idDatos_personal)
            returnObj.idDatos_personal = this.idDatos_personal;
        return returnObj;
    }
    static create(props) {
        const { id, nombre_es, apellido_es, cedula_es, edad_es, correo_es, idDatos_personal } = props;
        if (!id || isNaN(Number(id))) {
            return ['id must be a valid number'];
        }
        if (!id && !nombre_es && !apellido_es && !cedula_es && !edad_es && !correo_es && !idDatos_personal) {
            return ['At least one property must be provided'];
        }
        return [undefined, new UpdateEstudianteDto(id, nombre_es, apellido_es, cedula_es, edad_es, correo_es, idDatos_personal)];
    }
}
exports.UpdateEstudianteDto = UpdateEstudianteDto;
