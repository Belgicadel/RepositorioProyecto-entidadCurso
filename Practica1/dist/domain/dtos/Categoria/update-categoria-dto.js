"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdatecategoriaDto = void 0;
class UpdatecategoriaDto {
    constructor(id, nombre_categoria) {
        this.id = id;
        this.nombre_categoria = nombre_categoria;
    }
    get values() {
        const returnObj = {};
        if (this.id)
            returnObj.id = this.id;
        if (this.nombre_categoria)
            returnObj.nombre_categoria = this.nombre_categoria;
        return returnObj;
    }
    static create(props) {
        const { id, nombre_categoria } = props;
        if (!id || isNaN(Number(id))) {
            return ['id must be a valid number'];
        }
        if (!id && !nombre_categoria) {
            return ['At least one property must be provided'];
        }
        return [undefined, new UpdatecategoriaDto(id, nombre_categoria)];
    }
}
exports.UpdatecategoriaDto = UpdatecategoriaDto;
