"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreatetipocursoDto = void 0;
class CreatetipocursoDto {
    constructor(nombre) {
        this.nombre = nombre;
    }
    static create(props) {
        const { nombre } = props;
        if (!nombre)
            return ['name property is required', undefined];
        return [undefined, new CreatetipocursoDto(nombre)];
    }
}
exports.CreatetipocursoDto = CreatetipocursoDto;
