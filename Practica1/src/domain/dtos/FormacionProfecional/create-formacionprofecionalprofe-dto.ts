export class CreateFormacionProfecionalProfeDto {

    private constructor(
      public readonly nombre  : string,

    ){}
  
  
    static create( props: {[key:string]: any} ): [string?, CreateFormacionProfecionalProfeDto?]  {
  
      const { nombre   } = props;
  
      if ( !nombre  ) return ['nombre  property is required', undefined];
  
      return [undefined, new CreateFormacionProfecionalProfeDto(nombre)];
    }
  
  
  }