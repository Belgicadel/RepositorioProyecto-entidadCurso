export class CreateDatosPersonalesEstudDto {

    private constructor(
      public readonly calle  : string,
      public readonly avenida  : string,
      public readonly telefono  : number,
      public readonly idUbicacion  : number,


    ){}
  
  
    static create( props: {[key:string]: any} ): [string?, CreateDatosPersonalesEstudDto?]  {
  
      const { calle, avenida, telefono, idUbicacion  } = props;
  
      if ( !calle  ) return ['calle  property is required', undefined];
      if ( !avenida  ) return ['avenida  property is required', undefined];
      if ( !telefono  ) return ['telefono  property is required', undefined];
      if ( !idUbicacion  ) return ['idUbicacion  property is required', undefined];
  
      return [undefined, new CreateDatosPersonalesEstudDto(calle, avenida, telefono, idUbicacion)];
    }
  
  
  }