"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreatecategoriaDto = void 0;
class CreatecategoriaDto {
    constructor(nombre_categoria) {
        this.nombre_categoria = nombre_categoria;
    }
    static create(props) {
        const { nombre_categoria } = props;
        if (!nombre_categoria)
            return ['nombre_categoria  property is required', undefined];
        return [undefined, new CreatecategoriaDto(nombre_categoria)];
    }
}
exports.CreatecategoriaDto = CreatecategoriaDto;
