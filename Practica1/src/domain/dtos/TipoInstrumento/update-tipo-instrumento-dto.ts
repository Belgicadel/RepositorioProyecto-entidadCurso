export class UpdatetipoinstrumentoDto {

    private constructor(
      public readonly id: number,
      public readonly nombre_tipo_instrumento: string,
      public readonly id_instrumento: number,
      public readonly id_Categoria: number,

    ){}
  
    get values() {
      const returnObj: {[key: string]: any} = {};
  
      if ( this.id) returnObj.id = this.id;
      if ( this.nombre_tipo_instrumento) returnObj.nombre_tipo_instrumento = this.nombre_tipo_instrumento;
      if ( this.id_instrumento) returnObj.id_instrumento = this.id_instrumento;
      if ( this.id_Categoria) returnObj.id_Categoria = this.id_Categoria;
      return returnObj;
    }
  
  
    static create( props: {[key:string]: any} ): [string?, UpdatetipoinstrumentoDto?]  {
  
      const { id, nombre_tipo_instrumento, id_instrumento, id_Categoria} = props;
  
      if ( !id || isNaN( Number(id)) ) {
        return ['id must be a valid number'];
      }
  
      if ( !id && !nombre_tipo_instrumento && !id_instrumento && !id_Categoria) {
        return ['At least one property must be provided'];
      }
      return [undefined, new UpdatetipoinstrumentoDto(id, nombre_tipo_instrumento, id_instrumento, id_Categoria)];
    }
  
  
  }