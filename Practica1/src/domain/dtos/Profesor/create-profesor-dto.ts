export class CreateProfesorDto {

    private constructor(
      public readonly nombre  : string,
      public readonly apellido  : string,
      public readonly cedula  : string,
      public readonly edad  : Date,
      public readonly correo  : string,
      public readonly idFormacionprofecional : number,
      public readonly idDatos_personal_prof : number,

    ){}
  
  
    static create( props: {[key:string]: any} ): [string?, CreateProfesorDto?]  {
  
      const { nombre, apellido,cedula,edad,correo,idFormacionprofecional,idDatos_personal_prof } = props;
  
      if ( !nombre  ) return ['nombre  property is required', undefined];
      if ( !apellido  ) return ['apellido  property is required', undefined];
      if ( !cedula  ) return ['cedula  property is required', undefined];
      if ( !edad  ) return ['edad  property is required', undefined];
      if ( !correo  ) return ['correo  property is required', undefined];
      if ( !idFormacionprofecional  ) return ['idFormacionprofecional  property is required', undefined];
      if ( !idDatos_personal_prof  ) return ['idDatos_personal_prof  property is required', undefined];
  
      return [undefined, new CreateProfesorDto(nombre, apellido,cedula,edad,correo,idFormacionprofecional,idDatos_personal_prof)];
    }
  
  
  }