export class UpdateduracurDto {
    private constructor(
      public readonly id: number,
      public readonly cursoDuracion: number,
    ) {}
  
    get values() {
      const returnObj: { [key: string]: any } = {};
  
      if (this.cursoDuracion) returnObj.cursoDuracion = this.cursoDuracion;
      return returnObj;
    }
  
    static create(props: { [key: string]: any }): [string?, UpdateduracurDto?] {
      
      const { id, cursoDuracion } = props;
  
      if (!id || isNaN(Number(id))) {
        return ['id must be a valid number'];
      }
  
      if ( !id && !cursoDuracion) {
        return ['At least one property must be provided'];
      }
      return [undefined, new UpdateduracurDto(id, cursoDuracion)];
    }
  }
  