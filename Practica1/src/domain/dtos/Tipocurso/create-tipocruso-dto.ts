export class CreatetipocursoDto {
    private constructor(
      public readonly nombre: string
    ){}
    static create( props: {[key:string]: any} ): [string?, CreatetipocursoDto?]  {
  
      const { nombre } = props;
  
      if ( !nombre ) return ['name property is required', undefined];
  
  
      return [undefined, new CreatetipocursoDto(nombre)];
    }
  }