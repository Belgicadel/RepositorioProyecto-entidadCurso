export class CreateinstrumentoDto {

    private constructor(
      public readonly nombre_instrumento  : string,
      public readonly id_tipo  : number,
      
    ){}
  
  
    static create( props: {[key:string]: any} ): [string?, CreateinstrumentoDto?]  {
  
      const { nombre_instrumento, id_tipo   } = props;
  
      if ( !nombre_instrumento  ) return ['nombre_instrumento  property is required', undefined];
      if ( !id_tipo  ) return ['id_tipo  property is required', undefined];
  
  
      return [undefined, new CreateinstrumentoDto(nombre_instrumento, id_tipo)];
    }
  
  
  }