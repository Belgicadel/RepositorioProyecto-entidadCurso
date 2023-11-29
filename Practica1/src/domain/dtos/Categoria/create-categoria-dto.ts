export class CreatecategoriaDto {

    private constructor(
      public readonly nombre_categoria  : string,

    ){}
  
  
    static create( props: {[key:string]: any} ): [string?, CreatecategoriaDto?]  {
  
      const { nombre_categoria   } = props;
  
      if ( !nombre_categoria  ) return ['nombre_categoria  property is required', undefined];
  
      return [undefined, new CreatecategoriaDto(nombre_categoria)];
    }
  
  
  }