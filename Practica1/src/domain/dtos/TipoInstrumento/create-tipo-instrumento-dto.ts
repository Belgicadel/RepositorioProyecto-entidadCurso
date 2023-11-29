export class CreatetipoinstrumentoDto {

    private constructor(
      public readonly nombre_tipo_instrumento  : string,
      public readonly id_instrumento  : number,
      public readonly id_Categoria : number,

    ){}
  
  
    static create( props: {[key:string]: any} ): [string?, CreatetipoinstrumentoDto?]  {
  
      const { nombre_tipo_instrumento, id_instrumento, id_Categoria   } = props;
  
      if ( !nombre_tipo_instrumento  ) return ['nombre_tipo_instrumento  property is required', undefined];
      if ( !id_Categoria ) return ['id_Categoria  property is required', undefined];
      if ( !id_instrumento  ) return ['id_instrumento  property is required', undefined];
  
      return [undefined, new CreatetipoinstrumentoDto(nombre_tipo_instrumento, id_Categoria, id_instrumento)];
    }
  
  
  }