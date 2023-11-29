"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateUbicacionEstudDto = void 0;
class CreateUbicacionEstudDto {
    constructor(provincia, ciudad) {
        this.provincia = provincia;
        this.ciudad = ciudad;
    }
    static create(props) {
        const { provincia, ciudad } = props;
        if (!provincia)
            return ['provincia  property is required', undefined];
        if (!ciudad)
            return ['ciudad  property is required', undefined];
        return [undefined, new CreateUbicacionEstudDto(provincia, ciudad)];
    }
}
exports.CreateUbicacionEstudDto = CreateUbicacionEstudDto;
