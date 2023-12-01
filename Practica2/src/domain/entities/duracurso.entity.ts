
export class DuracuroEntity {

    constructor(
      public cursoDuracion : number,

    ) {}
  
    public static fromObject( object: {[key: string]: any} ): DuracuroEntity {
      const { cursoDuracion, } = object;
      if ( !cursoDuracion ) throw 'cursoDuracion is required';
  
        return new DuracuroEntity(cursoDuracion, )
    }
  
  }
  
  
  