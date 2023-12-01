
export class TipocursoEntity {

    constructor(
      public nombre  : string,

    ) {}
  
    public static fromObject( object: {[key: string]: any} ): TipocursoEntity {
      const { nombre, } = object;
      if ( !nombre ) throw 'nombre is required';
  
        return new TipocursoEntity(nombre, )
    }
  
  }
  
  
  