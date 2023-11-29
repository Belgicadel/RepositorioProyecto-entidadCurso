"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateinstrumentoDto = void 0;
class CreateinstrumentoDto {
    constructor(nombre_instrumento, id_tipo) {
        this.nombre_instrumento = nombre_instrumento;
        this.id_tipo = id_tipo;
    }
    static create(props) {
        const { nombre_instrumento, id_tipo } = props;
        if (!nombre_instrumento)
            return ['nombre_instrumento  property is required', undefined];
        if (!id_tipo)
            return ['id_tipo  property is required', undefined];
        return [undefined, new CreateinstrumentoDto(nombre_instrumento, id_tipo)];
    }
}
exports.CreateinstrumentoDto = CreateinstrumentoDto;
