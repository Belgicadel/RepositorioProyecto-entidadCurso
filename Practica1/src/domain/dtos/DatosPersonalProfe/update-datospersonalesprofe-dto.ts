export class UpdateDatosPersonalesProfeDto {

    private constructor(
      public readonly id: number,
      public readonly calle: string,
      public readonly avenida: string,
      public readonly telefono: number,
      public readonly idUbicacion: number,
    ){}
  
    get values() {
      const returnObj: {[key: string]: any} = {};

      if ( this.id) returnObj.id = this.id;
      if ( this.calle) returnObj.calle = this.calle;
      if ( this.avenida) returnObj.avenida = this.avenida;
      if ( this.telefono) returnObj.telefono = this.telefono;
      if ( this.idUbicacion) returnObj.idUbicacion = this.idUbicacion;
      return returnObj;
    }
  
  
    static create( props: {[key:string]: any} ): [string?, UpdateDatosPersonalesProfeDto?]  {
  
      const { id, calle, avenida, telefono, idUbicacion} = props;
  
      if ( !id || isNaN( Number(id)) ) {
        return ['id must be a valid number'];
      }
  
      if ( !id && !calle && !avenida && !telefono && !idUbicacion) {
        return ['At least one property must be provided'];
      }
      return [undefined, new UpdateDatosPersonalesProfeDto(id, calle, avenida, telefono, idUbicacion)];
    }
  
  
  }