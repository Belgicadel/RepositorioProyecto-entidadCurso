"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateinstrumentoDto = void 0;
class UpdateinstrumentoDto {
    constructor(id, id_tipo, nombre_instrumento) {
        this.id = id;
        this.id_tipo = id_tipo;
        this.nombre_instrumento = nombre_instrumento;
    }
    get values() {
        const returnObj = {};
        if (this.id)
            returnObj.id = this.id;
        if (this.nombre_instrumento)
            returnObj.nombre_instrumento = this.nombre_instrumento;
        if (this.id_tipo)
            returnObj.id_tipo = this.id_tipo;
        return returnObj;
    }
    static create(props) {
        const { id, id_tipo, nombre_instrumento } = props;
        if (!id || isNaN(Number(id))) {
            return ['id must be a valid number'];
        }
        if (!id && !id_tipo && !nombre_instrumento) {
            return ['At least one property must be provided'];
        }
        return [undefined, new UpdateinstrumentoDto(id, id_tipo, nombre_instrumento)];
    }
}
exports.UpdateinstrumentoDto = UpdateinstrumentoDto;
