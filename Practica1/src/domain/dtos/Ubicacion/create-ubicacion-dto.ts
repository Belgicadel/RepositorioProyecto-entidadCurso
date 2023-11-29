export class CreateUbicacionEstudDto {

    private constructor(
      public readonly provincia  : string,
      public readonly ciudad  : string,

    ){}
  
  
    static create( props: {[key:string]: any} ): [string?, CreateUbicacionEstudDto?]  {
  
      const { provincia, ciudad  } = props;
            
      if ( !provincia  ) return ['provincia  property is required', undefined];
      if ( !ciudad  ) return ['ciudad  property is required', undefined];

      return [undefined, new CreateUbicacionEstudDto(provincia, ciudad)];
    }
  
  
  }