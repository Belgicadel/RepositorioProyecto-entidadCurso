export class UpdatecategoriaDto {

    private constructor(
      public readonly id: number,
      public readonly nombre_categoria: string,
    ){}
  
    get values() {
      const returnObj: {[key: string]: any} = {};

      if ( this.id) returnObj.id = this.id;
      if ( this.nombre_categoria) returnObj.nombre_categoria = this.nombre_categoria;
      return returnObj;
    }
  
  
    static create( props: {[key:string]: any} ): [string?, UpdatecategoriaDto?]  {
  
      const { id, nombre_categoria} = props;
      
  
      if ( !id || isNaN( Number(id)) ) {
        return ['id must be a valid number'];
      }
  
      if ( !id && !nombre_categoria) {
        return ['At least one property must be provided'];
      }
      return [undefined, new UpdatecategoriaDto(id, nombre_categoria)];
    }
  
  
  }