"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateFormacionProfecionalProfeDto = void 0;
class CreateFormacionProfecionalProfeDto {
    constructor(nombre) {
        this.nombre = nombre;
    }
    static create(props) {
        const { nombre } = props;
        if (!nombre)
            return ['nombre  property is required', undefined];
        return [undefined, new CreateFormacionProfecionalProfeDto(nombre)];
    }
}
exports.CreateFormacionProfecionalProfeDto = CreateFormacionProfecionalProfeDto;
