"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdatetipoinstrumentoDto = void 0;
class UpdatetipoinstrumentoDto {
    constructor(id, nombre_tipo_instrumento, id_instrumento, id_Categoria) {
        this.id = id;
        this.nombre_tipo_instrumento = nombre_tipo_instrumento;
        this.id_instrumento = id_instrumento;
        this.id_Categoria = id_Categoria;
    }
    get values() {
        const returnObj = {};
        if (this.id)
            returnObj.id = this.id;
        if (this.nombre_tipo_instrumento)
            returnObj.nombre_tipo_instrumento = this.nombre_tipo_instrumento;
        if (this.id_instrumento)
            returnObj.id_instrumento = this.id_instrumento;
        if (this.id_Categoria)
            returnObj.id_Categoria = this.id_Categoria;
        return returnObj;
    }
    static create(props) {
        const { id, nombre_tipo_instrumento, id_instrumento, id_Categoria } = props;
        if (!id || isNaN(Number(id))) {
            return ['id must be a valid number'];
        }
        if (!id && !nombre_tipo_instrumento && !id_instrumento && !id_Categoria) {
            return ['At least one property must be provided'];
        }
        return [undefined, new UpdatetipoinstrumentoDto(id, nombre_tipo_instrumento, id_instrumento, id_Categoria)];
    }
}
exports.UpdatetipoinstrumentoDto = UpdatetipoinstrumentoDto;
