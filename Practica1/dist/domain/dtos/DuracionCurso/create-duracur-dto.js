"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateDuracurDto = void 0;
class CreateDuracurDto {
    constructor(cursoDuracion) {
        this.cursoDuracion = cursoDuracion;
    }
    static create(props) {
        const { cursoDuracion } = props;
        if (!cursoDuracion)
            return ['name property is required', undefined];
        return [undefined, new CreateDuracurDto(cursoDuracion)];
    }
}
exports.CreateDuracurDto = CreateDuracurDto;
