"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreatetipoinstrumentoDto = void 0;
class CreatetipoinstrumentoDto {
    constructor(nombre_tipo_instrumento, id_instrumento, id_Categoria) {
        this.nombre_tipo_instrumento = nombre_tipo_instrumento;
        this.id_instrumento = id_instrumento;
        this.id_Categoria = id_Categoria;
    }
    static create(props) {
        const { nombre_tipo_instrumento, id_instrumento, id_Categoria } = props;
        if (!nombre_tipo_instrumento)
            return ['nombre_tipo_instrumento  property is required', undefined];
        if (!id_Categoria)
            return ['id_Categoria  property is required', undefined];
        if (!id_instrumento)
            return ['id_instrumento  property is required', undefined];
        return [undefined, new CreatetipoinstrumentoDto(nombre_tipo_instrumento, id_Categoria, id_instrumento)];
    }
}
exports.CreatetipoinstrumentoDto = CreatetipoinstrumentoDto;
