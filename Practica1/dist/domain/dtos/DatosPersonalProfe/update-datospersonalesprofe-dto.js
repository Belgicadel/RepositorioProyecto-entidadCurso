"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateDatosPersonalesProfeDto = void 0;
class UpdateDatosPersonalesProfeDto {
    constructor(id, calle, avenida, telefono, idUbicacion) {
        this.id = id;
        this.calle = calle;
        this.avenida = avenida;
        this.telefono = telefono;
        this.idUbicacion = idUbicacion;
    }
    get values() {
        const returnObj = {};
        if (this.id)
            returnObj.id = this.id;
        if (this.calle)
            returnObj.calle = this.calle;
        if (this.avenida)
            returnObj.avenida = this.avenida;
        if (this.telefono)
            returnObj.telefono = this.telefono;
        if (this.idUbicacion)
            returnObj.idUbicacion = this.idUbicacion;
        return returnObj;
    }
    static create(props) {
        const { id, calle, avenida, telefono, idUbicacion } = props;
        if (!id || isNaN(Number(id))) {
            return ['id must be a valid number'];
        }
        if (!id && !calle && !avenida && !telefono && !idUbicacion) {
            return ['At least one property must be provided'];
        }
        return [undefined, new UpdateDatosPersonalesProfeDto(id, calle, avenida, telefono, idUbicacion)];
    }
}
exports.UpdateDatosPersonalesProfeDto = UpdateDatosPersonalesProfeDto;
