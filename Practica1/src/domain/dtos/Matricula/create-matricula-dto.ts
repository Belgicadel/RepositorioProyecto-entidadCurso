export class CreateMatriculaDto {

    private constructor(
      public readonly estado_matricula  : string,
      public readonly IdEstudiante  : number,
      public readonly IdCurso  : number,
      public readonly IdPeriodoAc  : number,
      public readonly IdFormaP  : number,
    ){}
  
  
    static create( props: {[key:string]: any} ): [string?, CreateMatriculaDto?]  {
  
      const { estado_matricula, IdEstudiante, IdCurso, IdPeriodoAc, IdFormaP} = props;
  
      if ( !estado_matricula  ) return ['estado_matricula  property is required', undefined];
      if ( !IdEstudiante  ) return ['IdEstudiante  property is required', undefined];
      if ( !IdCurso  ) return ['IdCurso  property is required', undefined];
      if ( !IdPeriodoAc  ) return ['IdPeriodoAc  property is required', undefined];
      if ( !IdFormaP  ) return ['IdFormaP  property is required', undefined];
  
      return [undefined, new CreateMatriculaDto(estado_matricula,  IdEstudiante, IdCurso, IdPeriodoAc, IdFormaP)];
    }
  
  
  }