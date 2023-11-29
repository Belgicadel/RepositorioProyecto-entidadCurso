export class UpdateinstrumentoDto {

    private constructor(
      public readonly id: number,
      public readonly id_tipo: number,
      public readonly nombre_instrumento?: string,
    ){}
  
    get values() {
      const returnObj: {[key: string]: any} = {};
  
      if ( this.id) returnObj.id = this.id;
      if ( this.nombre_instrumento) returnObj.nombre_instrumento = this.nombre_instrumento;
      if ( this.id_tipo) returnObj.id_tipo = this.id_tipo;
      return returnObj;
    }
  
  
    static create( props: {[key:string]: any} ): [string?, UpdateinstrumentoDto?]  {
  
      const { id, id_tipo, nombre_instrumento} = props;
  
      if ( !id || isNaN( Number(id)) ) {
        return ['id must be a valid number'];
      }
  
      if ( !id && !id_tipo && !nombre_instrumento) {
        return ['At least one property must be provided'];
      }
      return [undefined, new UpdateinstrumentoDto(id, id_tipo, nombre_instrumento)];
    }
  
  
  }