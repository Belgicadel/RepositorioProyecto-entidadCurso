export class UpdateMatriculaDto {

    private constructor(
      public readonly id: number,
      public readonly estado_matricula: string,
      public readonly IdEstudiante  : number,
      public readonly IdCurso  : number,
      public readonly IdPeriodoAc  : number,
      public readonly IdFormaP  : number,
    ){}
  
    get values() {
      const returnObj: {[key: string]: any} = {};
      if ( this.id) returnObj.id = this.id;
      if ( this.estado_matricula) returnObj.estado_matricula = this.estado_matricula;
      if ( this.IdEstudiante) returnObj.IdEstudiante = this.IdEstudiante;
      if ( this.IdCurso) returnObj.IdCurso = this.IdCurso;
      if ( this.IdPeriodoAc) returnObj.IdPeriodoAc = this.IdPeriodoAc;
      if ( this.IdFormaP) returnObj.IdFormaP = this.IdFormaP;
      return returnObj;
    }
  
  
    static create( props: {[key:string]: any} ): [string?, UpdateMatriculaDto?]  {
  
      const { id, estado_matricula, IdEstudiante, IdCurso, IdPeriodoAc, IdFormaP} = props;
  
      if ( !id || isNaN( Number(id)) ) {
        return ['id must be a valid number'];
      }
  
      if ( !id && !estado_matricula && !IdEstudiante && !IdCurso && !IdPeriodoAc && !IdFormaP) {
        return ['At least one property must be provided'];
      }
      return [undefined, new UpdateMatriculaDto(id, estado_matricula, IdEstudiante, IdCurso, IdPeriodoAc, IdFormaP)];
    }
  
  
  }