export class UpdateProfesorDto {

    private constructor(
      public readonly id: number,
      public readonly nombre  : string,
      public readonly apellido  : string,
      public readonly cedula  : string,
      public readonly edad  : Date,
      public readonly correo  : string,
      public readonly idFormacionprofecional : number,
      public readonly idDatos_personal_prof : number,
    ){}
  
    get values() {
      const returnObj: {[key: string]: any} = {};
  
      if ( this.id) returnObj.id = this.id;
      if ( this.nombre) returnObj.nombre = this.nombre;
      if ( this.apellido) returnObj.apellido = this.apellido;
      if ( this.cedula) returnObj.cedula = this.cedula;
      if ( this.edad) returnObj.edad = this.edad;
      if ( this.correo) returnObj.correo = this.correo;
      if ( this.idFormacionprofecional) returnObj.idFormacionprofecional = this.idFormacionprofecional;
      if ( this.idDatos_personal_prof) returnObj.idDatos_personal_prof = this.idDatos_personal_prof;
      return returnObj;
    }
  
  
    static create( props: {[key:string]: any} ): [string?, UpdateProfesorDto?]  {
  
      const { id, nombre, apellido,cedula,edad,correo,idFormacionprofecional,idDatos_personal_prof} = props;
  
      if ( !id || isNaN( Number(id)) ) {
        return ['id must be a valid number'];
      }
  
      if ( !id && !nombre && !apellido && !cedula && !edad && !correo && !idFormacionprofecional && !idDatos_personal_prof) {
        return ['At least one property must be provided'];
      }
      return [undefined, new UpdateProfesorDto(id, nombre, apellido,cedula,edad,correo,idFormacionprofecional,idDatos_personal_prof)];
    }
  
  
  }