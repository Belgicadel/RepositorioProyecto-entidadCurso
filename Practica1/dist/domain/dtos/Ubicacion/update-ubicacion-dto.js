"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateUbicacionEstudDto = void 0;
class UpdateUbicacionEstudDto {
    constructor(id, provincia, ciudad) {
        this.id = id;
        this.provincia = provincia;
        this.ciudad = ciudad;
    }
    get values() {
        const returnObj = {};
        if (this.id)
            returnObj.id = this.id;
        if (this.provincia)
            returnObj.provincia = this.provincia;
        if (this.ciudad)
            returnObj.ciudad = this.ciudad;
        return returnObj;
    }
    static create(props) {
        const { id, provincia, ciudad } = props;
        if (!id || isNaN(Number(id))) {
            return ['id must be a valid number'];
        }
        if (!id && !provincia && !ciudad) {
            return ['At least one property must be provided'];
        }
        return [undefined, new UpdateUbicacionEstudDto(id, provincia, ciudad)];
    }
}
exports.UpdateUbicacionEstudDto = UpdateUbicacionEstudDto;
