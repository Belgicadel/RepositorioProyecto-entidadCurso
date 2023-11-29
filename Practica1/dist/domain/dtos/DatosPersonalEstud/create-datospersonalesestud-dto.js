"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateDatosPersonalesEstudDto = void 0;
class CreateDatosPersonalesEstudDto {
    constructor(calle, avenida, telefono, idUbicacion) {
        this.calle = calle;
        this.avenida = avenida;
        this.telefono = telefono;
        this.idUbicacion = idUbicacion;
    }
    static create(props) {
        const { calle, avenida, telefono, idUbicacion } = props;
        if (!calle)
            return ['calle  property is required', undefined];
        if (!avenida)
            return ['avenida  property is required', undefined];
        if (!telefono)
            return ['telefono  property is required', undefined];
        if (!idUbicacion)
            return ['idUbicacion  property is required', undefined];
        return [undefined, new CreateDatosPersonalesEstudDto(calle, avenida, telefono, idUbicacion)];
    }
}
exports.CreateDatosPersonalesEstudDto = CreateDatosPersonalesEstudDto;
