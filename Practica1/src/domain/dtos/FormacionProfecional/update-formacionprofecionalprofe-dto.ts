export class UpdateFormacionProfecionalProfeDto {

    private constructor(
      public readonly id: number,
      public readonly nombre: string,
    ){}
  
    get values() {
      const returnObj: {[key: string]: any} = {};

      if ( this.id) returnObj.id = this.id;
      if ( this.nombre) returnObj.nombre = this.nombre;
      return returnObj;
    }
  
  
    static create( props: {[key:string]: any} ): [string?, UpdateFormacionProfecionalProfeDto?]  {
  
      const { id, nombre} = props;
  
      if ( !id || isNaN( Number(id)) ) {
        return ['id must be a valid number'];
      }
  
      if (!id && !nombre) {
        return ['At least one property must be provided'];
      }
      return [undefined, new UpdateFormacionProfecionalProfeDto(id, nombre)];
    }
  
  
  }